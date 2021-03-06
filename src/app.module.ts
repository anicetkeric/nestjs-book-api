import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsModule } from './modules/authors/authors.module';
import { BooksModule } from './modules/books/books.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AuthorsModule, BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
