import { Routes } from '@angular/router';

export const routes: Routes = [{
    path:"blog-details",
    loadComponent:() => import('./components/blog-details.component')}];
