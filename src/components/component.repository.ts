import { EntityRepository, Repository } from 'typeorm'
import { Component } from './component.entity'

@EntityRepository(Component)
export class ComponentRepository extends Repository<Component> {
  getInactiveComponents(): Promise<Component[]> {
    return this.createQueryBuilder()
      .where('isInactive = :true', { active: false })
      .getMany()
  }
}
