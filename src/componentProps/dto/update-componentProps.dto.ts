import {
  IsNotEmpty,
  // IsOptional,
} from 'class-validator'
export class UpdateComponentPropsDto {
  @IsNotEmpty()
  value: string
}
