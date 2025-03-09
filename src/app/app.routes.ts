import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { GuestListComponent } from './components/guest-list/guest-list.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: '/guests',
    component: GuestListComponent,
  },
];
