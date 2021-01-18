import {
  IsNotEmpty,
  // IsOptional
} from 'class-validator'

export class UpdateCssPropsDto {
  @IsNotEmpty()
  name: string

}
