import { ApiProperty } from "@nestjs/swagger";

export class AuthorDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    firstName: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    phone: string;
  }