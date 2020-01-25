import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ItemDto } from 'src/module/item/item.dto';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Item extends BaseEntity {
  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  description: string;

  static fromDto(dto: ItemDto) {
    const item = new Item();
    item.name = dto.name;
    item.description = dto.description;
    return item;
  }
}
