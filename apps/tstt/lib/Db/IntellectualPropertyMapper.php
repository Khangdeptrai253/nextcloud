<?php
namespace OCA\Tstt\Db;

use DateTime;
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
    public function findAll(int $page, int $pageSize): array
    {
        $qb = $this->db->getQueryBuilder();
        $count = $this->db->getQueryBuilder();
        $offset = ($page - 1) * $pageSize;

        $qb->select('*')
            ->from($this->tableName)
            ->where($qb->expr()->isNull('deleted_by'))
            ->andWhere($qb->expr()->isNull('deleted_at'))
            ->orderBy('updated_at', 'DESC')
            ->setFirstResult($offset)
            ->setMaxResults($pageSize);
        
        $count->select($count->createFunction('COUNT(id)'))
            ->from($this->tableName)
            ->where($count->expr()->isNull('deleted_by'))
            ->andWhere($count->expr()->isNull('deleted_at'));
        
        $total = (int) $count->executeQuery($count)->fetchOne();

        return ['data' => $this->findEntities($qb), 'total' => $total];
    }

    public function findById(int $id): Entity
    {
        $qb = $this->db->getQueryBuilder();

        $qb->select('*')
            ->from($this->tableName)
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($id)))
            ->andWhere($qb->expr()->isNull('deleted_by'))
            ->andWhere($qb->expr()->isNull('deleted_at'));

        return $this->findEntity($qb);
    }

}