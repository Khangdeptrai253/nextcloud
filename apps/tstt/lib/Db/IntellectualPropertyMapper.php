<?php
namespace OCA\Tstt\Db;

use OCP\AppFramework\Db\Entity;
use OCP\AppFramework\Db\QBMapper;
use OCP\IDBConnection;

class IntellectualPropertyMapper extends QBMapper {
    private $searchCase;

    /**
     * @param IDBConnection $db
     */
    public function __construct(IDBConnection $db)
    {
        parent::__construct($db, 'intellectual_property', IntellectualProperty::class);
    }

    /**
     * @return IntellectualProperty[]|array
     * @throws \OCP\DB\Exception
     */
    public function findAll($query, int $page, int $pageSize, array $ownerSort = [], array $authorSort = [], array $statusSort = []): array
    {
        $this->determineSearchCase($query, $ownerSort, $authorSort, $statusSort);

        $offset = ($page - 1) * $pageSize;
        $qb = $this->db->getQueryBuilder();
        $count = $this->db->getQueryBuilder();

        $this->initializeQueryBuilder($qb, $offset, $pageSize);
        $this->initializeCountBuilder($count);

        if ($this->searchCase === 'searchQuery' || $this->searchCase === 'searchAll') {
            $this->applySearchQuery($qb, $query);
            $this->applySearchQuery($count, $query);
        }

        if ($this->searchCase === 'searchSort' || $this->searchCase === 'searchAll') {
            $this->applySortConditions($qb, $ownerSort, $authorSort, $statusSort);
            $this->applySortConditions($count, $ownerSort, $authorSort, $statusSort);
        }

        $dataRes = $this->findEntities($qb);
        $totalRes = (int) $count->executeQuery()->fetchOne();

        return ['data' => $dataRes, 'total' => $totalRes];
    }

    public function findById(int $id): Entity {
        $qb = $this->db->getQueryBuilder();

        $qb->select('*')
            ->from($this->tableName)
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($id)))
            ->andWhere($qb->expr()->isNull('deleted_by'))
            ->andWhere($qb->expr()->isNull('deleted_at'));

        return $this->findEntity($qb);
    }

    private function determineSearchCase($query, array $ownerSort, array $authorSort, array $statusSort)
    {
        if (is_null($query) || $query === '') {
            $this->searchCase = (!$ownerSort && !$authorSort && !$statusSort) ? 'default' : 'searchSort';
        } else {
            $this->searchCase = (!$ownerSort && !$authorSort && !$statusSort) ? 'searchQuery' : 'searchAll';
        }
    }

    private function initializeQueryBuilder($qb, $offset, $pageSize)
    {
        $qb->select('ip.*', 'u1.displayname AS copyright_displayname',
                            'u2.displayname AS owner_displayname',
                            'u3.displayname AS created_by_name',
                            'u4.displayname AS updated_by_name')
            ->from($this->tableName, 'ip')
            ->leftJoin('ip', 'users', 'u1', $qb->expr()->eq('ip.copyright_id', 'u1.uid'))
            ->leftJoin('ip', 'users', 'u2', $qb->expr()->eq('ip.owner_id', 'u2.uid'))
            ->leftJoin('ip', 'users', 'u3', $qb->expr()->eq('ip.created_by', 'u3.uid'))
            ->leftJoin('ip', 'users', 'u4', $qb->expr()->eq('ip.updated_by', 'u4.uid'))
            ->where($qb->expr()->isNull('ip.deleted_by'))
            ->andWhere($qb->expr()->isNull('ip.deleted_at'))
            ->orderBy('ip.id', 'DESC')
            ->setFirstResult($offset)
            ->setMaxResults($pageSize);
    }

    private function initializeCountBuilder($count)
    {
        $count->select($count->createFunction('COUNT(id)'))
            ->from($this->tableName, 'ip')
            ->where($count->expr()->isNull('deleted_by'))
            ->andWhere($count->expr()->isNull('deleted_at'));
    }

    private function applySearchQuery($qb, $query)
    {
        $qb->andWhere($qb->createFunction('MATCH (ip.name_prop) AGAINST (:query IN NATURAL LANGUAGE MODE)'))
            ->setParameter('query', $query);
    }

    private function applySortConditions($qb, array $ownerSort, array $authorSort, array $statusSort)
    {
        if ($ownerSort) {
            $ownerConditions = array_map(fn($owner) => $qb->expr()->eq('ip.owner_id', $qb->createNamedParameter($owner)), $ownerSort);
            $qb->andWhere($qb->expr()->orX(...$ownerConditions));
        }
        if ($authorSort) {
            $authorConditions = array_map(fn($author) => $qb->expr()->eq('ip.copyright_id', $qb->createNamedParameter($author)), $authorSort);
            $qb->andWhere($qb->expr()->orX(...$authorConditions));
        }
        if ($statusSort) {
            $statusConditions = array_map(function($status) use ($qb) {
                $statusString = is_numeric($status) ? StatusEnum::getEnumValue($status) : $status;
                return $qb->expr()->eq('ip.status', $qb->createNamedParameter($statusString));
            }, $statusSort);
            $qb->andWhere($qb->expr()->orX(...$statusConditions));
        }
    }
}
