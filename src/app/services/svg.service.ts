import { Injectable } from '@angular/core';
import { SvgFileModel } from '../models/result';

@Injectable({
  providedIn: 'root',
})
export class SvgService {
  private svgFileList: SvgFileModel[] = [];

  constructor() {}

  public setSvgItem(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const svgString = e.target?.result as string;
      const svg = new DOMParser().parseFromString(svgString, 'image/svg+xml');

      let resultItem: SvgFileModel = {
        file: file,
        result: this.checkIsStrokeType(svg),
      };
      this.svgFileList.unshift(resultItem);
    };
    reader.readAsText(file);
  }

  private checkIsStrokeType(svg: Document): boolean {
    const elements = svg.querySelectorAll('*[stroke]');
    return elements.length > 0;
  }
}
