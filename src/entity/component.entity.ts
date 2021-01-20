import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Project } from './project.entity'
@Entity({ name: 'components' })
export class Component extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ nullable: true })
  downloadURL: string

  @Column({ nullable: true })
  price: string

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

  @ManyToOne(
    () => Project,
    (project: Project) => project.components,
  )
  project: Project

  @ManyToOne(
    () => Component,
    (component: Component) => component.id,
  )
  parent: Component

  constructor(partial: Partial<Component>) {
    super()
    Object.assign(this, partial)
  }
}
