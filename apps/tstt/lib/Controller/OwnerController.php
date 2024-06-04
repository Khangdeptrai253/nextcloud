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
	private $ownerservice;
	private $abc;
	public function __construct($appName, IRequest $request, OwnerService $ownerservice, OwnerMapper $abc) {
		parent::__construct($appName, $request);
		$this->ownerservice = $ownerservice;
		$this->abc = $abc;
	}
	#[NoCSRFRequired]
	#[NoAdminRequired]
	public function index(): DataResponse {
		return new DataResponse($this->abc->findAll());
	}

	#[NoAdminRequired]
	/**
	 * @param $name
	 * @param $number_of_assest
	 * @return \OCP\AppFramework\Db\Entity
	 */
	public function create($name, $number_of_assest): DataResponse {
        $owner = $this->ownerservice->create($name, $number_of_assest);
        return new DataResponse($owner);
    }
}
