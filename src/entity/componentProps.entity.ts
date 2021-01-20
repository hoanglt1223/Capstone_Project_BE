import {
  BaseEntity,
  Column,
  // CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  // UpdateDateColumn,
} from 'typeorm'

@Entity({ name: 'componentProps' })
export class ComponentProps extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  value: string

  constructor(partial: Partial<ComponentProps>) {
    super()
    Object.assign(this, partial)
  }
}
