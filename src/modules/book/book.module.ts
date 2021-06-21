import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { BookRepository } from './book.repository'
import { BookService } from './book.service'
import { BookController } from './book.controller'
import { BookExistsRule } from './rules/book-exists.rule'
import { AuthorModule } from '../author/author.module'

@Module({
  imports: [TypeOrmModule.forFeature([BookRepository]),AuthorModule],
  providers: [BookService, BookExistsRule],
  controllers: [BookController]
})
export class BookModule {}
