import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Author } from "./author.entity";

@Entity('book')
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    title: string;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0, })
    price: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    description: string;
    
    
    @ManyToOne(type => Author, author => author.books   )
    @JoinColumn({ name: "author_id" })
    author: Author;

}