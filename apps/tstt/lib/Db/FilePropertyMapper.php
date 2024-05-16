<?php
namespace OCA\Tstt\Db;

use OCP\AppFramework\Db\QBMapper;
use OCP\IDBConnection;

class FilePropertyMapper extends QBMapper {
    /**
     * @param IDBConnection $db
     */
    public function __construct(IDBConnection $db)
    {
        parent::__construct($db, 'file_property', FileProperty::class);
    }

    public function findByObjectId(int $id) {
        $qb = $this->db->getQueryBuilder();

        $qb->select('fp.*', 'u1.displayname AS copyright_displayname',
                            'u2.displayname AS owner_displayname',
                            'ip.name_prop',
                            'ip.status',)
        ->from($this->tableName, 'fp')
        ->join('fp', 'intellectual_property', 'ip', 'fp.it_id = ip.id')
        ->leftJoin('ip', 'users', 'u1', $qb->expr()->eq('ip.copyright_id', 'u1.uid'))
        ->leftJoin('ip', 'users', 'u2', $qb->expr()->eq('ip.owner_id', 'u2.uid'))
        ->where($qb->expr()->eq('fp.object_id', $qb->createNamedParameter($id, \Doctrine\DBAL\ParameterType::INTEGER)));

        return $this->findEntity($qb);
    }

    public function isExist(int $objectId) {
        $qb = $this->db->getQueryBuilder();

        $qb->select('*')
            ->from($this->tableName)
            ->where($qb->expr()->eq('object_id', $qb->createNamedParameter($objectId, \Doctrine\DBAL\ParameterType::INTEGER)))
            ->setMaxResults(1);

        $result = $qb->executeQuery()->fetch();

        if(isset($result['id'])){
            return true;
        } else {
            return false;
        }
    }

    public function findById(int $objectId) {
        $qb = $this->db->getQueryBuilder();

        $qb->select('*')
            ->from($this->tableName)
            ->where($qb->expr()->eq('object_id', $qb->createNamedParameter($objectId)));

        return $this->findEntity($qb);
    }

    public function getAllFileInFolder(string $filepath, string $filename, string $uid): array {
        $qb = $this->db->getQueryBuilder();
        
        if ($filepath === '/') {
            $filePathParam = 'files' . $filepath . $filename . '%';
        } else {
            $filePathParam = 'files' . $filepath . '/' . $filename . '%';
        }

        $qb->select('path', 'fileid', 'mimetype')
            ->from('filecache', 'f')
            ->leftJoin('f', 'mounts', 'm', $qb->expr()->eq('f.storage', 'm.storage_id'))
            ->where($qb->expr()->eq('m.user_id', $qb->createNamedParameter($uid)))
            ->andWhere($qb->expr()->like('f.path', $qb->createNamedParameter($filePathParam)));

        $data = $qb->executeQuery()->fetchAll();
        $data = array_filter($data, function ($value) {
            return !isset($value["mimetype"]) || $value["mimetype"] != 2;
        });
        $data = array_values($data);

        return $data;
    }
}
