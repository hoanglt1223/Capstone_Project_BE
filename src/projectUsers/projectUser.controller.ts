import {
  // Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  // Post,
  // Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { ProjectUser } from '../entity/projectUser.entity'
import { ProjectUserService } from './projectUser.service'
// import { CreateProjectUserDto } from './dto/create-projectUser.dto'
import { EntityId } from 'typeorm/repository/EntityId'
// import { plainToClass } from 'class-transformer'
// import { UpdateProjectUserDto } from './dto/update-projectUser.dto'
import { DeleteResult } from 'typeorm/index'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('projectUser')
export class ProjectUserController {
  constructor(private readonly projectUserService: ProjectUserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  index(): Promise<ProjectUser[]> {
    return this.projectUserService.index()
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('/inactive')
  // getInactiveUser(): Promise<ProjectUser[]> {
  //   return this.projectUserService.getInactiveProjectUser()
  // }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async show(@Param('id') id: EntityId): Promise<ProjectUser> {
    const user = await this.projectUserService.findById(id)
    if (!user) {
      throw new NotFoundException()
    }

    return user
  }

  // @Post('/create')
  // async create(@Body() userData: CreateProjectUserDto): Promise<ProjectUser> {
  //   const createdUser = await this.projectUserService.store(userData)

  //   return plainToClass(ProjectUser, createdUser)
  // }

  // @UseGuards(JwtAuthGuard)
  // @Put('/:id')
  // update(
  //   @Param('id') id: EntityId,
  //   @Body() userData: UpdateProjectUserDto,
  // ): Promise<ProjectUser> {
  //   return this.projectUserService.update(id, userData)
  // }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.projectUserService.delete(id)
  }
}
