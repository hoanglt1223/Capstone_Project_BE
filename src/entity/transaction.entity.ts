import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({ name: 'transaction' })
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  amount: string

  @Column()
  currency: string

  @Column()
  transactionDate: Date

  @UpdateDateColumn({
    default: `now()`,
    nullable: true,
  })
  createdAt: string

  @UpdateDateColumn({
    default: `now()`,
    nullable: true,
  })
  updatedAt: string
  constructor(partial: Partial<Transaction>) {
    super()
    Object.assign(this, partial)
  }
}
