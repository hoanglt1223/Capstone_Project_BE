import { MigrationInterface, QueryRunner, Table } from 'typeorm'
export class createTransactionTable1610981912054 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transaction',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'amount',
            type: 'varchar',
          },
          {
            name: 'currency',
            type: 'varchar',
          },
          {
            name: 'transactionDate',
            type: 'date',
            default: 'now()',
            isNullable: true,
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transaction')
  }
}
