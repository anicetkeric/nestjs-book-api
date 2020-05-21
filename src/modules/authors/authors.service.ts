import { Injectable } from '@nestjs/common';
import { AuthorRepository } from './authors.repository';
import { Author } from 'src/entities/author.entity';
import { AuthorDto } from './dto/author.dto';

@Injectable()
export class AuthorsService {
    constructor(private authorRepository: AuthorRepository) {}


    create(authorDto: AuthorDto): Promise<Author> {
        const author = new Author();
        author.firstName = authorDto.firstName;
        author.lastName = authorDto.lastName;
        author.email = authorDto.email;
        author.phone = authorDto.phone;
    
        return this.authorRepository.save(author);
    }
    
      async findAll(): Promise<Author[]> {
        return this.authorRepository.find();
      }
    
      findById(id: number): Promise<Author> {
        return this.authorRepository.findOne(id);
      }
    
      async remove(id: number): Promise<void> {
        await this.authorRepository.delete(id);
      }

}
