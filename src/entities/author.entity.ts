import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Book } from './book.entity';

@Entity('author')
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

 @Column({ type: 'varchar', length: 255, nullable: false })
  firstName: string;

  @Column({ type: 'varchar', length: 255, nullable: false, name: 'last_name' })
  lastName: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  phone: string | null;;


  @OneToMany(type => Book, book => book.author)
  books?: Book[];
  
}