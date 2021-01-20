import { Module } from '@nestjs/common'
import { CustomPropsModule } from './customProps.module'
import { CustomPropsService } from './customProps.service'
import { CustomPropsController } from './customProps.controller'
import { ConfigService } from '@nestjs/config'
import { LoggerService } from '../logger/custom.logger'

@Module({
  imports: [CustomPropsModule, ConfigService, LoggerService],
  providers: [CustomPropsService],
  exports: [CustomPropsService],
  controllers: [CustomPropsController],
})
export class CustomPropsHttpModule {}
