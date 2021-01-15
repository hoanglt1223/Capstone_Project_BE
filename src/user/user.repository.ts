import { User } from 'src/model/user.entity'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  getInactiveUsers(): Promise<User[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}
