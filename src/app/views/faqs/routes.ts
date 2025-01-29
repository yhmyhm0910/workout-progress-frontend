import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./faqs.component').then(m => m.FAQsComponent),
    data: {
      title: $localize`FAQs`
    }
  }
];
