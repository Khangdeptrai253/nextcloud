<?php
namespace OCA\Tstt\Db;

use JsonSerializable;
use OCP\AppFramework\Db\Entity;

class Group extends Entity implements JsonSerializable {
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

    public function jsonSerialize() {
        return [
            'gid' => $this->gid,
            'uid' => $this->uid,
            'displayname' => $this->displayname
        ];
    }
}
