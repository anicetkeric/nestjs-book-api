import { Book } from "src/entities/book.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Book)
export class AuthorRepository extends Repository<Book> {

}