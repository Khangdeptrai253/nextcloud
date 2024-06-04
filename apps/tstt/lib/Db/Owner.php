<?php
namespace OCA\Tstt\Db;

use Sabre\VObject\Property\VCard\TimeStamp;

/**
 * @method int getId()
 * @method string getName()
 * @method int getNumberAssest()
 * @method int getCreateAt()
 * @method int getDeletedAt()
 * @method int getupdateAt()
 * @method string getDeleteBy()
 * @method string getCreateBy()
 * @method string getUpdateBy()
 * 
 */
class Owner extends RelationalEntity {
	protected $name;
	protected $numberassest;
    protected $createat;
    protected $createby;
    protected $updateat;
    protected $updateby;
    protected $deleteat;
    protected $deleteby;
	public function __construct() {
		$this->addType('id', 'integer');
		$this->addType('name', 'string');
		$this->addType('numberassest', 'integer');
		$this->addType('createat', 'integer');
		$this->addType('updateat', 'integer');
		$this->addType('deleteat', 'integer');
		$this->addType('createby', 'string');
		$this->addType('updateby', 'string');
		$this->addType('deleteby', 'string');
	}

	// public function jsonSerialize(): array {
	// 	$json = parent::jsonSerialize();
	// 	if ($this->shared === -1) {
	// 		unset($json['shared']);
	// 	}
	// 	// FIXME: Ideally the API responses should follow the internal data structure and return null if the labels/acls have not been fetched from the db
	// 	// however this would be a breaking change for consumers of the API
	// 	$json['acl'] = $this->acl ?? [];
	// 	$json['labels'] = $this->labels ?? [];
	// 	return $json;
	// }
}
