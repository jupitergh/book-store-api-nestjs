import { IsInt, IsNotEmpty, Min, Validate } from 'class-validator'
import { BookExistsRule } from '../rules/book-exists.rule'

export class BookIdDTO {
  @Validate(BookExistsRule)
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  id: number
}
