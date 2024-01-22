import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {'path': 'home', 'title': 'Home', component: HomeComponent},
  {
    'path': 'about',
    loadChildren: () => import('./about/about.routes').then(m => m.routes),
  },
  {'path': 'contact', 'title': 'Contact', component: ContactComponent},
  {'path': '', redirectTo: '/home', pathMatch: 'full'},
  {'path': '**', 'title': 'Page Not Found', component: PageNotFoundComponent}
];
