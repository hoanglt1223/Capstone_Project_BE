import {
  BaseEntity,
  Column,
  // CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  // UpdateDateColumn,
} from 'typeorm'

@Entity({ name: 'cssProps' })
export class CssProps extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  constructor(partial: Partial<CssProps>) {
    super()
    Object.assign(this, partial)
  }
}
