import { ApiProperty } from "@nestjs/swagger";
import { AuthorDto } from "src/modules/authors/dto/author.dto";

export class BookDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    title: string;
    @ApiProperty()
    price: number;
    @ApiProperty()
    description: string;
    @ApiProperty()
    author: AuthorDto;
  }