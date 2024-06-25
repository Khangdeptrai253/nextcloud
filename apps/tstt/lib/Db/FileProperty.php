<?php
namespace OCA\Tstt\Db;

use JsonSerializable;
use OCP\AppFramework\Db\Entity;

class FileProperty extends Entity implements JsonSerializable {
    /** @var int */
    protected $objectId;
    /** @var int */
    protected $itId;

    /** @var string */
    protected $nameProp;
    /** @var string */
    protected $copyrightId;
    /** @var string */
    protected $ownerId;
    /** @var string */
    protected $status;
    /** @var string */
    protected $version;
    /** @var int */
    protected $createdAt;
    /** @var int */
    protected $updatedAt;
    /** @var int */
    protected $deletedAt;
    /** @var string */
    protected $createdBy;
    /** @var string */
    protected $updatedBy;
    /** @var string */
    protected $deletedBy;
    /** @var string */
    protected $copyrightDisplayname;
    /** @var string */
    protected $ownerDisplayname;
    /** @var string */
    protected $createdByName;
    /** @var string */
    protected $updatedByName;

    public function __construct()
    {
        $this->addType('id', 'int');
        $this->addType('objectId', 'int');
        $this->addType('itId', 'int');
        $this->addType('nameProp', 'string');
        $this->addType('copyrightId', 'string');
        $this->addType('ownerId', 'string');
        $this->addType('status', 'string');
        $this->addType('version', 'string');
        $this->addType('createdAt', 'int');
        $this->addType('updatedAt', 'int');
        $this->addType('deletedAt', 'int');
        $this->addType('createdBy', 'string');
        $this->addType('updatedBy', 'string');
        $this->addType('deletedBy', 'string');
        $this->addType('copyrightDisplayname', 'string');
        $this->addType('ownerDisplayname', 'string');
        $this->addType('createdByName', 'string');
        $this->addType('updatedByName', 'string');
    }
    
    public function jsonSerialize() {
        return [
            'id' => $this->id,
            'objectId' => $this->objectId,
            'itId' => $this->itId,
            'nameProp' => $this->nameProp,
            'copyrightId' => $this->copyrightId,
            'ownerId' => $this->ownerId,
            'status' => $this->status,
            'version' => $this->version,
            'createdAt' => $this->createdAt,
            'updatedAt' => $this->updatedAt,
            'deletedAt' => $this->deletedAt,
            'updatedBy' => $this->updatedBy,
            'deletedBy' => $this->deletedBy,
            'copyrightDisplayname' => $this->copyrightDisplayname,
            'ownerDisplayname' => $this->ownerDisplayname,
            'createdByName' => $this->createdByName,
            'updatedByName' => $this->updatedByName
        ];
    }
}
