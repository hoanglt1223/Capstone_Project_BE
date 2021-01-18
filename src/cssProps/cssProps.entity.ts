import {
  BaseEntity,
  Column,
  // CreateDateColumn,
  Entity,
  // OneToMany,
  PrimaryGeneratedColumn,
  // UpdateDateColumn,
} from 'typeorm'


@Entity({ name: 'cssProps' })
export class CssProps extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  // @OneToMany(type => )

  constructor(partial: Partial<CssProps>) {
    super()
    Object.assign(this, partial)
  }
}
