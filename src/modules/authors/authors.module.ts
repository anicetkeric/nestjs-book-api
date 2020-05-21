import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorRepository } from './authors.repository';
import { AuthorsController } from './authors.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorRepository])],
  providers: [AuthorsService],
  controllers: [AuthorsController]
})
export class AuthorsModule {}
