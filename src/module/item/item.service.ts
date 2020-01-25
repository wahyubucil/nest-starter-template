import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/entity/item.entity';
import { Repository } from 'typeorm';
import { ItemDto } from './item.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private readonly repo: Repository<Item>,
  ) {}

  async findAll(): Promise<Item[]> {
    return await this.repo.find();
  }

  async create(dto: ItemDto): Promise<Item> {
    return this.repo.save(Item.fromDto(dto));
  }
}
