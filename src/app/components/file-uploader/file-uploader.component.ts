import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
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
  templateUrl: './file-uploader.component.html',
  styleUrl: './file-uploader.component.scss',
})
export class FileUploaderComponent implements AfterViewInit {
  public readonly svgService = inject(SvgService);
  private readonly routerService = inject(Router);

  @ViewChild('dropZone') dropZone!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef;

  isDragging = false;

  public ngAfterViewInit() {
    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
      this.dropZone.nativeElement.addEventListener(eventName, (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
      });
    });
  }

  onDragOver(event: DragEvent) {
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    const rect = this.dropZone.nativeElement.getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;

    // Check if the mouse has actually left the drop zone
    if (x < rect.left || x >= rect.right || y < rect.top || y >= rect.bottom) {
      this.isDragging = false;
    }
  }

  onDrop(event: DragEvent) {
    this.isDragging = false;
    const droppedFiles = event.dataTransfer?.files;
    if (droppedFiles) {
      this.handleFiles(droppedFiles);
    }
  }

  public onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.handleFiles(input.files);
  }

  public handleFiles(files: FileList | null): void {
    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        this.svgService.setSvgItem(file);
      });
    }
  }

  public onSubmit(): void {
    this.routerService.navigate(['result']);
  }
}
