import { Payment } from '../entity/payment.entity'
import { PaymentRepository } from './payment.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base.service'
import { LoggerService } from '../logger/custom.logger'

@Injectable()
export class PaymentService extends BaseService<Payment, PaymentRepository> {
  constructor(repository: PaymentRepository, logger: LoggerService) {
    super(repository, logger)
  }
}
