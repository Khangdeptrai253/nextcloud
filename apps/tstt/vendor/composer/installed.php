<?php return array(
    'root' => array(
        'name' => 'nextcloud/tstt',
        'pretty_version' => '1.0.0+no-version-set',
        'version' => '1.0.0.0',
        'reference' => NULL,
        'type' => 'library',
        'install_path' => __DIR__ . '/../../',
        'aliases' => array(),
        'dev' => true,
    ),
    'versions' => array(
        'bamarni/composer-bin-plugin' => array(
            'pretty_version' => '1.8.2',
            'version' => '1.8.2.0',
            'reference' => '92fd7b1e6e9cdae19b0d57369d8ad31a37b6a880',
            'type' => 'composer-plugin',
            'install_path' => __DIR__ . '/../bamarni/composer-bin-plugin',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'nextcloud/ocp' => array(
            'pretty_version' => 'dev-stable29',
            'version' => 'dev-stable29',
            'reference' => '36698398d842967e052fbd191c133b0828b53f08',
            'type' => 'library',
            'install_path' => __DIR__ . '/../nextcloud/ocp',
            'aliases' => array(
                0 => '29.0.0.x-dev',
            ),
            'dev_requirement' => true,
        ),
        'nextcloud/tstt' => array(
            'pretty_version' => '1.0.0+no-version-set',
            'version' => '1.0.0.0',
            'reference' => NULL,
            'type' => 'library',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'psr/clock' => array(
            'pretty_version' => '1.0.0',
            'version' => '1.0.0.0',
            'reference' => 'e41a24703d4560fd0acb709162f73b8adfc3aa0d',
            'type' => 'library',
            'install_path' => __DIR__ . '/../psr/clock',
            'aliases' => array(),
            'dev_requirement' => true,
        ),
        'psr/container' => array(
            'pretty_version' => '2.0.2',
            'version' => '2.0.2.0',
            'reference' => 'c71ecc56dfe541dbd90c5360474fbc405f8d5963',
            'type' => 'library',
            'install_path' => __DIR__ . '/../psr/container',
            'aliases' => array(),
            'dev_requirement' => true,
        ),
        'psr/event-dispatcher' => array(
            'pretty_version' => '1.0.0',
            'version' => '1.0.0.0',
            'reference' => 'dbefd12671e8a14ec7f180cab83036ed26714bb0',
            'type' => 'library',
            'install_path' => __DIR__ . '/../psr/event-dispatcher',
            'aliases' => array(),
            'dev_requirement' => true,
        ),
        'psr/log' => array(
            'pretty_version' => '1.1.4',
            'version' => '1.1.4.0',
            'reference' => 'd49695b909c3b7628b6289db5479a1c204601f11',
            'type' => 'library',
            'install_path' => __DIR__ . '/../psr/log',
            'aliases' => array(),
            'dev_requirement' => true,
        ),
        'roave/security-advisories' => array(
            'pretty_version' => 'dev-latest',
            'version' => 'dev-latest',
            'reference' => 'a15ad8154eb2cc8f8f8ecb9def0f02bebee6309e',
            'type' => 'metapackage',
            'install_path' => NULL,
            'aliases' => array(
                0 => '9999999-dev',
            ),
            'dev_requirement' => true,
        ),
    ),
);
