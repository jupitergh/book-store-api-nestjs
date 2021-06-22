import { UpdateBookDTO } from './dto/update-book.dto'
import { DeleteResult, EntityRepository, Repository } from 'typeorm'
import { Author } from '../author/author.entity'
import { Book } from './book.entity'
import { BookDTO } from './dto/book.dto'
import { CreateBookDTO } from './dto/create-book.dto'

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
  async getById (id: number): Promise<BookDTO> {
    const [bookFound] = await this.find({ where: { id } })

    const book: BookDTO = {
      id: bookFound.id,
      title: bookFound.title,
      genre: bookFound.genre,
      description: bookFound.description,
      authorId: bookFound.author.id
    }

    return book
  }

  async getAll (): Promise<BookDTO[]> {
    const books: BookDTO[] = (await this.find())
      .reduce((acc: BookDTO[], curr: Book) => {
        acc.push({
          id: curr.id,
          title: curr.title,
          genre: curr.genre,
          description: curr.description,
          authorId: curr.author.id
        })
        return acc
      }, [])

    return books
  }

  async deleteById (id: number): Promise<DeleteResult> {
    return await this.delete(id)
  }

  async createBook (body: CreateBookDTO, author: Author): Promise<BookDTO> {
    const saved = await this.save({ ...body, author })

    const book: BookDTO = {
      id: saved.id,
      title: saved.title,
      genre: saved.genre,
      description: saved.description,
      authorId: saved.author.id
    }

    return book
  }

  async updateBook (body: UpdateBookDTO, id: number, author?: Author): Promise<BookDTO> {
    const updatedBook = await this.save({ id, author, ...body })

    const [updated] = await this.find({ where: { id: updatedBook.id } })

    const book: BookDTO = {
      id: updated.id,
      title: updated.title,
      genre: updated.genre,
      description: updated.description,
      authorId: body.authorId
    }

    return book
  }
}
