<?php
declare(strict_types=1);

namespace OCA\Tstt\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version1000Date20240625085712 extends SimpleMigrationStep {
	/**
	 * command to run: ./occ migrations:execute tstt 1000Date20240625085712
	 * @param IOutput $output
	 * @param Closure(): ISchemaWrapper $schemaClosure
	 * @param array $options
	 * @return null|ISchemaWrapper
	 */
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if (!$schema->hasTable('file_property')) {
            $table = $schema->createTable('file_property');

            $table->addColumn('id', 'integer', [
                'autoincrement' => true,
                'notnull' => true
            ]);
            $table->addColumn('object_id', 'integer', [
				'notnull' => true
            ]);
            $table->addColumn('it_id', 'integer', [
				'notnull' => true
            ]);

            $table->setPrimaryKey(['id']);
        }
        return $schema;
	}
}
