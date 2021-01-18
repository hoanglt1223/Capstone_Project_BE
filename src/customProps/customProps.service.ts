import { CustomProps } from './customProps.entity'
import { CustomPropsRepository } from './customProps.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base.service'
import { LoggerService } from '../logger/custom.logger'

@Injectable()
export class CustomPropsService extends BaseService<CustomProps, CustomPropsRepository> {
  constructor(repository: CustomPropsRepository, logger: LoggerService) {
    super(repository, logger)
  }

  // findByEmail(email: string): Promise<CustomProps | null> {
  //   return this.repository.findOne({ email: email })
  // }

  getInactiveCustomProps(): Promise<CustomProps[]> {
    return this.repository.getInactiveCustomProps()
  }
}
