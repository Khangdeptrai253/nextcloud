<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1de05efc98eb83fcdd3f892cfc4da110
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PhpParser\\' => 10,
            'PHPStan\\PhpDocParser\\' => 21,
        ),
        'O' => 
        array (
            'OpenAPIExtractor\\' => 17,
        ),
        'A' => 
        array (
            'Ahc\\Cli\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PhpParser\\' => 
        array (
            0 => __DIR__ . '/..' . '/nikic/php-parser/lib/PhpParser',
        ),
        'PHPStan\\PhpDocParser\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpstan/phpdoc-parser/src',
        ),
        'OpenAPIExtractor\\' => 
        array (
            0 => __DIR__ . '/..' . '/nextcloud/openapi-extractor/src',
        ),
        'Ahc\\Cli\\' => 
        array (
            0 => __DIR__ . '/..' . '/adhocore/cli/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1de05efc98eb83fcdd3f892cfc4da110::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1de05efc98eb83fcdd3f892cfc4da110::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit1de05efc98eb83fcdd3f892cfc4da110::$classMap;

        }, null, ClassLoader::class);
    }
}
