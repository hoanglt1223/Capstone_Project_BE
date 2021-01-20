import { CssProps } from '../entity/cssProps.entity'
import { CssPropsRepository } from './cssProps.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base.service'
import { LoggerService } from '../logger/custom.logger'

@Injectable()
export class CssPropsService extends BaseService<CssProps, CssPropsRepository> {
  constructor(repository: CssPropsRepository, logger: LoggerService) {
    super(repository, logger)
  }

  // findByEmail(email: string): Promise<CssProps | null> {
  //   return this.repository.findOne({ email: email })
  // }

  getInactiveCssProps(): Promise<CssProps[]> {
    return this.repository.getInactiveCssProps()
  }
}
