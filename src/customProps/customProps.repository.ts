import { EntityRepository, Repository } from 'typeorm'
import { CustomProps } from '../entity/customProps.entity'

@EntityRepository(CustomProps)
export class CustomPropsRepository extends Repository<CustomProps> {
  getInactiveCustomProps(): Promise<CustomProps[]> {
    return this.createQueryBuilder()
      .where('isInactive = :true', { active: false })
      .getMany()
  }
}
