import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Component } from './component.entity'

@Entity({ name: 'customProps' })
export class CustomProps extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  value: string

  @ManyToOne(
    () => Component,
    (component: Component) => component.id,
  )
  component

  constructor(partial: Partial<CustomProps>) {
    super()
    Object.assign(this, partial)
  }
}
