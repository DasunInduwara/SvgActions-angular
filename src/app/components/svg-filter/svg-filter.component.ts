import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { HeaderComponent } from '../header/header.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-svg-filter',
  standalone: true,
  imports: [CommonModule, MatRipple, HeaderComponent, MatIconModule],
  templateUrl: './svg-filter.component.html',
  styleUrl: './svg-filter.component.scss'
})
export class SvgFilterComponent {

}
