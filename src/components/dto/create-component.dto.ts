import { IsNotEmpty, IsOptional } from 'class-validator'
export class CreateComponentDto {
  @IsNotEmpty()
  name: string

  @IsOptional()
  downloadURL: string

  @IsOptional()
  price: string

  @IsOptional()
  iconURL: string

  @IsOptional()
  previewURL: string
}
