<?php

namespace OCA\Tstt\Service;

use OCA\Tstt\Db\GroupMapper;
use OCA\Tstt\Db\Group;
use OCP\AppFramework\Db\Entity;

class GroupService {
    private GroupMapper $groupMapper;

    public function __construct(GroupMapper $groupMapper) {
        $this->groupMapper = $groupMapper;
    }

    /**
     * @NoCSRFRequired
     * @param string $gid
     * @return Group|Entity
     */
    public function getGroupUserByGroupId(string $gid)
    {
        $groupList = $this->groupMapper->getGroupUserByGroupId($gid);
        
        return $groupList;
    }
}
