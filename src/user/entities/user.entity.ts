

// base.entity.ts
import { PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 300 })
    userName: string;

    @Column({ type: 'varchar', length: 300 })
    password: string;
}

