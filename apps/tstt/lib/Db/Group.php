<?php
namespace OCA\Tstt\Db;

use OCA\Tstt\Db\IntellectualPropertyEntity;

class Group extends IntellectualPropertyEntity {
    /** @var string */
    protected $gid;
    /** @var string */
    protected $uid;
    /** @var string */
    protected $displayname;

    public function __construct() {
        $this->addType('gid', 'string');
        $this->addType('uid', 'string');
        $this->addType('displayname', 'string');
    }
}
