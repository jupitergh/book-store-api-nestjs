import { AuthorRepository } from './author.respository'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthorExistsRule } from './rules/author-exists.rule'

@Module({
  imports: [TypeOrmModule.forFeature([AuthorRepository])],
  providers: [AuthorExistsRule],
  exports: [AuthorExistsRule, TypeOrmModule]
})
export class AuthorModule {}
