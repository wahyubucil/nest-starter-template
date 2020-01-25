import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ItemDto implements Readonly<ItemDto> {
  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  description: string;
}
