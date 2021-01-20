import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm'
import { Exclude } from 'class-transformer'
import { Payment } from './payment.entity'

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Unique(['email'])
  @Column()
  email: string

  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
  avatarURL: string

  @Column({ default: 1000, nullable: true })
  credit: number

  @Exclude()
  @Column()
  password: string

  @Column({ default: false, nullable: true })
  isInactive: boolean

  @CreateDateColumn({
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
  
  constructor(partial: Partial<User>) {
    super()
    Object.assign(this, partial)
  }
}
