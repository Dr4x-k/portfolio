import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from '../../models/experiencia';
import { FbconfigService } from '../../services/fbconfig.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {
  data: Partial<Record<keyof Experiencia, any>> = {};

  constructor (private fbService: FbconfigService) {}

  ngOnInit(): void {
    this.fbService.loadInformation<Experiencia>('Experiencia').snapshotChanges().subscribe({
      next: (data) => {
        data.forEach((item) => {
          console.log(item)
          const key = item.key as keyof Experiencia; // Obtener la clave del item
          const value = item.payload.val() as Experiencia | null;

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
}
