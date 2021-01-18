import {
  BaseEntity,
  Column,
  // CreateDateColumn,
  Entity,
  // OneToMany,
  PrimaryGeneratedColumn,
  // UpdateDateColumn,
} from 'typeorm'


@Entity({ name: 'customProps' })
export class CustomProps extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  value: string
  // @OneToMany(type => )

  constructor(partial: Partial<CustomProps>) {
    super()
    Object.assign(this, partial)
  }
}
