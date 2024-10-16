import { Component, Input, OnInit } from '@angular/core';
import { Contactos } from '../../models/contactos';
import { FbconfigService } from '../../services/fbconfig.service';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss',
})
export class SocialsComponent implements OnInit {
  @Input() containerStyles: string = '';
  @Input() iconStyles: string = '';
  data: Partial<Record<keyof Contactos, any>> = {};


  constructor (private fbService: FbconfigService) {}

  ngOnInit(): void {
    // this.fbService.loadInformation<Contactos>('InformacionPersonal/Contactos').snapshotChanges().subscribe({
    //   next: (data) => {
    //     data.forEach((item) => {
    //       const key = item.key as keyof Contactos; // Obtener la clave del item
    //       const value = item.payload.val() as Contactos | null;

    //       // Comprobar si el valor no es null antes de asignarlo
    //       if (value !== null) {
    //         this.data[key] = value;
    //       }
    //     });
    //   },
    //   error: (err) => {
    //     console.error('Error al obtener los datos de Firebase:', err);
    //   },
    // });
  }
}
