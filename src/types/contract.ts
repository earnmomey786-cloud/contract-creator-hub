export interface Titular {
  nombre: string;
  nie: string;
  participacion: string;
}

export interface Anexo {
  tipo: string;
  refCatastral: string;
}

export interface Inmueble {
  direccion: string;
  cp: string;
  provincia: string;
  comunidad: string;
  refCatastral: string;
  anexos: Anexo[];
}

export interface ContractFormData {
  lugar: string;
  fecha: string;
  anoFirma: string;
  ejercicioFiscal: string;
  tipoServicio: 'imputacion' | 'alquiler' | 'mixto';
  clienteNombre: string;
  clienteNIE: string;
  clienteEmail: string;
  clienteDomicilioFiscal: string;
  titulares: Titular[];
  inmuebles: Inmueble[];
  honorarios: string;
  formaPago: 'adelantado' | 'entrega';
  plazoPago: string;
}

export const COMUNIDADES_PROVINCIAS: Record<string, string[]> = {
  'Andalucía': ['Almería', 'Cádiz', 'Córdoba', 'Granada', 'Huelva', 'Jaén', 'Málaga', 'Sevilla'],
  'Aragón': ['Huesca', 'Teruel', 'Zaragoza'],
  'Asturias': ['Asturias'],
  'Islas Baleares': ['Islas Baleares'],
  'Canarias': ['Las Palmas', 'Santa Cruz de Tenerife'],
  'Cantabria': ['Cantabria'],
  'Castilla y León': ['Ávila', 'Burgos', 'León', 'Palencia', 'Salamanca', 'Segovia', 'Soria', 'Valladolid', 'Zamora'],
  'Castilla-La Mancha': ['Albacete', 'Ciudad Real', 'Cuenca', 'Guadalajara', 'Toledo'],
  'Cataluña': ['Barcelona', 'Girona', 'Lleida', 'Tarragona'],
  'Comunidad Valenciana': ['Alicante', 'Castellón', 'Valencia'],
  'Extremadura': ['Badajoz', 'Cáceres'],
  'Galicia': ['A Coruña', 'Lugo', 'Ourense', 'Pontevedra'],
  'La Rioja': ['La Rioja'],
  'Madrid': ['Madrid'],
  'Murcia': ['Murcia'],
  'Navarra': ['Navarra'],
  'País Vasco': ['Álava', 'Guipúzcoa', 'Vizcaya'],
  'Ceuta': ['Ceuta'],
  'Melilla': ['Melilla']
};

export const initialFormData: ContractFormData = {
  lugar: 'Torrevieja',
  fecha: new Date().toISOString().split('T')[0],
  anoFirma: new Date().getFullYear().toString(),
  ejercicioFiscal: (new Date().getFullYear() - 1).toString(),
  tipoServicio: 'imputacion',
  clienteNombre: 'Robert Rytel',
  clienteNIE: 'Y9882227-S',
  clienteEmail: 'monika.chmielewska@ubojniarytel.pl',
  clienteDomicilioFiscal: 'Podgórze ul. Polna 4, 18-400 Łomża, Polonia',
  titulares: [{
    nombre: 'Robert Rytel',
    nie: 'Y9882227-S',
    participacion: '100'
  }],
  inmuebles: [
    {
      direccion: 'Av. del Trenc d\'Alba 45, Esc.1, 1º 44',
      cp: '03730',
      provincia: 'Alicante',
      comunidad: 'Comunidad Valenciana',
      refCatastral: '4475719BC5947N0044AO',
      anexos: []
    },
    {
      direccion: 'C/ Joan Fuster 12, Bajo C',
      cp: '03730',
      provincia: 'Alicante',
      comunidad: 'Comunidad Valenciana',
      refCatastral: '4977314BC5947N0003YE',
      anexos: []
    },
    {
      direccion: 'C/ Joan Fuster 12, 2º B',
      cp: '03730',
      provincia: 'Alicante',
      comunidad: 'Comunidad Valenciana',
      refCatastral: '4977314BC5947N0009SO',
      anexos: []
    },
    {
      direccion: 'C/ Joan Fuster 12, 1º D',
      cp: '03730',
      provincia: 'Alicante',
      comunidad: 'Comunidad Valenciana',
      refCatastral: '4977314BC5947N0007PU',
      anexos: []
    },
    {
      direccion: 'C/ Joan Fuster 12, 1º A',
      cp: '03730',
      provincia: 'Alicante',
      comunidad: 'Comunidad Valenciana',
      refCatastral: '4977314BC5947N0004UR',
      anexos: []
    }
  ],
  honorarios: '250',
  formaPago: 'adelantado',
  plazoPago: '7'
};
