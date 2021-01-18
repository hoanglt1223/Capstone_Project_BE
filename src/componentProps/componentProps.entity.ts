import {
  BaseEntity,
  Column,
  // CreateDateColumn,
  Entity,
  // OneToMany,
  PrimaryGeneratedColumn,
  // UpdateDateColumn,
} from 'typeorm'


@Entity({ name: 'componentProps' })
export class ComponentProps extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number
  
  @Column()
  value: string

  // @OneToMany(type => )

  constructor(partial: Partial<ComponentProps>) {
    super()
    Object.assign(this, partial)
  }
}
