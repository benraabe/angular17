import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

}
