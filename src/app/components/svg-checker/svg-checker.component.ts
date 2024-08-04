import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-checker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-checker.component.html',
  styleUrl: './svg-checker.component.scss'
})
export class SvgCheckerComponent {
  isStrokeType: boolean | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.readFile(file);
    }
  }

  readFile(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const svgString = e.target?.result as string;
      const svg = new DOMParser().parseFromString(svgString, 'image/svg+xml');
      this.isStrokeType = this.checkIsStrokeType(svg);
    };
    reader.readAsText(file);
  }

  checkIsStrokeType(svg: Document): boolean {
    const elements = svg.querySelectorAll('*[stroke]');
    return elements.length > 0;
  }

}
