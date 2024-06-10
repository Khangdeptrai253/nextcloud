<?php
declare(strict_types=1);

namespace OCA\Tstt\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version1000Date20240610035119 extends SimpleMigrationStep {
	/**
	 * @param IOutput $output
	 * @param Closure(): ISchemaWrapper $schemaClosure
	 * @param array $options
	 */
	public function postSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
        $db = \OC::$server->getDatabaseConnection();

		$queryBuilder = $db->getQueryBuilder();

		// Seeding for table "users"
		$queryBuilder->insert('users')
			->values([
				'uid' => $queryBuilder->createNamedParameter('usernum0'),
				'displayname' => $queryBuilder->createNamedParameter('User Number 0'),
				'password' => $queryBuilder->createNamedParameter('3|$argon2id$v=19$m=65536,t=4,p=1$MUUxcVdFSGNHMS5ocjFQZQ$hIBdAWWV/LX9er933q2TqtF+keqhAT7/cqx6YKKQl/Q'),
				'uid_lower' => $queryBuilder->createNamedParameter('usernum0'),
			])
			->execute();
		
		$queryBuilder->insert('users')
			->values([
				'uid' => $queryBuilder->createNamedParameter('usernum1'),
				'displayname' => $queryBuilder->createNamedParameter('User Number 1'),
				'password' => $queryBuilder->createNamedParameter('3|$argon2id$v=19$m=65536,t=4,p=1$MUUxcVdFSGNHMS5ocjFQZQ$hIBdAWWV/LX9er933q2TqtF+keqhAT7/cqx6YKKQl/Q'),
				'uid_lower' => $queryBuilder->createNamedParameter('usernum1'),
			])
			->execute();

		$queryBuilder->insert('users')
			->values([
				'uid' => $queryBuilder->createNamedParameter('usernum2'),
				'displayname' => $queryBuilder->createNamedParameter('User Number 2'),
				'password' => $queryBuilder->createNamedParameter('3|$argon2id$v=19$m=65536,t=4,p=1$MUUxcVdFSGNHMS5ocjFQZQ$hIBdAWWV/LX9er933q2TqtF+keqhAT7/cqx6YKKQl/Q'),
				'uid_lower' => $queryBuilder->createNamedParameter('usernum2'),
			])
			->execute();

		$queryBuilder->insert('users')
			->values([
				'uid' => $queryBuilder->createNamedParameter('usernum3'),
				'displayname' => $queryBuilder->createNamedParameter('User Number 3'),
				'password' => $queryBuilder->createNamedParameter('3|$argon2id$v=19$m=65536,t=4,p=1$MUUxcVdFSGNHMS5ocjFQZQ$hIBdAWWV/LX9er933q2TqtF+keqhAT7/cqx6YKKQl/Q'),
				'uid_lower' => $queryBuilder->createNamedParameter('usernum3'),
			])
			->execute();

		$queryBuilder->insert('users')
			->values([
				'uid' => $queryBuilder->createNamedParameter('usernum4'),
				'displayname' => $queryBuilder->createNamedParameter('User Number 4'),
				'password' => $queryBuilder->createNamedParameter('3|$argon2id$v=19$m=65536,t=4,p=1$MUUxcVdFSGNHMS5ocjFQZQ$hIBdAWWV/LX9er933q2TqtF+keqhAT7/cqx6YKKQl/Q'),
				'uid_lower' => $queryBuilder->createNamedParameter('usernum4'),
			])
			->execute();

		$queryBuilder->insert('users')
			->values([
				'uid' => $queryBuilder->createNamedParameter('usernum5'),
				'displayname' => $queryBuilder->createNamedParameter('User Number 5'),
				'password' => $queryBuilder->createNamedParameter('3|$argon2id$v=19$m=65536,t=4,p=1$MUUxcVdFSGNHMS5ocjFQZQ$hIBdAWWV/LX9er933q2TqtF+keqhAT7/cqx6YKKQl/Q'),
				'uid_lower' => $queryBuilder->createNamedParameter('usernum5'),
			])
			->execute();

		$queryBuilder->insert('users')
			->values([
				'uid' => $queryBuilder->createNamedParameter('usernum6'),
				'displayname' => $queryBuilder->createNamedParameter('User Number 6'),
				'password' => $queryBuilder->createNamedParameter('3|$argon2id$v=19$m=65536,t=4,p=1$MUUxcVdFSGNHMS5ocjFQZQ$hIBdAWWV/LX9er933q2TqtF+keqhAT7/cqx6YKKQl/Q'),
				'uid_lower' => $queryBuilder->createNamedParameter('usernum6'),
			])
			->execute();

		$queryBuilder->insert('users')
			->values([
				'uid' => $queryBuilder->createNamedParameter('usernum7'),
				'displayname' => $queryBuilder->createNamedParameter('User Number 7'),
				'password' => $queryBuilder->createNamedParameter('3|$argon2id$v=19$m=65536,t=4,p=1$MUUxcVdFSGNHMS5ocjFQZQ$hIBdAWWV/LX9er933q2TqtF+keqhAT7/cqx6YKKQl/Q'),
				'uid_lower' => $queryBuilder->createNamedParameter('usernum7'),
			])
			->execute();

		$queryBuilder->insert('users')
			->values([
				'uid' => $queryBuilder->createNamedParameter('usernum8'),
				'displayname' => $queryBuilder->createNamedParameter('User Number 8'),
				'password' => $queryBuilder->createNamedParameter('3|$argon2id$v=19$m=65536,t=4,p=1$MUUxcVdFSGNHMS5ocjFQZQ$hIBdAWWV/LX9er933q2TqtF+keqhAT7/cqx6YKKQl/Q'),
				'uid_lower' => $queryBuilder->createNamedParameter('usernum8'),
			])
			->execute();

