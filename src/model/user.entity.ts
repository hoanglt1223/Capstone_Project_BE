import {Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn} from "typeorm";
import { BaseEntity } from './base.entity';

@Entity()
export class User extends BaseEntity {
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