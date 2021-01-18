import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ComponentPropsRepository } from './componentProps.repository'
// import { ComponentPropsSubscriber } from './subscriber/user.subscriber'

@Module({
  imports: [TypeOrmModule.forFeature([ComponentPropsRepository])],
  // providers: [ComponentPropsSubscriber],
  exports: [TypeOrmModule],
})
export class ComponentPropsModule {}