<?php
namespace OCA\Tstt\Db;

use Doctrine\DBAL\Platforms\AbstractPlatform;
use Doctrine\DBAL\Types\Type;

class StatusEnum extends Type
{
    const ENUM = 'enum';

    const ACTIVE = 'Active';
    const INACTIVE = 'Inactive';
    const OUTOFDATE = 'Out of Date';

    const ACTIVENUM = 1;
    const INACTIVENUM = 2;
    const OUTOFDATENUM = 3;


    public function getSQLDeclaration(array $fieldDeclaration, AbstractPlatform $platform)
    {
        $values = array_map(function($val) { return "'" . $val . "'"; }, $fieldDeclaration['values']);
        return "ENUM(" . implode(", ", $values) . ")";
    }

    public function convertToPHPValue($value, AbstractPlatform $platform)
    {
        return $value;
    }

    public function convertToDatabaseValue($value, AbstractPlatform $platform)
    {
        return $value;
    }

    public function getName()
    {
        return self::ENUM;
    }

    public static function getEnumValue($num)
    {
        switch ($num) {
            case self::ACTIVENUM:
                return self::ACTIVE;
            case self::INACTIVENUM:
                return self::INACTIVE;
            case self::OUTOFDATENUM:
                return self::OUTOFDATE;
            default:
                throw new \InvalidArgumentException("Invalid status number");
        }
    }
}
