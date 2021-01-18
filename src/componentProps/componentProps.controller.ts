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
import { ComponentProps } from './componentProps.entity'
import { ComponentPropsService } from './componentProps.service'
import { CreateComponentPropsDto } from './dto/create-componentProps.dto'
import { EntityId } from 'typeorm/repository/EntityId'
import { plainToClass } from 'class-transformer'
import { UpdateComponentPropsDto } from './dto/update-componentProps.dto'
import { DeleteResult } from 'typeorm/index'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('componentProps')
export class ComponentPropsController {
  constructor(private readonly componentPropsService: ComponentPropsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  index(): Promise<ComponentProps[]> {
    return this.componentPropsService.index()
  }

  @UseGuards(JwtAuthGuard)
  @Get('/inactive')
  getInactiveUser(): Promise<ComponentProps[]> {
    return this.componentPropsService.getInactiveComponentProps()
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async show(@Param('id') id: EntityId): Promise<ComponentProps> {
    const user = await this.componentPropsService.findById(id)
    if (!user) {
      throw new NotFoundException()
    }

    return user
  }

  @Post('/create')
  async create(@Body() userData: CreateComponentPropsDto): Promise<ComponentProps> {
    const createdUser = await this.componentPropsService.store(userData)

    return plainToClass(ComponentProps, createdUser)
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(
    @Param('id') id: EntityId,
    @Body() userData: UpdateComponentPropsDto,
  ): Promise<ComponentProps> {
    return this.componentPropsService.update(id, userData)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.componentPropsService.delete(id)
  }
}
