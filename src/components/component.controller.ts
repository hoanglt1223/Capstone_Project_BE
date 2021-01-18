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
  UseInterceptors,
} from '@nestjs/common'
import { Component } from './component.entity'
import { ComponentService } from './component.service'
import { CreateComponentDto } from './dto/create-component.dto'
import { EntityId } from 'typeorm/repository/EntityId'
import { plainToClass } from 'class-transformer'
import { UpdateComponentDto } from './dto/update-component.dto'
import { DeleteResult } from 'typeorm/index'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('component')
export class ComponentController {
  constructor(private readonly componentService: ComponentService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  index(): Promise<Component[]> {
    return this.componentService.index()
  }

  @UseGuards(JwtAuthGuard)
  @Get('/inactive')
  getInactiveUser(): Promise<Component[]> {
    return this.componentService.getInactiveComponents()
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async show(@Param('id') id: EntityId): Promise<Component> {
    const user = await this.componentService.findById(id)
    if (!user) {
      throw new NotFoundException()
    }

    return user
  }

  @Post('/create')
  async create(@Body() userData: CreateComponentDto): Promise<Component> {
    const createdUser = await this.componentService.store(userData)

    return plainToClass(Component, createdUser)
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(
    @Param('id') id: EntityId,
    @Body() userData: UpdateComponentDto,
  ): Promise<Component> {
    return this.componentService.update(id, userData)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.componentService.delete(id)
  }
}
