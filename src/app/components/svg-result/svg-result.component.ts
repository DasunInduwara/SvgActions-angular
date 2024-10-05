import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SvgService } from '../../services/svg.service';
import { SvgFileModel, SvgTypes } from '../../models/result';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import JSZip from 'jszip';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-svg-result',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './svg-result.component.html',
  styleUrl: './svg-result.component.scss',
})
export class SvgResultComponent implements OnInit {
  public readonly svgService = inject(SvgService);

  public svgFileList?: SvgFileModel[];
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public ngOnInit(): void {
    this.svgFileList = this.svgService.getSvgFileList;
  }

  getImageUrl(file: File): string {
    return URL.createObjectURL(file);
  }

  formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / 1048576).toFixed(2) + ' MB';
  }

  formatDate(timestamp: number): string {
    return new Date(timestamp).toLocaleDateString();
  }

  onFilterItem(value: string): void {
    switch (value) {
      case 'all':
        this.svgFileList = this.svgService.getSvgFileList;
        break;
      case 'fill':
        this.svgFileList = this.svgService.getSvgFileList.filter(
          (item) => item.result === SvgTypes.fill
        );
        break;
      case 'stroke':
        this.svgFileList = this.svgService.getSvgFileList.filter(
          (item) => item.result === SvgTypes.stroke
        );
        break;
    }
  }

  async downloadFilesAsZip() {
    const zip = new JSZip();

    try {
      // Add files to the zip
      this.svgFileList?.forEach((fileModel) => {
        zip.file(fileModel.file.name, fileModel.file);
      });

      // Generate the zip file
      const content = await zip.generateAsync({ type: 'blob' });

      // Save the zip file
      saveAs(content, 'svg_files.zip');
    } catch (error) {
      console.error('Error creating zip file:', error);
    }
  }
}
