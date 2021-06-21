import { Controller, Get, Param } from '@nestjs/common'
import { BookService } from './book.service'
import { BookIdDTO } from './dto/book-id.dto'
import { BookDTO } from './dto/book.dto'

@Controller('book')
export class BookController {
  constructor (private readonly bookServ: BookService) {}

  @Get(':id')
  async getById (@Param() { id }: BookIdDTO): Promise<BookDTO> {
    return await this.bookServ.getBookById(id)
  }

  @Get()
  async getAll (): Promise<BookDTO[]> {
    return await this.bookServ.getAll()
  }
}
