import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatRipple],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
