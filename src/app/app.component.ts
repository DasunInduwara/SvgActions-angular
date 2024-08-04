import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgCheckerComponent } from "./components/svg-checker/svg-checker.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SvgCheckerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'svg-file-filter';
}
