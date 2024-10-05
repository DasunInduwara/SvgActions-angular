import { Routes } from '@angular/router';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { SvgResultComponent } from './components/svg-result/svg-result.component';
import { PreviewSvgComponent } from './components/preview-svg/preview-svg.component';

export const routes: Routes = [
  {
    path: 'preview',
    component: PreviewSvgComponent,
  },
  {
    path: 'upload',
    component: FileUploaderComponent,
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
