import { EntityRepository, Repository } from 'typeorm'
import { Project } from '../entity/project.entity'

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {}
