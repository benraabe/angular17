import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { TodoComponent } from './features/todo/todo.component';

export const routes: Routes = [
  {'path': 'home', 'title': 'Home', component: HomeComponent},
  {
    'path': 'about',
    loadChildren: () => import('./features/about/about.routes').then(m => m.routes),
  },
  {'path': 'contact', 'title': 'Contact', component: ContactComponent},
  {'path': 'todo', 'title': 'Contact', component: TodoComponent},
  {'path': '', redirectTo: '/home', pathMatch: 'full'},
  {'path': '**', 'title': 'Page Not Found', component: PageNotFoundComponent}
];
