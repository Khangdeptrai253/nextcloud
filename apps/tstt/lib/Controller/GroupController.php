<?php
namespace OCA\Tstt\Controller;

use OCA\Tstt\Service\GroupService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\DataResponse;
use OCP\IRequest;

class GroupController extends Controller {
    protected GroupService $groupService;

    public function __construct($appName, IRequest $request, GroupService $groupService) {
		parent::__construct($appName, $request);
        $this->groupService = $groupService;
	}

    /**
	 * @NoAdminRequired
     * @NoCSRFRequired
     * @return DataResponse
	 */
    public function getGroupUserByGroupId(string $gid): DataResponse {
        $userOfGroup = $this->groupService->getGroupUserByGroupId($gid);
        
        return new DataResponse($userOfGroup);
    }
}
