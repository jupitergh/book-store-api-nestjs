import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Book } from '../book/book.entity'

@Entity('author')
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column('varchar', { nullable: false })
  name: string

  @Column('varchar', { nullable: true })
  lastName: string

  @OneToMany(() => Book, book => book.author)
  books: Book[]

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date
}
