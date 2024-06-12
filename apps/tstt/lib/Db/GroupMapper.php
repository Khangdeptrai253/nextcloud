<?php
namespace OCA\Tstt\Db;

use OCP\AppFramework\Db\QBMapper;
use OCP\IDBConnection;

class GroupMapper extends QBMapper {
    /**
     * @param IDBConnection $db
     */
    public function __construct(IDBConnection $db)
    {
        parent::__construct($db, 'group_user', Group::class);
    }

    public function getGroupUserByGroupId(string $gid) {
        $qb = $this->db->getQueryBuilder();
    
        $qb->select('gu.*', 'u.displayname')
            ->from($this->tableName, 'gu')
            ->leftJoin('gu', 'users', 'u', $qb->expr()->eq('gu.uid', 'u.uid'))
            ->where($qb->expr()->eq('gu.gid', $qb->createNamedParameter($gid)));
    
        return $this->findEntities($qb);
    }
}
