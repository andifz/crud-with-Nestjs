import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { TodoService } from './todo.service';
import { Todo } from './interfaces/todo.interfaces';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoservice: TodoService) {}
  @Get()
  findAll(): Todo[] {
    return this.todoservice.findAll();
  }

  @Post()
  create(@Body() createitemdto: CreateItemDto): Todo[] {
    return this.todoservice.create();
  }

  @Get(':id')
  findOne(@Param('id') id): Todo {
    return this.todoservice.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.todoservice.delete(id);
  }

  @Put(`:id`)
  update(@Body() updateitemdto: CreateItemDto, @Param('id') id): Todo {
    return this.todoservice.update(id);
  }
}
