import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm'
import { Component } from './component.entity'

@Entity({ name: 'projects' })
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Unique(['name'])
  @Column()
  name: string

  @Column({ default: false })
  isPrivate: boolean

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

  @OneToMany(
    () => Component,
    (component: Component) => component.project,
  )
  components: Component[]

  constructor(partial: Partial<Project>) {
    super()
    Object.assign(this, partial)
  }
}
