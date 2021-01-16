import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm'
import { Exclude } from 'class-transformer'

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Unique(['email'])
  @Column()
  email: string

  @Column()
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

  constructor(partial: Partial<User>) {
    super()
    Object.assign(this, partial)
  }
}
