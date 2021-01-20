import { EntityRepository, Repository } from 'typeorm'
import { Transaction } from '../entity/transaction.entity'

@EntityRepository(Transaction)
export class TransactionRepository extends Repository<Transaction> {}
