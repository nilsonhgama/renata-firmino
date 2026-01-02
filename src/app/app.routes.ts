import { Routes } from '@angular/router';
import { HomeComponent } from './shared/features/home/home.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { ConsultancyComponent } from './shared/features/consultancy/consultancy.component';

export const routes: Routes = [
  { path: '', component: MainLayoutComponent },
  { path: 'main', component: MainLayoutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'consultancy', component: ConsultancyComponent },
];
