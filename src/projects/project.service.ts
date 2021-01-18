import { Project } from './project.entity'
import { ProjectRepository } from './project.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../base.service'
import { LoggerService } from '../logger/custom.logger'

@Injectable()
export class ProjectService extends BaseService<Project, ProjectRepository> {
  constructor(repository: ProjectRepository, logger: LoggerService) {
    super(repository, logger)
  }
}
