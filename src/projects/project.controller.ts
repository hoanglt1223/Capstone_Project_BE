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
import { Project } from './project.entity'
import { ProjectService } from './project.service'
import { EntityId } from 'typeorm/repository/EntityId'
import { plainToClass } from 'class-transformer'
import { DeleteResult } from 'typeorm'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CreateProjectDto } from './dto/create.project.dto'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  index(): Promise<Project[]> {
    return this.projectService.index()
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async show(@Param('id') id: EntityId): Promise<Project> {
    const project = await this.projectService.findById(id)
    if (!project) {
      throw new NotFoundException()
    }

    return project
  }

  @Post('/')
  async create(@Body() projectData: CreateProjectDto): Promise<Project> {
    const createdProject = await this.projectService.store(projectData)

    return plainToClass(Project, createdProject)
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(
    @Param('id') id: EntityId,
    @Body() projectData: Project,
  ): Promise<Project> {
    return this.projectService.update(id, projectData)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.projectService.delete(id)
  }
}
