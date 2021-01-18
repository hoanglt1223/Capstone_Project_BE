import { IsNotEmpty } from 'class-validator'
export class CreatePaymentDto {
  @IsNotEmpty()
  type: string
}
