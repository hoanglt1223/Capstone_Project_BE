import { IsNotEmpty } from 'class-validator'
export class CreateTransactionDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  isPrivate: boolean
}
