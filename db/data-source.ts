import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'saif',
  password: 'admin',
  database: 'nest-crud-project',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
