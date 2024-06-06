<?php

declare(strict_types=1);

namespace OCA\Tstt\Controller;

use OCA\Tstt\AppInfo\Application;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\FrontpageRoute;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\Attribute\OpenAPI;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Http\TemplateResponse;
use OCA\Tstt\Service\OwnerService;
use OCP\AppFramework\ApiController;
use OCP\IRequest;
use OCA\Tstt\Db\OwnerMapper;
/**
 * @psalm-suppress UnusedClass
 */
class OwnerController extends Controller { 
	private $ownerService;
	private $ownerMapper;
	public function __construct($appName, IRequest $request, OwnerService $ownerService, OwnerMapper $ownerMapper) {
		parent::__construct($appName, $request);
		$this->ownerService = $ownerService;
		$this->ownerMapper = $ownerMapper;
	}
	#[NoCSRFRequired]
	#[NoAdminRequired]
	public function index(): DataResponse {

		return new DataResponse($this->ownerMapper->findAll());
	}

	#[NoAdminRequired]
	/**
	 * @param $name
	 * @param integer $number_of_assest
	 * @param integer $create_at
	 * @param $create_by
	 * @return \OCP\AppFramework\Db\Entity
	 */
	public function create($name, $number_of_assest,$create_by): DataResponse {
		
        $owner = $this->ownerService->create($name, $number_of_assest,$create_by);

        return new DataResponse($owner);
    }
	#[NoAdminRequired]
	/**
	 * @param $name
	 * @param $number_of_assest
	 * @param $update_by
	 * @return \OCP\AppFramework\Db\Entity
	 */
	public function update($id, $name, $number_of_assest,$update_by): DataResponse {

		$owner = $this->ownerService->update($id, $name, $number_of_assest,$update_by);

		return new DataResponse($owner);
	}
	#[NoAdminRequired]
	/**
	 * @param $id
	 */
	public function delete($id){

		$owner = $this->ownerService->delete($id);

		return $owner;
	}
}
