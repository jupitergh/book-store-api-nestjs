import { CreateBookDTO } from './dto/create-book.dto'
import { Body, Controller, Delete, Get, Param, Post, UseInterceptors } from '@nestjs/common'
import { FormatterResponseInterceptor } from 'src/utils/transform-response.interceptor'
import { BookService } from './book.service'
import { BookIdDTO } from './dto/book-id.dto'
import { BookDTO } from './dto/book.dto'

@Controller('book')
@UseInterceptors(FormatterResponseInterceptor)
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

  @Delete(':id')
  async deleteById (@Param() { id }: BookIdDTO): Promise<void> {
    await this.bookServ.deleteById(id)
  }

  @Post()
  async createBook (@Body() body: CreateBookDTO): Promise<BookDTO> {
    return await this.bookServ.createBook(body)
  }
}
