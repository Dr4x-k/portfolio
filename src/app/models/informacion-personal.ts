import { Contactos } from './contactos';

export interface InformacionPersonal {
    MiNombre?: string;
    DescripcionGeneral?: string;
    Foto?: string;
    Alt?: string;
    // Contactos?: Record<string, Contactos>;
}
