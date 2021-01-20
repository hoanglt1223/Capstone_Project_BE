import { IsNotEmpty, IsOptional } from 'class-validator'

export class UpdateCustomPropsDto {
  @IsNotEmpty()
  name: string

  @IsOptional()
  value: string
}
