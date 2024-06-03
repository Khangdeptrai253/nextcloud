<?php return array(
    'root' => array(
        'name' => '__root__',
        'pretty_version' => '1.0.0+no-version-set',
        'version' => '1.0.0.0',
        'reference' => NULL,
        'type' => 'library',
        'install_path' => __DIR__ . '/../../',
        'aliases' => array(),
        'dev' => true,
    ),
    'versions' => array(
        '__root__' => array(
            'pretty_version' => '1.0.0+no-version-set',
            'version' => '1.0.0.0',
            'reference' => NULL,
            'type' => 'library',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'friendsofphp/php-cs-fixer' => array(
            'dev_requirement' => true,
            'replaced' => array(
                0 => 'v3.58.1',
            ),
        ),
        'nextcloud/coding-standard' => array(
            'pretty_version' => 'v1.2.1',
            'version' => '1.2.1.0',
            'reference' => 'cf5f18d989ec62fb4cdc7fc92a36baf34b3d829e',
            'type' => 'library',
            'install_path' => __DIR__ . '/../nextcloud/coding-standard',
            'aliases' => array(),
            'dev_requirement' => true,
        ),
        'php-cs-fixer/shim' => array(
            'pretty_version' => 'v3.58.1',
            'version' => '3.58.1.0',
            'reference' => 'a6af3df8516033b450a220003c673b9393d68f55',
            'type' => 'application',
            'install_path' => __DIR__ . '/../php-cs-fixer/shim',
            'aliases' => array(),
            'dev_requirement' => true,
        ),
    ),
);
