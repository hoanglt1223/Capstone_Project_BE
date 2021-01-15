import {Entity, Column, BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ 
      type: 'timestamptz', 
      default: () => 'CURRENT_TIMESTAMP' 
    })
    createdAt: Date;

    @UpdateDateColumn({ 
      type: 'timestamptz', 
      default: () => 'CURRENT_TIMESTAMP' 
    })
    updatedAt: Date;

    @Column()
    username: string;

    @Column()
    password: string;
    
    @Column()
    isInactive: boolean;

    @Column()
    credit: number;

    @Column()
    avatarURL: string;

}