import {
  IsNotEmpty,
  IsOptional,
} from 'class-validator'
export class CreateCustomPropsDto {
  @IsNotEmpty()
  name: string

  @IsOptional()
  value: string
}