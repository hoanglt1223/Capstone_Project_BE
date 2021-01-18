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
import { CustomProps } from './customProps.entity'
import { CustomPropsService } from './customProps.service'
import { CreateCustomPropsDto } from './dto/create-customProps.dto'
import { EntityId } from 'typeorm/repository/EntityId'
import { plainToClass } from 'class-transformer'
import { UpdateCustomPropsDto } from './dto/update-customProps.dto'
import { DeleteResult } from 'typeorm/index'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('customProps')
export class CustomPropsController {
  constructor(private readonly customPropsService: CustomPropsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  index(): Promise<CustomProps[]> {
    return this.customPropsService.index()
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('/inactive')
  // getInactiveUser(): Promise<CustomProps[]> {
  //   return this.customPropsService.getInactiveCustomProps()
  // }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async show(@Param('id') id: EntityId): Promise<CustomProps> {
    const user = await this.customPropsService.findById(id)
    if (!user) {
      throw new NotFoundException()
    }

    return user
  }

  @Post('/create')
  async create(@Body() userData: CreateCustomPropsDto): Promise<CustomProps> {
    const createdUser = await this.customPropsService.store(userData)

    return plainToClass(CustomProps, createdUser)
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(
    @Param('id') id: EntityId,
    @Body() userData: UpdateCustomPropsDto,
  ): Promise<CustomProps> {
    return this.customPropsService.update(id, userData)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.customPropsService.delete(id)
  }
}
