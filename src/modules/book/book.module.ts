import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { BookRepository } from './book.repository'

@Module({
  imports: [TypeOrmModule.forFeature([BookRepository])]
})
export class BookModule {}
