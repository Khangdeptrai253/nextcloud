<?php

namespace OCA\Tstt\Controller;

use OCA\Tstt\Service\IntellectualPropertyService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\DataResponse;
use OCP\IRequest;

class IntellectualPropertyController extends Controller {
	protected IntellectualPropertyService $intellectualPropertyService;

    public function __construct($appName, IRequest $request, IntellectualPropertyService $intellectualPropertyService) {
		parent::__construct($appName, $request);
        $this->intellectualPropertyService = $intellectualPropertyService;
	}

    /**
     * @NoAdminRequired
     * @NoCSRFRequired
     * @return DataResponse
     */
	public function index($query, int $page, int $pageSize, array $ownerSort = [], array $authorSort = [], array $statusSort = []): DataResponse {
        $intellectualProperty = $this->intellectualPropertyService->findAll($query, $page, $pageSize, $ownerSort, $authorSort, $statusSort);
		
        return new DataResponse($intellectualProperty);
	}

    /**
     * @NoAdminRequired
     * @NoCSRFRequired
     * @return DataResponse
     */
	public function findById(int $id): DataResponse {
        $intellectualProperty = $this->intellectualPropertyService->findById($id);
		
        return new DataResponse($intellectualProperty);
	}

    /**
	 * @NoAdminRequired
     * @NoCSRFRequired
     * @return DataResponse
	 */
    public function create(array $property): DataResponse {
        $intellectualProperty = $this->intellectualPropertyService->create($property);
        
        return new DataResponse($intellectualProperty);
    }

    /**
	 * @NoAdminRequired
     * @NoCSRFRequired
     * @return DataResponse
	 */
    public function update(array $property): DataResponse {
        $intellectualProperty = $this->intellectualPropertyService->update($property);
        
        return new DataResponse($intellectualProperty);
    }

    /**
	 * @NoAdminRequired
     * @NoCSRFRequired
     * @return DataResponse
	 */
    public function delete(array $property): DataResponse {
        $intellectualProperty = $this->intellectualPropertyService->delete($property);
        
        return new DataResponse($intellectualProperty);
    }
}
