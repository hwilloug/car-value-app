import { DataSource, DataSourceOptions } from "typeorm";

var dbConfig = {};

switch (process.env.NODE_ENV) {
  case 'development':
      Object.assign(dbConfig, {
          type: 'sqlite',
          database: 'db.sqlite',
          entities: ['**/*.entity.js'],
          migrations: ['dist/migrations/**/*{.ts,.js}']
      })
      break;
  case 'test':
      Object.assign(dbConfig, {
          type: 'sqlite',
          database: 'test.sqlite',
          entities: ['**/*.entity.ts'],
          migrations: [__dirname + "migrations/**/*{.ts,.js}"],
          migrationsRun: true
      })
      break;
  case 'production':
      break;
  default:
      throw new Error('unknown environment')
}


export const appDataSource = new DataSource(dbConfig as DataSourceOptions)