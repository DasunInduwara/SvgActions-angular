import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { SvgResultComponent } from './components/svg-result/svg-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FileUploaderComponent,
    SvgResultComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'svg-file-filter';
}
