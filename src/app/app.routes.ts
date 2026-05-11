import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'eventos',
    loadComponent: () => import('./pages/eventos/eventos').then(m => m.Eventos),
  },
  {
    path: 'eventos/calendario',
    loadComponent: () => import('./pages/eventos/eventos').then(m => m.Eventos),
  },
  {
    path: 'eventos/anteriores',
    loadComponent: () => import('./pages/eventos/eventos').then(m => m.Eventos),
  },
  {
    path: 'newsletter',
    loadComponent: () => import('./pages/newsletter/newsletter').then(m => m.Newsletter),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
