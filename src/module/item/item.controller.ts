import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDto } from './item.dto';
import { Item } from 'src/entity/item.entity';
import { ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';

@Controller('item')
export class ItemController {
  constructor(private readonly service: ItemService) {}

  @Get()
  @ApiOkResponse({ type: Item })
  async findAll(): Promise<Item[]> {
    return await this.service.findAll();
  }

  @Post()
  @ApiCreatedResponse({ type: Item })
  async create(@Body() dto: ItemDto): Promise<Item> {
    return this.service.create(dto);
  }
}
