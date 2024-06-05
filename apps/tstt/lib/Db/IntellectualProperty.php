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

    public function __construct()
    {
        $this->addType('id', 'int');
        $this->addType('nameProp', 'string');
        $this->addType('copyright', 'string');
        $this->addType('owner', 'string');
        $this->addType('status', 'string');
        $this->addType('version', 'string');
        $this->addType('createdAt', 'int');
        $this->addType('updatedAt', 'int');
        $this->addType('deletedAt', 'int');
        $this->addType('createdBy', 'string');
        $this->addType('updatedBy', 'string');
        $this->addType('deletedBy', 'string');
    }
    
}