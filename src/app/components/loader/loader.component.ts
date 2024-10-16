import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  loading$ = this.loaderService.loading$;
  hiding = false;
  isVisible = false;

  constructor (private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.loading$.subscribe((loading) => {
      if (loading == true) {
        this.isVisible = true;
      } else {
        this.hiding = true;
        setTimeout(() => {
          this.isVisible = false;
        }, 500);
      }
    });
  }
}
