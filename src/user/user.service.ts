import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {User} from '../model/user.entity'
import {Repository} from 'typeorm'
@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly repo: Repository<User>) { }

  public async getAll() {
    return await this.repo.find();
  }

}
