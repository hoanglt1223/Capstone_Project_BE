import { ProjectUser } from '../entity/projectUser.entity'
import { ProjectUserRepository } from './projectUser.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base.service'
import { LoggerService } from '../logger/custom.logger'

@Injectable()
export class ProjectUserService extends BaseService<
  ProjectUser,
  ProjectUserRepository
> {
  constructor(repository: ProjectUserRepository, logger: LoggerService) {
    super(repository, logger)
  }

  // findByEmail(email: string): Promise<ProjectUser | null> {
  //   return this.repository.findOne({ email: email })
  // }

  getInactiveProjectUser(): Promise<ProjectUser[]> {
    return this.repository.getInactiveProjectUser()
  }
}