		$queryBuilder->insert('users')
			->values([
				'uid' => $queryBuilder->createNamedParameter('usernum9'),
				'displayname' => $queryBuilder->createNamedParameter('User Number 9'),
				'password' => $queryBuilder->createNamedParameter('3|$argon2id$v=19$m=65536,t=4,p=1$MUUxcVdFSGNHMS5ocjFQZQ$hIBdAWWV/LX9er933q2TqtF+keqhAT7/cqx6YKKQl/Q'),
				'uid_lower' => $queryBuilder->createNamedParameter('usernum9'),
			])
			->execute();		

		// Seeding of table "groups" (Owner and Author)
			$queryBuilder->insert('groups')
            ->values([
                'gid' => $queryBuilder->createNamedParameter('Author'),
                'displayname' => $queryBuilder->createNamedParameter('Author'),
            ])
            ->execute();

			$queryBuilder->insert('groups')
            ->values([
                'gid' => $queryBuilder->createNamedParameter('Owner'),
                'displayname' => $queryBuilder->createNamedParameter('Owner'),
            ])
            ->execute();

		// Seeding of table "group_user"
		$queryBuilder->insert('group_user')
            ->values([
                'gid' => $queryBuilder->createNamedParameter('Author'),
                'uid' => $queryBuilder->createNamedParameter('usernum1'),
            ])
            ->execute();

		$queryBuilder->insert('group_user')
			->values([
				'gid' => $queryBuilder->createNamedParameter('Author'),
				'uid' => $queryBuilder->createNamedParameter('usernum2'),
			])
			->execute();

		$queryBuilder->insert('group_user')
			->values([
				'gid' => $queryBuilder->createNamedParameter('Author'),
				'uid' => $queryBuilder->createNamedParameter('usernum3'),
			])
			->execute();

		$queryBuilder->insert('group_user')
			->values([
				'gid' => $queryBuilder->createNamedParameter('Author'),
				'uid' => $queryBuilder->createNamedParameter('usernum4'),
			])
			->execute();

		$queryBuilder->insert('group_user')
			->values([
				'gid' => $queryBuilder->createNamedParameter('Author'),
				'uid' => $queryBuilder->createNamedParameter('usernum5'),
			])
			->execute();

			$queryBuilder->insert('group_user')
            ->values([
                'gid' => $queryBuilder->createNamedParameter('Owner'),
                'uid' => $queryBuilder->createNamedParameter('usernum6'),
            ])
            ->execute();

		$queryBuilder->insert('group_user')
			->values([
				'gid' => $queryBuilder->createNamedParameter('Owner'),
				'uid' => $queryBuilder->createNamedParameter('usernum7'),
			])
			->execute();

		$queryBuilder->insert('group_user')
			->values([
				'gid' => $queryBuilder->createNamedParameter('Owner'),
				'uid' => $queryBuilder->createNamedParameter('usernum8'),
			])
			->execute();

		$queryBuilder->insert('group_user')
			->values([
				'gid' => $queryBuilder->createNamedParameter('Owner'),
				'uid' => $queryBuilder->createNamedParameter('usernum9'),
			])
			->execute();

		$queryBuilder->insert('group_user')
			->values([
				'gid' => $queryBuilder->createNamedParameter('Owner'),
				'uid' => $queryBuilder->createNamedParameter('usernum0'),
			])
			->execute();

		// Seeding of Intellectual Property
        $queryBuilder->insert('intellectual_property')
            ->values([
                'name_prop' => $queryBuilder->createNamedParameter('Tài sản trí tuệ bản quyền sở hữu trí tuệ'),
                'copyright' => $queryBuilder->createNamedParameter('usernum1'),
                'owner' => $queryBuilder->createNamedParameter('usernum0'),
                'status' => $queryBuilder->createNamedParameter(1),
                'version' => $queryBuilder->createNamedParameter('1.0'),
                'created_at' => $queryBuilder->createNamedParameter('1717987753229'),
                'updated_at' => $queryBuilder->createNamedParameter('1717987753229'),
                'deleted_at' => $queryBuilder->createNamedParameter(null),
                'created_by' => $queryBuilder->createNamedParameter('usernum0'),
                'updated_by' => $queryBuilder->createNamedParameter('usernum0'),
                'deleted_by' => $queryBuilder->createNamedParameter(null)
            ])
            ->execute();

        $queryBuilder->insert('intellectual_property')
            ->values([
                'name_prop' => $queryBuilder->createNamedParameter('Tài sản trí tuệ Phim hoạt hình Sconnect'),
                'copyright' => $queryBuilder->createNamedParameter('usernum3'),
                'owner' => $queryBuilder->createNamedParameter('usernum8'),
                'status' => $queryBuilder->createNamedParameter(1),
                'version' => $queryBuilder->createNamedParameter('2.0'),
                'created_at' => $queryBuilder->createNamedParameter('1717987753229'),
                'updated_at' => $queryBuilder->createNamedParameter('1717987753229'),
                'deleted_at' => $queryBuilder->createNamedParameter(null),
                'created_by' => $queryBuilder->createNamedParameter('usernum8'),
                'updated_by' => $queryBuilder->createNamedParameter('usernum8'),
                'deleted_by' => $queryBuilder->createNamedParameter(null)
            ])
            ->execute();
	}
}
