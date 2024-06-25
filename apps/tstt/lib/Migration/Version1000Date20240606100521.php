<?php
declare(strict_types=1);

namespace OCA\Tstt\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;
use OCA\Tstt\Db\StatusEnum;

class Version1000Date20240606100521 extends SimpleMigrationStep {
	/**
     * command to run: ./occ migrations:execute tstt 1000Date20240606100521
     * @param IOutput $output
     * @param Closure $schemaClosure The `\Closure` returns a `ISchemaWrapper`
     * @param array $options
     * @return null|ISchemaWrapper
     */
	
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options)
    {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if (!$schema->hasTable('intellectual_property')) {
            $table = $schema->createTable('intellectual_property');
            $table->addOption('collate', 'utf8mb4_unicode_ci');
            $table->addOption('charset', 'utf8mb4');
            
            $table->addColumn('id', 'integer', [
                'autoincrement' => true,
                'notnull' => true
            ]);
            $table->addColumn('name_prop', 'string', [
                'notnull' => true,
                'length' => 200
            ]);
            $table->addColumn('copyright_id', 'string', [
                'notnull' => true,
                'length' => 200
            ]);
            $table->addColumn('owner_id', 'string', [
                'notnull' => true,
                'length' => 200
            ]);
            $table->addColumn('status', StatusEnum::ENUM, [
                'notnull' => true,
                'values' => [StatusEnum::ACTIVE, StatusEnum::INACTIVE, StatusEnum::OUTOFDATE]
            ]);
            $table->addColumn('version', 'string', [
                'notnull' => true,
                'length' => 200
            ]);
            $table->addColumn('created_at', 'bigint', [
                'notnull' => false
            ]);
            $table->addColumn('updated_at', 'bigint', [
                'notnull' => false
            ]);
            $table->addColumn('deleted_at', 'bigint', [
                'notnull' => false,
                'default' => null
            ]);
            $table->addColumn('created_by', 'string', [
                'notnull' => false,
                'length' => 200
            ]);
            $table->addColumn('updated_by', 'string', [
                'notnull' => false,
                'length' => 200
            ]);
            $table->addColumn('deleted_by', 'string', [
                'notnull' => false,
                'default' => null,
                'length' => 200
            ]);

            $table->setPrimaryKey(['id']);
            $table->addIndex(['name_prop'], 'name_prop_fulltext', [
                'type' => 'fulltext'
            ]);
            $table->addIndex(['copyright_id'], 'copyright_id_index', [
                'type' => 'index'
            ]);
            $table->addIndex(['owner_id'], 'owner_id_index', [
                'type' => 'index'
            ]);
            $table->addIndex(['status'], 'status_index', [
                'type' => 'index'
            ]);
        }
        return $schema;
    }
}
