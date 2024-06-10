<?php
namespace OCA\Tstt\Db;

use OCA\Tstt\Db\IntellectualPropertyEntity;

class IntellectualProperty extends IntellectualPropertyEntity {
    /** @var string */
    protected $nameProp;
    /** @var string */
    protected $copyright;
    /** @var string */
    protected $owner;
    /** @var int */
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
    /** @var string */
    protected $deletedByName;

    public function __construct()
    {
        $this->addType('id', 'int');
        $this->addType('nameProp', 'string');
        $this->addType('copyright', 'string');
        $this->addType('owner', 'string');
        $this->addType('status', 'int');
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
        $this->addType('deletedByName', 'string');
    }
    
}