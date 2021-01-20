import { EntityRepository, Repository } from 'typeorm'
import { ComponentProps } from '../entity/componentProps.entity'

@EntityRepository(ComponentProps)
export class ComponentPropsRepository extends Repository<ComponentProps> {
  getInactiveComponentProps(): Promise<ComponentProps[]> {
    return this.createQueryBuilder()
      .where('isInactive = :true', { active: false })
      .getMany()
  }
}
