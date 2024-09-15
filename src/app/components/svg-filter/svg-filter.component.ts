import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { Result } from '../../models/result';

@Component({
  selector: 'app-svg-filter',
  standalone: true,
  imports: [CommonModule, MatRipple, HeaderComponent, MatIconModule],
  templateUrl: './svg-filter.component.html',
  styleUrl: './svg-filter.component.scss',
})
export class SvgFilterComponent {
  public resultList: Result[] = [];

  public onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      Array.from(input.files).forEach((file) => {
        console.log(file);

        this.readFile(file);
      });
    }
  }

  private readFile(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const svgString = e.target?.result as string;
      const svg = new DOMParser().parseFromString(svgString, 'image/svg+xml');

      let resultItem: Result = {
        file: file,
        result: this.checkIsStrokeType(svg),
      };
      this.resultList.push(resultItem);
    };

    reader.readAsText(file);
  }

  private checkIsStrokeType(svg: Document): boolean {
    const elements = svg.querySelectorAll('*[stroke]');
    return elements.length > 0;
  }

  public onSubmit(): void {
    console.log('Clicked');
  }
}
