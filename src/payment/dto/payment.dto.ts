import { IsOptional } from 'class-validator'

export class PaymentDto {
  @IsOptional()
  type: string
}
