import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors
} from '@nestjs/common'
import { User } from './user.entity'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { EntityId } from 'typeorm/repository/EntityId'
import { plainToClass } from 'class-transformer'
import { UpdateUserDto } from './dto/update-user.dto'
import { DeleteResult } from 'typeorm/index'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  index(): Promise<User[]> {
    return this.userService.index()
  }

  @UseGuards(JwtAuthGuard)
  @Get('/inactive')
  getInactiveUser(): Promise<User[]> {
    return this.userService.getInactiveUsers()
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async show(@Param('id') id: EntityId): Promise<User> {
    const user = await this.userService.findById(id)
    if (!user) {
      throw new NotFoundException()
    }

    return user
  }

  @Post('/create')
  async create(@Body() userData: CreateUserDto): Promise<User> {
    console.log('TCL ~ file: user.controller.ts ~ line 52 ~ UserController ~ create ~ userData', userData)
    const createdUser = await this.userService.store(userData)

    return plainToClass(User, createdUser)
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(@Param('id') id: EntityId, @Body() userData: UpdateUserDto): Promise<User> {
    return this.userService.update(id, userData)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.userService.delete(id)
  }
}
