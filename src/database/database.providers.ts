import { DataSource } from "typeorm"

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5434,
        username: 'postgres',
        password: '1234',
        database: 'BackKevinSantana'
      });
      return dataSource.initialize();
    }
  }
];