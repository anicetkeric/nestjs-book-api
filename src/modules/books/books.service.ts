import { Injectable } from '@nestjs/common';
import { Book } from "src/entities/book.entity";
import { BookRepository } from './books.repository';
import { BookDto } from './dto/book.dto';
import {classToClass} from "class-transformer";

@Injectable()
export class BooksService {

    constructor(private bookRepository: BookRepository) {}


    create(bookDto: BookDto): Promise<Book> {
        const book = new Book();
        book.description = bookDto.description;
        book.price = bookDto.price;
        book.title = bookDto.title;
        book.author = classToClass(bookDto.author);
    
        return this.bookRepository.save(book);
    }
    
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
