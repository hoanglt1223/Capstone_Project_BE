import { Module } from '@nestjs/common'
import { CssPropsModule } from './cssProps.module'
import { CssPropsService } from './cssProps.service'
import { CssPropsController } from './cssProps.controller'
import { ConfigService } from '@nestjs/config'
import { LoggerService } from '../logger/custom.logger'

@Module({
  imports: [CssPropsModule, ConfigService, LoggerService],
  providers: [CssPropsService],
  exports: [CssPropsService],
  controllers: [CssPropsController],
})
export class CssPropsHttpModule {}
