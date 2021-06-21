import { AuthorRepository } from '../author.respository'
import { Injectable, NotFoundException } from '@nestjs/common'
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

@ValidatorConstraint({ name: 'AuthorExists', async: true })
@Injectable()
export class AuthorExistsRule implements ValidatorConstraintInterface {
  constructor (private readonly authorRepository: AuthorRepository) {}

  async validate (id: number): Promise<boolean> {
    try {
      await this.authorRepository.findOneOrFail({ where: { id } })
    } catch (_) {
      return false
    }
    return true
  }

  defaultMessage (_: ValidationArguments): string {
    throw new NotFoundException(['Author not found.'])
  }
}
