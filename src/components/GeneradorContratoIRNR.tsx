import { useState } from 'react';
import { FileText, Download, Plus, Trash2, Building, Users, DollarSign, ChevronRight, ChevronLeft, Check, Home, FileCheck, FileDown } from 'lucide-react';
import { saveAs } from 'file-saver';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { ContractFormData, COMUNIDADES_PROVINCIAS, initialFormData, Titular, Anexo } from '@/types/contract';

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
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const mesesPL = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];
    const d = new Date(fecha + 'T00:00:00');
    return {
      es: `${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`,
      pl: `${d.getDate()} ${mesesPL[d.getMonth()]} ${d.getFullYear()} r.`
    };
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
          @page { margin: 2cm 2.5cm; }
          body { font-family: 'Times New Roman', serif; font-size: 11pt; line-height: 1.4; }
          h1, h2, h3 { text-align: center; }
          .bilingual-table { width: 100%; border-collapse: collapse; }
          .bilingual-table td { width: 50%; padding: 8px 12px; vertical-align: top; border: 1px solid #ddd; }
          .col-es { background: #fafafa; }
          .col-pl { background: #f5f5f5; }
          .cover-page { page-break-after: always; text-align: center; padding-top: 200px; }
          .index-page { page-break-after: always; }
          .signature-section { margin-top: 60px; }
          .signature-box { display: inline-block; width: 45%; text-align: center; }
          .page-break { page-break-before: always; }
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
              <Download className="mr-2 h-4 w-4" /> Descargar PDF
            </Button>
          </div>
        </div>

        <div className="contract-content bg-white p-8 text-sm leading-relaxed shadow-lg">
          {/* PORTADA */}
          <div className="cover-page text-center py-20 border-b-4 border-primary mb-8">
            <h1 className="text-2xl font-bold mb-2">CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES</h1>
            <h1 className="text-2xl font-bold mb-8 text-muted-foreground">UMOWA O ŚWIADCZENIE USŁUG PROFESJONALNYCH</h1>
            <p className="text-lg mb-2">Modelo 210 – IRNR</p>
            <p className="text-lg mb-12 text-muted-foreground">Model 210 – IRNR</p>
            <div className="my-16 py-8 border-y border-muted">
              <p className="text-xl font-semibold">{formData.clienteNombre}</p>
              <p className="text-muted-foreground">NIE: {formData.clienteNIE}</p>
            </div>
            <p className="mt-8">{fechaFormateada.es}</p>
            <p className="text-muted-foreground">{fechaFormateada.pl}</p>
          </div>

          {/* ÍNDICE */}
          <div className="index-page mb-8">
            <table className="bilingual-table w-full mb-8">
              <thead><tr><td className="font-bold text-lg py-4 text-center">ÍNDICE</td><td className="font-bold text-lg py-4 text-center">SPIS TREŚCI</td></tr></thead>
              <tbody>
                <tr><td>Las Partes</td><td>Strony Umowy</td></tr>
                <tr><td>Manifiestan</td><td>Oświadczają</td></tr>
                <tr><td>Primera – Objeto y Alcance</td><td>Pierwsza – Przedmiot i Zakres</td></tr>
                <tr><td>Segunda – Servicios y Ejecución Técnica</td><td>Druga – Usługi i Realizacja Techniczna</td></tr>
                <tr><td>Tercera – Obligaciones del Prestador</td><td>Trzecia – Obowiązki Usługodawcy</td></tr>
                <tr><td>Cuarta – Obligaciones del Cliente</td><td>Czwarta – Obowiązki Klienta</td></tr>
                <tr><td>Quinta – Honorarios y Forma de Pago</td><td>Piąta – Honorarium i Forma Płatności</td></tr>
                <tr><td>Sexta – Duración y Vigencia</td><td>Szósta – Czas Trwania</td></tr>
                <tr><td>Séptima – Derecho de Desistimiento</td><td>Siódma – Prawo do Odstąpienia</td></tr>
                <tr><td>Octava – Resolución del Contrato</td><td>Ósma – Rozwiązanie Umowy</td></tr>
                <tr><td>Novena – Responsabilidad</td><td>Dziewiąta – Odpowiedzialność</td></tr>
                <tr><td>Décima – Protección de Datos</td><td>Dziesiąta – Ochrona Danych</td></tr>
                <tr><td>Undécima – Comunicaciones</td><td>Jedenasta – Komunikacja</td></tr>
                <tr><td>Duodécima – Propiedad Intelectual</td><td>Dwunasta – Własność Intelektualna</td></tr>
                <tr><td>Decimotercera – Modificaciones</td><td>Trzynasta – Zmiany Umowy</td></tr>
                <tr><td>Decimocuarta – Legislación y Jurisdicción</td><td>Czternasta – Prawo i Jurysdykcja</td></tr>
                <tr><td>Decimoquinta – Idioma del Contrato</td><td>Piętnasta – Język Umowy</td></tr>
              </tbody>
            </table>
          </div>

          {/* CONTENIDO BILINGÜE EN 2 COLUMNAS */}
          <div className="page-break"></div>
          
          <table className="bilingual-table w-full">
            <tbody>
              {/* Encabezado */}
              <tr>
                <td className="col-es text-center py-4">En {formData.lugar}, a {fechaFormateada.es}</td>
                <td className="col-pl text-center py-4">W {formData.lugar}, dnia {fechaFormateada.pl}</td>
              </tr>
              
              {/* LAS PARTES */}
              <tr><td className="col-es font-bold text-center py-3">LAS PARTES</td><td className="col-pl font-bold text-center py-3">STRONY UMOWY</td></tr>
              <tr>
                <td className="col-es"><strong>De una parte</strong>, POLSKA GRUPA KONSULTINGOWA, S.L., NIF B-22682827, C/ Matilde Peñaranda, 27, 5.º A, 03183 Torrevieja (Alicante), representada por D.ª Natalia Małgorzata Sikora (en adelante, <strong>EL PRESTADOR</strong>).</td>
                <td className="col-pl"><strong>Z jednej strony</strong>, POLSKA GRUPA KONSULTINGOWA, S.L., NIF B-22682827, C/ Matilde Peñaranda, 27, 5.º A, 03183 Torrevieja (Alicante), reprezentowana przez Natalię Małgorzatę Sikorę (zwana dalej <strong>USŁUGODAWCĄ</strong>).</td>
              </tr>
              <tr>
                <td className="col-es"><strong>Y de otra parte</strong>, D./D.ª <strong>{formData.clienteNombre}</strong>, NIE <strong>{formData.clienteNIE}</strong>, email <strong>{formData.clienteEmail}</strong>, domicilio fiscal en <strong>{formData.clienteDomicilioFiscal}</strong> (en adelante, <strong>EL CLIENTE</strong>).</td>
                <td className="col-pl"><strong>Z drugiej strony</strong>, Pan/Pani <strong>{formData.clienteNombre}</strong>, NIE <strong>{formData.clienteNIE}</strong>, e-mail <strong>{formData.clienteEmail}</strong>, adres podatkowy <strong>{formData.clienteDomicilioFiscal}</strong> (zwany/a dalej <strong>KLIENTEM</strong>).</td>
              </tr>

              {/* MANIFIESTAN */}
              <tr><td className="col-es font-bold text-center py-3">MANIFIESTAN</td><td className="col-pl font-bold text-center py-3">OŚWIADCZAJĄ</td></tr>
              <tr>
                <td className="col-es"><strong>I.</strong> Que EL PRESTADOR es una firma especializada en consultoría tributaria internacional con experiencia en fiscalidad de no residentes en España.</td>
                <td className="col-pl"><strong>I.</strong> USŁUGODAWCA jest firmą specjalizującą się w międzynarodowym doradztwie podatkowym z doświadczeniem w opodatkowaniu nierezydentów w Hiszpanii.</td>
              </tr>
              <tr>
                <td className="col-es"><strong>II.</strong> Que EL CLIENTE es no residente fiscal en España y titular del inmueble sito en <strong>{formData.inmuebleDireccion}, {formData.inmuebleCP} {formData.inmuebleProvincia}</strong>, Ref. Cat. <strong>{formData.inmuebleRefCatastral}</strong>.</td>
                <td className="col-pl"><strong>II.</strong> KLIENT jest nierezydentem podatkowym w Hiszpanii i właścicielem nieruchomości położonej pod adresem <strong>{formData.inmuebleDireccion}, {formData.inmuebleCP} {formData.inmuebleProvincia}</strong>, Ref. Kat. <strong>{formData.inmuebleRefCatastral}</strong>.</td>
              </tr>

              {/* QUINTA - HONORARIOS */}
              <tr><td className="col-es font-bold text-center py-3">QUINTA – HONORARIOS Y PAGO</td><td className="col-pl font-bold text-center py-3">PIĄTA – HONORARIUM I PŁATNOŚĆ</td></tr>
              <tr>
                <td className="col-es">Honorarios: <strong>{formData.honorarios} EUR</strong> (+ impuestos). Pago {formData.formaPago === 'adelantado' ? 'por adelantado' : 'a la entrega'} en {formData.plazoPago} días.</td>
                <td className="col-pl">Honorarium: <strong>{formData.honorarios} EUR</strong> (+ podatki). Płatność {formData.formaPago === 'adelantado' ? 'z góry' : 'przy odbiorze'} w ciągu {formData.plazoPago} dni.</td>
              </tr>
              <tr>
                <td className="col-es">IBAN: ES34 1583 0001 1493 3147 3575<br/>Concepto: IRNR {formData.ejercicioFiscal} – {formData.clienteNombre}</td>
                <td className="col-pl">IBAN: ES34 1583 0001 1493 3147 3575<br/>Tytuł: IRNR {formData.ejercicioFiscal} – {formData.clienteNombre}</td>
              </tr>

              {/* Cláusula del idioma */}
              <tr><td className="col-es font-bold text-center py-3">DECIMOQUINTA – IDIOMA</td><td className="col-pl font-bold text-center py-3">PIĘTNASTA – JĘZYK</td></tr>
              <tr>
                <td className="col-es">Este contrato se formaliza en español y polaco. En caso de discrepancia, prevalece la versión española.</td>
                <td className="col-pl">Niniejsza umowa jest sporządzona w języku hiszpańskim i polskim. W przypadku rozbieżności pierwszeństwo ma wersja hiszpańska.</td>
              </tr>

              {/* Cierre */}
              <tr>
                <td className="col-es py-4">Ambas partes declaran haber leído, comprendido y aceptado el presente contrato.</td>
                <td className="col-pl py-4">Obie strony oświadczają, że przeczytały, zrozumiały i zaakceptowały niniejszą umowę.</td>
              </tr>
            </tbody>
          </table>

          {/* FIRMAS - Solo 2 espacios */}
          <div className="signature-section mt-16 pt-8 border-t">
            <div className="flex justify-between mt-12">
              <div className="text-center w-2/5">
                <div className="border-t-2 border-foreground w-full mb-2 mt-16"></div>
                <p className="font-bold">EL PRESTADOR / USŁUGODAWCA</p>
                <p className="text-sm text-muted-foreground">POLSKA GRUPA KONSULTINGOWA, S.L.</p>
              </div>
              <div className="text-center w-2/5">
                <div className="border-t-2 border-foreground w-full mb-2 mt-16"></div>
                <p className="font-bold">EL CLIENTE / KLIENT</p>
                <p className="text-sm">{formData.clienteNombre}</p>
                <p className="text-sm text-muted-foreground">NIE: {formData.clienteNIE}</p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media print {
            .no-print { display: none !important; }
            .contract-content { box-shadow: none !important; }
            .page-break { page-break-before: always; }
            .cover-page { page-break-after: always; }
            .index-page { page-break-after: always; }
          }
          .bilingual-table td { padding: 8px 12px; vertical-align: top; border: 1px solid hsl(var(--border)); }
          .col-es { background: hsl(var(--muted) / 0.3); }
          .col-pl { background: hsl(var(--muted) / 0.5); }
        `}</style>
      </div>
    );
  }

  // FORMULARIO
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
                        <SelectItem value="mixto">Mixto</SelectItem>
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
                <div className="flex items-center gap-3 mb-4"><Users className="text-primary" /><h2 className="text-xl font-bold">Titulares</h2></div>
                {formData.titulares.map((t, i) => (
                  <Card key={i} className="p-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Titular {i + 1}</span>
                      {formData.titulares.length > 1 && <Button variant="ghost" size="sm" onClick={() => eliminarTitular(i)}><Trash2 className="h-4 w-4 text-destructive" /></Button>}
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <Input placeholder="Nombre" value={t.nombre} onChange={(e) => handleTitularChange(i, 'nombre', e.target.value)} />
                      <Input placeholder="NIE" value={t.nie} onChange={(e) => handleTitularChange(i, 'nie', e.target.value)} />
                      <Input placeholder="% participación" type="number" value={t.participacion} onChange={(e) => handleTitularChange(i, 'participacion', e.target.value)} />
                    </div>
                  </Card>
                ))}
                <Button variant="outline" className="w-full" onClick={agregarTitular}><Plus className="mr-2 h-4 w-4" />Agregar titular</Button>
                <p className="text-sm text-muted-foreground">Suma: {formData.titulares.reduce((s, t) => s + parseFloat(t.participacion || '0'), 0).toFixed(2)}% (debe ser 100%)</p>
              </div>
            )}

            {paso === 4 && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4"><Home className="text-primary" /><h2 className="text-xl font-bold">Inmueble</h2></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2"><Label>Dirección *</Label><Input value={formData.inmuebleDireccion} onChange={(e) => handleInputChange('inmuebleDireccion', e.target.value)} /></div>
                  <div><Label>CP *</Label><Input value={formData.inmuebleCP} onChange={(e) => handleInputChange('inmuebleCP', e.target.value)} /></div>
                  <div>
                    <Label>Comunidad *</Label>
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
                  <div><Label>Ref. Catastral *</Label><Input value={formData.inmuebleRefCatastral} onChange={(e) => handleInputChange('inmuebleRefCatastral', e.target.value)} /></div>
                </div>
              </div>
            )}

            {paso === 5 && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4"><Building className="text-primary" /><h2 className="text-xl font-bold">Anexos (Opcional)</h2></div>
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
                      <Input placeholder="Ref. Catastral" value={a.refCatastral} onChange={(e) => handleAnexoChange(i, 'refCatastral', e.target.value)} />
                    </div>
                  </Card>
                ))}
                <Button variant="outline" className="w-full" onClick={agregarAnexo}><Plus className="mr-2 h-4 w-4" />Agregar anexo</Button>
              </div>
            )}

            {paso === 6 && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4"><DollarSign className="text-primary" /><h2 className="text-xl font-bold">Honorarios</h2></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2"><Label>Honorarios (€) *</Label><Input type="number" value={formData.honorarios} onChange={(e) => handleInputChange('honorarios', e.target.value)} /></div>
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
                  <div><Label>Plazo (días) *</Label><Input type="number" value={formData.plazoPago} onChange={(e) => handleInputChange('plazoPago', e.target.value)} /></div>
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
