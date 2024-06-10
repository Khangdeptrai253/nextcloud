<?php

namespace OCA\Tstt\Controller;

use OCA\Tstt\Service\IntellectualPropertyService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\DataResponse;
use OCP\IRequest;

class IntellectualPropertyController extends Controller {
	protected $intellectualPropertyService;

    public function __construct($appName, IRequest $request, IntellectualPropertyService $intellectualPropertyService) {
		parent::__construct($appName, $request);
        $this->intellectualPropertyService = $intellectualPropertyService;
	}

    /**
     * @NoAdminRequired
     * @NoCSRFRequired
     * @return DataResponse
     */
	public function index($q, int $page, int $pageSize, array $ownerSort = null, array $authorSort = null, array $statusSort = null): DataResponse {
        $result = $this->intellectualPropertyService->findAll($q, $page, $pageSize, $ownerSort, $authorSort, $statusSort);
		return new DataResponse($result);
	}

    /**
     * @NoAdminRequired
     * @NoCSRFRequired
     * @return DataResponse
     */
	public function indexById(int $id): DataResponse {
        $result = $this->intellectualPropertyService->findById($id);
		return new DataResponse($result);
	}

    /**
	 * @NoAdminRequired
     * @NoCSRFRequired
     * @return DataResponse
	 */
    public function create(array $property): DataResponse {
        $result = $this->intellectualPropertyService->create($property);
        return new DataResponse($result);
    }

    /**
	 * @NoAdminRequired
     * @NoCSRFRequired
     * @return DataResponse
	 */
    public function update(array $property): DataResponse {
        $result = $this->intellectualPropertyService->update($property);
        return new DataResponse($result);
    }

    /**
	 * @NoAdminRequired
     * @NoCSRFRequired
     * @return DataResponse
	 */
    public function delete(array $property): DataResponse {
        $result = $this->intellectualPropertyService->delete($property);
        return new DataResponse($result);
    }
    
}
