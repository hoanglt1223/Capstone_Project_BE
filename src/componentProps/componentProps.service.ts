import { ComponentProps } from '../entity/componentProps.entity'
import { ComponentPropsRepository } from './componentProps.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base.service'
import { LoggerService } from '../logger/custom.logger'

@Injectable()
export class ComponentPropsService extends BaseService<
  ComponentProps,
  ComponentPropsRepository
> {
  constructor(repository: ComponentPropsRepository, logger: LoggerService) {
    super(repository, logger)
  }

  // findByEmail(email: string): Promise<ComponentProps | null> {
  //   return this.repository.findOne({ email: email })
  // }

  getInactiveComponentProps(): Promise<ComponentProps[]> {
    return this.repository.getInactiveComponentProps()
  }
}
