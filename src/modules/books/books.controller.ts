import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BooksService } from '../Books/Books.service';
import { Book } from 'src/entities/Book.entity';

@ApiTags('Books')
@Controller('books')
export class BooksController {
    
    constructor(private readonly bookService: BooksService) {}

    @Get()
    async findAll(): Promise<Book[]> {
      return await this.bookService.findAll();
    }
    
    @Get(':id') 
    async findOneById(@Param() params): Promise<Book> {
      return await this.bookService.findById(params.id);
    }
  
    // @Post()
    // async create(@Body() book: BookDto): Promise<Book> {
    //   return await this.bookService.create(book) as Book;
    // }

    @Delete(':id')
    async delete(@Param() params) {
      return await this.bookService.remove(params.id);
    }
}
