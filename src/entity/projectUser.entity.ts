import {
  BaseEntity,
  // CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  // UpdateDateColumn,
} from 'typeorm'
import { Project } from './project.entity'
import { User } from './user.entity'

@Entity({ name: 'projectUser' })
export class ProjectUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(
    () => Project,
    (project: Project) => project.id,
  )
  project: Project

  @ManyToOne(
    () => User,
    (user: User) => user.id,
  )
  user: User

  constructor(partial: Partial<ProjectUser>) {
    super()
    Object.assign(this, partial)
  }
}
