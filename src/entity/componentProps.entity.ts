import {
  BaseEntity,
  Column,
  // CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  // UpdateDateColumn,
} from 'typeorm'
import { Component } from './component.entity'
import { CssProps } from './cssProps.entity'

@Entity({ name: 'componentProps' })
export class ComponentProps extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  value: string

  @ManyToOne(
    () => Component,
    (component: Component) => component.id,
  )
  component: Component

  @ManyToOne(
    () => CssProps,
    (cssProps: CssProps) => cssProps.id,
  )
  props: CssProps

  constructor(partial: Partial<ComponentProps>) {
    super()
    Object.assign(this, partial)
  }
}
