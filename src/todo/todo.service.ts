import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interfaces';

@Injectable()
export class TodoService {
  private readonly todos: Todo[] = [
    {
      id: '1',
      nametodo: 'jalan-jalan',
      starttime: 10,
      endtime: 11,
    },
    {
      id: '2',
      nametodo: 'membaca buku',
      starttime: 11,
      endtime: 13,
    },
  ];
  findAll(): Todo[] {
    return this.todos;
  }
  findOne(id: string): Todo {
    return this.todos.find((todo) => todo.id === id);
  }
  create(): Todo[] {
    return this.todos;
  }
  delete(id: string): Todo {
    return this.todos.find((todo) => todo.id === id);
  }
  update(id: string): Todo {
    return this.todos.find((todo) => todo.id === id);
  }
}
