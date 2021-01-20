import { Module } from '@nestjs/common'
import { ComponentPropsModule } from './componentProps.module'
import { ComponentPropsService } from './componentProps.service'
import { ComponentPropsController } from './componentProps.controller'
import { ConfigService } from '@nestjs/config'
import { LoggerService } from '../logger/custom.logger'

@Module({
  imports: [ComponentPropsModule, ConfigService, LoggerService],
  providers: [ComponentPropsService],
  exports: [ComponentPropsService],
  controllers: [ComponentPropsController],
})
export class ComponentPropsHttpModule {}
