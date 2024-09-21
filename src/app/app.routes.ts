import { Routes } from '@angular/router';
import { SvgFilterComponent } from './components/svg-filter/svg-filter.component';
import { SvgResultComponent } from './components/svg-result/svg-result.component';

export const routes: Routes = [
  {
    path: 'upload',
    component: SvgFilterComponent,
  },
  {
    path: 'result',
    component: SvgResultComponent,
  },
  {
    path: '*',
    redirectTo: 'upload',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'upload',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'upload',
    pathMatch: 'full',
  },
];
