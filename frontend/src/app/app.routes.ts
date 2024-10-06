import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'app-route', loadChildren: () => import('./app-routing/app-route/app-route.module').then(m => m.AppRouteModule) },
    { path: '', redirectTo: 'app-route', pathMatch: 'full' },
];
