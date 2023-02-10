import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DBUSER,
  password: process.env.DBPASS,
  database: 'TRYBE_FUTEBOL_CLUBE',
  host: process.env.DBHOST,
  port: Number(process.env.DBPORT),
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = config;
