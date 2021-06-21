import { Injectable, NotFoundException } from '@nestjs/common'
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { BookRepository } from '../book.repository'

@ValidatorConstraint({ name: 'BookExists', async: true })
@Injectable()
export class BookExistsRule implements ValidatorConstraintInterface {
  constructor (private readonly bookRepository: BookRepository) {}

  async validate (id: number): Promise<boolean> {
    try {
      await this.bookRepository.findOneOrFail({ where: { id } })
    } catch (_) {
      return false
    }
    return true
  }

  defaultMessage (_: ValidationArguments): string {
    throw new NotFoundException(['Book not found.'])
  }
}
