import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsersTable1592555965808 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'avatarURL',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'credit',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'isInactive',
            type: 'boolean',
            default: false,
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
    await queryRunner.dropTable('users')
  }
}
