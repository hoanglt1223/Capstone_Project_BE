import { Component } from '../entity/component.entity'
import { ComponentRepository } from './component.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base.service'
import { LoggerService } from '../logger/custom.logger'

@Injectable()
export class ComponentService extends BaseService<
  Component,
  ComponentRepository
> {
  constructor(repository: ComponentRepository, logger: LoggerService) {
    super(repository, logger)
  }

  getInactiveComponents(): Promise<Component[]> {
    return this.repository.getInactiveComponents()
  }
}
