<?php

namespace OCA\Tstt\Service;

use OCA\Tstt\Db\FilePropertyMapper;
use OCA\Tstt\Db\FileProperty;
use OCP\AppFramework\Db\Entity;

class FilePropertyService {
    private FilePropertyMapper $filePropertyMapper;

    public function __construct(FilePropertyMapper $filePropertyMapper) {
        $this->filePropertyMapper = $filePropertyMapper;
    }

    /**
     * @NoAdminRequired
     * @NoCSRFRequired
     */
    public function findByObjectId(int $id) {
        $checkExist = $this->filePropertyMapper->isExist($id);
        if (!$checkExist) {
            return;
        }
        $fileProperty = $this->filePropertyMapper->findByObjectId($id);
        
        return $fileProperty;
    }

    /**
     * @NoAdminRequired
     * @NoCSRFRequired
     */
    public function getAllFileInFolder(string $filepath, string $filename, string $uid)
    {
        $fileProperty = $this->filePropertyMapper->getAllFileInFolder($filepath, $filename, $uid);
        
        return $fileProperty;
    }

    /**
     * @NoCSRFRequired
     * @param string $property
     * @return FileProperty|Entity
     */
    public function create(array $file) {
        $objectId = $file['objectId'];
        $checkExist = $this->filePropertyMapper->isExist($objectId);

        if ($checkExist) {
            $this->update($file);
        } else {
            $newFileProperty = new FileProperty();
            $newFileProperty->setObjectId($file['objectId']);
            $newFileProperty->setItId($file['itId']);
            $fileProperty = $this->filePropertyMapper->insert($newFileProperty);
            
            return $fileProperty;
        }
    }

    /**
     * @NoCSRFRequired
     * @param string $property
     * @return FileProperty|Entity
     */
    public function update(array $file) {
        $updateFileProperty = $this->filePropertyMapper->findById($file['objectId']);
        $updateFileProperty->setItId($file['itId']);
        $fileProperty = $this->filePropertyMapper->update($updateFileProperty);
        
        return $fileProperty;
    }

    /**
     * @NoCSRFRequired
     * @param string $property
     * @return FileProperty|Entity
     */
    public function delete(int $objectId) {
        $deleteFileProperty = $this->filePropertyMapper->findById($objectId);
        $fileProperty = $this->filePropertyMapper->delete($deleteFileProperty);
        
        return $fileProperty;
    }
}