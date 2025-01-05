import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const { PG_HOST, PG_PORT, PG_USER, PG_PASSWORD, PG_DATABASE } = process.env;

const sequelize = new Sequelize({
  host: PG_HOST || 'localhost',
  port: Number(PG_PORT) || 5432,
  username: PG_USER || 'root',
  password: PG_PASSWORD || 'password',
  database: PG_DATABASE || 'loja-agilstore',
  dialect: 'postgres',
  logging: false,
});

export default sequelize;
