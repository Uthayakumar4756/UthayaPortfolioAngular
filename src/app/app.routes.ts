import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'  // Redirect to 'home' by default
  },
  {
    path: 'home',
    component: HomeComponent // Home component (if you have one)
  },
  {
    path: 'about',
    component: AboutComponent // About component
  }
];
