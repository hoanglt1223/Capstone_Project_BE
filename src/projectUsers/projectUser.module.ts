import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProjectUserRepository } from './projectUser.repository'
// import { ProjectUserSubscriber } from './subscriber/user.subscriber'

@Module({
  imports: [TypeOrmModule.forFeature([ProjectUserRepository])],
  // providers: [ProjectUserSubscriber],
  exports: [TypeOrmModule],
})
export class ProjectUserModule {}
