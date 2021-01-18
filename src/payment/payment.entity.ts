import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm'

@Entity({ name: 'payment' })
export class Payment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Unique(['type'])
  @Column()
  email: string

  createdAt: string

  @UpdateDateColumn({
    default: `now()`,
    nullable: true,
  })
  updatedAt: string

  constructor(partial: Partial<Payment>) {
    super()
    Object.assign(this, partial)
  }
}
