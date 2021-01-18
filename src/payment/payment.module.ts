import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PaymentRepository } from './payment.repository'

@Module({
  imports: [TypeOrmModule.forFeature([PaymentRepository])],
  providers: [],
  exports: [TypeOrmModule],
})
export class PaymentModule {}
