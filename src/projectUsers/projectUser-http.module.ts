import { Module } from '@nestjs/common'
import { ProjectUserModule } from './projectUser.module'
import { ProjectUserService } from './projectUser.service'
import { ProjectUserController } from './projectUser.controller'
import { ConfigService } from '@nestjs/config'
import { LoggerService } from '../logger/custom.logger'

@Module({
  imports: [ProjectUserModule, ConfigService, LoggerService],
  providers: [ProjectUserService],
  exports: [ProjectUserService],
  controllers: [ProjectUserController],
})
export class ProjectUserHttpModule {}
