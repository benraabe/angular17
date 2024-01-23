import { Injectable, signal } from '@angular/core';
import { TodoI } from '../types/interfaces/todo';
import { FilterEnum } from '../types/enums/filter';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoSig = signal<TodoI[]>([])
  filterSig = signal<FilterEnum>(FilterEnum.all)

  addTodo(text: string) {
    const newTodo: TodoI = {
      text,
      isCompleted: false,
      id: Math.random().toString(16)
    }

    this.todoSig.update(todos => [...todos, newTodo])
  }

  changeFilter(filterName: FilterEnum): void {
    this.filterSig.set(filterName);
  }

  changeTodo(
    id: string,
    text: string
  ) {
    this.todoSig.update(todos => todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text
        }
      }
      return todo
    }))
  }

  removeTodo(id: string) {
    this.todoSig.update(todos => todos.filter(todo => todo.id !== id))
  }

  toggleTodo(
    id: string
  ) {
    this.todoSig.update(todos => todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo
    }))
  }

  toggleAll(
    isCompleted: boolean
  ) {
    this.todoSig.update(todos => todos.map(todo => ({
      ...todo,
      isCompleted
    })))
  }



}
