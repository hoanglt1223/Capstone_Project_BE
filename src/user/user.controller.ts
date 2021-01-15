import { Controller, Get } from '@nestjs/common';
import {UserService} from './user.service'
@Controller('user')
export class UserController {
  constructor(private serv: UserService) { }

  @Get()
  public async getAll() {
    console.log('/user')
    return await this.serv.getAll();
  }
}
