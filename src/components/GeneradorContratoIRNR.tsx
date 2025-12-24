import { useState } from 'react';
import { FileText, Download, Plus, Trash2, Building, Users, DollarSign, ChevronRight, ChevronLeft, Check, Home, FileCheck, FileDown } from 'lucide-react';
import { saveAs } from 'file-saver';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { ContractFormData, COMUNIDADES_PROVINCIAS, initialFormData, Titular, Anexo } from '@/types/contract';
import { 
  coverPage, contractIndex, partiesSection, manifestSection, 
  clauses, closingSection, bankDetails, months 
} from '@/data/contractContent';

const GeneradorContratoIRNR = () => {
  const [paso, setPaso] = useState(1);
  const [provinciasDisponibles, setProvinciasDisponibles] = useState(['Alicante', 'Castellón', 'Valencia']);
  const [formData, setFormData] = useState<ContractFormData>(initialFormData);
  const [mostrarContrato, setMostrarContrato] = useState(false);
  const totalPasos = 6;

  const handleInputChange = (name: string, value: string) => {
    if (name === 'inmuebleComunidad') {
      setProvinciasDisponibles(COMUNIDADES_PROVINCIAS[value] || []);
      setFormData(prev => ({ ...prev, [name]: value, inmuebleProvincia: '' }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
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

  const agregarAnexo = () => {
    setFormData(prev => ({
      ...prev,
      anexos: [...prev.anexos, { tipo: 'Parking', refCatastral: '' }]
    }));
  };

  const eliminarAnexo = (index: number) => {
    setFormData(prev => ({
      ...prev,
      anexos: prev.anexos.filter((_, i) => i !== index)
    }));
  };

  const handleAnexoChange = (index: number, field: keyof Anexo, value: string) => {
    const nuevosAnexos = [...formData.anexos];
    nuevosAnexos[index][field] = value;
    setFormData(prev => ({ ...prev, anexos: nuevosAnexos }));
  };

  const validarPaso = (pasoActual: number) => {
    switch (pasoActual) {
      case 1: return formData.lugar && formData.fecha && formData.ejercicioFiscal;
      case 2: return formData.clienteNombre && formData.clienteNIE && formData.clienteEmail && formData.clienteDomicilioFiscal;
      case 3: return formData.titulares.every(t => t.nombre && t.nie && t.participacion);
      case 4: return formData.inmuebleDireccion && formData.inmuebleCP && formData.inmuebleProvincia && formData.inmuebleComunidad && formData.inmuebleRefCatastral;
      case 5: return true;
      case 6: return formData.honorarios && formData.plazoPago;
      default: return true;
    }
  };

  const generarContrato = () => {
    if (!formData.clienteNombre || !formData.clienteNIE || !formData.inmuebleDireccion || !formData.honorarios) {
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
    'Parking': 'Parking',
    'Trastero': 'Komórka lokatorska',
    'Garaje': 'Garaż'
  };

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
          body { font-family: 'Times New Roman', serif; font-size: 10pt; line-height: 1.3; }
          .cover-page { page-break-after: always; text-align: center; padding-top: 150px; }
          .index-page { page-break-after: always; }
          .bilingual-table { width: 100%; border-collapse: collapse; table-layout: fixed; }
          .bilingual-table td { width: 50%; padding: 6px 10px; vertical-align: top; border: 1px solid #999; font-size: 9pt; }
          .col-es { background-color: #ffffff; }
          .col-pl { background-color: #f8f8f8; }
          .header-row td { font-weight: bold; text-align: center; background-color: #e8e8e8 !important; font-size: 10pt; padding: 8px; }
          .section-header td { font-weight: bold; background-color: #f0f0f0 !important; padding: 10px 6px; }
          .clause-id { font-weight: bold; }
          .signature-section { margin-top: 40px; page-break-inside: avoid; }
          .signature-table { width: 100%; margin-top: 60px; }
          .signature-table td { width: 45%; text-align: center; padding-top: 80px; border-top: 1px solid #000; vertical-align: top; }
          .page-break { page-break-before: always; }
          h1 { font-size: 14pt; margin: 10px 0; }
          h2 { font-size: 12pt; margin: 8px 0; }
        </style>
      </head>
      <body>${contenido.innerHTML}</body>
      </html>
    `;
    const blob = new Blob(['\ufeff', htmlWord], { type: 'application/msword' });
    saveAs(blob, `PGK_M210_${formData.clienteNIE}_${formData.ejercicioFiscal}_V1.doc`);
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
            <Button onClick={() => window.print()} className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" /> Imprimir PDF
            </Button>
          </div>
        </div>

        <div className="contract-content bg-white p-6 text-xs leading-relaxed shadow-lg" style={{ fontSize: '10pt' }}>
          
          {/* ==================== PORTADA ==================== */}
          <div className="cover-page text-center py-16 border-b-4 border-primary mb-8" style={{ pageBreakAfter: 'always' }}>
            <div className="mb-12">
              <h1 className="text-xl font-bold mb-2">{coverPage.titleEs}</h1>
              <h1 className="text-lg font-bold text-muted-foreground italic">{coverPage.titlePl}</h1>
            </div>
            
            <div className="my-8">
              <p className="text-base mb-1">Modelo 210 – IRNR</p>
              <p className="text-base text-muted-foreground">Model 210 – IRNR</p>
            </div>
            
            <div className="my-16 py-8 border-y-2 border-muted">
              <p className="text-lg font-bold mb-2">{formData.clienteNombre}</p>
              <p className="text-muted-foreground">NIE: {formData.clienteNIE}</p>
              {formData.titulares.length > 1 && (
                <p className="text-sm text-muted-foreground mt-2">
                  y {formData.titulares.length - 1} cotitular{formData.titulares.length > 2 ? 'es' : ''} más
                </p>
              )}
            </div>
            
            <div className="mt-12">
              <p>En {formData.lugar}, a {fechaFormateada.es}</p>
              <p className="text-muted-foreground">W {formData.lugar}, dnia {fechaFormateada.pl}</p>
            </div>
          </div>

          {/* ==================== ÍNDICE ==================== */}
          <div className="index-page mb-8" style={{ pageBreakAfter: 'always' }}>
            <table className="bilingual-table w-full border-collapse">
              <thead>
                <tr className="header-row">
                  <td className="text-center py-3 font-bold bg-muted">{contractIndex.titleEs}</td>
                  <td className="text-center py-3 font-bold bg-muted">{contractIndex.titlePl}</td>
                </tr>
              </thead>
              <tbody>
                {contractIndex.items.map((item, i) => (
                  <tr key={i}>
                    <td className="col-es py-2 border border-border">{item.es}</td>
                    <td className="col-pl py-2 border border-border">{item.pl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ==================== CONTENIDO BILINGÜE ==================== */}
          <div className="page-break" style={{ pageBreakBefore: 'always' }}></div>
          
          <table className="bilingual-table w-full border-collapse" style={{ tableLayout: 'fixed' }}>
            <colgroup>
              <col style={{ width: '50%' }} />
              <col style={{ width: '50%' }} />
            </colgroup>
            <tbody>
              {/* Fecha y lugar */}
              <tr className="header-row">
                <td className="py-3 text-center font-semibold bg-muted/50 border border-border">
                  En {formData.lugar}, a {fechaFormateada.es}
                </td>
                <td className="py-3 text-center font-semibold bg-muted/50 border border-border">
                  W {formData.lugar}, dnia {fechaFormateada.pl}
                </td>
              </tr>

              {/* LAS PARTES */}
              <tr className="section-header">
                <td className="py-3 text-center font-bold bg-muted border border-border">{partiesSection.titleEs}</td>
                <td className="py-3 text-center font-bold bg-muted border border-border">{partiesSection.titlePl}</td>
              </tr>
              <tr>
                <td className="col-es p-3 border border-border align-top">
                  <strong>De una parte</strong>, POLSKA GRUPA KONSULTINGOWA, S.L., NIF B-22682827, C/ Matilde Peñaranda, 27, 5.º A, 03183 Torrevieja (Alicante), inscrita en el Registro Mercantil de Alicante (S-8, H-A 199665, I/A-1 de 31.07.25), representada por D.ª Natalia Małgorzata Sikora (en adelante, <strong>"EL PRESTADOR"</strong>).
                </td>
                <td className="col-pl p-3 border border-border align-top">
                  <strong>Z jednej strony</strong>, POLSKA GRUPA KONSULTINGOWA, S.L., NIF B-22682827, C/ Matilde Peñaranda, 27, 5.º A, 03183 Torrevieja (Alicante), wpisana do Rejestru Handlowego w Alicante (S-8, H-A 199665, I/A-1 z dnia 31.07.25), reprezentowana przez Panią Natalię Małgorzatę Sikorę (zwana dalej <strong>"USŁUGODAWCĄ"</strong>).
                </td>
              </tr>
              <tr>
                <td className="col-es p-3 border border-border align-top">
                  <strong>Y de otra parte</strong>, D./D.ª <strong>{formData.clienteNombre}</strong>, identificado/a con NIE <strong>{formData.clienteNIE}</strong>, correo electrónico a efectos de notificaciones <strong>{formData.clienteEmail}</strong>, con domicilio fiscal en <strong>{formData.clienteDomicilioFiscal}</strong>, quien actúa en su propio nombre{formData.titulares.length > 1 ? ' y en nombre y representación del resto de cotitulares del inmueble descrito más adelante, manifestando contar con autorización suficiente para ello' : ''}, en adelante, <strong>"EL CLIENTE"</strong>.
                </td>
                <td className="col-pl p-3 border border-border align-top">
                  <strong>Z drugiej strony</strong>, Pan/Pani <strong>{formData.clienteNombre}</strong>, legitymujący/a się numerem NIE <strong>{formData.clienteNIE}</strong>, adres e-mail do celów powiadomień <strong>{formData.clienteEmail}</strong>, z siedzibą podatkową pod adresem <strong>{formData.clienteDomicilioFiscal}</strong>, działający/a we własnym imieniu{formData.titulares.length > 1 ? ' oraz w imieniu i na rzecz pozostałych współwłaścicieli nieruchomości opisanej poniżej, oświadczając, że posiada wystarczające upoważnienie w tym zakresie' : ''}, zwany/a dalej <strong>"KLIENTEM"</strong>.
                </td>
              </tr>

              {/* MANIFIESTAN */}
              <tr className="section-header">
                <td className="py-3 text-center font-bold bg-muted border border-border">{manifestSection.titleEs}</td>
                <td className="py-3 text-center font-bold bg-muted border border-border">{manifestSection.titlePl}</td>
              </tr>
              {manifestSection.items.map((item, i) => (
                <tr key={i}>
                  <td className="col-es p-3 border border-border align-top">
                    <strong>{item.numeral}</strong>{' '}
                    {i === 1 
                      ? `Que EL CLIENTE declara su condición de no residente fiscal en España, conforme a lo dispuesto en el Real Decreto Legislativo 5/2004, y es titular${formData.titulares.length > 1 ? ', conjuntamente con otros cotitulares,' : ''} del bien inmueble sito en ${formData.inmuebleDireccion}, CP ${formData.inmuebleCP}, ${formData.inmuebleProvincia} (${formData.inmuebleComunidad}). Como titular de rentas inmobiliarias en territorio español, reconoce expresamente su condición de obligado tributario y su deber legal de autoliquidar el Impuesto sobre la Renta de No Residentes (Modelo 210), ante la AEAT, asumiendo que el incumplimiento de los plazos legales puede derivar en responsabilidades, sanciones o recargos según la Ley General Tributaria.`
                      : item.es
                    }
                  </td>
                  <td className="col-pl p-3 border border-border align-top">
                    <strong>{item.numeral}</strong>{' '}
                    {i === 1 
                      ? `Że KLIENT oświadcza, iż posiada status nierezydenta podatkowego w Hiszpanii, zgodnie z postanowieniami Królewskiego Dekretu Legislacyjnego 5/2004, oraz jest właścicielem${formData.titulares.length > 1 ? ', wspólnie z innymi współwłaścicielami,' : ''} nieruchomości położonej pod adresem ${formData.inmuebleDireccion}, kod pocztowy ${formData.inmuebleCP}, ${formData.inmuebleProvincia} (${formData.inmuebleComunidad}). Jako posiadacz dochodów z nieruchomości na terytorium hiszpańskim, wyraźnie uznaje swój status podatnika oraz prawny obowiązek samodzielnego rozliczenia Podatku Dochodowego od Nierezydentów (Formularz 210) przed AEAT, przyjmując do wiadomości, że niedotrzymanie terminów ustawowych może skutkować odpowiedzialnością, sankcjami lub dopłatami zgodnie z Ogólną Ordynacją Podatkową.`
                      : item.pl
                    }
                  </td>
                </tr>
              ))}

              {/* CLÁUSULAS */}
              {clauses.map((clause) => (
                <>
                  <tr key={`header-${clause.number}`} className="section-header">
                    <td className="py-3 text-center font-bold bg-muted border border-border">{clause.titleEs}</td>
                    <td className="py-3 text-center font-bold bg-muted border border-border">{clause.titlePl}</td>
                  </tr>
                  {clause.sections.map((section) => {
                    // Contenido dinámico para cláusula QUINTA
                    if (clause.number === 'QUINTA' && section.id === '5.1') {
                      return (
                        <tr key={section.id}>
                          <td className="col-es p-3 border border-border align-top">
                            <span className="clause-id">{section.id}.</span> EL CLIENTE contrata a EL PRESTADOR la gestión fiscal del Impuesto sobre la Renta de No Residentes (IRNR) correspondiente al ejercicio <strong>{formData.ejercicioFiscal}</strong>, en relación con el inmueble sito en <strong>{formData.inmuebleDireccion}, {formData.inmuebleCP} {formData.inmuebleProvincia}</strong>, con referencia catastral <strong>{formData.inmuebleRefCatastral}</strong>, del que son cotitulares las siguientes personas físicas no residentes fiscales en España:
                            <table className="w-full mt-2 text-xs border-collapse">
                              <tbody>
                                {formData.titulares.map((t, i) => (
                                  <tr key={i}>
                                    <td className="border border-border/50 p-1">Titular {i+1}:</td>
                                    <td className="border border-border/50 p-1">{t.nombre}</td>
                                    <td className="border border-border/50 p-1">NIE {t.nie}</td>
                                    <td className="border border-border/50 p-1">{t.participacion}%</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            {formData.anexos.length > 0 && (
                              <>
                                <p className="mt-2">Anexos del inmueble:</p>
                                <ul className="list-disc ml-4">
                                  {formData.anexos.map((a, i) => (
                                    <li key={i}>{a.tipo}: Ref. Cat. {a.refCatastral}</li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </td>
                          <td className="col-pl p-3 border border-border align-top">
                            <span className="clause-id">{section.id}.</span> KLIENT zleca USŁUGODAWCY zarządzanie podatkowe w zakresie Podatku Dochodowego od Nierezydentów (IRNR) za rok podatkowy <strong>{formData.ejercicioFiscal}</strong>, w odniesieniu do nieruchomości położonej pod adresem <strong>{formData.inmuebleDireccion}, {formData.inmuebleCP} {formData.inmuebleProvincia}</strong>, o numerze katastralnym <strong>{formData.inmuebleRefCatastral}</strong>, której współwłaścicielami są następujące osoby fizyczne niebędące rezydentami podatkowymi w Hiszpanii:
                            <table className="w-full mt-2 text-xs border-collapse">
                              <tbody>
                                {formData.titulares.map((t, i) => (
                                  <tr key={i}>
                                    <td className="border border-border/50 p-1">Właściciel {i+1}:</td>
                                    <td className="border border-border/50 p-1">{t.nombre}</td>
                                    <td className="border border-border/50 p-1">NIE {t.nie}</td>
                                    <td className="border border-border/50 p-1">{t.participacion}%</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            {formData.anexos.length > 0 && (
                              <>
                                <p className="mt-2">Aneksy nieruchomości:</p>
                                <ul className="list-disc ml-4">
                                  {formData.anexos.map((a, i) => (
                                    <li key={i}>{tipoAnexoPl[a.tipo] || a.tipo}: Nr kat. {a.refCatastral}</li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </td>
                        </tr>
                      );
                    }

                    // Contenido dinámico para honorarios
                    if (clause.number === 'QUINTA' && section.id === '5.4') {
                      return (
                        <tr key={section.id}>
                          <td className="col-es p-3 border border-border align-top">
                            <span className="clause-id">{section.id}.</span> Como contraprestación por los servicios descritos, los honorarios profesionales de EL PRESTADOR ascienden a <strong>{formData.honorarios} EUROS</strong> (más los impuestos indirectos que resulten aplicables). Este importe incluye: La gestión integral de las declaraciones de los {formData.titulares.length} cotitular{formData.titulares.length > 1 ? 'es' : ''} (imputación{formData.tipoServicio !== 'imputacion' ? ', alquiler' : ''}{formData.anexos.length > 0 ? ` y ${formData.anexos.length} anexo${formData.anexos.length > 1 ? 's' : ''}` : ''}). Emisión de un informe técnico-fiscal. Custodia digital de la documentación durante el plazo legal de 4 años.
                          </td>
                          <td className="col-pl p-3 border border-border align-top">
                            <span className="clause-id">{section.id}.</span> Jako wynagrodzenie za opisane usługi, honoraria zawodowe USŁUGODAWCY wynoszą <strong>{formData.honorarios} EURO</strong> (plus odpowiednie podatki pośrednie). Kwota ta obejmuje: Kompleksowe zarządzanie deklaracjami {formData.titulares.length} współwłaściciel{formData.titulares.length > 1 ? 'i' : 'a'} (przypisanie{formData.tipoServicio !== 'imputacion' ? ', najem' : ''}{formData.anexos.length > 0 ? ` i ${formData.anexos.length} aneks${formData.anexos.length > 1 ? 'y' : ''}` : ''}). Wydanie raportu techniczno-podatkowego. Cyfrowe przechowywanie dokumentacji przez ustawowy okres 4 lat.
                          </td>
                        </tr>
                      );
                    }

                    // Contenido dinámico para forma de pago
                    if (clause.number === 'QUINTA' && section.id === '5.6') {
                      return (
                        <tr key={section.id}>
                          <td className="col-es p-3 border border-border align-top">
                            <span className="clause-id">{section.id}.</span> Los honorarios se facturarán {formData.formaPago === 'adelantado' ? 'por adelantado' : 'a la entrega'}, y deberán abonarse en el plazo de <strong>{formData.plazoPago} días</strong> hábiles desde la emisión de la factura, mediante transferencia a:
                            <table className="w-full mt-2 text-xs">
                              <tbody>
                                <tr><td className="p-1">Entidad:</td><td className="p-1 font-semibold">{bankDetails.entity}</td></tr>
                                <tr><td className="p-1">Titular:</td><td className="p-1">{bankDetails.holder}</td></tr>
                                <tr><td className="p-1">IBAN:</td><td className="p-1 font-semibold">{bankDetails.iban}</td></tr>
                                <tr><td className="p-1">BIC:</td><td className="p-1">{bankDetails.bic}</td></tr>
                                <tr><td className="p-1">Concepto:</td><td className="p-1">IRNR {formData.ejercicioFiscal} – {formData.clienteNombre} {formData.clienteNIE}</td></tr>
                              </tbody>
                            </table>
                          </td>
                          <td className="col-pl p-3 border border-border align-top">
                            <span className="clause-id">{section.id}.</span> Honoraria będą fakturowane {formData.formaPago === 'adelantado' ? 'z góry' : 'przy odbiorze'} i muszą zostać uiszczone w terminie <strong>{formData.plazoPago} dni</strong> roboczych od wystawienia faktury, przelewem na:
                            <table className="w-full mt-2 text-xs">
                              <tbody>
                                <tr><td className="p-1">Bank:</td><td className="p-1 font-semibold">{bankDetails.entity}</td></tr>
                                <tr><td className="p-1">Odbiorca:</td><td className="p-1">{bankDetails.holder}</td></tr>
                                <tr><td className="p-1">IBAN:</td><td className="p-1 font-semibold">{bankDetails.iban}</td></tr>
                                <tr><td className="p-1">BIC:</td><td className="p-1">{bankDetails.bic}</td></tr>
                                <tr><td className="p-1">Tytuł:</td><td className="p-1">IRNR {formData.ejercicioFiscal} – {formData.clienteNombre} {formData.clienteNIE}</td></tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      );
                    }

                    // Cláusulas estándar
                    return (
                      <tr key={section.id}>
                        <td className="col-es p-3 border border-border align-top">
                          <span className="clause-id">{section.id}.</span> {section.contentEs}
                        </td>
                        <td className="col-pl p-3 border border-border align-top">
                          <span className="clause-id">{section.id}.</span> {section.contentPl}
                        </td>
                      </tr>
                    );
                  })}
                </>
              ))}

              {/* CIERRE */}
              <tr>
                <td className="col-es p-4 border border-border align-top">
                  {closingSection.declarationEs}
                </td>
                <td className="col-pl p-4 border border-border align-top">
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
            .no-print { display: none !important; }
            .contract-content { box-shadow: none !important; padding: 0 !important; }
            .cover-page { page-break-after: always; }
            .index-page { page-break-after: always; }
            .page-break { page-break-before: always; }
            body { font-size: 9pt; }
          }
          .bilingual-table { border-collapse: collapse; table-layout: fixed; width: 100%; }
          .bilingual-table td { vertical-align: top; }
          .col-es { background: hsl(var(--background)); }
          .col-pl { background: hsl(var(--muted) / 0.3); }
          .section-header td { background: hsl(var(--muted)) !important; }
          .header-row td { background: hsl(var(--muted) / 0.5) !important; }
          .clause-id { font-weight: 600; }
        `}</style>
      </div>
    );
  }

  // ==================== FORMULARIO ====================
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
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
              Paso {paso}: {['Datos Básicos', 'Cliente', 'Titulares', 'Inmueble', 'Anexos', 'Honorarios'][paso - 1]}
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
                  <div><Label>Fecha *</Label><Input type="date" value={formData.fecha} onChange={(e) => handleInputChange('fecha', e.target.value)} /></div>
                  <div><Label>Ejercicio fiscal *</Label><Input value={formData.ejercicioFiscal} onChange={(e) => handleInputChange('ejercicioFiscal', e.target.value)} /></div>
                  <div>
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
                <div className="flex items-center gap-3 mb-4"><Home className="text-primary" /><h2 className="text-xl font-bold">Datos del Inmueble</h2></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2"><Label>Dirección completa *</Label><Input value={formData.inmuebleDireccion} onChange={(e) => handleInputChange('inmuebleDireccion', e.target.value)} /></div>
                  <div><Label>Código Postal *</Label><Input value={formData.inmuebleCP} onChange={(e) => handleInputChange('inmuebleCP', e.target.value)} /></div>
                  <div>
                    <Label>Comunidad Autónoma *</Label>
                    <Select value={formData.inmuebleComunidad} onValueChange={(v) => handleInputChange('inmuebleComunidad', v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>{Object.keys(COMUNIDADES_PROVINCIAS).map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Provincia *</Label>
                    <Select value={formData.inmuebleProvincia} onValueChange={(v) => handleInputChange('inmuebleProvincia', v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>{provinciasDisponibles.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div><Label>Referencia Catastral *</Label><Input value={formData.inmuebleRefCatastral} onChange={(e) => handleInputChange('inmuebleRefCatastral', e.target.value)} /></div>
                </div>
              </div>
            )}

            {paso === 5 && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4"><Building className="text-primary" /><h2 className="text-xl font-bold">Anexos del Inmueble (Opcional)</h2></div>
                <p className="text-sm text-muted-foreground">Añada garajes, trasteros u otros anexos si los hay.</p>
                {formData.anexos.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">No hay anexos añadidos</p>
                )}
                {formData.anexos.map((a, i) => (
                  <Card key={i} className="p-4">
                    <div className="flex justify-between mb-2">
                      <span>Anexo {i + 1}</span>
                      <Button variant="ghost" size="sm" onClick={() => eliminarAnexo(i)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Select value={a.tipo} onValueChange={(v) => handleAnexoChange(i, 'tipo', v)}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Parking">Parking</SelectItem>
                          <SelectItem value="Trastero">Trastero</SelectItem>
                          <SelectItem value="Garaje">Garaje</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input placeholder="Referencia Catastral" value={a.refCatastral} onChange={(e) => handleAnexoChange(i, 'refCatastral', e.target.value)} />
                    </div>
                  </Card>
                ))}
                <Button variant="outline" className="w-full" onClick={agregarAnexo}><Plus className="mr-2 h-4 w-4" />Agregar anexo</Button>
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
