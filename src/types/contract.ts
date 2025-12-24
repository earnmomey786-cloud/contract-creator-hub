export interface Titular {
  nombre: string;
  nie: string;
  participacion: string;
}

export interface Anexo {
  tipo: string;
  refCatastral: string;
}

export interface ContractFormData {
  lugar: string;
  fecha: string;
  ejercicioFiscal: string;
  tipoServicio: 'imputacion' | 'alquiler' | 'mixto';
  clienteNombre: string;
  clienteNIE: string;
  clienteEmail: string;
  clienteDomicilioFiscal: string;
  titulares: Titular[];
  inmuebleDireccion: string;
  inmuebleCP: string;
  inmuebleProvincia: string;
  inmuebleComunidad: string;
  inmuebleRefCatastral: string;
  anexos: Anexo[];
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
  ejercicioFiscal: new Date().getFullYear().toString(),
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
  inmuebleDireccion: '',
  inmuebleCP: '',
  inmuebleProvincia: '',
  inmuebleComunidad: 'Comunidad Valenciana',
  inmuebleRefCatastral: '',
  anexos: [],
  honorarios: '',
  formaPago: 'adelantado',
  plazoPago: '7'
};
