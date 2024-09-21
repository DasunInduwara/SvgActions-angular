import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [],
  template: ` @switch (currentUrl) { @case ('upload') {} } `,
})
export class SvgFeatureComponent {
  private readonly routerService = inject(Router);

  get currentUrl() {
    const path = this.routerService.url;
    console.log(path);
    return path;
  }
}
