import { Module } from '@nestjs/common'
import { TransactionModule } from './transaction.module'
import { TransactionService } from './transaction.service'
import { TransactionController } from './transaction.controller'
import { ConfigService } from '@nestjs/config'
import { LoggerService } from '../logger/custom.logger'

@Module({
  imports: [TransactionModule, ConfigService, LoggerService],
  providers: [TransactionService],
  exports: [TransactionService],
  controllers: [TransactionController],
})
export class TransactionHttpModule {}
