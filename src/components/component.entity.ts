import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  // OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'


@Entity({ name: 'components' })
export class Component extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ nullable: true })
  downloadURL: string

  @Column({ nullable: true })
  cost: string

  @Column({ nullable: true })
  iconURL: string

  @Column({ nullable: true })
  previewURL: string

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

  // @OneToMany(type => )

  constructor(partial: Partial<Component>) {
    super()
    Object.assign(this, partial)
  }
}
