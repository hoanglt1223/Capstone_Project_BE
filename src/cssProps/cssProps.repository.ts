import { EntityRepository, Repository } from 'typeorm'
import { CssProps } from './cssProps.entity'

@EntityRepository(CssProps)
export class CssPropsRepository extends Repository<CssProps> {
  getInactiveCssProps(): Promise<CssProps[]> {
    return this.createQueryBuilder()
      .where('isInactive = :true', { active: false })
      .getMany()
  }
}
