import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {User} from '../model/user.entity'
import {Repository} from 'typeorm'
import { BaseService } from 'src/base.service';
import { UserRepository } from './user.repository';
@Injectable()
export class UserService extends BaseService<User, UserRepository>{
  // constructor(@InjectRepository(User) private readonly repo: Repository<User>) { }
  constructor(repository: UserRepository) {
        super(repository)
      }

  public async getAll() {
    return await this.repository.find();
  }

  //   findByEmail(email: string): Promise<User | null> {
  //   return this.repository.findOne({ email: email })
  // }

  getInactiveUsers(): Promise<User[]> {
    return this.repository.getInactiveUsers()
  }
}
