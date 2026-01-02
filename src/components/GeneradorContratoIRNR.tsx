import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Download, Plus, Trash2, Building, Users, DollarSign, ChevronRight, ChevronLeft, Check, Home, FileCheck, FileDown, ArrowLeft } from 'lucide-react';
import { saveAs } from 'file-saver';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { ContractFormData, COMUNIDADES_PROVINCIAS, initialFormData, Titular, Anexo, Inmueble } from '@/types/contract';
import { 
  coverPage, contractIndex, partiesSection, manifestSection, 
  clauses, closingSection, bankDetails, months 
} from '@/data/contractContent';
import { euroEnLetras, euroEnLetrasPl, diasEnLetras, diasEnLetrasPl } from '@/lib/numberToWords';

const GeneradorContratoIRNR = () => {
  const navigate = useNavigate();
  const [paso, setPaso] = useState(1);
  const [formData, setFormData] = useState<ContractFormData>(initialFormData);
  const [mostrarContrato, setMostrarContrato] = useState(false);
  const totalPasos = 6;

  // Provincias disponibles por inmueble
  const getProvinciasForComunidad = (comunidad: string) => {
    return COMUNIDADES_PROVINCIAS[comunidad] || [];
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const agregarTitular = () => {
    setFormData(prev => ({
      ...prev,
      titulares: [...prev.titulares, { nombre: '', nie: '', participacion: '' }]
    }));
  };

  const eliminarTitular = (index: number) => {
    if (formData.titulares.length > 1) {
      setFormData(prev => ({
        ...prev,
        titulares: prev.titulares.filter((_, i) => i !== index)
      }));
    }
  };

  const handleTitularChange = (index: number, field: keyof Titular, value: string) => {
    const nuevosTitulares = [...formData.titulares];
    nuevosTitulares[index][field] = value;
    setFormData(prev => ({ ...prev, titulares: nuevosTitulares }));
  };

  // ==================== MANEJO DE INMUEBLES ====================
  const agregarInmueble = () => {
    setFormData(prev => ({
      ...prev,
      inmuebles: [...prev.inmuebles, {
        direccion: '',
        cp: '',
        provincia: '',
        comunidad: 'Comunidad Valenciana',
        refCatastral: '',
        anexos: []
      }]
    }));
  };

  const eliminarInmueble = (index: number) => {
    if (formData.inmuebles.length > 1) {
      setFormData(prev => ({
        ...prev,
        inmuebles: prev.inmuebles.filter((_, i) => i !== index)
      }));
    }
  };

  const handleInmuebleChange = (index: number, field: keyof Inmueble, value: string) => {
    const nuevosInmuebles = [...formData.inmuebles];
    if (field === 'comunidad') {
      nuevosInmuebles[index].comunidad = value;
      nuevosInmuebles[index].provincia = ''; // Reset provincia al cambiar comunidad
    } else if (field !== 'anexos') {
      (nuevosInmuebles[index] as any)[field] = value;
    }
    setFormData(prev => ({ ...prev, inmuebles: nuevosInmuebles }));
  };

  const agregarAnexoInmueble = (inmuebleIndex: number) => {
    const nuevosInmuebles = [...formData.inmuebles];
    nuevosInmuebles[inmuebleIndex].anexos.push({ tipo: 'Garaje', refCatastral: '' });
    setFormData(prev => ({ ...prev, inmuebles: nuevosInmuebles }));
  };

  const eliminarAnexoInmueble = (inmuebleIndex: number, anexoIndex: number) => {
    const nuevosInmuebles = [...formData.inmuebles];
    nuevosInmuebles[inmuebleIndex].anexos = nuevosInmuebles[inmuebleIndex].anexos.filter((_, i) => i !== anexoIndex);
    setFormData(prev => ({ ...prev, inmuebles: nuevosInmuebles }));
  };

  const handleAnexoInmuebleChange = (inmuebleIndex: number, anexoIndex: number, field: keyof Anexo, value: string) => {
    const nuevosInmuebles = [...formData.inmuebles];
    nuevosInmuebles[inmuebleIndex].anexos[anexoIndex][field] = value;
    setFormData(prev => ({ ...prev, inmuebles: nuevosInmuebles }));
  };

  const validarPaso = (pasoActual: number) => {
    switch (pasoActual) {
      case 1: return formData.lugar && formData.fecha && formData.anoFirma && formData.ejercicioFiscal;
      case 2: return formData.clienteNombre && formData.clienteNIE && formData.clienteEmail && formData.clienteDomicilioFiscal;
      case 3: return formData.titulares.every(t => t.nombre && t.nie && t.participacion);
      case 4: return formData.inmuebles.every(i => i.direccion && i.cp && i.provincia && i.comunidad && i.refCatastral);
      case 5: return true;
      case 6: return formData.honorarios && formData.plazoPago;
      default: return true;
    }
  };

  const generarContrato = () => {
    if (!formData.clienteNombre || !formData.clienteNIE || formData.inmuebles.length === 0 || !formData.honorarios) {
      alert('Por favor complete todos los campos obligatorios');
      return;
    }
    const sumaParticipaciones = formData.titulares.reduce((sum, t) => sum + parseFloat(t.participacion || '0'), 0);
    if (Math.abs(sumaParticipaciones - 100) > 0.01) {
      alert(`La suma de participaciones debe ser 100%. Actualmente: ${sumaParticipaciones.toFixed(2)}%`);
      return;
    }
    setMostrarContrato(true);
  };

  const siguientePaso = () => {
    if (validarPaso(paso)) {
      setPaso(Math.min(paso + 1, totalPasos));
    } else {
      alert('Por favor complete todos los campos obligatorios del paso actual');
    }
  };

  const anteriorPaso = () => setPaso(Math.max(paso - 1, 1));

  const formatearFecha = (fecha: string) => {
    const d = new Date(fecha + 'T00:00:00');
    return {
      es: `${d.getDate()} de ${months.es[d.getMonth()]} de ${d.getFullYear()}`,
      pl: `${d.getDate()} ${months.pl[d.getMonth()]} ${d.getFullYear()} r.`
    };
  };

  // Traducciones de tipos de anexo
  const tipoAnexoPl: Record<string, string> = {
    'Trastero': 'Komórka lokatorska',
    'Garaje': 'Garaż'
  };

  const nombreArchivo = `PGK_M210_${formData.clienteNIE}_${formData.ejercicioFiscal}_V1`;

  // Contar total de anexos
  const totalAnexos = formData.inmuebles.reduce((sum, inm) => sum + inm.anexos.length, 0);

  // Primer inmueble para referencias simples en el contrato
  const primerInmueble = formData.inmuebles[0];

  const descargarWord = () => {
    const contenido = document.querySelector('.contract-content');
    if (!contenido) return;

    const htmlWord = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>Contrato IRNR ${formData.clienteNIE} - ${formData.ejercicioFiscal}</title>
        <!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View><w:Zoom>100</w:Zoom></w:WordDocument></xml><![endif]-->
        <style>
          @page { size: A4; margin: 2cm 1.5cm; }
          body { font-family: 'Times New Roman', serif; font-size: 10pt; line-height: 1.4; text-align: justify; }
          .cover-page { page-break-after: always; text-align: center; padding-top: 80px; }
          .index-page { page-break-after: always; }
          .bilingual-table { width: 100%; border-collapse: collapse; table-layout: fixed; }
          .bilingual-table td { width: 50%; padding: 8px 12px; vertical-align: top; font-size: 9pt; text-align: justify; }
          .col-es, .col-pl { background-color: #ffffff; }
          .section-title td { font-weight: bold; text-align: center; font-size: 11pt; padding: 12px 8px; }
          .clause-title td { font-weight: bold; text-align: left; font-size: 9pt; padding: 10px 12px; }
          .clause-id { font-weight: bold; }
          .signature-section { margin-top: 40px; page-break-inside: avoid; }
          .page-break { page-break-before: always; }
          h1 { font-size: 14pt; margin: 10px 0; }
          h2 { font-size: 12pt; margin: 8px 0; }
          .index-table { width: 80%; margin: 0 auto; }
          .index-table td { padding: 6px 12px; font-size: 10pt; }
          .index-num { width: 30px; font-weight: bold; }
        </style>
      </head>
      <body>${contenido.innerHTML}</body>
      </html>
    `;
    const blob = new Blob(['\ufeff', htmlWord], { type: 'application/msword' });
    saveAs(blob, `${nombreArchivo}.doc`);
  };

  const descargarPDF = () => {
    // Cambia el título del documento para que el PDF tenga el mismo nombre
    const tituloOriginal = document.title;
    document.title = nombreArchivo;
    window.print();
    document.title = tituloOriginal;
  };

  if (mostrarContrato) {
    const fechaFormateada = formatearFecha(formData.fecha);
    
    return (
      <div className="max-w-5xl mx-auto p-4 bg-background">
        <div className="flex justify-between items-center mb-6 no-print">
          <Button variant="outline" onClick={() => setMostrarContrato(false)}>← Volver al formulario</Button>
          <div className="flex gap-3">
            <Button onClick={descargarWord} className="bg-green-600 hover:bg-green-700">
              <FileDown className="mr-2 h-4 w-4" /> Descargar Word
            </Button>
            <Button onClick={descargarPDF} className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" /> Descargar PDF
            </Button>
          </div>
        </div>

        <div className="contract-content bg-white p-8 text-sm leading-relaxed shadow-lg" style={{ fontSize: '10pt', textAlign: 'justify' }}>
          
          {/* ==================== PORTADA ELEGANTE ==================== */}
          <div className="cover-page text-center" style={{ pageBreakAfter: 'always', minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
            
            {/* Logo banner horizontal */}
            <div className="mb-16">
              <img src="/images/pgk-banner.png" alt="Polska Grupa Konsultingowa" style={{ height: '168px', width: 'auto' }} />
            </div>
            
            {/* Línea decorativa superior */}
            <div className="w-full max-w-md mb-10">
              <div className="h-0.5 bg-[#c9a962]"></div>
            </div>
            
            {/* Título principal */}
            <div className="mb-8 px-4">
              <h1 className="text-xl font-bold uppercase tracking-widest mb-4" style={{ color: '#1e3a5f', letterSpacing: '0.12em', lineHeight: '1.4' }}>
                {coverPage.titleEs}
              </h1>
              <p className="text-base italic text-muted-foreground tracking-wide">
                {coverPage.titlePl}
              </p>
            </div>
            
            {/* Subtítulo - Modelo */}
            <div className="mb-10">
              <h2 className="text-lg font-semibold uppercase tracking-widest" style={{ color: '#1e3a5f' }}>
                MODELO 210 – IRNR
              </h2>
              <p className="text-sm text-muted-foreground tracking-wide mt-1">
                Impuesto sobre la Renta de No Residentes
              </p>
            </div>
            
            {/* Línea decorativa */}
            <div className="w-full max-w-md mb-10">
              <div className="h-0.5 bg-[#c9a962]"></div>
            </div>
            
            {/* Datos del cliente */}
            <div className="mb-6">
              <p className="text-base font-semibold mb-1" style={{ color: '#1e3a5f' }}>{formData.clienteNombre || '_______________'}</p>
              <p className="text-sm text-muted-foreground">NIE: {formData.clienteNIE || '_______________'}</p>
              {formData.titulares.length > 1 && (
                <p className="text-sm text-muted-foreground mt-2 italic">
                  y {formData.titulares.length - 1} cotitular{formData.titulares.length > 2 ? 'es' : ''} más
                </p>
              )}
              {formData.inmuebles.length > 1 && (
                <p className="text-sm text-muted-foreground mt-1 italic">
                  {formData.inmuebles.length} inmuebles
                </p>
              )}
            </div>
            
            {/* Ejercicio fiscal */}
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Ejercicio Fiscal / Rok podatkowy</p>
              <p className="text-3xl font-bold" style={{ color: '#1e3a5f' }}>{formData.ejercicioFiscal}</p>
            </div>
            
            {/* Pie de página con fecha y año de firma */}
            <div className="mt-auto pt-8">
              <p className="text-sm text-muted-foreground">{formData.lugar}, {fechaFormateada.es}</p>
            </div>
          </div>

          {/* ==================== ÍNDICE ESPAÑOL - PÁGINA 2 ==================== */}
          <div className="index-page relative" style={{ pageBreakAfter: 'always' }}>
            {/* Número de página */}
            <div className="absolute bottom-4 right-0 left-0 text-center text-xs text-muted-foreground">2</div>
            
            {/* Cabecera del índice español */}
            <div className="text-center mb-8">
              <h2 className="text-lg font-bold uppercase tracking-widest underline decoration-2 underline-offset-4" style={{ color: '#1e3a5f' }}>
                {contractIndex.titleEs}
              </h2>
            </div>
            
            {/* Lista del índice - español con líneas de puntos */}
            <div className="max-w-xl mx-auto space-y-1" style={{ color: '#1e3a5f' }}>
              {contractIndex.items.map((item, i) => (
                <div key={i} className="flex items-baseline text-xs">
                  <span className="font-medium uppercase whitespace-nowrap">{item.es}</span>
                  <span 
                    className="flex-1 mx-1 overflow-hidden" 
                    style={{ 
                      borderBottom: '1px dotted currentColor',
                      marginBottom: '0.3em',
                      minWidth: '20px'
                    }}
                  ></span>
                  <span className="whitespace-nowrap">{item.page}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== ÍNDICE POLACO - PÁGINA 3 ==================== */}
          <div className="index-page relative" style={{ pageBreakAfter: 'always' }}>
            {/* Número de página */}
            <div className="absolute bottom-4 right-0 left-0 text-center text-xs text-muted-foreground">3</div>
            
            {/* Cabecera del índice polaco */}
            <div className="text-center mb-8">
              <h2 className="text-lg font-bold uppercase tracking-widest underline decoration-2 underline-offset-4 text-muted-foreground italic">
                {contractIndex.titlePl}
              </h2>
            </div>
            
            {/* Lista del índice - polaco con líneas de puntos */}
            <div className="max-w-xl mx-auto space-y-1 text-muted-foreground italic">
              {contractIndex.items.map((item, i) => (
                <div key={i} className="flex items-baseline text-xs">
                  <span className="font-medium uppercase whitespace-nowrap">{item.pl}</span>
                  <span 
                    className="flex-1 mx-1 overflow-hidden" 
                    style={{ 
                      borderBottom: '1px dotted currentColor',
                      marginBottom: '0.3em',
                      minWidth: '20px'
                    }}
                  ></span>
                  <span className="whitespace-nowrap">{item.page}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== CONTENIDO BILINGÜE ==================== */}
          <div className="page-break" style={{ pageBreakBefore: 'always' }}></div>
          
          <table className="bilingual-table w-full" style={{ tableLayout: 'fixed', borderCollapse: 'collapse' }}>
            <colgroup>
              <col style={{ width: '50%' }} />
              <col style={{ width: '50%' }} />
            </colgroup>
            <tbody>
              {/* Fecha y lugar */}
              <tr>
                <td className="py-4 text-center font-semibold" colSpan={2}>
                  <span>En {formData.lugar}, a {fechaFormateada.es}</span>
                  <span className="mx-4 text-muted-foreground">|</span>
                  <span className="text-muted-foreground italic">W {formData.lugar}, dnia {fechaFormateada.pl}</span>
                </td>
              </tr>

              {/* LAS PARTES - Título centrado y negrita */}
              <tr className="section-title">
                <td className="py-4 text-center font-bold text-base">{partiesSection.titleEs}</td>
                <td className="py-4 text-center font-bold text-base text-muted-foreground">{partiesSection.titlePl}</td>
              </tr>
              <tr>
                <td className="p-3 align-top" style={{ textAlign: 'justify' }}>
                  <strong>De una parte</strong>, POLSKA GRUPA KONSULTINGOWA, S.L., NIF B-22682827, C/ Matilde Peñaranda, 27, 5.º A, 03183 Torrevieja (Alicante), inscrita en el Registro Mercantil de Alicante (S-8, H-A 199665, I/A-1 de 31.07.25), representada por D.ª Natalia Małgorzata Sikora (en adelante, <strong>"EL PRESTADOR"</strong>).
                </td>
                <td className="p-3 align-top" style={{ textAlign: 'justify' }}>
                  <strong>Z jednej strony</strong>, POLSKA GRUPA KONSULTINGOWA, S.L., NIF B-22682827, C/ Matilde Peñaranda, 27, 5.º A, 03183 Torrevieja (Alicante), wpisana do Rejestru Handlowego w Alicante (S-8, H-A 199665, I/A-1 z dnia 31.07.25), reprezentowana przez Panią Natalię Małgorzatę Sikorę (zwana dalej <strong>"USŁUGODAWCĄ"</strong>).
                </td>
              </tr>
              <tr>
                <td className="p-3 align-top" style={{ textAlign: 'justify' }}>
                  <strong>Y de otra parte</strong>, D./D.ª <strong>{formData.clienteNombre}</strong>, identificado/a con NIE <strong>{formData.clienteNIE}</strong>, correo electrónico a efectos de notificaciones <strong>{formData.clienteEmail}</strong>, con domicilio fiscal en <strong>{formData.clienteDomicilioFiscal}</strong>, quien actúa en su propio nombre{formData.titulares.length > 1 ? ' y en nombre y representación del resto de cotitulares del inmueble descrito más adelante, manifestando contar con autorización suficiente para ello' : ''}, en adelante, <strong>"EL CLIENTE"</strong>.
                </td>
                <td className="p-3 align-top" style={{ textAlign: 'justify' }}>
                  <strong>Z drugiej strony</strong>, Pan/Pani <strong>{formData.clienteNombre}</strong>, legitymujący/a się numerem NIE <strong>{formData.clienteNIE}</strong>, adres e-mail do celów powiadomień <strong>{formData.clienteEmail}</strong>, z siedzibą podatkową pod adresem <strong>{formData.clienteDomicilioFiscal}</strong>, działający/a we własnym imieniu{formData.titulares.length > 1 ? ' oraz w imieniu i na rzecz pozostałych współwłaścicieli nieruchomości opisanej poniżej, oświadczając, że posiada wystarczające upoważnienie w tym zakresie' : ''}, zwany/a dalej <strong>"KLIENTEM"</strong>.
                </td>
              </tr>

              {/* MANIFIESTAN - Título centrado y negrita */}
              <tr className="section-title">
                <td className="py-4 text-center font-bold text-base">{manifestSection.titleEs}</td>
                <td className="py-4 text-center font-bold text-base text-muted-foreground">{manifestSection.titlePl}</td>
              </tr>
              {manifestSection.items.map((item, i) => (
                <tr key={i}>
                  <td className="p-3 align-top" style={{ textAlign: 'justify' }}>
                    <strong>{item.numeral}</strong>{' '}
                    {i === 1 
                      ? `Que EL CLIENTE declara su condición de no residente fiscal en España, conforme a lo dispuesto en el Real Decreto Legislativo 5/2004, y es titular${formData.titulares.length > 1 ? ', conjuntamente con otros cotitulares,' : ''} de ${formData.inmuebles.length === 1 ? 'el bien inmueble sito en' : 'los bienes inmuebles sitos en'} ${formData.inmuebles.map(inm => `${inm.direccion}, CP ${inm.cp}, ${inm.provincia} (${inm.comunidad})`).join('; ')}. Como titular de rentas inmobiliarias en territorio español, reconoce expresamente su condición de obligado tributario y su deber legal de autoliquidar el Impuesto sobre la Renta de No Residentes (Modelo 210), ante la AEAT, asumiendo que el incumplimiento de los plazos legales puede derivar en responsabilidades, sanciones o recargos según la Ley General Tributaria.`
                      : item.es
                    }
                  </td>
                  <td className="p-3 align-top" style={{ textAlign: 'justify' }}>
                    <strong>{item.numeral}</strong>{' '}
                    {i === 1 
                      ? `Że KLIENT oświadcza, iż posiada status nierezydenta podatkowego w Hiszpanii, zgodnie z postanowieniami Królewskiego Dekretu Legislacyjnego 5/2004, oraz jest właścicielem${formData.titulares.length > 1 ? ', wspólnie z innymi współwłaścicielami,' : ''} ${formData.inmuebles.length === 1 ? 'nieruchomości położonej pod adresem' : 'nieruchomości położonych pod adresami'} ${formData.inmuebles.map(inm => `${inm.direccion}, kod pocztowy ${inm.cp}, ${inm.provincia} (${inm.comunidad})`).join('; ')}. Jako posiadacz dochodów z nieruchomości na terytorium hiszpańskim, wyraźnie uznaje swój status podatnika oraz prawny obowiązek samodzielnego rozliczenia Podatku Dochodowego od Nierezydentów (Formularz 210) przed AEAT, przyjmując do wiadomości, że niedotrzymanie terminów ustawowych może skutkować odpowiedzialnością, sankcjami lub dopłatami zgodnie z Ogólną Ordynacją Podatkową.`
                      : item.pl
                    }
                  </td>
                </tr>
              ))}

              {/* CLÁUSULAS - Título centrado y negrita (nuevo) */}
              <tr className="section-title">
                <td className="py-4 text-center font-bold text-base">CLÁUSULAS</td>
                <td className="py-4 text-center font-bold text-base text-muted-foreground">KLAUZULE</td>
              </tr>

              {/* CLÁUSULAS - Títulos alineados a izquierda y tamaño menor */}
              {clauses.map((clause) => (
                <>
                  <tr key={`header-${clause.number}`} className="clause-title">
                    <td className="py-2 px-3 text-left font-bold text-sm">{clause.titleEs}</td>
                    <td className="py-2 px-3 text-left font-bold text-sm text-muted-foreground">{clause.titlePl}</td>
                  </tr>
                  {clause.sections.map((section) => {
                    // Contenido dinámico para cláusula QUINTA
                    // Contenido dinámico para inmuebles - ahora en SEGUNDA (2.5)
                    if (clause.number === 'SEGUNDA' && section.id === '2.4') {
                      return (
                        <>
                          <tr key={section.id}>
                            <td className="p-3 align-top" style={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>
                              <span className="font-semibold">{section.id}.</span> {section.contentEs}
                            </td>
                            <td className="p-3 align-top" style={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>
                              <span className="font-semibold">{section.id}.</span> {section.contentPl}
                            </td>
                          </tr>
                          <tr key="2.5">
                            <td className="p-3 align-top" style={{ textAlign: 'justify' }}>
                              <span className="font-semibold">2.5.</span> Los servicios descritos se prestan en relación con {formData.inmuebles.length === 1 ? 'el siguiente inmueble' : 'los siguientes inmuebles'}:
                              
                              {formData.inmuebles.map((inm, inmIdx) => (
                                <div key={inmIdx} className="mt-3 mb-2 pl-2 border-l-2 border-muted">
                                  <p className="font-semibold">Inmueble {inmIdx + 1}:</p>
                                  <p>Dirección: <strong>{inm.direccion}, {inm.cp} {inm.provincia}</strong></p>
                                  <p>Ref. Catastral: <strong>{inm.refCatastral}</strong></p>
                                  {inm.anexos.length > 0 && (
                                    <>
                                      <p className="mt-1">Anexos:</p>
                                      <ul className="list-disc ml-4">
                                        {inm.anexos.map((a, aIdx) => (
                                          <li key={aIdx}>{a.tipo}: Ref. Cat. {a.refCatastral}</li>
                                        ))}
                                      </ul>
                                    </>
                                  )}
                                </div>
                              ))}
                              
                              <p className="mt-3">{formData.titulares.length === 1 ? 'Titular no residente fiscal en España' : 'Cotitulares no residentes fiscales en España'}:</p>
                              <table className="w-full mt-2 text-xs">
                                <tbody>
                                  {formData.titulares.map((t, i) => (
                                    <tr key={i}>
                                      <td className="py-1">{formData.titulares.length === 1 ? 'Titular:' : `Titular ${i+1}:`}</td>
                                      <td className="py-1">{t.nombre}</td>
                                      <td className="py-1">NIE {t.nie}</td>
                                      <td className="py-1">{t.participacion}%</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </td>
                            <td className="p-3 align-top" style={{ textAlign: 'justify' }}>
                              <span className="font-semibold">2.5.</span> Opisane usługi świadczone są w odniesieniu do {formData.inmuebles.length === 1 ? 'następującej nieruchomości' : 'następujących nieruchomości'}:
                              
                              {formData.inmuebles.map((inm, inmIdx) => (
                                <div key={inmIdx} className="mt-3 mb-2 pl-2 border-l-2 border-muted">
                                  <p className="font-semibold">Nieruchomość {inmIdx + 1}:</p>
                                  <p>Adres: <strong>{inm.direccion}, {inm.cp} {inm.provincia}</strong></p>
                                  <p>Nr katastralny: <strong>{inm.refCatastral}</strong></p>
                                  {inm.anexos.length > 0 && (
                                    <>
                                      <p className="mt-1">Aneksy:</p>
                                      <ul className="list-disc ml-4">
                                        {inm.anexos.map((a, aIdx) => (
                                          <li key={aIdx}>{tipoAnexoPl[a.tipo] || a.tipo}: Nr kat. {a.refCatastral}</li>
                                        ))}
                                      </ul>
                                    </>
                                  )}
                                </div>
                              ))}
                              
                              <p className="mt-3">{formData.titulares.length === 1 ? 'Właściciel niebędący rezydentem podatkowym w Hiszpanii' : 'Współwłaściciele niebędący rezydentami podatkowymi w Hiszpanii'}:</p>
                              <table className="w-full mt-2 text-xs">
                                <tbody>
                                  {formData.titulares.map((t, i) => (
                                    <tr key={i}>
                                      <td className="py-1">{formData.titulares.length === 1 ? 'Właściciel:' : `Właściciel ${i+1}:`}</td>
                                      <td className="py-1">{t.nombre}</td>
                                      <td className="py-1">NIE {t.nie}</td>
                                      <td className="py-1">{t.participacion}%</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </>
                      );
                    }

                    // Contenido dinámico para honorarios - ahora en OCTAVA (8.1)
                    if (clause.number === 'OCTAVA' && section.id === '8.1') {
                      return (
                        <tr key={section.id}>
                          <td className="p-3 align-top" style={{ textAlign: 'justify' }}>
                            <span className="font-semibold">{section.id}.</span> Como contraprestación por los servicios descritos, los honorarios profesionales de EL PRESTADOR ascienden a <strong>{euroEnLetras(formData.honorarios)}</strong> (más los impuestos indirectos que resulten aplicables). Este importe incluye:
                            <ul className="list-none mt-2 ml-2">
                              <li className="mb-1">– Presentación de una declaración individual por cada {formData.titulares.length === 1 ? 'titular' : 'cotitular'} correspondiente al ejercicio fiscal <strong>{formData.ejercicioFiscal}</strong>.</li>
                              <li className="mb-1">– Cálculo de la base imponible conforme a la normativa vigente (valor catastral o porcentaje aplicable).</li>
                              <li className="mb-1">– Gestión integral de {formData.titulares.length} {formData.titulares.length === 1 ? 'titular' : 'cotitulares'}, {formData.inmuebles.length} inmueble{formData.inmuebles.length > 1 ? 's' : ''} ({formData.tipoServicio === 'imputacion' ? 'imputación' : formData.tipoServicio === 'alquiler' ? 'alquiler' : 'imputación y alquiler'}{totalAnexos > 0 ? `, ${totalAnexos} anexo${totalAnexos > 1 ? 's' : ''}` : ''}).</li>
                              <li className="mb-1">– Emisión de un informe técnico-fiscal.</li>
                              <li className="mb-1">– Custodia digital de la documentación durante el plazo legal de 4 años.</li>
                            </ul>
                          </td>
                          <td className="p-3 align-top" style={{ textAlign: 'justify' }}>
                            <span className="font-semibold">{section.id}.</span> Jako wynagrodzenie za opisane usługi, honoraria zawodowe USŁUGODAWCY wynoszą <strong>{euroEnLetrasPl(formData.honorarios)}</strong> (plus odpowiednie podatki pośrednie). Kwota ta obejmuje:
                            <ul className="list-none mt-2 ml-2">
                              <li className="mb-1">– Złożenie indywidualnej deklaracji dla każdego {formData.titulares.length === 1 ? 'właściciela' : 'współwłaściciela'} za rok podatkowy <strong>{formData.ejercicioFiscal}</strong>.</li>
                              <li className="mb-1">– Obliczenie podstawy opodatkowania zgodnie z obowiązującymi przepisami (wartość katastralna lub stosowny procent).</li>
                              <li className="mb-1">– Kompleksowa obsługa {formData.titulares.length} {formData.titulares.length === 1 ? 'właściciela' : 'współwłaścicieli'}, {formData.inmuebles.length} nieruchomośc{formData.inmuebles.length > 1 ? 'i' : 'i'} ({formData.tipoServicio === 'imputacion' ? 'przypisanie' : formData.tipoServicio === 'alquiler' ? 'najem' : 'przypisanie i najem'}{totalAnexos > 0 ? `, ${totalAnexos} aneks${totalAnexos > 1 ? 'y' : ''}` : ''}).</li>
                              <li className="mb-1">– Wydanie raportu techniczno-podatkowego.</li>
                              <li className="mb-1">– Cyfrowe przechowywanie dokumentacji przez ustawowy okres 4 lat.</li>
                            </ul>
                          </td>
                        </tr>
                      );
                    }

                    // Contenido dinámico para forma de pago - ahora en NOVENA (9.1)
                    if (clause.number === 'NOVENA' && section.id === '9.1') {
                      return (
                        <tr key={section.id}>
                          <td className="p-3 align-top" style={{ textAlign: 'justify' }}>
                            <span className="font-semibold">{section.id}.</span> Los honorarios se facturarán {formData.formaPago === 'adelantado' ? 'por adelantado' : 'a la entrega'}, y deberán abonarse en el plazo de <strong>{diasEnLetras(formData.plazoPago)}</strong> hábiles desde la emisión de la factura, mediante transferencia a:
                            <table className="w-full mt-2 text-xs">
                              <tbody>
                                <tr><td className="py-1">Entidad:</td><td className="py-1 font-semibold">{bankDetails.entity}</td></tr>
                                <tr><td className="py-1">Titular:</td><td className="py-1">{bankDetails.holder}</td></tr>
                                <tr><td className="py-1">IBAN:</td><td className="py-1 font-semibold">{bankDetails.iban}</td></tr>
                                <tr><td className="py-1">BIC:</td><td className="py-1">{bankDetails.bic}</td></tr>
                                <tr><td className="py-1">Concepto:</td><td className="py-1">IRNR {formData.ejercicioFiscal} – {formData.clienteNombre} {formData.clienteNIE}</td></tr>
                              </tbody>
                            </table>
                          </td>
                          <td className="p-3 align-top" style={{ textAlign: 'justify' }}>
                            <span className="font-semibold">{section.id}.</span> Honoraria będą fakturowane {formData.formaPago === 'adelantado' ? 'z góry' : 'przy odbiorze'} i muszą zostać uiszczone w terminie <strong>{diasEnLetrasPl(formData.plazoPago)}</strong> roboczych od wystawienia faktury, przelewem na:
                            <table className="w-full mt-2 text-xs">
                              <tbody>
                                <tr><td className="py-1">Bank:</td><td className="py-1 font-semibold">{bankDetails.entity}</td></tr>
                                <tr><td className="py-1">Odbiorca:</td><td className="py-1">{bankDetails.holder}</td></tr>
                                <tr><td className="py-1">IBAN:</td><td className="py-1 font-semibold">{bankDetails.iban}</td></tr>
                                <tr><td className="py-1">BIC:</td><td className="py-1">{bankDetails.bic}</td></tr>
                                <tr><td className="py-1">Tytuł:</td><td className="py-1">IRNR {formData.ejercicioFiscal} – {formData.clienteNombre} {formData.clienteNIE}</td></tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      );
                    }


                    // Omitir cláusula 2.2 si solo es imputación (sin alquiler)
                    if (clause.number === 'SEGUNDA' && section.id === '2.2' && formData.tipoServicio === 'imputacion') {
                      return null;
                    }

                    // Cláusula 2.2 sin "(si procede)" cuando incluye alquiler
                    if (clause.number === 'SEGUNDA' && section.id === '2.2') {
                      return (
                        <tr key={section.id}>
                          <td className="p-3 align-top" style={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>
                            <span className="font-semibold">{section.id}.</span> Modelo 210 – Rendimientos del arrendamiento: Presentación de declaraciones individuales por cada cotitular, determinación del rendimiento incluyendo gastos deducibles distribuidos según porcentajes de titularidad, y aplicación del tipo impositivo correspondiente.
                          </td>
                          <td className="p-3 align-top" style={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>
                            <span className="font-semibold">{section.id}.</span> Formularz 210 – Dochody z najmu: Złożenie indywidualnych deklaracji za każdego współwłaściciela, ustalenie dochodu z uwzględnieniem kosztów podlegających odliczeniu rozdzielonych według udziałów własnościowych, oraz zastosowanie odpowiedniej stawki podatkowej.
                          </td>
                        </tr>
                      );
                    }

                    // Cláusula 6.1 - Documentación requerida (condicional según tipo de servicio y titulares)
                    if (clause.number === 'SEXTA' && section.id === '6.1') {
                      const nieTextEs = formData.titulares.length === 1 ? 'NIE del titular' : 'NIE de cada cotitular';
                      const nieTextPl = formData.titulares.length === 1 ? 'NIE właściciela' : 'NIE każdego współwłaściciela';
                      const incluyeAlquiler = formData.tipoServicio === 'alquiler' || formData.tipoServicio === 'mixto';
                      
                      return (
                        <tr key={section.id}>
                          <td className="p-3 align-top" style={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>
                            <span className="font-semibold">{section.id}.</span> EL CLIENTE se obliga a facilitar la siguiente documentación completa, veraz y actualizada en un plazo máximo de siete (7) días hábiles desde la firma del contrato:
                            {'\n'}- {nieTextEs}
                            {'\n'}- Escritura de compraventa de la propiedad
                            {'\n'}- Recibo del Impuesto sobre Bienes Inmuebles (IBI) del ejercicio fiscal para el que se contrata la declaración
                            {incluyeAlquiler && (
                              <>
                                {'\n'}- Contrato de arrendamiento y justificantes de cobro de rentas del ejercicio correspondiente
                                {'\n'}- Informe de ingresos descargado de plataformas OTAs (Booking, Airbnb, Vrbo u otras) si el inmueble se alquila a través de dichas plataformas
                                {'\n'}- Facturas o recibos justificativos de gastos deducibles vinculados al inmueble del ejercicio correspondiente (comunidad de propietarios, seguros, suministros, reparaciones, comisiones de gestión, etc.)
                              </>
                            )}
                          </td>
                          <td className="p-3 align-top" style={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>
                            <span className="font-semibold">{section.id}.</span> KLIENT zobowiązuje się dostarczyć następującą kompletną, prawdziwą i aktualną dokumentację w maksymalnym terminie siedmiu (7) dni roboczych od podpisania umowy:
                            {'\n'}- {nieTextPl}
                            {'\n'}- Akt notarialny nabycia nieruchomości
                            {'\n'}- Pokwitowanie Podatku od Nieruchomości (IBI) za rok podatkowy objęty deklaracją
                            {incluyeAlquiler && (
                              <>
                                {'\n'}- Umowę najmu i potwierdzenia pobierania czynszów za odpowiedni rok
                                {'\n'}- Raport dochodów pobrany z platform OTAs (Booking, Airbnb, Vrbo lub innych), jeśli nieruchomość jest wynajmowana za pośrednictwem tych platform
                                {'\n'}- Faktury lub rachunki potwierdzające koszty podlegające odliczeniu związane z nieruchomością za odpowiedni rok (wspólnota mieszkaniowa, ubezpieczenia, media, remonty, prowizje za zarządzanie itp.)
                              </>
                            )}
                          </td>
                        </tr>
                      );
                    }

                    // Cláusulas estándar
                    return (
                      <tr key={section.id}>
                        <td className="p-3 align-top" style={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>
                          <span className="font-semibold">{section.id}.</span> {section.contentEs}
                        </td>
                        <td className="p-3 align-top" style={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>
                          <span className="font-semibold">{section.id}.</span> {section.contentPl}
                        </td>
                      </tr>
                    );
                  })}
                </>
              ))}

              {/* CIERRE */}
              <tr>
                <td className="p-4 align-top" style={{ textAlign: 'justify' }}>
                  {closingSection.declarationEs}
                </td>
                <td className="p-4 align-top" style={{ textAlign: 'justify' }}>
                  {closingSection.declarationPl}
                </td>
              </tr>
            </tbody>
          </table>

          {/* ==================== FIRMAS ==================== */}
          <div className="signature-section mt-12 pt-8">
            <div className="flex justify-between mt-16">
              <div className="text-center w-2/5">
                <div className="border-t-2 border-foreground w-full mb-3 mt-20"></div>
                <p className="font-bold">{closingSection.signatures.prestador.labelEs}</p>
                <p className="font-bold text-muted-foreground">{closingSection.signatures.prestador.labelPl}</p>
                <p className="text-sm mt-2">{closingSection.signatures.prestador.companyName}</p>
                <p className="text-xs text-muted-foreground">{closingSection.signatures.prestador.representative}</p>
              </div>
              <div className="text-center w-2/5">
                <div className="border-t-2 border-foreground w-full mb-3 mt-20"></div>
                <p className="font-bold">{closingSection.signatures.cliente.labelEs}</p>
                <p className="font-bold text-muted-foreground">{closingSection.signatures.cliente.labelPl}</p>
                <p className="text-sm mt-2">{formData.clienteNombre}</p>
                <p className="text-xs text-muted-foreground">NIE: {formData.clienteNIE}</p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media print {
            @page {
              size: A4;
              margin: 2cm 1.5cm;
            }
            
            /* Ocultar elementos de navegación */
            .no-print { display: none !important; }
            
            /* Limpiar estilos del documento */
            html, body {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            .contract-content { 
              box-shadow: none !important; 
              padding: 0 !important;
              margin: 0 !important;
            }
            
            .cover-page { page-break-after: always; }
            .index-page { page-break-after: always; }
            .page-break { page-break-before: always; }
            
            body { 
              font-size: 9pt; 
              text-align: justify;
            }
          }
          
          .bilingual-table { border-collapse: collapse; table-layout: fixed; width: 100%; }
          .bilingual-table td { vertical-align: top; }
          .section-title td { border-bottom: 1px solid hsl(var(--border)); }
          .clause-title td { background: transparent; }
        `}</style>
      </div>
    );
  }

  // ==================== FORMULARIO ====================
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Botón volver al Dashboard */}
        <div className="mb-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate('/dashboard')}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al Panel
          </Button>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Generador de Contrato IRNR Bilingüe</h1>
          <p className="text-muted-foreground">Modelo 210 – Español / Polski</p>
        </div>

        {/* Progreso */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${paso > n ? 'bg-green-500 text-white' : paso === n ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                    {paso > n ? <Check size={20} /> : n}
                  </div>
                  {n < 6 && <div className={`h-1 w-8 md:w-16 ${paso > n ? 'bg-green-500' : 'bg-muted'}`}></div>}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Paso {paso}: {['Datos Básicos', 'Cliente', 'Titulares', 'Inmuebles', 'Anexos', 'Honorarios'][paso - 1]}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 space-y-6">
            {paso === 1 && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4"><FileCheck className="text-primary" /><h2 className="text-xl font-bold">Datos Básicos</h2></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><Label>Lugar *</Label><Input value={formData.lugar} onChange={(e) => handleInputChange('lugar', e.target.value)} /></div>
                  <div><Label>Fecha de firma *</Label><Input type="date" value={formData.fecha} onChange={(e) => handleInputChange('fecha', e.target.value)} /></div>
                  <div>
                    <Label>Año de firma del contrato *</Label>
                    <Input value={formData.anoFirma} onChange={(e) => handleInputChange('anoFirma', e.target.value)} placeholder="Ej: 2025" />
                  </div>
                  <div>
                    <Label>Ejercicio fiscal (año del impuesto) *</Label>
                    <Input value={formData.ejercicioFiscal} onChange={(e) => handleInputChange('ejercicioFiscal', e.target.value)} placeholder="Ej: 2024" />
                    <p className="text-xs text-muted-foreground mt-1">Para regularizaciones puede ser un año anterior</p>
                  </div>
                  <div className="col-span-2">
                    <Label>Tipo de servicio *</Label>
                    <Select value={formData.tipoServicio} onValueChange={(v) => handleInputChange('tipoServicio', v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="imputacion">Solo Imputación</SelectItem>
                        <SelectItem value="alquiler">Solo Alquiler</SelectItem>
                        <SelectItem value="mixto">Mixto (Imputación + Alquiler)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {paso === 2 && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4"><Users className="text-primary" /><h2 className="text-xl font-bold">Datos del Cliente</h2></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2"><Label>Nombre completo *</Label><Input value={formData.clienteNombre} onChange={(e) => handleInputChange('clienteNombre', e.target.value)} /></div>
                  <div><Label>NIE *</Label><Input value={formData.clienteNIE} onChange={(e) => handleInputChange('clienteNIE', e.target.value)} /></div>
                  <div><Label>Email *</Label><Input type="email" value={formData.clienteEmail} onChange={(e) => handleInputChange('clienteEmail', e.target.value)} /></div>
                  <div className="col-span-2"><Label>Domicilio fiscal *</Label><Input value={formData.clienteDomicilioFiscal} onChange={(e) => handleInputChange('clienteDomicilioFiscal', e.target.value)} /></div>
                </div>
              </div>
            )}

            {paso === 3 && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4"><Users className="text-primary" /><h2 className="text-xl font-bold">Titulares del Inmueble</h2></div>
                <p className="text-sm text-muted-foreground">Añada todos los cotitulares del inmueble. La suma de participaciones debe ser 100%.</p>
                {formData.titulares.map((t, i) => (
                  <Card key={i} className="p-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Titular {i + 1}</span>
                      {formData.titulares.length > 1 && <Button variant="ghost" size="sm" onClick={() => eliminarTitular(i)}><Trash2 className="h-4 w-4 text-destructive" /></Button>}
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <Input placeholder="Nombre completo" value={t.nombre} onChange={(e) => handleTitularChange(i, 'nombre', e.target.value)} />
                      <Input placeholder="NIE" value={t.nie} onChange={(e) => handleTitularChange(i, 'nie', e.target.value)} />
                      <Input placeholder="% participación" type="number" value={t.participacion} onChange={(e) => handleTitularChange(i, 'participacion', e.target.value)} />
                    </div>
                  </Card>
                ))}
                <Button variant="outline" className="w-full" onClick={agregarTitular}><Plus className="mr-2 h-4 w-4" />Agregar cotitular</Button>
                <p className={`text-sm ${Math.abs(formData.titulares.reduce((s, t) => s + parseFloat(t.participacion || '0'), 0) - 100) < 0.01 ? 'text-green-600' : 'text-destructive'}`}>
                  Suma de participaciones: {formData.titulares.reduce((s, t) => s + parseFloat(t.participacion || '0'), 0).toFixed(2)}% {Math.abs(formData.titulares.reduce((s, t) => s + parseFloat(t.participacion || '0'), 0) - 100) < 0.01 ? '✓' : '(debe ser 100%)'}
                </p>
              </div>
            )}

            {paso === 4 && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4"><Home className="text-primary" /><h2 className="text-xl font-bold">Datos de los Inmuebles</h2></div>
                <p className="text-sm text-muted-foreground">Añada todos los inmuebles del titular. Puede agregar múltiples propiedades.</p>
                
                {formData.inmuebles.map((inm, inmIdx) => (
                  <Card key={inmIdx} className="p-4">
                    <div className="flex justify-between mb-3">
                      <span className="font-semibold text-lg">Inmueble {inmIdx + 1}</span>
                      {formData.inmuebles.length > 1 && (
                        <Button variant="ghost" size="sm" onClick={() => eliminarInmueble(inmIdx)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <Label>Dirección completa *</Label>
                        <Input 
                          value={inm.direccion} 
                          onChange={(e) => handleInmuebleChange(inmIdx, 'direccion', e.target.value)} 
                        />
                      </div>
                      <div>
                        <Label>Código Postal *</Label>
                        <Input 
                          value={inm.cp} 
                          onChange={(e) => handleInmuebleChange(inmIdx, 'cp', e.target.value)} 
                        />
                      </div>
                      <div>
                        <Label>Comunidad Autónoma *</Label>
                        <Select 
                          value={inm.comunidad} 
                          onValueChange={(v) => handleInmuebleChange(inmIdx, 'comunidad', v)}
                        >
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent>
                            {Object.keys(COMUNIDADES_PROVINCIAS).map(c => (
                              <SelectItem key={c} value={c}>{c}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Provincia *</Label>
                        <Select 
                          value={inm.provincia} 
                          onValueChange={(v) => handleInmuebleChange(inmIdx, 'provincia', v)}
                        >
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent>
                            {getProvinciasForComunidad(inm.comunidad).map(p => (
                              <SelectItem key={p} value={p}>{p}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Referencia Catastral *</Label>
                        <Input 
                          value={inm.refCatastral} 
                          onChange={(e) => handleInmuebleChange(inmIdx, 'refCatastral', e.target.value)} 
                        />
                      </div>
                    </div>
                  </Card>
                ))}
                
                <Button variant="outline" className="w-full" onClick={agregarInmueble}>
                  <Plus className="mr-2 h-4 w-4" />Agregar otro inmueble
                </Button>
              </div>
            )}

            {paso === 5 && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4"><Building className="text-primary" /><h2 className="text-xl font-bold">Anexos de los Inmuebles (Opcional)</h2></div>
                <p className="text-sm text-muted-foreground">Añada garajes, trasteros u otros anexos para cada inmueble si los hay.</p>
                
                {formData.inmuebles.map((inm, inmIdx) => (
                  <Card key={inmIdx} className="p-4">
                    <h3 className="font-semibold mb-3">Anexos del Inmueble {inmIdx + 1}: {inm.direccion || 'Sin dirección'}</h3>
                    
                    {inm.anexos.length === 0 && (
                      <p className="text-center text-muted-foreground py-4 text-sm">No hay anexos añadidos para este inmueble</p>
                    )}
                    
                    {inm.anexos.map((a, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-3 mb-3">
                        <Select 
                          value={a.tipo} 
                          onValueChange={(v) => handleAnexoInmuebleChange(inmIdx, aIdx, 'tipo', v)}
                        >
                          <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Garaje">Garaje</SelectItem>
                            <SelectItem value="Trastero">Trastero</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input 
                          className="flex-1"
                          placeholder="Referencia Catastral" 
                          value={a.refCatastral} 
                          onChange={(e) => handleAnexoInmuebleChange(inmIdx, aIdx, 'refCatastral', e.target.value)} 
                        />
                        <Button variant="ghost" size="sm" onClick={() => eliminarAnexoInmueble(inmIdx, aIdx)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    ))}
                    
                    <Button variant="outline" size="sm" onClick={() => agregarAnexoInmueble(inmIdx)}>
                      <Plus className="mr-2 h-4 w-4" />Añadir anexo
                    </Button>
                  </Card>
                ))}
              </div>
            )}

            {paso === 6 && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4"><DollarSign className="text-primary" /><h2 className="text-xl font-bold">Honorarios y Pago</h2></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2"><Label>Honorarios totales (€) *</Label><Input type="number" placeholder="Ej: 150" value={formData.honorarios} onChange={(e) => handleInputChange('honorarios', e.target.value)} /></div>
                  <div>
                    <Label>Forma de pago</Label>
                    <Select value={formData.formaPago} onValueChange={(v) => handleInputChange('formaPago', v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="adelantado">Por adelantado</SelectItem>
                        <SelectItem value="entrega">A la entrega</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div><Label>Plazo de pago (días) *</Label><Input type="number" value={formData.plazoPago} onChange={(e) => handleInputChange('plazoPago', e.target.value)} /></div>
                </div>
              </div>
            )}

            {/* Navegación */}
            <div className="flex justify-between pt-6 border-t">
              {paso > 1 ? <Button variant="outline" onClick={anteriorPaso}><ChevronLeft className="mr-2 h-4 w-4" />Anterior</Button> : <div />}
              {paso < totalPasos ? (
                <Button onClick={siguientePaso}>Siguiente<ChevronRight className="ml-2 h-4 w-4" /></Button>
              ) : (
                <Button onClick={generarContrato} className="bg-green-600 hover:bg-green-700"><FileText className="mr-2 h-4 w-4" />Generar Contrato</Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GeneradorContratoIRNR;
