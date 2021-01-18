import { EntityRepository, Repository } from 'typeorm'
import { User } from './user.entity'

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  getInactiveUsers(): Promise<User[]> {
    return this.createQueryBuilder()
      .where('isInactive = :true', { active: false })
      .getMany()
  }
}
