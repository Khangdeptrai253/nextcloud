<?php
namespace OCA\Tstt\Db;

use OCP\AppFramework\Db\Entity;
use OCP\AppFramework\Db\QBMapper;
use OCP\IDBConnection;

class IntellectualPropertyMapper extends QBMapper {
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
    private $searchCase;
    public function findAll($q, int $page, int $pageSize, array $ownerSort = null, array $authorSort = null, array $statusSort = null): array
    {
        if (($q === null || $q === '') && ($ownerSort !== null || $authorSort !== null || $statusSort !== null)) {
            $this->searchCase = 'searchSort';
        } elseif ($q === null && $ownerSort === null && $authorSort === null && $statusSort === null) {
            $this->searchCase = 'default';
        } elseif ($q !== null && ($ownerSort === null && $authorSort === null && $statusSort === null)) {
            $this->searchCase = 'searchQuery';
        } else {
            $this->searchCase = 'searchAll';
        }

        $qb = $this->db->getQueryBuilder();
        $count = $this->db->getQueryBuilder();
        $offset = ($page - 1) * $pageSize;

        $qb->select('ip.*', 'u1.displayname AS copyright_displayname',
                            'u2.displayname AS owner_displayname',
                            'u3.displayname AS created_by_name',
                            'u4.displayname AS updated_by_name',
                            'u5.displayname AS deleted_by_name')
                    ->from($this->tableName, 'ip')
                    ->leftJoin('ip', 'users', 'u1', $qb->expr()->eq('ip.copyright', 'u1.uid'))
                    ->leftJoin('ip', 'users', 'u2', $qb->expr()->eq('ip.owner', 'u2.uid'))
                    ->leftJoin('ip', 'users', 'u3', $qb->expr()->eq('ip.created_by', 'u3.uid'))
                    ->leftJoin('ip', 'users', 'u4', $qb->expr()->eq('ip.updated_by', 'u4.uid'))
                    ->leftJoin('ip', 'users', 'u5', $qb->expr()->eq('ip.deleted_by', 'u5.uid'))
                    ->where($qb->expr()->isNull('ip.deleted_by'))
                    ->andWhere($qb->expr()->isNull('ip.deleted_at'))
                    ->orderBy('ip.updated_at', 'DESC')
                    ->setFirstResult($offset)
                    ->setMaxResults($pageSize);

        switch ($this->searchCase) {
            case 'default':
                $count->select($count->createFunction('COUNT(id)'))
                        ->from($this->tableName)
                        ->where($count->expr()->isNull('deleted_by'))
                        ->andWhere($count->expr()->isNull('deleted_at'));

                $totalRes = (int) $count->executeQuery($count)->fetchOne();
                $dataRes = $this->findEntities($qb);

                return ['data' => $dataRes, 'total' => $totalRes];

            case 'searchQuery':
                $queryArray = $this->splitStringIntoWords($q);
                $searchConditions = [];
                foreach ($queryArray as $word) {
                    $searchConditions[] = $qb->expr()->like(
                        $qb->createFunction('LOWER(ip.name_prop)'),
                        $qb->expr()->literal('%' . strtolower($word) . '%')
                    );
                }

                $qb->andWhere($qb->expr()->orX(...$searchConditions));
                $dataRes = $this->findEntities($qb);
                $totalRes = count($this->findEntities($qb));

                return ['data' => $dataRes, 'total' => $totalRes];
            
            case 'searchSort':
                if ($ownerSort) {
                    $ownerConditions = array_map(fn($owner) => $qb->expr()->eq('owner', $qb->createNamedParameter($owner)), $ownerSort);
                    $qb->andWhere($qb->expr()->orX(...$ownerConditions));
                }
                if ($authorSort) {
                    $authorConditions = array_map(fn($author) => $qb->expr()->eq('copyright', $qb->createNamedParameter($author)), $authorSort);
                    $qb->andWhere($qb->expr()->orX(...$authorConditions));
                }
                if ($statusSort) {
                    $statusConditions = array_map(fn($status) => $qb->expr()->eq('status', $qb->createNamedParameter($status)), $statusSort);
                    $qb->andWhere($qb->expr()->orX(...$statusConditions));
                }

                $dataRes = $this->findEntities($qb);
                $totalRes = count($this->findEntities($qb));

                return ['data' => $dataRes, 'total' => $totalRes];
            
            case 'searchAll':
                $searchConditions = [];
                $ownerConditions = [];
                $authorConditions = [];
                $statusConditions = [];
                $sortArray = $this->splitStringIntoWords($q);

                foreach ($sortArray as $word) {
                    $searchConditions[] = $qb->expr()->like($qb->createFunction('LOWER(name_prop)'), $qb->expr()->literal('%' . strtolower($word) . '%'));
                }

                if ($ownerSort) {
                    $ownerConditions = array_map(fn($owner) => $qb->expr()->eq('owner', $qb->createNamedParameter($owner)), $ownerSort);
                }
                if ($authorSort) {
                    $authorConditions = array_map(fn($author) => $qb->expr()->eq('copyright', $qb->createNamedParameter($author)), $authorSort);
                }
                if ($statusSort) {
                    $statusConditions = array_map(fn($status) => $qb->expr()->eq('status', $qb->createNamedParameter($status)), $statusSort);
                }
            
                $qb->andWhere($qb->expr()->orX(...$searchConditions));
                if (!empty($ownerConditions)) {
                    $qb->andWhere($qb->expr()->orX(...$ownerConditions));
                }
                if (!empty($authorConditions)) {
                    $qb->andWhere($qb->expr()->orX(...$authorConditions));
                }
                if (!empty($statusConditions)) {
                    $qb->andWhere($qb->expr()->orX(...$statusConditions));
                }

                $totalRes = count($this->findEntities($qb));
                $dataRes = $this->findEntities($qb);

                return ['data' => $dataRes, 'total' => $totalRes];

        }
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

    function splitStringIntoWords($string) {
        $trimmedString = trim($string);
        $wordsArray = explode(' ', $trimmedString);
        $wordsArray = array_filter($wordsArray, function($word) {
            return !empty($word);
        });
        
        return $wordsArray;
    }
}
