import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProjectRepository } from './project.repository'

@Module({
  imports: [TypeOrmModule.forFeature([ProjectRepository])],
  providers: [],
  exports: [TypeOrmModule],
})
export class ProjectModule {}
