import { EntityRepository, Repository } from 'typeorm'
import { ProjectUser } from '../entity/projectUser.entity'

@EntityRepository(ProjectUser)
export class ProjectUserRepository extends Repository<ProjectUser> {
  getInactiveProjectUser(): Promise<ProjectUser[]> {
    return this.createQueryBuilder()
      .where('isInactive = :true', { active: false })
      .getMany()
  }
}
