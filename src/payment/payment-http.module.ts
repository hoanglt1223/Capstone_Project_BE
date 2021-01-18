import { Module } from '@nestjs/common'
import { PaymentModule } from './payment.module'
import { PaymentService } from './payment.service'
import { PaymentController } from './payment.controller'
import { ConfigService } from '@nestjs/config'
import { LoggerService } from '../logger/custom.logger'

@Module({
  imports: [PaymentModule, ConfigService, LoggerService],
  providers: [PaymentService],
  exports: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentHttpModule {}
