import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatRipple],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly routerService = inject(Router);
  selectedButton = 'preview';
  buttons = [
    { id: 'preview', label: 'Preview' },
    { id: 'filter', label: 'Filter' },
  ];

  setSelectedButton(buttonId: string): void {
    this.selectedButton = buttonId;
    if (buttonId === 'preview') {
      this.routerService.navigate(['preview']);
    }
    if (buttonId === 'filter') {
      this.routerService.navigate(['upload']);
    }
  }
}
