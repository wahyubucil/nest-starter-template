import { Connection } from 'typeorm';
import { Item } from 'src/entity/item.entity';
import { ItemDto } from 'src/module/item/item.dto';
import { ItemService } from 'src/module/item/item.service';

export class ItemSeeder {
  static async run(connection: Connection) {
    const itemService = new ItemService(connection.getRepository(Item));

    console.log('Create Item...');
    for (let i = 1; i <= 10; i++) {
      const item: ItemDto = {
        name: `Example item ${i}`,
        description: `Example description ${i}`,
      };

      await itemService.create(item);
      console.log(`${i} Item created`);
    }
  }
}
