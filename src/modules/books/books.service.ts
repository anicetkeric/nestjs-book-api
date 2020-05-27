import { Injectable } from '@nestjs/common';
import { Book } from "src/entities/book.entity";
import { BookRepository } from './books.repository';

@Injectable()
export class BooksService {

    constructor(private bookRepository: BookRepository) {}


    // create(BookDto: BookDto): Promise<Book> {
    //     const book = new Book();
    //     Book.firstName = BookDto.firstName;
    //     Book.lastName = BookDto.lastName;
    //     Book.email = BookDto.email;
    //     Book.phone = BookDto.phone;
    
    //     return this.bookRepository.save(Book);
    // }
    
      async findAll(): Promise<Book[]> {
        return this.bookRepository.find();
      }
    
      findById(id: number): Promise<Book> {
        return this.bookRepository.findOne(id);
      }
    
      async remove(id: number): Promise<void> {
        await this.bookRepository.delete(id);
      }

}
