import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { CommonModule } from '@angular/common';
import { FilterEnum } from '../../../types/enums/filter';
import { SingleTodoComponent } from '../single-todo/single-todo.component';

@Component({
  selector: 'app-todos-main',
  standalone: true,
  imports: [CommonModule, SingleTodoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  todoService = inject(TodoService);
  editingId: string | null = null;

  visibleTodos = computed(() => {
    const todos = this.todoService.todoSig();
    const filter = this.todoService.filterSig();

    if (filter === FilterEnum.active) {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === FilterEnum.completed) {
      return todos.filter((todo) => todo.isCompleted);
    }
    return todos;
  });
  isAllTodosSelected = computed(() =>
    this.todoService.todoSig().every((todo) => todo.isCompleted)
  );
  noTodosClass = computed(() => this.todoService.todoSig().length === 0);

  setEditingId(editingId: string | null): void {
    this.editingId = editingId;
  }

  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.todoService.toggleAll(target.checked);
  }
}
