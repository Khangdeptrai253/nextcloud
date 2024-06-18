<?php

namespace OCA\Tstt\Service;

use OCA\Tstt\Db\IntellectualPropertyMapper;
use OCA\Tstt\Db\IntellectualProperty;
use OCP\AppFramework\Db\Entity;

class IntellectualPropertyService {
    private IntellectualPropertyMapper $intellectualPropertyMapper;

    public function __construct(IntellectualPropertyMapper $intellectualPropertyMapper) {
        $this->intellectualPropertyMapper = $intellectualPropertyMapper;
    }

    /**
     * @NoAdminRequired
     * @NoCSRFRequired
     * @return IntellectualProperty[]|array
     * @throws \OCP\DB\Exception
     */
    public function findAll($query, int $page, int $pageSize, array $ownerListSort = [], array $authorListSort = [], array $statusListSort = []): array
    {
        $intellectualProperty = $this->intellectualPropertyMapper->findAll($query, $page, $pageSize, $ownerListSort, $authorListSort, $statusListSort);
        
        return $intellectualProperty;
    }

    /**
     * @NoAdminRequired
     * @NoCSRFRequired
     */
    public function findById(int $id)
    {
        $intellectualProperty = $this->intellectualPropertyMapper->findById($id);
        
        return $intellectualProperty;
    }

    /**
     * @NoCSRFRequired
     * @param string $property
     * @return IntellectualProperty|Entity
     */
    public function create(array $property)
    {
        $newProperty = new IntellectualProperty();
        $newProperty->setNameProp($property['nameProp']);
        $newProperty->setCopyrightId($property['copyrightId']);
        $newProperty->setOwnerId($property['ownerId']);
        $newProperty->setStatus($property['status']);
        $newProperty->setVersion($property['version']);
        $newProperty->setCreatedAt($property['createdAt']);
        $newProperty->setCreatedBy($property['createdBy']);
        $newProperty->setUpdatedAt($property['createdAt']);
        $newProperty->setUpdatedBy($property['createdBy']);
        $intellectualProperty = $this->intellectualPropertyMapper->insert($newProperty);
        
        return $intellectualProperty;
    }

    /**
     * @NoCSRFRequired
     * @param string $property
     * @return IntellectualProperty|Entity
     */
    public function update(array $property)
    {
        $validate = $this->intellectualPropertyMapper->isDelete($property['id']);

        if($validate == 1) {
            $msg = [
                    'status' => 'error',
                    'message' => 'This item has been deleted'
                ];

            return $msg;
        }
        $updateProperty = $this->intellectualPropertyMapper->findById($property['id']);
        $updateProperty->setNameProp($property['nameProp']);
        $updateProperty->setCopyrightId($property['copyrightId']);
        $updateProperty->setOwnerId($property['ownerId']);
        $updateProperty->setStatus($property['status']);
        $updateProperty->setVersion($property['version']);
        $updateProperty->setUpdatedAt($property['updatedAt']);
        $updateProperty->setUpdatedBy($property['updatedBy']);
        $intellectualProperty = $this->intellectualPropertyMapper->update($updateProperty);
        
        return $intellectualProperty;
    }

    /**
     * @NoCSRFRequired
     * @param string $property
     * @return IntellectualProperty|Entity
     */
    public function delete(array $property)
    {
        $validate = $this->intellectualPropertyMapper->isDelete($property['id']);

        if($validate == 1) {
            $msg = [
                    'status' => 'error',
                    'message' => 'This item has been deleted'
                ];

            return $msg;
        }

        if($validate == 0) {
            $msg = [
                    'status' => 'error',
                    'message' => 'This item has been deleted pernament out of database'
                ];

            return $msg;
        }
        $deleteProperty = $this->intellectualPropertyMapper->findById($property['id']);
        $deleteProperty->setDeletedAt($property['deletedAt']);
        $deleteProperty->setDeletedBy($property['deletedBy']);
        $intellectualProperty = $this->intellectualPropertyMapper->update($deleteProperty);
        
        return $intellectualProperty;
    }
}
