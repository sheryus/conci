import { Routes } from '@angular/router';

import { HomeComponent } from './pages/general/home/home.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, },



  {
    path: 'contact',
    loadChildren: () => import('./pages/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },

  {
    path: 'about',
    loadChildren: () => import('./pages/general/about/about.routes').then(routes => routes.routes)
  },

  { path: '**', component: NotFoundComponent }
];