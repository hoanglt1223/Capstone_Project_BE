import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ComponentRepository } from './component.repository'
// import { ComponentSubscriber } from './subscriber/user.subscriber'

@Module({
  imports: [TypeOrmModule.forFeature([ComponentRepository])],
  // providers: [ComponentSubscriber],
  exports: [TypeOrmModule],
})
export class ComponentModule {}