import {
  IsNotEmpty,
  // IsOptional,
} from 'class-validator'
export class CreateComponentPropsDto {
  @IsNotEmpty()
  value: string
}