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
import { CssProps } from './cssProps.entity'
import { CssPropsService } from './cssProps.service'
import { CreateCssPropsDto } from './dto/create-cssProps.dto'
import { EntityId } from 'typeorm/repository/EntityId'
import { plainToClass } from 'class-transformer'
import { UpdateCssPropsDto } from './dto/update-cssProps.dto'
import { DeleteResult } from 'typeorm/index'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('cssProps')
export class CssPropsController {
  constructor(private readonly cssPropsService: CssPropsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  index(): Promise<CssProps[]> {
    return this.cssPropsService.index()
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('/inactive')
  // getInactiveUser(): Promise<CssProps[]> {
  //   return this.cssPropsService.getInactiveCssProps()
  // }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async show(@Param('id') id: EntityId): Promise<CssProps> {
    const user = await this.cssPropsService.findById(id)
    if (!user) {
      throw new NotFoundException()
    }

    return user
  }

  @Post('/create')
  async create(@Body() userData: CreateCssPropsDto): Promise<CssProps> {
    const createdUser = await this.cssPropsService.store(userData)

    return plainToClass(CssProps, createdUser)
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(
    @Param('id') id: EntityId,
    @Body() userData: UpdateCssPropsDto,
  ): Promise<CssProps> {
    return this.cssPropsService.update(id, userData)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.cssPropsService.delete(id)
  }
}
