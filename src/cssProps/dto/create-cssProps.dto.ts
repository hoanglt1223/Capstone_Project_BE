import {
  IsNotEmpty,
  // IsOptional,
} from 'class-validator'
export class CreateCssPropsDto {
  @IsNotEmpty()
  name: string
}
