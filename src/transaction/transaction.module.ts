import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TransactionRepository } from './transaction.repository'

@Module({
  imports: [TypeOrmModule.forFeature([TransactionRepository])],
  providers: [],
  exports: [TypeOrmModule],
})
export class TransactionModule {}
