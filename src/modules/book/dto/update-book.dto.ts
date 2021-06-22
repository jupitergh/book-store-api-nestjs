import { IsOptional, IsNumber, IsString , Validate } from 'class-validator'
import { AuthorExistsRule } from 'src/modules/author/rules/author-exists.rule'

export class UpdateBookDTO {
  @IsOptional()
  @IsString()
  title: string

  @IsOptional()
  @IsString()
  genre: string

  @IsOptional()
  @IsString()
  description: string

  @Validate(AuthorExistsRule)
  @IsOptional()
  @IsNumber()
  authorId: number
}
