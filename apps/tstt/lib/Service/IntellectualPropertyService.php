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
    public function findAll($q, int $page, int $pageSize, array $ownerSort = null, array $authorSort = null, array $statusSort = null): array
    {
        $intellectualProperty = $this->intellectualPropertyMapper->findAll($q, $page, $pageSize, $ownerSort, $authorSort, $statusSort);
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
        $newProperty->setCopyright($property['copyright']);
        $newProperty->setOwner($property['owner']);
        $newProperty->setStatus($property['status']);
        $newProperty->setVersion($property['version']);
        $newProperty->setCreatedAt($property['createdAt']);
        $newProperty->setCreatedBy($property['createdBy']);
        $newProperty->setUpdatedAt($property['createdAt']);
        $newProperty->setUpdatedBy($property['createdBy']);
        $newProperty->setDeletedAt($property['deletedAt']);
        $newProperty->setDeletedBy($property['deletedBy']);

        $result = $this->intellectualPropertyMapper->insert($newProperty);
        
        return $result;
    }

    /**
     * @NoCSRFRequired
     * @param string $property
     * @return IntellectualProperty|Entity
     */
    public function update(array $property)
    {
        $updateProperty = $this->intellectualPropertyMapper->findById($property['id']);

        $updateProperty->setNameProp($property['nameProp']);
        $updateProperty->setCopyright($property['copyright']);
        $updateProperty->setOwner($property['owner']);
        $updateProperty->setStatus($property['status']);
        $updateProperty->setVersion($property['version']);
        $updateProperty->setUpdatedAt($property['updatedAt']);
        $updateProperty->setUpdatedBy($property['updatedBy']);

        $result = $this->intellectualPropertyMapper->update($updateProperty);
        
        return $result;
    }

    /**
     * @NoCSRFRequired
     * @param string $property
     * @return IntellectualProperty|Entity
     */
    public function delete(array $property)
    {
        $updateProperty = $this->intellectualPropertyMapper->findById($property['id']);

        $updateProperty->setDeletedAt($property['deletedAt']);
        $updateProperty->setDeletedBy($property['deletedBy']);

        $result = $this->intellectualPropertyMapper->update($updateProperty);
        
        return $result;
    }


}

