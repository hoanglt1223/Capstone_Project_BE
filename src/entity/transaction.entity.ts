import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Payment } from './payment.entity'
import { User } from './user.entity'

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

  @OneToOne(() => Payment, (payment: Payment) => payment.id)
  payment: Payment

  @OneToOne(() => User, (user: User) => user.id)
  user: User
  
  constructor(partial: Partial<Transaction>) {
    super()
    Object.assign(this, partial)
  }
}
