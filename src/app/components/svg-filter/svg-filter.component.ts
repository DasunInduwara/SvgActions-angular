import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { SvgFileModel } from '../../models/result';
import { SvgService } from '../../services/svg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-svg-filter',
  standalone: true,
  imports: [CommonModule, MatRipple, HeaderComponent, MatIconModule],
  templateUrl: './svg-filter.component.html',
  styleUrl: './svg-filter.component.scss',
})
export class SvgFilterComponent {
  private readonly svgService = inject(SvgService);
  private readonly routerService = inject(Router);

  public onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      Array.from(input.files).forEach((file) => {
        this.svgService.setSvgItem(file);
      });
    }
  }
  public onSubmit(): void {
    this.routerService.navigate(['result']);
  }
}
