import { Transaction } from '../entity/transaction.entity'
import { TransactionRepository } from './transaction.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base.service'
import { LoggerService } from '../logger/custom.logger'

@Injectable()
export class TransactionService extends BaseService<
  Transaction,
  TransactionRepository
> {
  constructor(repository: TransactionRepository, logger: LoggerService) {
    super(repository, logger)
  }
}
