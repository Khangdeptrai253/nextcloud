<?php

namespace OCA\Tstt\Db;

use OC\Cache\CappedMemoryCache;
use OCA\Deck\Service\CirclesService;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Db\QBMapper;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;
use OCP\IGroupManager;
use OCP\IUserManager;
use Psr\Log\LoggerInterface;
use OCP\AppFramework\Db\Entity;

/** @template-extends QBMapper<Board> */
class OwnerMapper extends QBMapper {
	private $databaseType;
	
	public function __construct(
		IDBConnection $db,
	) {
		parent::__construct($db, 'owner', Owner::class);
	}
    public function find($id) {
		$qb = $this->db->getQueryBuilder();
        $qb->select('*')
        ->from('owner') // Thay đổi tên bảng thành 'owner'
        ->where($qb->expr()->eq('id', $qb->createNamedParameter($id, IQueryBuilder::PARAM_INT)));

        return $this->findEntity($qb);
	}
	public function findAll():array {
		$qb = $this->db->getQueryBuilder();
		$qb->select('*')
			->from($this->tableName);
		return $this->findEntities($qb);
	}
}
