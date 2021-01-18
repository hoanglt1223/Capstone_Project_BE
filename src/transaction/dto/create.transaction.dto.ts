import { IsNotEmpty } from 'class-validator'
export class CreateTransactionDto {
  @IsNotEmpty()
  type: string
}
