<?php

namespace OCA\Tstt\Controller;

use OCA\Tstt\Service\FilePropertyService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\DataResponse;
use OCP\IRequest;

class FilePropertyController extends Controller {
    protected FilePropertyService $filePropertyService;

    public function __construct($appName, IRequest $request, FilePropertyService $filePropertyService) {
		parent::__construct($appName, $request);
        $this->filePropertyService = $filePropertyService;
	}

    /**
	 * @NoAdminRequired
     * @NoCSRFRequired
     * @return DataResponse
	 */
    public function create(array $file): DataResponse {
        $fileProperty = $this->filePropertyService->create($file);
        
        return new DataResponse($fileProperty);
    }

    /**
     * @NoAdminRequired
     * @NoCSRFRequired
     * @return DataResponse
     */
	public function findByObjectId(int $id): DataResponse {
        $fileProperty = $this->filePropertyService->findByObjectId($id);
		
        return new DataResponse($fileProperty);
	}

    /**
     * @NoAdminRequired
     * @NoCSRFRequired
     * @return DataResponse
     */
    public function getAllFileInFolder(string $filepath, string $filename, string $uid)
    {
        $fileProperty = $this->filePropertyService->getAllFileInFolder($filepath, $filename, $uid);
        
        return new DataResponse($fileProperty);
    }

    /**
	 * @NoAdminRequired
     * @NoCSRFRequired
     * @return DataResponse
	 */
    public function delete(int $objectId): DataResponse {
        $fileProperty = $this->filePropertyService->delete($objectId);
        
        return new DataResponse($fileProperty);
    }
}
