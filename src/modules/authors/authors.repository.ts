import { EntityRepository, Repository } from "typeorm";
import { Author } from "src/entities/author.entity";

@EntityRepository(Author)
export class AuthorRepository extends Repository<Author> {

}