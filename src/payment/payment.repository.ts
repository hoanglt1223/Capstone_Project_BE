import { EntityRepository, Repository } from 'typeorm'
import { Payment } from '../entity/payment.entity'

@EntityRepository(Payment)
export class PaymentRepository extends Repository<Payment> {}
