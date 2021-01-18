import { MigrationInterface, QueryRunner, Table } from 'typeorm'
export class createPaymentTable1610981047415 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'payment',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'type',
            type: 'varchar',
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
    await queryRunner.dropTable('payment')
  }
}
