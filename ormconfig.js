require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  type: 'postgres',

  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,

  entities: [__dirname + '/**/*.entity{.ts,.js}'],

  ssl: isProduction,

  logging: true,

  /* CLI config */
  migrations: ['src/database/migration/*.ts'],

  cli: {
    migrationsDir: 'src/database/migration',
  },

  migrationsTableName: 'migration',
};
