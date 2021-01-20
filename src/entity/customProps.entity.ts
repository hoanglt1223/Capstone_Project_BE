import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'customProps' })
export class CustomProps extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  value: string
  constructor(partial: Partial<CustomProps>) {
    super()
    Object.assign(this, partial)
  }
}
