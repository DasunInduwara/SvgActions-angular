import { Injectable } from '@angular/core';
import { SvgFileModel, SvgTypes } from '../models/result';

@Injectable({
  providedIn: 'root',
})
export class SvgService {
  private svgFileList: SvgFileModel[] = [];

  constructor() {}

  public get getSvgFileList(): SvgFileModel[] {
    return this.svgFileList;
  }

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

  private checkIsStrokeType(svg: Document): string {
    const elements = svg.querySelectorAll('*[stroke]');
    if (elements.length > 0) return SvgTypes.stroke;
    return SvgTypes.fill;
  }
}
