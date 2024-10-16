import {
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FbconfigService } from './services/fbconfig.service';
import { DomSanitizer } from '@angular/platform-browser';
import { InformacionPersonal } from './models/informacion-personal';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChildren('sectionRef') sections!: QueryList<HTMLElement>; // Obtener todas las secciones
  currentSection: number = 0;
  data: Partial<Record<keyof InformacionPersonal, any>> = {};


  constructor(
    private fbService: FbconfigService,
    private loaderService: LoaderService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getInformation();
  }

  getInformation() {
    this.loaderService.show();

    this.fbService.loadInformation<InformacionPersonal>('InformacionPersonal').snapshotChanges().subscribe({
      next: (data) => {
        data.forEach((item) => {
          const key = item.key as keyof InformacionPersonal; // Obtener la clave del item
          const value = item.payload.val() as InformacionPersonal | null;

          // Comprobar si el valor no es null antes de asignarlo
          if (value !== null) {
            this.data[key] = value;
          }
        });
        this.loaderService.hide();
      },
      error: (err) => {
        console.error('Error al obtener los datos de Firebase:', err);
      },
    });
  }

  scrollToSection(sectionIndex: number) {
    if (sectionIndex >= 0 && sectionIndex < this.sections.length) {
      this.currentSection = sectionIndex;
      const section = this.sections.toArray()[sectionIndex];
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  get sanitizedDescription() {
    if (this.data.DescripcionGeneral) {
      return this.sanitizer.bypassSecurityTrustHtml(this.data.DescripcionGeneral);
    }
    return ''; // o puedes devolver null si prefieres
  }
}
