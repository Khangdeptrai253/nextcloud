<?php

namespace OCA\Tstt\Service;

use OCA\Deck\Activity\ActivityManager;
use OCA\Deck\BadRequestException;
use OCA\Deck\Db\Acl;
use OCA\Deck\Db\Board;
use OCA\Deck\Db\Label;
use OCA\Deck\NoPermissionException;
use OCA\Tstt\Db\Owner;
use OCA\Tstt\Db\OwnerMapper;


class OwnerService {
	
    private OwnerMapper $ownermapper;
	public function __construct(
        OwnerMapper $ownermapper,
	) {
		$this->ownermapper = $ownermapper;
	}

	/**
	 * @param $name
	 * @param integer $number_of_assest
	 * @return \OCP\AppFramework\Db\Entity
	 * @throws BadRequestException
	 */

	public function create($name, $number_of_assest) {
		$owner = new Owner();
		$owner->setName($name);
        $owner->setNumberassest($number_of_assest);

        return $this->ownermapper->insert($owner);
	}
}
