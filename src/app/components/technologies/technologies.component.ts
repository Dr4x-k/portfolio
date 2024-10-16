import { Component, OnInit } from '@angular/core';
import { FbconfigService } from '../../services/fbconfig.service';
import { Tecnologias } from '../../models/tecnologias';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent implements OnInit {
  data: Partial<Record<keyof Tecnologias, any>> = {};

  constructor(
    private fbService: FbconfigService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.fbService
      .loadInformation<Tecnologias>('Tecnologia')
      .snapshotChanges()
      .subscribe({
        next: (data) => {
          data.forEach((item) => {
            const key = item.key as keyof Tecnologias; // Obtener la clave del item
            const value = item.payload.val() as Tecnologias | null;
            console.log(value);

            // Comprobar si el valor no es null antes de asignarlo
            if (value !== null) {
              this.data[key] = value;
            }
          });
        },
        error: (err) => {
          console.error('Error al obtener los datos de Firebase:', err);
        },
      });
  }

  get sanitizedImage() {
    if (this.data.Image) {
      return this.sanitizer.bypassSecurityTrustHtml(this.data.Image);
    }
    return ''; // o puedes devolver null si prefieres
  }
}
