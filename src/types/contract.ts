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
  clienteNombre: '',
  clienteNIE: '',
  clienteEmail: '',
  clienteDomicilioFiscal: '',
  titulares: [{
    nombre: '',
    nie: '',
    participacion: '100'
  }],
  inmuebles: [{
    direccion: '',
    cp: '',
    provincia: '',
    comunidad: 'Comunidad Valenciana',
    refCatastral: '',
    anexos: []
  }],
  honorarios: '',
  formaPago: 'adelantado',
  plazoPago: '7'
};
