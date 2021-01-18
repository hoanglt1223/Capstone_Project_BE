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
import { CreatePaymentDto } from './dto/create.project.dto'
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { Payment } from './payment.entity'
import { PaymentService } from './payment.service'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('payment')
export class PaymentController {
  constructor(private readonly projectService: PaymentService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  index(): Promise<Payment[]> {
    return this.projectService.index()
  }

  // @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async show(@Param('id') id: EntityId): Promise<Payment> {
    const project = await this.projectService.findById(id)
    if (!project) {
      throw new NotFoundException()
    }

    return project
  }

  @Post('/')
  async create(@Body() projectData: CreatePaymentDto): Promise<Payment> {
    const createdPayment = await this.projectService.store(projectData)

    return plainToClass(Payment, createdPayment)
  }

  // @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(
    @Param('id') id: EntityId,
    @Body() projectData: Payment,
  ): Promise<Payment> {
    return this.projectService.update(id, projectData)
  }

  // @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.projectService.delete(id)
  }
}
