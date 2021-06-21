import { BookRepository } from './book.repository'
import { Injectable } from '@nestjs/common'
import { BookDTO } from './dto/book.dto'

@Injectable()
export class BookService {
  constructor (private readonly bookRepository: BookRepository) {}

  async getBookById (id: number): Promise<BookDTO> {
    return await this.bookRepository.getById(id)
  }

  async getAll (): Promise<BookDTO[]> {
    return await this.bookRepository.getAll()
  }
}
