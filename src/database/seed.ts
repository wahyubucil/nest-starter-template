import * as typeOrmConfig from '../../ormconfig';
import { ConnectionOptions, createConnection, Connection } from 'typeorm';
import { ItemSeeder } from './seeder/item.seeder';

const opt: ConnectionOptions = { ...typeOrmConfig, logging: false };

createConnection(opt).then(conn => runSeeder(conn));

async function runSeeder(connection: Connection) {
  await ItemSeeder.run(connection);
}
