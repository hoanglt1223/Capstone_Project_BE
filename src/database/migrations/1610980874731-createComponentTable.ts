import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createComponentTable1610980874731 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'components',
              columns: [
                {
                  name: 'id',
                  type: 'int',
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: 'increment',
                },
                {
                  name: 'name',
                  type: 'varchar',
                },
                {
                  name: 'downloadURL',
                  type: 'varchar',
                  isNullable: true,
                },
                {
                  name: 'cost',
                  type: 'varchar',
                  isNullable: true,
                },
                {
                  name: 'iconURL',
                  type: 'varchar',
                  isNullable: true,
                },
                {
                  name: 'previewURL',
                  type: 'varchar',
                  isNullable: true,
                },
                {
                  name: 'createdAt',
                  type: 'date',
                  default: 'now()',
                  isNullable: true,
                },
                {
                  name: 'updatedAt',
                  type: 'date',
                  default: 'now()',
                  isNullable: true,
                },
              ],
            }),
          )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('components')
    }

}
