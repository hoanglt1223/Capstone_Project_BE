import { Module } from '@nestjs/common'
import { ProjectModule } from './project.module'
import { ProjectService } from './project.service'
import { ProjectController } from './project.controller'
import { ConfigService } from '@nestjs/config'
import { LoggerService } from '../logger/custom.logger'

@Module({
  imports: [ProjectModule, ConfigService, LoggerService],
  providers: [ProjectService],
  exports: [ProjectService],
  controllers: [ProjectController],
})
export class ProjectHttpModule {}
