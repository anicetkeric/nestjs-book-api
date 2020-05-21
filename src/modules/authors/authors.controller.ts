import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Author } from 'src/entities/author.entity';
import { AuthorDto } from './dto/author.dto';

@Controller('authors')
export class AuthorsController {

    constructor(private readonly authorService: AuthorsService) {}

    @Get()
    async findAll(): Promise<Author[]> {
      return await this.authorService.findAll() as Author[];
    }
    
    @Get(':id') 
    async findOneById(@Param() params): Promise<Author> {
      return await this.authorService.findById(params.id);
    }
  
    @Post()
    async create(@Body() book: AuthorDto): Promise<Author> {
      return await this.authorService.create(book) as Author;
    }
  /* 
    @Put(':id')
    async update(@Body() updatedBook: BookDto, @Param() params): Promise<BookIdDto> {
      const oldBook = await this.authorService.findById(params.id);
      return await this.authorService.update(oldBook, updatedBook);
    } */
  
    @Delete(':id')
    async delete(@Param() params) {
      return await this.authorService.remove(params.id);
    }

}
