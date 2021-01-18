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
  // UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import { DeleteResult } from 'typeorm'
import { EntityId } from 'typeorm/repository/EntityId'
import { CreateTransactionDto } from './dto/create.transaction.dto'
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { Transaction } from './transaction.entity'
import { TransactionService } from './transaction.service'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('transaction')
export class TransactionController {
  constructor(private readonly projectService: TransactionService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  index(): Promise<Transaction[]> {
    return this.projectService.index()
  }

  // @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async show(@Param('id') id: EntityId): Promise<Transaction> {
    const project = await this.projectService.findById(id)
    if (!project) {
      throw new NotFoundException()
    }

    return project
  }

  @Post('/')
  async create(
    @Body() projectData: CreateTransactionDto,
  ): Promise<Transaction> {
    const createdTransaction = await this.projectService.store(projectData)

    return plainToClass(Transaction, createdTransaction)
  }

  // @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(
    @Param('id') id: EntityId,
    @Body() projectData: Transaction,
  ): Promise<Transaction> {
    return this.projectService.update(id, projectData)
  }

  // @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.projectService.delete(id)
  }
}
