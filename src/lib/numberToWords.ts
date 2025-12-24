// Conversor de números a palabras en español
const unidades = ['', 'UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS', 'SIETE', 'OCHO', 'NUEVE'];
const especiales = ['DIEZ', 'ONCE', 'DOCE', 'TRECE', 'CATORCE', 'QUINCE', 'DIECISÉIS', 'DIECISIETE', 'DIECIOCHO', 'DIECINUEVE'];
const decenas = ['', 'DIEZ', 'VEINTE', 'TREINTA', 'CUARENTA', 'CINCUENTA', 'SESENTA', 'SETENTA', 'OCHENTA', 'NOVENTA'];
const centenas = ['', 'CIENTO', 'DOSCIENTOS', 'TRESCIENTOS', 'CUATROCIENTOS', 'QUINIENTOS', 'SEISCIENTOS', 'SETECIENTOS', 'OCHOCIENTOS', 'NOVECIENTOS'];

function convertirCentenas(n: number): string {
  if (n === 100) return 'CIEN';
  
  const c = Math.floor(n / 100);
  const resto = n % 100;
  
  let resultado = centenas[c];
  
  if (resto > 0) {
    if (c > 0) resultado += ' ';
    resultado += convertirDecenas(resto);
  }
  
  return resultado;
}

function convertirDecenas(n: number): string {
  if (n < 10) return unidades[n];
  if (n < 20) return especiales[n - 10];
  if (n < 30 && n > 20) return 'VEINTI' + unidades[n - 20].toLowerCase().toUpperCase();
  if (n === 20) return 'VEINTE';
  
  const d = Math.floor(n / 10);
  const u = n % 10;
  
  if (u === 0) return decenas[d];
  return decenas[d] + ' Y ' + unidades[u];
}

export function numeroALetras(n: number): string {
  if (n === 0) return 'CERO';
  if (n < 0) return 'MENOS ' + numeroALetras(Math.abs(n));
  
  let resultado = '';
  
  // Miles
  if (n >= 1000) {
    const miles = Math.floor(n / 1000);
    const resto = n % 1000;
    
    if (miles === 1) {
      resultado = 'MIL';
    } else {
      resultado = convertirCentenas(miles) + ' MIL';
    }
    
    if (resto > 0) {
      resultado += ' ' + convertirCentenas(resto);
    }
  } else {
    resultado = convertirCentenas(n);
  }
  
  return resultado.trim();
}

// Formato para euros: "QUINIENTOS EUROS (500 €)"
export function euroEnLetras(cantidad: string | number): string {
  const num = typeof cantidad === 'string' ? parseFloat(cantidad) : cantidad;
  if (isNaN(num) || num === 0) return '_____ EUROS (__ €)';
  return `${numeroALetras(Math.round(num))} EUROS (${Math.round(num)} €)`;
}

// Formato para días: "SIETE (7) DÍAS"
export function diasEnLetras(dias: string | number): string {
  const num = typeof dias === 'string' ? parseInt(dias) : dias;
  if (isNaN(num) || num === 0) return '_____ (__) DÍAS';
  return `${numeroALetras(num)} (${num}) DÍAS`;
}

// Formato para días en polaco: "SIEDEM (7) DNI"
const unidadesPl = ['', 'JEDEN', 'DWA', 'TRZY', 'CZTERY', 'PIĘĆ', 'SZEŚĆ', 'SIEDEM', 'OSIEM', 'DZIEWIĘĆ'];
const especialesPl = ['DZIESIĘĆ', 'JEDENAŚCIE', 'DWANAŚCIE', 'TRZYNAŚCIE', 'CZTERNAŚCIE', 'PIĘTNAŚCIE', 'SZESNAŚCIE', 'SIEDEMNAŚCIE', 'OSIEMNAŚCIE', 'DZIEWIĘTNAŚCIE'];
const decenasPl = ['', 'DZIESIĘĆ', 'DWADZIEŚCIA', 'TRZYDZIEŚCI', 'CZTERDZIEŚCI', 'PIĘĆDZIESIĄT', 'SZEŚĆDZIESIĄT', 'SIEDEMDZIESIĄT', 'OSIEMDZIESIĄT', 'DZIEWIĘĆDZIESIĄT'];
const centenasPl = ['', 'STO', 'DWIEŚCIE', 'TRZYSTA', 'CZTERYSTA', 'PIĘĆSET', 'SZEŚĆSET', 'SIEDEMSET', 'OSIEMSET', 'DZIEWIĘĆSET'];

function convertirDecenasPl(n: number): string {
  if (n < 10) return unidadesPl[n];
  if (n < 20) return especialesPl[n - 10];
  
  const d = Math.floor(n / 10);
  const u = n % 10;
  
  if (u === 0) return decenasPl[d];
  return decenasPl[d] + ' ' + unidadesPl[u];
}

function convertirCentenasPl(n: number): string {
  const c = Math.floor(n / 100);
  const resto = n % 100;
  
  let resultado = centenasPl[c];
  
  if (resto > 0) {
    if (c > 0) resultado += ' ';
    resultado += convertirDecenasPl(resto);
  }
  
  return resultado;
}

export function numeroALetrasPl(n: number): string {
  if (n === 0) return 'ZERO';
  if (n < 0) return 'MINUS ' + numeroALetrasPl(Math.abs(n));
  
  let resultado = '';
  
  // Miles
  if (n >= 1000) {
    const miles = Math.floor(n / 1000);
    const resto = n % 1000;
    
    if (miles === 1) {
      resultado = 'TYSIĄC';
    } else if (miles >= 2 && miles <= 4) {
      resultado = convertirCentenasPl(miles) + ' TYSIĄCE';
    } else {
      resultado = convertirCentenasPl(miles) + ' TYSIĘCY';
    }
    
    if (resto > 0) {
      resultado += ' ' + convertirCentenasPl(resto);
    }
  } else {
    resultado = convertirCentenasPl(n);
  }
  
  return resultado.trim();
}

// Formato para euros en polaco: "PIĘĆSET EURO (500 €)"
export function euroEnLetrasPl(cantidad: string | number): string {
  const num = typeof cantidad === 'string' ? parseFloat(cantidad) : cantidad;
  if (isNaN(num) || num === 0) return '_____ EURO (__ €)';
  return `${numeroALetrasPl(Math.round(num))} EURO (${Math.round(num)} €)`;
}

// Formato para días en polaco: "SIEDEM (7) DNI"
export function diasEnLetrasPl(dias: string | number): string {
  const num = typeof dias === 'string' ? parseInt(dias) : dias;
  if (isNaN(num) || num === 0) return '_____ (__) DNI';
  return `${numeroALetrasPl(num)} (${num}) DNI`;
}
