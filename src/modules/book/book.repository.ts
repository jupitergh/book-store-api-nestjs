import { EntityRepository, Repository } from 'typeorm'
import { Book } from './book.entity'
import { BookDTO } from './dto/book.dto'

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
}
