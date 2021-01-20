import { Module } from '@nestjs/common'
import { ComponentModule } from './component.module'
import { ComponentService } from './component.service'
import { ComponentController } from './component.controller'
import { ConfigService } from '@nestjs/config'
import { LoggerService } from '../logger/custom.logger'

@Module({
  imports: [ComponentModule, ConfigService, LoggerService],
  providers: [ComponentService],
  exports: [ComponentService],
  controllers: [ComponentController],
})
export class ComponentHttpModule {}
