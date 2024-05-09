<?php
namespace OCA\Tstt\Db;

use OCP\AppFramework\Db\Entity;

class IntellectualPropertyEntity extends Entity implements \JsonSerializable {
	private $_resolvedProperties = [];

	/**
	 * @return array serialized data
	 * @throws \ReflectionException
	 */
	public function jsonSerialize(): array {
		$properties = get_object_vars($this);
		$reflection = new \ReflectionClass($this);
		$json = [];
		foreach ($properties as $property => $value) {
			if (!str_starts_with($property, '_') && $reflection->hasProperty($property)) {
				$propertyReflection = $reflection->getProperty($property);
				if (!$propertyReflection->isPrivate() && !in_array($property, $this->_resolvedProperties, true)) {
					$json[$property] = $this->getter($property);
				}
			}
		}
		
		return $json;
	}
}
