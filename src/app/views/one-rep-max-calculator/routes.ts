import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./one-rep-max-calculator.component').then(m => m.OneRepMaxCalculatorComponent),
    data: {
      title: $localize`One Rep Max Calculator`
    }
  }
];
