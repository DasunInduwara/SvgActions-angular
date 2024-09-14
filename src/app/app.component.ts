import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgCheckerComponent } from './components/svg-checker/svg-checker.component';
import { HeaderComponent } from './components/header/header.component';
import { SvgFilterComponent } from './components/svg-filter/svg-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SvgCheckerComponent, HeaderComponent, SvgFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'svg-file-filter';
}
