import { IsNotEmpty, IsNumber, IsString, Validate } from 'class-validator'
import { AuthorExistsRule } from 'src/modules/author/rules/author-exists.rule'

export class CreateBookDTO {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  genre: string

  @IsNotEmpty()
  @IsString()
  description: string

  @Validate(AuthorExistsRule)
  @IsNotEmpty()
  @IsNumber()
  authorId: number
}
