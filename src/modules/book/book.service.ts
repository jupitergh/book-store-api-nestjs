import { AuthorRepository } from './../author/author.respository'
import { CreateBookDTO } from './dto/create-book.dto'
import { BookRepository } from './book.repository'
import { Injectable, BadRequestException } from '@nestjs/common'
import { BookDTO } from './dto/book.dto'

@Injectable()
export class BookService {
  constructor (
    private readonly bookRepository: BookRepository,
    private readonly authorRepository: AuthorRepository
  ) {}

  async getBookById (id: number): Promise<BookDTO> {
    return await this.bookRepository.getById(id)
  }

  async getAll (): Promise<BookDTO[]> {
    return await this.bookRepository.getAll()
  }

  async deleteById (id: number): Promise<void> {
    const del = await this.bookRepository.deleteById(id)

    if (del.affected !== 1) throw new BadRequestException('Error deleting book.')
  }

  async createBook (body: CreateBookDTO): Promise<BookDTO> {
    const [author] = await this.authorRepository.find({ where: { id: body.authorId } })
    return await this.bookRepository.createBook(body, author)
  }
}
