import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Author } from '../author/author.entity'

@Entity('book')
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column('varchar', { nullable: false })
  title: string

  @Column('varchar', { nullable: false })
  genre: string

  @Column('varchar', { nullable: false })
  description: string

  @ManyToOne(() => Author, author => author.books, { nullable: false, eager: true })
  @JoinColumn({ name: 'author_id' })
  author: Author

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date
}
