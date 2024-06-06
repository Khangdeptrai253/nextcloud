<?php

namespace OCA\Tstt\Service;

use DateTime;
use Icewind\SMB\Exception\NotFoundException;
use OCA\Deck\Activity\ActivityManager;
use OCA\Deck\BadRequestException;
use OCA\Deck\Db\Acl;
use OCA\Deck\Db\Board;
use OCA\Deck\Db\Label;
use OCA\Deck\NoPermissionException;
use OCA\Tstt\Db\Owner;
use OCA\Tstt\Db\OwnerMapper;

class OwnerService {
    private OwnerMapper $ownerMapper;
	public function __construct(
        OwnerMapper $ownerMapper,
	) {
		$this->ownerMapper = $ownerMapper;
	}
	/**
	 * @param $name
	 * @param integer $number_of_assest
	 * @param integer $create_at
	 * @param $create_by
	 * @return \OCP\AppFramework\Db\Entity
	 * @throws BadRequestException
	 */

	public function create($name, $number_of_assest,$create_by) {
		$creatAt = new DateTime();	
		$creatAtTime = $creatAt->getTimestamp();
		$owner = new Owner();
		$owner->setName($name);
        $owner->setNumberassest($number_of_assest);
		$owner->setCreateat($creatAtTime);
		$owner->setCreateby($create_by);

        return $this->ownerMapper->insert($owner);
	}
	public function update($id, $name, $number_of_assest, $update_by) {
		$updateAt = new DateTime();	
		$updateTimestamp = $updateAt->getTimestamp();
		$ownerData = $this->ownerMapper->findById($id);
    	if (empty($ownerData)) {
        	throw new \Exception("Owner with ID $id not found");	
    	}
    	$ownerData->setId($id);
    	$ownerData->setName($name);
    	$ownerData->setNumberassest($number_of_assest);
    	$ownerData->setUpdateat($updateTimestamp);
    	$ownerData->setUpdateby($update_by);
		
    	$this->ownerMapper->update($ownerData);

    	return $ownerData;
	}
	public function delete($id){
	
		if (is_numeric($id) === false) {
			throw new BadRequestException('card id must be a number');
		}
		$owner = $this->ownerMapper->findById($id);
		if(!$owner){
			throw new NotFoundException("owner not foud");
		}
		$owner->setDeleteat(time());

		$this->ownerMapper->update($owner);

		return $owner;
	}
}
	
