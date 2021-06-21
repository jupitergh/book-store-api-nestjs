import { AuthorRepository } from './author.respository'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([AuthorRepository])]
})
export class AuthorModule {}
