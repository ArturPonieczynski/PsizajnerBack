import { DataSourceOptions } from 'typeorm';
import {configuration} from './config/config';

export const config: DataSourceOptions = {
  type: 'mysql',
  host: configuration.dbHost,
  port: configuration.dbPort,
  username: configuration.dbUser,
  password: configuration.dbPassword,
  database: configuration.dbDatabase,
  entities: ['dist/**/**.entity{.ts,.js}'],
  bigNumberStrings: false,
  logging: true,
  synchronize: true, // pozwala na automatyczne odświerzanie bazy dancyh ale jest to niebezpieczne ponieważ czasem usówa dane z tabel, szczególnie przy aktualizowaniu typów kolumn',
  migrations: ['dist/migration/*.js'],
  // cli: {
  //   migrationsDir: 'migration',
  // },
};
