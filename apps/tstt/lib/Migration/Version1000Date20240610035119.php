<?php
declare(strict_types=1);

namespace OCA\Tstt\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version1000Date20240610035119 extends SimpleMigrationStep {
    /**
     * command to run: ./occ migrations:execute tstt 1000Date20240610035119
	 * @param IOutput $output
	 * @param Closure(): ISchemaWrapper $schemaClosure
	 * @param array $options
	 */
	public function postSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
        $db = \OC::$server->getDatabaseConnection();
		$queryBuilder = $db->getQueryBuilder();

		// Seeding for table "users" | pattern username/password: usernum[i]/usernum[i]
        for($i = 0; $i < 10; $i++) {
            $password = 'usernum' . $i;
            $passwordHash = 3 . '|' . password_hash($password, PASSWORD_ARGON2ID, []);
            $queryBuilder->insert('users')
                ->values([
                    'uid' => $queryBuilder->createNamedParameter('usernum' . $i),
                    'displayname' => $queryBuilder->createNamedParameter('User Number ' . $i),
                    'password' => $queryBuilder->createNamedParameter($passwordHash),
                    'uid_lower' => $queryBuilder->createNamedParameter('usernum' . $i),
                ])
                ->execute();
        }

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
        for($i = 0; $i < 5; $i++) {
            $queryBuilder->insert('group_user')
                ->values([
                    'gid' => $queryBuilder->createNamedParameter('Author'),
                    'uid' => $queryBuilder->createNamedParameter('usernum' . $i),
                ])
                ->execute();
        }
        
		for($i = 5; $i < 10; $i++) {
            $queryBuilder->insert('group_user')
                ->values([
                    'gid' => $queryBuilder->createNamedParameter('Owner'),
                    'uid' => $queryBuilder->createNamedParameter('usernum' . $i),
                ])
                ->execute();
        }

		// Seeding of Intellectual Property
        for($i = 0; $i < 10; $i++) {
            $queryBuilder->insert('intellectual_property')
                ->values([
                    'name_prop' => $queryBuilder->createNamedParameter('Tài sản trí tuệ bản quyền sở hữu trí tuệ số ' . ($i + 1)),
                    'copyright_id' => $queryBuilder->createNamedParameter('usernum' . rand(0, 4)),
                    'owner_id' => $queryBuilder->createNamedParameter('usernum' . rand(5, 9)),
                    'status' => $queryBuilder->createNamedParameter(rand(1, 3)),
                    'version' => $queryBuilder->createNamedParameter(rand(1, 3) . '.0'),
                    'created_at' => $queryBuilder->createNamedParameter( (int)(microtime(true) * 1000) ),
                    'updated_at' => $queryBuilder->createNamedParameter((int)(microtime(true) * 1000)),
                    'deleted_at' => $queryBuilder->createNamedParameter(null),
                    'created_by' => $queryBuilder->createNamedParameter('usernum' . rand(5, 9)),
                    'updated_by' => $queryBuilder->createNamedParameter('usernum' . rand(5, 9)),
                    'deleted_by' => $queryBuilder->createNamedParameter(null)
                ])
                ->execute();
        }
    }
}
