import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CssPropsRepository } from './cssProps.repository'
// import { CssPropsSubscriber } from './subscriber/user.subscriber'

@Module({
  imports: [TypeOrmModule.forFeature([CssPropsRepository])],
  // providers: [CssPropsSubscriber],
  exports: [TypeOrmModule],
})
export class CssPropsModule {}