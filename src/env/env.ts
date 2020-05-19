import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const ENV = {
    database: {
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'book_user',
      password: 'book_password',
      database: 'book_db',
      entities: [__dirname + '/../**/*.entity{.ts, .js}'],
      synchronize: true
    } as TypeOrmModuleOptions,
  }