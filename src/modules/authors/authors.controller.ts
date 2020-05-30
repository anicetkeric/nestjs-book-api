import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Author } from 'src/entities/author.entity';
import { AuthorDto } from './dto/author.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
@ApiTags('Authors')
@Controller('authors')
export class AuthorsController {

    constructor(private readonly authorService: AuthorsService) {}

    @ApiResponse({ status: 200, description: 'All authors.'})
    @ApiResponse({ status: 401, description: 'Unauthorized.' })
    @Get()
    async findAll(): Promise<Author[]> {
      return await this.authorService.findAll() as Author[];
    }
    
    @ApiResponse({ status: 200, description: 'Show author by id.'})
    @ApiResponse({ status: 204, description: 'Author with this id doesn\'t exists.'})
    @ApiResponse({ status: 500, description: 'Invalid id format.' })
    @Get(':id') 
    async findOneById(@Param('id') id): Promise<Author> {
      return await this.authorService.findById(id);
    }
    @ApiResponse({ status: 201, description: 'Create author.' })
    @ApiResponse({ status: 400, description: 'Bad Request. Should be indicated first and last name.' })
    @Post()
    async create(@Body() authorDto: AuthorDto): Promise<Author> {
      return await this.authorService.create(authorDto) as Author;
    }
  /* 
    @ApiResponse({ status: 200, description: 'Author update.' })
  @ApiResponse({ status: 204, description: 'Author with this id doesn\'t exists.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 500, description: 'Invalid id format.' })
    @Put(':id')
    async update(@Body() updatedBook: BookDto, @Param() params): Promise<BookIdDto> {
      const oldBook = await this.authorService.findById(params.id);
      return await this.authorService.update(oldBook, updatedBook);
    } */
  

    
  @ApiResponse({ status: 200, description: 'Author delete.' })
  @ApiResponse({ status: 204, description: 'Author with this id doesn\'t exists.'})
  @ApiResponse({ status: 500, description: 'Invalid id format.' })
    @Delete(':id')
    async delete(@Param('id') id) {
      return await this.authorService.remove(id);
    }

}
