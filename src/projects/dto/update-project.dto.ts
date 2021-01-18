import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  Length,
  Validate,
} from 'class-validator'
import { PasswordConfirmValidator } from '@validators/password-confirm.validator'

export class UpdateProjectDto {
  @IsOptional()
  name: string

  @IsOptional()
  @IsNotEmpty()
  @Length(8, 24)
  password: string

  @IsOptional()
  @IsNotEmpty()
  @Validate(PasswordConfirmValidator, ['password'])
  password_confirmation: string

  @IsOptional()
  @IsBoolean()
  isInactive: boolean
}
