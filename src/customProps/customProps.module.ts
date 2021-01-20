import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CustomPropsRepository } from './customProps.repository'
// import { CustomPropsSubscriber } from './subscriber/user.subscriber'

@Module({
  imports: [TypeOrmModule.forFeature([CustomPropsRepository])],
  // providers: [CustomPropsSubscriber],
  exports: [TypeOrmModule],
})
export class CustomPropsModule {}
