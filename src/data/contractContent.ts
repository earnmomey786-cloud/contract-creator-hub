// Contenido completo del contrato bilingüe ES-PL
// Contrato DEFINITIVO IRNR - 28 Cláusulas
// Traducción profesional al polaco jurídico

export interface ContractSection {
  id: string;
  titleEs: string;
  titlePl: string;
  contentEs: string[];
  contentPl: string[];
}

export interface ContractClause {
  number: string;
  titleEs: string;
  titlePl: string;
  sections: {
    id: string;
    contentEs: string;
    contentPl: string;
  }[];
}

// ===========================================
// PORTADA DEL CONTRATO
// ===========================================
export const coverPage = {
  titleEs: "Contrato de Prestación de Servicios Profesionales\nConfección y Presentación del Modelo 210\nImpuesto sobre la Renta de No Residentes",
  titlePl: "Umowa o Świadczenie Usług Profesjonalnych\nSporządzenie i Złożenie Formularza 210\nPodatek Dochodowy od Nierezydentów",
  dateFormatEs: (ciudad: string, dia: string, mes: string, anio: string) => 
    `En ${ciudad}, a ${dia} de ${mes} de ${anio}`,
  dateFormatPl: (ciudad: string, dia: string, mes: string, anio: string) => 
    `W ${ciudad}, dnia ${dia} ${mes} ${anio}`,
};

// ===========================================
// ÍNDICE DEL CONTRATO
// ===========================================
export const contractIndex = {
  titleEs: "ÍNDICE",
  titlePl: "SPIS TREŚCI",
  items: [
    { es: "LAS PARTES", pl: "STRONY UMOWY", page: 1 },
    { es: "MANIFIESTAN", pl: "OŚWIADCZENIA", page: 1 },
    { es: "PRIMERA. - OBJETO Y ALCANCE DEL CONTRATO", pl: "PIERWSZA. - PRZEDMIOT I ZAKRES UMOWY", page: 2 },
    { es: "SEGUNDA. - SERVICIOS INCLUIDOS", pl: "DRUGA. - USŁUGI OBJĘTE UMOWĄ", page: 2 },
    { es: "TERCERA. - EJECUCIÓN Y CUALIFICACIÓN PROFESIONAL", pl: "TRZECIA. - REALIZACJA I KWALIFIKACJE ZAWODOWE", page: 3 },
    { es: "CUARTA. - OBLIGACIONES DE EL PRESTADOR", pl: "CZWARTA. - OBOWIĄZKI USŁUGODAWCY", page: 3 },
    { es: "QUINTA. - OBLIGACIONES DE EL CLIENTE", pl: "PIĄTA. - OBOWIĄZKI KLIENTA", page: 4 },
    { es: "SEXTA. - DOCUMENTACIÓN REQUERIDA", pl: "SZÓSTA. - WYMAGANA DOKUMENTACJA", page: 4 },
    { es: "SÉPTIMA. - CONSECUENCIAS DE NO ENTREGA DE DOCUMENTACIÓN", pl: "SIÓDMA. - KONSEKWENCJE NIEDOSTARCZENIA DOKUMENTACJI", page: 5 },
    { es: "OCTAVA. - HONORARIOS PROFESIONALES", pl: "ÓSMA. - HONORARIA PROFESJONALNE", page: 5 },
    { es: "NOVENA. - FORMA Y PLAZO DE PAGO", pl: "DZIEWIĄTA. - FORMA I TERMIN PŁATNOŚCI", page: 6 },
    { es: "DÉCIMA. - CONSECUENCIAS DEL IMPAGO", pl: "DZIESIĄTA. - KONSEKWENCJE BRAKU PŁATNOŚCI", page: 6 },
    { es: "UNDÉCIMA. - SERVICIOS NO INCLUIDOS", pl: "JEDENASTA. - USŁUGI NIEOBJĘTE UMOWĄ", page: 7 },
    { es: "DUODÉCIMA. - MODIFICACIONES DEL CONTRATO", pl: "DWUNASTA. - ZMIANY UMOWY", page: 7 },
    { es: "DECIMOTERCERA. - DURACIÓN Y VIGENCIA", pl: "TRZYNASTA. - CZAS TRWANIA I OBOWIĄZYWANIE", page: 8 },
    { es: "DECIMOCUARTA. - DERECHO DE DESISTIMIENTO", pl: "CZTERNASTA. - PRAWO DO ODSTĄPIENIA", page: 8 },
    { es: "DECIMOQUINTA. - RESOLUCIÓN DEL CONTRATO", pl: "PIĘTNASTA. - ROZWIĄZANIE UMOWY", page: 9 },
    { es: "DECIMOSEXTA. - EFECTOS DE LA RESOLUCIÓN", pl: "SZESNASTA. - SKUTKI ROZWIĄZANIA", page: 9 },
    { es: "DECIMOSÉPTIMA. - RESPONSABILIDAD", pl: "SIEDEMNASTA. - ODPOWIEDZIALNOŚĆ", page: 10 },
    { es: "DECIMOCTAVA. - AUTORIZACIÓN PARA PRESENTACIONES", pl: "OSIEMNASTA. - UPOWAŻNIENIE DO SKŁADANIA DEKLARACJI", page: 11 },
    { es: "DECIMONOVENA. - RECTIFICACIÓN DE DECLARACIONES", pl: "DZIEWIĘTNASTA. - KOREKTA DEKLARACJI", page: 11 },
    { es: "VIGÉSIMA. - CONFIDENCIALIDAD Y PROTECCIÓN DE DATOS", pl: "DWUDZIESTA. - POUFNOŚĆ I OCHRONA DANYCH", page: 12 },
    { es: "VIGÉSIMA PRIMERA. - COMUNICACIONES", pl: "DWUDZIESTA PIERWSZA. - KOMUNIKACJA", page: 13 },
    { es: "VIGÉSIMA SEGUNDA. - PROPIEDAD INTELECTUAL", pl: "DWUDZIESTA DRUGA. - WŁASNOŚĆ INTELEKTUALNA", page: 13 },
    { es: "VIGÉSIMA TERCERA. - RESOLUCIÓN AMISTOSA DE CONFLICTOS", pl: "DWUDZIESTA TRZECIA. - POLUBOWNE ROZSTRZYGANIE SPORÓW", page: 14 },
    { es: "VIGÉSIMA CUARTA. - FUERZA MAYOR", pl: "DWUDZIESTA CZWARTA. - SIŁA WYŻSZA", page: 14 },
    { es: "VIGÉSIMA QUINTA. - CESIÓN", pl: "DWUDZIESTA PIĄTA. - CESJA", page: 15 },
    { es: "VIGÉSIMA SEXTA. - INTEGRIDAD DEL CONTRATO", pl: "DWUDZIESTA SZÓSTA. - INTEGRALNOŚĆ UMOWY", page: 15 },
    { es: "VIGÉSIMA SÉPTIMA. - LEGISLACIÓN APLICABLE Y JURISDICCIÓN", pl: "DWUDZIESTA SIÓDMA. - PRAWO WŁAŚCIWE I JURYSDYKCJA", page: 15 },
    { es: "VIGÉSIMA OCTAVA. - IDIOMA DEL CONTRATO", pl: "DWUDZIESTA ÓSMA. - JĘZYK UMOWY", page: 16 },
  ]
};

// ===========================================
// LAS PARTES
// ===========================================
export const partiesSection = {
  titleEs: "LAS PARTES",
  titlePl: "STRONY UMOWY",
  prestadorEs: () => `De una parte, POLSKA GRUPA KONSULTINGOWA, S.L., NIF B-22682827, C/ Matilde Peñaranda, 27, 5.º A, 03183 Torrevieja (Alicante), inscrita en el Registro Mercantil de Alicante (S-8, H-A 199665, I/A-1 de 31.07.25), representada por D.ª Natalia Małgorzata Sikora (en lo sucesivo, «EL PRESTADOR»).`,
  prestadorPl: () => `Z jednej strony, POLSKA GRUPA KONSULTINGOWA, S.L., NIF B-22682827, C/ Matilde Peñaranda, 27, 5.º A, 03183 Torrevieja (Alicante), wpisana do Rejestru Handlowego w Alicante (S-8, H-A 199665, I/A-1 z dnia 31.07.25), reprezentowana przez Panią Natalię Małgorzatę Sikorę (zwana dalej «USŁUGODAWCĄ»).`,
  clienteEs: (nombre: string, nie: string, email: string, domicilio: string) => `Y de otra parte, D./D.ª ${nombre} (nombre y apellidos completos), identificado/a con NIE ${nie}, correo electrónico ${email}, con domicilio fiscal en ${domicilio} (dirección completa, CP, localidad, provincia), quien actúa en su propio nombre y, en su caso, en representación de los cotitulares del inmueble mediante [poder notarial / autorización escrita] de fecha correspondiente, actuando en su condición de consumidor cuando legalmente proceda, conforme al Real Decreto Legislativo 1/2007 (en lo sucesivo, «EL CLIENTE»).`,
  clientePl: (nombre: string, nie: string, email: string, domicilio: string) => `Z drugiej strony, Pan/Pani ${nombre} (pełne imię i nazwisko), legitymujący/a się numerem NIE ${nie}, adres e-mail ${email}, z siedzibą podatkową pod adresem ${domicilio} (pełny adres, kod pocztowy, miejscowość, prowincja), działający/a we własnym imieniu oraz, w stosownych przypadkach, w imieniu współwłaścicieli nieruchomości na podstawie [aktu notarialnego / pisemnego upoważnienia] z odpowiedniej daty, występujący/a w charakterze konsumenta, gdy wymaga tego prawo, zgodnie z Królewskim Dekretem Legislacyjnym 1/2007 (zwany/a dalej «KLIENTEM»).`,
};

// ===========================================
// MANIFIESTAN
// ===========================================
export const manifestSection = {
  titleEs: "MANIFIESTAN",
  titlePl: "OŚWIADCZENIA",
  items: [
    {
      numeral: "I.",
      es: "Que EL PRESTADOR es una firma especializada en consultoría tributaria internacional con amplia experiencia en fiscalidad de no residentes en España. Cuenta con el equipo técnico y los medios necesarios para la gestión y presentación de autoliquidaciones ante la Agencia Estatal de Administración Tributaria (AEAT).",
      pl: "Że USŁUGODAWCA jest firmą specjalizującą się w międzynarodowym doradztwie podatkowym, posiadającą bogate doświadczenie w zakresie opodatkowania nierezydentów w Hiszpanii. Dysponuje zespołem technicznym oraz środkami niezbędnymi do zarządzania i składania deklaracji podatkowych przed Państwową Agencją Administracji Podatkowej (AEAT)."
    },
    {
      numeral: "II.",
      esTemplate: (direccion: string, cp: string, provincia: string, comunidad: string) => `Que EL CLIENTE declara su condición de no residente fiscal en España conforme al Real Decreto Legislativo 5/2004, y es titular del bien inmueble sito en ${direccion}, CP ${cp}, ${provincia} (${comunidad}). Como titular de rentas inmobiliarias en territorio español, reconoce su obligación de autoliquidar el Impuesto sobre la Renta de No Residentes (Modelo 210) ante la AEAT.`,
      plTemplate: (direccion: string, cp: string, provincia: string, comunidad: string) => `Że KLIENT oświadcza, iż posiada status nierezydenta podatkowego w Hiszpanii zgodnie z Królewskim Dekretem Legislacyjnym 5/2004, oraz jest właścicielem nieruchomości położonej pod adresem ${direccion}, kod pocztowy ${cp}, ${provincia} (${comunidad}). Jako posiadacz dochodów z nieruchomości na terytorium hiszpańskim, uznaje swój obowiązek samodzielnego rozliczenia Podatku Dochodowego od Nierezydentów (Formularz 210) przed AEAT.`
    },
    {
      numeral: "III.",
      es: "Que EL CLIENTE manifiesta su interés en contar con el asesoramiento profesional de EL PRESTADOR para el cumplimiento de sus obligaciones tributarias en España.",
      pl: "Że KLIENT wyraża zainteresowanie skorzystaniem z profesjonalnego doradztwa USŁUGODAWCY w celu wypełnienia swoich obowiązków podatkowych w Hiszpanii."
    },
    {
      numeral: "IV.",
      es: "Que ambas partes han acordado suscribir el presente contrato conforme a las siguientes:",
      pl: "Że obie strony uzgodniły zawarcie niniejszej umowy zgodnie z następującymi postanowieniami:"
    }
  ]
};

// ===========================================
// CLÁUSULAS DEL CONTRATO (28 CLÁUSULAS)
// ===========================================
export const clauses: ContractClause[] = [
  {
    number: "PRIMERA",
    titleEs: "PRIMERA. OBJETO Y ALCANCE DEL CONTRATO",
    titlePl: "PIERWSZA. PRZEDMIOT I ZAKRES UMOWY",
    sections: [
      {
        id: "1.1",
        contentEs: "El objeto del presente contrato es la prestación de servicios de asesoramiento y gestión fiscal del Impuesto sobre la Renta de No Residentes (IRNR) del CLIENTE por parte de EL PRESTADOR, correspondiente al ejercicio fiscal indicado, en relación con el inmueble descrito en el presente contrato, con su referencia catastral correspondiente y los cotitulares indicados. Los servicios comprenderán la preparación, cálculo, cumplimentación y presentación telemática ante la AEAT de las autoliquidaciones del IRNR (Modelo 210) procedentes. El servicio se limita a la primera presentación ordinaria del Modelo 210 del ejercicio indicado, quedando expresamente excluidas declaraciones complementarias, rectificativas o sustitutivas posteriores, salvo que se contraten de forma independiente.",
        contentPl: "Przedmiotem niniejszej umowy jest świadczenie usług doradztwa i zarządzania podatkowego w zakresie Podatku Dochodowego od Nierezydentów (IRNR) KLIENTA przez USŁUGODAWCĘ, za wskazany rok podatkowy, w odniesieniu do nieruchomości opisanej w niniejszej umowie, wraz z odpowiednim numerem katastralnym i wskazanymi współwłaścicielami. Usługi obejmują przygotowanie, obliczenie, wypełnienie i elektroniczne złożenie przed AEAT deklaracji IRNR (Formularz 210). Usługa ogranicza się do pierwszego zwykłego złożenia Formularza 210 za wskazany rok, przy czym wyraźnie wyłączone są późniejsze deklaracje uzupełniające, korygujące lub zastępcze, chyba że zostaną zakontraktowane odrębnie."
      },
      {
        id: "1.2",
        contentEs: "Los servicios específicos incluidos se detallan en la Cláusula Segunda. Cualquier servicio adicional requerirá documento de 'Modificación de Servicios' firmado por ambas partes, que deberá incluir: (i) identificación de las partes, (ii) descripción del servicio adicional, (iii) precio y forma de pago, (iv) plazo de ejecución, (v) firmas.",
        contentPl: "Konkretne usługi objęte umową są wyszczególnione w Klauzuli Drugiej. Każda dodatkowa usługa wymaga dokumentu 'Modyfikacji Usług' podpisanego przez obie strony, który musi zawierać: (i) identyfikację stron, (ii) opis dodatkowej usługi, (iii) cenę i formę płatności, (iv) termin realizacji, (v) podpisy."
      }
    ]
  },
  {
    number: "SEGUNDA",
    titleEs: "SEGUNDA. SERVICIOS INCLUIDOS",
    titlePl: "DRUGA. USŁUGI OBJĘTE UMOWĄ",
    sections: [
      {
        id: "2.1",
        contentEs: "Modelo 210 – Imputación de rentas inmobiliarias: Presentación de declaración individual por cada cotitular del ejercicio indicado, cálculo de base imponible, aplicación del tipo impositivo según residencia fiscal y presentación telemática dentro del plazo reglamentario.",
        contentPl: "Formularz 210 – Przypisanie dochodów z nieruchomości: Złożenie indywidualnej deklaracji za każdego współwłaściciela za wskazany rok, obliczenie podstawy opodatkowania, zastosowanie stawki podatkowej według rezydencji podatkowej i elektroniczne złożenie w ustawowym terminie."
      },
      {
        id: "2.2",
        contentEs: "Modelo 210 – Rendimientos del arrendamiento (si procede): Presentación de declaraciones individuales por cada cotitular, determinación del rendimiento incluyendo gastos deducibles distribuidos según porcentajes de titularidad, y aplicación del tipo impositivo correspondiente.",
        contentPl: "Formularz 210 – Dochody z najmu (jeśli dotyczy): Złożenie indywidualnych deklaracji za każdego współwłaściciela, ustalenie dochodu z uwzględnieniem kosztów podlegających odliczeniu rozdzielonych według udziałów własnościowych, oraz zastosowanie odpowiedniej stawki podatkowej."
      },
      {
        id: "2.3",
        contentEs: "Gestión administrativa y técnica: Análisis de documentación aportada, tramitación de apoderamientos necesarios ante la AEAT, entrega de justificantes oficiales de presentación y custodia de documentación conforme a la normativa (4 años).",
        contentPl: "Zarządzanie administracyjne i techniczne: Analiza dostarczonej dokumentacji, przetwarzanie niezbędnych pełnomocnictw przed AEAT, dostarczenie oficjalnych potwierdzeń złożenia i przechowywanie dokumentacji zgodnie z przepisami (4 lata)."
      },
      {
        id: "2.4",
        contentEs: "Informe técnico-fiscal: Emisión de informe firmado por el equipo profesional, disponible en español y polaco (siendo la versión española la única con validez legal).",
        contentPl: "Raport techniczno-podatkowy: Wydanie raportu podpisanego przez zespół profesjonalistów, dostępnego w języku hiszpańskim i polskim (przy czym wersja hiszpańska jest jedyną mającą moc prawną)."
      }
    ]
  },
  {
    number: "TERCERA",
    titleEs: "TERCERA. EJECUCIÓN Y CUALIFICACIÓN PROFESIONAL",
    titlePl: "TRZECIA. REALIZACJA I KWALIFIKACJE ZAWODOWE",
    sections: [
      {
        id: "3.1",
        contentEs: "EL PRESTADOR ejecutará los servicios a través de su propio equipo técnico o profesionales colaboradores bajo su directa supervisión, garantizando que las actuaciones que requieran titulación específica serán validadas por profesionales cualificados.",
        contentPl: "USŁUGODAWCA będzie wykonywał usługi poprzez własny zespół techniczny lub współpracujących specjalistów pod swoim bezpośrednim nadzorem, gwarantując, że działania wymagające specjalistycznych kwalifikacji będą zatwierdzane przez wykwalifikowanych specjalistów."
      },
      {
        id: "3.2",
        contentEs: "EL PRESTADOR actuará con autonomía e independencia de criterio profesional en el desempeño de sus funciones, aplicando sus conocimientos conforme a la normativa vigente y a la lex artis profesional.",
        contentPl: "USŁUGODAWCA będzie działał z autonomią i niezależnością profesjonalnego osądu w wykonywaniu swoich funkcji, stosując swoją wiedzę zgodnie z obowiązującymi przepisami i lex artis zawodową."
      },
      {
        id: "3.3",
        contentEs: "EL PRESTADOR mantiene en vigor una póliza de responsabilidad civil profesional adecuada a la naturaleza de los servicios contratados, comprometiéndose a aportar copia del certificado de seguro en vigor en un plazo máximo de diez (10) días hábiles desde su solicitud por escrito por parte del CLIENTE.",
        contentPl: "USŁUGODAWCA posiada ważną polisę odpowiedzialności cywilnej zawodowej odpowiednią do charakteru zakontraktowanych usług, zobowiązując się do przedstawienia kopii aktualnego certyfikatu ubezpieczenia w maksymalnym terminie dziesięciu (10) dni roboczych od pisemnego żądania KLIENTA."
      },
      {
        id: "3.4",
        contentEs: "Toda comunicación relacionada con la ejecución del contrato se realizará directamente entre EL CLIENTE y EL PRESTADOR, quien actuará como único interlocutor. Las comunicaciones se realizarán en idioma español, pudiendo facilitarse traducciones al idioma polaco con carácter informativo, prevaleciendo siempre la versión en español.",
        contentPl: "Wszelka komunikacja związana z wykonaniem umowy będzie odbywać się bezpośrednio między KLIENTEM a USŁUGODAWCĄ, który będzie działał jako jedyny rozmówca. Komunikacja będzie prowadzona w języku hiszpańskim, przy czym mogą być dostarczane tłumaczenia na język polski o charakterze informacyjnym, a wersja hiszpańska zawsze ma pierwszeństwo."
      }
    ]
  },
  {
    number: "CUARTA",
    titleEs: "CUARTA. OBLIGACIONES DE EL PRESTADOR",
    titlePl: "CZWARTA. OBOWIĄZKI USŁUGODAWCY",
    sections: [
      {
        id: "4.1",
        contentEs: "EL PRESTADOR prestará los servicios con la diligencia profesional exigible y conforme a las buenas prácticas del sector.",
        contentPl: "USŁUGODAWCA będzie świadczył usługi z wymaganą starannością zawodową i zgodnie z dobrymi praktykami branżowymi."
      },
      {
        id: "4.2",
        contentEs: "EL PRESTADOR realizará la gestión organizativa y administrativa necesaria para la correcta ejecución de los servicios contratados, sobre la base de la información facilitada por EL CLIENTE. Esta gestión no implica funciones de supervisión general ni control permanente sobre plazos dependientes del CLIENTE o de terceros. No obstante, EL PRESTADOR informará al CLIENTE de los plazos reglamentarios de presentación (Modelo 210: del 1 de enero al 31 de diciembre del año siguiente al devengo para imputación de rentas inmobiliarias; trimestral para rendimientos de arrendamiento) en el momento de solicitar la documentación o con antelación razonable a su vencimiento, siempre que disponga de la información completa.",
        contentPl: "USŁUGODAWCA przeprowadzi zarządzanie organizacyjne i administracyjne niezbędne do prawidłowego wykonania zakontraktowanych usług, na podstawie informacji dostarczonych przez KLIENTA. Zarządzanie to nie obejmuje funkcji ogólnego nadzoru ani stałej kontroli terminów zależnych od KLIENTA lub osób trzecich. Niemniej jednak, USŁUGODAWCA poinformuje KLIENTA o ustawowych terminach składania (Formularz 210: od 1 stycznia do 31 grudnia roku następującego po roku powstania obowiązku dla przypisania dochodów z nieruchomości; kwartalnie dla dochodów z najmu) w momencie żądania dokumentacji lub z rozsądnym wyprzedzeniem przed upływem terminu, pod warunkiem posiadania pełnych informacji."
      },
      {
        id: "4.3",
        contentEs: "EL PRESTADOR mantendrá informado al CLIENTE del estado de tramitación de las actuaciones, facilitándole copia de las autoliquidaciones presentadas y los justificantes oficiales.",
        contentPl: "USŁUGODAWCA będzie informował KLIENTA o stanie realizacji działań, dostarczając mu kopie złożonych deklaracji i oficjalne potwierdzenia."
      }
    ]
  },
  {
    number: "QUINTA",
    titleEs: "QUINTA. OBLIGACIONES DE EL CLIENTE",
    titlePl: "PIĄTA. OBOWIĄZKI KLIENTA",
    sections: [
      {
        id: "5.1",
        contentEs: "EL CLIENTE se compromete a facilitar de forma veraz, completa y actualizada toda la información y documentación necesaria para la prestación de los servicios, dentro de los plazos indicados. EL CLIENTE es único responsable de la exactitud e integridad de los datos aportados. EL PRESTADOR no asumirá responsabilidad por las consecuencias derivadas de información omitida, inexacta o no actualizada.",
        contentPl: "KLIENT zobowiązuje się dostarczać w sposób prawdziwy, kompletny i aktualny wszystkie informacje i dokumentację niezbędne do świadczenia usług, w wskazanych terminach. KLIENT ponosi wyłączną odpowiedzialność za dokładność i kompletność dostarczonych danych. USŁUGODAWCA nie ponosi odpowiedzialności za konsekwencje wynikające z informacji pominiętych, niedokładnych lub nieaktualnych."
      },
      {
        id: "5.2",
        contentEs: "EL CLIENTE se obliga a abonar los honorarios profesionales en la cuantía, forma y plazos establecidos en el presente contrato.",
        contentPl: "KLIENT zobowiązuje się do uiszczenia honorariów zawodowych w wysokości, formie i terminach określonych w niniejszej umowie."
      },
      {
        id: "5.3",
        contentEs: "EL CLIENTE deberá comunicar inmediatamente a EL PRESTADOR cualquier modificación de sus datos personales, fiscales o circunstancias con relevancia tributaria, incluyendo cambios de residencia fiscal, titularidad, porcentajes de participación o situación del inmueble.",
        contentPl: "KLIENT jest zobowiązany niezwłocznie powiadomić USŁUGODAWCĘ o wszelkich zmianach swoich danych osobowych, podatkowych lub okoliczności mających znaczenie podatkowe, w tym o zmianach rezydencji podatkowej, własności, udziałów procentowych lub stanu nieruchomości."
      },
      {
        id: "5.4",
        contentEs: "EL CLIENTE se compromete a informar a EL PRESTADOR en un plazo máximo de tres (3) días hábiles de cualquier comunicación de la Administración Tributaria relacionada con las declaraciones objeto del presente contrato. La gestión de dichas comunicaciones no está incluida en los servicios del presente contrato y requerirá presupuesto adicional. El incumplimiento de este deber liberará a EL PRESTADOR de cualquier responsabilidad derivada de la falta de respuesta en plazo.",
        contentPl: "KLIENT zobowiązuje się poinformować USŁUGODAWCĘ w maksymalnym terminie trzech (3) dni roboczych o każdej komunikacji od Administracji Podatkowej związanej z deklaracjami będącymi przedmiotem niniejszej umowy. Obsługa tych komunikatów nie jest objęta usługami niniejszej umowy i wymaga dodatkowej wyceny. Niedopełnienie tego obowiązku zwalnia USŁUGODAWCĘ z jakiejkolwiek odpowiedzialności wynikającej z braku odpowiedzi w terminie."
      }
    ]
  },
  {
    number: "SEXTA",
    titleEs: "SEXTA. DOCUMENTACIÓN REQUERIDA",
    titlePl: "SZÓSTA. WYMAGANA DOKUMENTACJA",
    sections: [
      {
        id: "6.1",
        contentEs: "EL CLIENTE se obliga a facilitar la siguiente documentación completa, veraz y actualizada en un plazo máximo de siete (7) días hábiles desde la firma del contrato:\n- NIE de cada cotitular\n- Escritura de compraventa de la propiedad\n- Recibo del Impuesto sobre Bienes Inmuebles (IBI) del ejercicio fiscal para el que se contrata la declaración\n- Contrato de arrendamiento y justificantes de cobro de rentas del ejercicio correspondiente (si procede)\n- Facturas o recibos justificativos de gastos deducibles vinculados al inmueble del ejercicio correspondiente (comunidad de propietarios, seguros, suministros si no arrendado, reparaciones, etc.)",
        contentPl: "KLIENT zobowiązuje się dostarczyć następującą kompletną, prawdziwą i aktualną dokumentację w maksymalnym terminie siedmiu (7) dni roboczych od podpisania umowy:\n- NIE każdego współwłaściciela\n- Akt notarialny nabycia nieruchomości\n- Pokwitowanie Podatku od Nieruchomości (IBI) za rok podatkowy objęty deklaracją\n- Umowę najmu i potwierdzenia pobierania czynszów za odpowiedni rok (jeśli dotyczy)\n- Faktury lub rachunki potwierdzające koszty podlegające odliczeniu związane z nieruchomością za odpowiedni rok (wspólnota mieszkaniowa, ubezpieczenia, media jeśli nie wynajmowane, remonty itp.)"
      }
    ]
  },
  {
    number: "SÉPTIMA",
    titleEs: "SÉPTIMA. CONSECUENCIAS DE NO ENTREGA DE DOCUMENTACIÓN",
    titlePl: "SIÓDMA. KONSEKWENCJE NIEDOSTARCZENIA DOKUMENTACJI",
    sections: [
      {
        id: "7.1",
        contentEs: "Si transcurridos los siete (7) días hábiles el CLIENTE no hubiera aportado la documentación completa, EL PRESTADOR notificará por escrito requiriendo su entrega en un plazo adicional de tres (3) días hábiles.",
        contentPl: "Jeśli po upływie siedmiu (7) dni roboczych KLIENT nie dostarczy kompletnej dokumentacji, USŁUGODAWCA powiadomi pisemnie, żądając jej dostarczenia w dodatkowym terminie trzech (3) dni roboczych."
      },
      {
        id: "7.2",
        contentEs: "Si transcurrido dicho plazo adicional persiste el incumplimiento y resulta imposible presentar las declaraciones en plazo reglamentario, EL PRESTADOR quedará liberado de cualquier responsabilidad derivada de presentación fuera de plazo, recargos, intereses o sanciones.",
        contentPl: "Jeśli po upływie tego dodatkowego terminu niedotrzymanie obowiązku utrzymuje się i niemożliwe jest złożenie deklaracji w ustawowym terminie, USŁUGODAWCA zostaje zwolniony z jakiejkolwiek odpowiedzialności wynikającej z złożenia po terminie, dopłat, odsetek lub sankcji."
      },
      {
        id: "7.3",
        contentEs: "En tal caso, EL PRESTADOR podrá optar por: (i) resolver el contrato con derecho a percibir compensación por los trabajos efectivamente realizados y los gastos incurridos hasta la fecha, debidamente justificados mediante relación detallada de las actuaciones llevadas a cabo, o (ii) mantener el contrato y presentar las declaraciones cuando disponga de la documentación completa, informando al CLIENTE de las posibles consecuencias tributarias del retraso.",
        contentPl: "W takim przypadku USŁUGODAWCA może wybrać: (i) rozwiązanie umowy z prawem do otrzymania rekompensaty za faktycznie wykonane prace i poniesione koszty do dnia rozwiązania, należycie udokumentowane szczegółowym zestawieniem przeprowadzonych działań, lub (ii) utrzymanie umowy i złożenie deklaracji gdy będzie dysponował kompletną dokumentacją, informując KLIENTA o możliwych konsekwencjach podatkowych opóźnienia."
      },
      {
        id: "7.4",
        contentEs: "A efectos exclusivamente internos de responsabilidad contractual entre las partes, el cómputo de los plazos para la prestación del servicio se entenderá iniciado desde la recepción completa de la documentación por EL PRESTADOR, quedando constancia fehaciente de dicha fecha. Lo anterior se entiende sin perjuicio de los plazos reglamentarios establecidos por la normativa tributaria, que son independientes y vinculan al obligado tributario.",
        contentPl: "Wyłącznie dla celów wewnętrznych odpowiedzialności kontraktowej między stronami, bieg terminów świadczenia usługi rozpoczyna się od kompletnego otrzymania dokumentacji przez USŁUGODAWCĘ, przy czym data ta musi być wiarygodnie udokumentowana. Powyższe pozostaje bez uszczerbku dla ustawowych terminów określonych przepisami podatkowymi, które są niezależne i wiążące dla podatnika."
      }
    ]
  },
  {
    number: "OCTAVA",
    titleEs: "OCTAVA. HONORARIOS PROFESIONALES",
    titlePl: "ÓSMA. HONORARIA PROFESJONALNE",
    sections: [
      {
        id: "8.1",
        contentEs: "Como contraprestación por los servicios descritos, los honorarios profesionales de EL PRESTADOR ascienden a la cantidad indicada en el presente contrato, que no incluye el Impuesto sobre el Valor Añadido (IVA) cuando resulte legalmente exigible conforme a la Ley 37/1992 del IVA, el cual se repercutirá adicionalmente en su caso.",
        contentPl: "Jako wynagrodzenie za opisane usługi, honoraria zawodowe USŁUGODAWCY wynoszą kwotę wskazaną w niniejszej umowie, która nie obejmuje Podatku od Wartości Dodanej (IVA), gdy jest on prawnie wymagany zgodnie z Ustawą 37/1992 o IVA, który zostanie dodatkowo naliczony w stosownych przypadkach."
      },
      {
        id: "8.2",
        contentEs: "Este importe incluye la gestión integral de las declaraciones de los cotitulares, emisión de informe técnico-fiscal y custodia digital de documentación durante el plazo legal de 4 años. El precio tiene carácter cerrado para los servicios incluidos.",
        contentPl: "Kwota ta obejmuje kompleksowe zarządzanie deklaracjami współwłaścicieli, wydanie raportu techniczno-podatkowego i cyfrowe przechowywanie dokumentacji przez ustawowy okres 4 lat. Cena ma charakter zamknięty dla objętych usług."
      }
    ]
  },
  {
    number: "NOVENA",
    titleEs: "NOVENA. FORMA Y PLAZO DE PAGO",
    titlePl: "DZIEWIĄTA. FORMA I TERMIN PŁATNOŚCI",
    sections: [
      {
        id: "9.1",
        contentEs: "Los honorarios se facturarán por adelantado y deberán abonarse en el plazo máximo de cinco (5) días hábiles desde la emisión de la factura, mediante transferencia bancaria a los datos bancarios indicados.",
        contentPl: "Honoraria będą fakturowane z góry i muszą zostać uiszczone w maksymalnym terminie pięciu (5) dni roboczych od wystawienia faktury, przelewem bankowym na wskazane dane bankowe."
      },
      {
        id: "9.2",
        contentEs: "El inicio de los trabajos queda condicionado a: (a) la recepción íntegra del pago de los honorarios, y (b) la recepción completa de la documentación establecida en la Cláusula Sexta. EL PRESTADOR notificará al CLIENTE en un plazo máximo de cuarenta y ocho (48) horas desde la recepción si la documentación está incompleta, especificando qué documentos o datos faltan. No se procederá a la presentación de ninguna declaración ante la AEAT hasta que ambas condiciones se hayan cumplido.",
        contentPl: "Rozpoczęcie prac jest uzależnione od: (a) pełnego otrzymania płatności honorariów, oraz (b) kompletnego otrzymania dokumentacji określonej w Klauzuli Szóstej. USŁUGODAWCA powiadomi KLIENTA w maksymalnym terminie czterdziestu ośmiu (48) godzin od otrzymania, jeśli dokumentacja jest niekompletna, określając, jakich dokumentów lub danych brakuje. Żadna deklaracja nie zostanie złożona przed AEAT, dopóki oba warunki nie zostaną spełnione."
      }
    ]
  },
  {
    number: "DÉCIMA",
    titleEs: "DÉCIMA. CONSECUENCIAS DEL IMPAGO",
    titlePl: "DZIESIĄTA. KONSEKWENCJE BRAKU PŁATNOŚCI",
    sections: [
      {
        id: "10.1",
        contentEs: "Si transcurrido el plazo de diez (10) días hábiles desde la emisión de la factura no se hubiera recibido el pago, EL PRESTADOR enviará un requerimiento final al CLIENTE concediendo un plazo adicional de tres (3) días hábiles para regularizar el pago. Transcurrido este plazo sin que se haya recibido el importe íntegro, EL PRESTADOR podrá resolver el contrato sin más trámite, sin perjuicio de su derecho a reclamar los honorarios devengados por trabajos preliminares efectivamente realizados y a suspender los servicios hasta que se regularice el pago.",
        contentPl: "Jeśli po upływie dziesięciu (10) dni roboczych od wystawienia faktury płatność nie zostanie otrzymana, USŁUGODAWCA wyśle ostateczne wezwanie do KLIENTA, przyznając dodatkowy termin trzech (3) dni roboczych na uregulowanie płatności. Po upływie tego terminu bez otrzymania pełnej kwoty, USŁUGODAWCA może rozwiązać umowę bez dalszych formalności, bez uszczerbku dla swojego prawa do dochodzenia honorariów należnych za faktycznie wykonane prace wstępne oraz do zawieszenia usług do czasu uregulowania płatności."
      }
    ]
  },
  {
    number: "UNDÉCIMA",
    titleEs: "UNDÉCIMA. SERVICIOS NO INCLUIDOS",
    titlePl: "JEDENASTA. USŁUGI NIEOBJĘTE UMOWĄ",
    sections: [
      {
        id: "11.1",
        contentEs: "Quedan expresamente excluidos del presente contrato y requerirán presupuesto independiente los siguientes servicios:\n- Modelo 210 por ganancias patrimoniales (venta de inmueble)\n- Impuesto sobre el Patrimonio (Modelo 714)\n- Tributos locales (ej. IIVTNU - plusvalía municipal)\n- Representación en comprobaciones, inspecciones, recursos o alegaciones ante la AEAT\n- Atención a requerimientos de la Administración Tributaria\n- Rectificación de declaraciones por errores no imputables a EL PRESTADOR\n- Planificación fiscal internacional\n- Servicios de contabilidad o auditoría\n- Cualquier otro servicio no descrito en la Cláusula Segunda",
        contentPl: "Wyraźnie wyłączone z niniejszej umowy i wymagające odrębnej wyceny są następujące usługi:\n- Formularz 210 za zyski kapitałowe (sprzedaż nieruchomości)\n- Podatek od Majątku (Formularz 714)\n- Podatki lokalne (np. IIVTNU - podatek od wzrostu wartości gruntów miejskich)\n- Reprezentacja w kontrolach, inspekcjach, odwołaniach lub zarzutach przed AEAT\n- Obsługa wezwań od Administracji Podatkowej\n- Korekta deklaracji z powodu błędów nieleżących po stronie USŁUGODAWCY\n- Międzynarodowe planowanie podatkowe\n- Usługi księgowe lub audytorskie\n- Wszelkie inne usługi nieopisane w Klauzuli Drugiej"
      }
    ]
  },
  {
    number: "DUODÉCIMA",
    titleEs: "DUODÉCIMA. MODIFICACIONES DEL CONTRATO",
    titlePl: "DWUNASTA. ZMIANY UMOWY",
    sections: [
      {
        id: "12.1",
        contentEs: "Cualquier modificación del alcance, número de titulares, periodicidad o precio requerirá la firma de un documento escrito de 'Modificación de Servicios' por ambas partes. No se considerará válida la aceptación tácita, verbal o por correo electrónico, siendo necesaria la firma manuscrita, electrónica avanzada o cualificada conforme al Reglamento eIDAS.",
        contentPl: "Wszelkie modyfikacje zakresu, liczby właścicieli, częstotliwości lub ceny wymagają podpisania przez obie strony pisemnego dokumentu 'Modyfikacji Usług'. Milcząca, ustna lub e-mailowa akceptacja nie będzie uważana za ważną; wymagany jest podpis odręczny, zaawansowany elektroniczny lub kwalifikowany zgodnie z Rozporządzeniem eIDAS."
      }
    ]
  },
  {
    number: "DECIMOTERCERA",
    titleEs: "DECIMOTERCERA. DURACIÓN Y VIGENCIA",
    titlePl: "TRZYNASTA. CZAS TRWANIA I OBOWIĄZYWANIE",
    sections: [
      {
        id: "13.1",
        contentEs: "El presente contrato tiene por objeto la prestación de servicios correspondientes al ejercicio fiscal indicado en la Cláusula Primera y entrará en vigor en la fecha de su firma.",
        contentPl: "Niniejsza umowa ma na celu świadczenie usług za rok podatkowy wskazany w Klauzuli Pierwszej i wchodzi w życie z dniem jej podpisania."
      },
      {
        id: "13.2",
        contentEs: "El contrato se extinguirá automáticamente una vez prestados completamente los servicios descritos y transcurrido el plazo legal de conservación de documentación (4 años), salvo obligaciones que por su naturaleza deban subsistir (confidencialidad, protección de datos).",
        contentPl: "Umowa wygasa automatycznie po pełnym wykonaniu opisanych usług i upływie ustawowego okresu przechowywania dokumentacji (4 lata), z wyjątkiem obowiązków, które z natury muszą trwać (poufność, ochrona danych)."
      },
      {
        id: "13.3",
        contentEs: "Si las partes desean contratar los servicios para ejercicios fiscales posteriores, deberán formalizar un nuevo contrato o suscribir un documento de renovación que identifique el nuevo ejercicio fiscal y confirme la vigencia de las demás condiciones.",
        contentPl: "Jeśli strony chcą zakontraktować usługi za kolejne lata podatkowe, muszą sformalizować nową umowę lub podpisać dokument odnowienia identyfikujący nowy rok podatkowy i potwierdzający obowiązywanie pozostałych warunków."
      }
    ]
  },
  {
    number: "DECIMOCUARTA",
    titleEs: "DECIMOCUARTA. DERECHO DE DESISTIMIENTO",
    titlePl: "CZTERNASTA. PRAWO DO ODSTĄPIENIA",
    sections: [
      {
        id: "14.1",
        contentEs: "De conformidad con lo establecido en los artículos 102 y siguientes del Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios, EL CLIENTE dispondrá de un plazo de catorce (14) días naturales desde la firma del contrato para ejercer su derecho de desistimiento sin necesidad de justificación.",
        contentPl: "Zgodnie z postanowieniami artykułów 102 i następnych Królewskiego Dekretu Legislacyjnego 1/2007 z dnia 16 listopada, zatwierdzającego tekst jednolity Ogólnej Ustawy o Ochronie Konsumentów i Użytkowników, KLIENT będzie miał okres czternastu (14) dni kalendarzowych od podpisania umowy na wykonanie prawa do odstąpienia bez konieczności uzasadnienia."
      },
      {
        id: "14.2",
        contentEs: "El ejercicio del derecho de desistimiento deberá comunicarse a EL PRESTADOR mediante declaración inequívoca dirigida a: Correo electrónico: klient@pgkhiszpania.com, Asunto: 'DESISTIMIENTO - Contrato IRNR [Nombre del cliente]'. EL PRESTADOR confirmará la recepción del desistimiento en un plazo máximo de 24 horas.",
        contentPl: "Wykonanie prawa do odstąpienia musi być zakomunikowane USŁUGODAWCY poprzez jednoznaczne oświadczenie skierowane na: E-mail: klient@pgkhiszpania.com, Temat: 'ODSTĄPIENIE - Umowa IRNR [Imię i nazwisko klienta]'. USŁUGODAWCA potwierdzi otrzymanie odstąpienia w maksymalnym terminie 24 godzin."
      },
      {
        id: "14.3",
        contentEs: "En caso de que EL CLIENTE solicite que la prestación de los servicios se inicie durante el período de desistimiento: a) Si los servicios hubieran sido completamente ejecutados, EL CLIENTE perderá su derecho de desistimiento. b) Si los servicios se hubieran ejecutado parcialmente, EL CLIENTE deberá abonar el importe proporcional correspondiente a los servicios efectivamente prestados hasta la fecha de desistimiento.",
        contentPl: "W przypadku, gdy KLIENT zażąda rozpoczęcia świadczenia usług w okresie odstąpienia: a) Jeśli usługi zostały w pełni wykonane, KLIENT utraci prawo do odstąpienia. b) Jeśli usługi zostały wykonane częściowo, KLIENT musi zapłacić proporcjonalną kwotę odpowiadającą usługom faktycznie wykonanym do daty odstąpienia."
      }
    ]
  },
  {
    number: "DECIMOQUINTA",
    titleEs: "DECIMOQUINTA. RESOLUCIÓN DEL CONTRATO",
    titlePl: "PIĘTNASTA. ROZWIĄZANIE UMOWY",
    sections: [
      {
        id: "15.1",
        contentEs: "Las partes podrán resolver el presente contrato en cualquier momento por mutuo acuerdo escrito.",
        contentPl: "Strony mogą rozwiązać niniejszą umowę w dowolnym momencie za obopólnym pisemnym porozumieniem."
      },
      {
        id: "15.2",
        contentEs: "Cualquiera de las partes podrá resolver el contrato en caso de incumplimiento grave de las obligaciones de la otra. Se considerará incumplimiento grave por parte del CLIENTE el impago de los honorarios o la falta de suministro de información necesaria tras requerimiento. La parte que resuelva el contrato deberá notificarlo a la incumplidora, otorgándole un plazo de quince (15) días para subsanar si fuera posible.",
        contentPl: "Każda ze stron może rozwiązać umowę w przypadku poważnego naruszenia obowiązków przez drugą stronę. Za poważne naruszenie ze strony KLIENTA uważa się brak zapłaty honorariów lub niedostarczenie niezbędnych informacji po wezwaniu. Strona rozwiązująca umowę musi powiadomić stronę naruszającą, dając jej okres piętnastu (15) dni na naprawę, jeśli to możliwe."
      }
    ]
  },
  {
    number: "DECIMOSEXTA",
    titleEs: "DECIMOSEXTA. EFECTOS DE LA RESOLUCIÓN",
    titlePl: "SZESNASTA. SKUTKI ROZWIĄZANIA",
    sections: [
      {
        id: "16.1",
        contentEs: "Resolución por incumplimiento del CLIENTE: EL PRESTADOR tendrá derecho a percibir los honorarios correspondientes a los servicios efectivamente prestados hasta la fecha de resolución. Si los honorarios fueron abonados por adelantado, EL PRESTADOR retendrá la parte proporcional y reembolsará el excedente en un plazo de quince (15) días hábiles.",
        contentPl: "Rozwiązanie z powodu niewykonania obowiązków przez KLIENTA: USŁUGODAWCA ma prawo do otrzymania honorariów odpowiadających usługom faktycznie wykonanym do daty rozwiązania. Jeśli honoraria zostały uiszczone z góry, USŁUGODAWCA zatrzyma proporcjonalną część i zwróci nadwyżkę w terminie piętnastu (15) dni roboczych."
      },
      {
        id: "16.2",
        contentEs: "Resolución por incumplimiento de EL PRESTADOR: EL CLIENTE tendrá derecho al reembolso íntegro de los honorarios abonados si los servicios no han sido iniciados. Si los servicios se hubieran iniciado, se reembolsará la parte proporcional no ejecutada. EL PRESTADOR facilitará toda la documentación e información necesaria para que el CLIENTE pueda cumplir sus obligaciones tributarias.",
        contentPl: "Rozwiązanie z powodu niewykonania obowiązków przez USŁUGODAWCĘ: KLIENT ma prawo do pełnego zwrotu uiszczonych honorariów, jeśli usługi nie zostały rozpoczęte. Jeśli usługi zostały rozpoczęte, zwrócona zostanie proporcjonalna część niewykonana. USŁUGODAWCA dostarczy całą dokumentację i informacje niezbędne do wypełnienia przez KLIENTA jego obowiązków podatkowych."
      }
    ]
  },
  {
    number: "DECIMOSÉPTIMA",
    titleEs: "DECIMOSÉPTIMA. RESPONSABILIDAD",
    titlePl: "SIEDEMNASTA. ODPOWIEDZIALNOŚĆ",
    sections: [
      {
        id: "17.1",
        contentEs: "EL PRESTADOR responderá exclusivamente por los daños directos que se deriven de una actuación negligente en la prestación de los servicios contratados, siempre que exista relación de causalidad directa y debidamente acreditada.",
        contentPl: "USŁUGODAWCA odpowiada wyłącznie za szkody bezpośrednie wynikające z zaniedbania w świadczeniu zakontraktowanych usług, pod warunkiem istnienia bezpośredniego i należycie udowodnionego związku przyczynowego."
      },
      {
        id: "17.2",
        contentEs: "En ningún caso será responsable EL PRESTADOR de los perjuicios que pudieran derivarse de: (a) aportación de información o documentación incompleta, inexacta, falsa o fuera de plazo, (b) decisiones adoptadas por EL CLIENTE, (c) actuaciones u omisiones de la Administración Tributaria u otros terceros.",
        contentPl: "W żadnym wypadku USŁUGODAWCA nie ponosi odpowiedzialności za szkody mogące wyniknąć z: (a) dostarczenia niepełnych, niedokładnych, fałszywych lub spóźnionych informacji lub dokumentacji, (b) decyzji podjętych przez KLIENTA, (c) działań lub zaniechań Administracji Podatkowej lub innych osób trzecich."
      },
      {
        id: "17.3",
        contentEs: "Sin perjuicio de lo dispuesto en la normativa imperativa de protección de consumidores y usuarios, y en ningún caso en supuestos de dolo o culpa grave, la responsabilidad económica máxima de EL PRESTADOR por daños directos derivados de una actuación negligente quedará limitada al importe de los honorarios efectivamente abonados por el CLIENTE por el servicio concreto que haya dado lugar a la reclamación. EL CLIENTE declara haber sido informado expresamente de esta limitación y aceptarla de forma específica, reconociendo que el precio pactado ha sido establecido teniendo en cuenta dicha limitación.",
        contentPl: "Bez uszczerbku dla bezwzględnie obowiązujących przepisów o ochronie konsumentów i użytkowników, i w żadnym wypadku w przypadku umyślnego działania lub rażącego niedbalstwa, maksymalna odpowiedzialność finansowa USŁUGODAWCY za szkody bezpośrednie wynikające z zaniedbania jest ograniczona do kwoty honorariów faktycznie uiszczonych przez KLIENTA za konkretną usługę, która dała podstawę do reklamacji. KLIENT oświadcza, że został wyraźnie poinformowany o tym ograniczeniu i akceptuje je w sposób konkretny, uznając, że uzgodniona cena została ustalona z uwzględnieniem tego ograniczenia."
      },
      {
        id: "17.4",
        contentEs: "Esta limitación no será aplicable en casos de dolo, culpa grave o negligencia profesional manifiesta, cuando resulte contraria a normativa imperativa de consumidores y usuarios, en materia de protección de datos personales (donde se aplicará el régimen sancionador del RGPD), o en supuestos de responsabilidad objetiva establecida legalmente.",
        contentPl: "To ograniczenie nie ma zastosowania w przypadkach umyślnego działania, rażącego niedbalstwa lub oczywistego zaniedbania zawodowego, gdy jest sprzeczne z bezwzględnie obowiązującymi przepisami o ochronie konsumentów i użytkowników, w sprawach ochrony danych osobowych (gdzie stosuje się reżim sankcji RODO), lub w przypadkach odpowiedzialności obiektywnej ustanowionej prawnie."
      },
      {
        id: "17.5",
        contentEs: "En todo caso, EL PRESTADOR únicamente responderá de los daños directos y efectivamente acreditados, quedando excluidos los daños indirectos, lucro cesante, pérdida de oportunidades o daños morales, salvo que deriven de dolo o culpa grave debidamente probada.",
        contentPl: "W każdym przypadku USŁUGODAWCA odpowiada wyłącznie za szkody bezpośrednie i faktycznie udokumentowane, z wyłączeniem szkód pośrednich, utraconych korzyści, utraty możliwości lub szkód moralnych, chyba że wynikają z umyślnego działania lub rażącego niedbalstwa należycie udowodnionego."
      }
    ]
  },
  {
    number: "DECIMOCTAVA",
    titleEs: "DECIMOCTAVA. AUTORIZACIÓN PARA PRESENTACIONES",
    titlePl: "OSIEMNASTA. UPOWAŻNIENIE DO SKŁADANIA DEKLARACJI",
    sections: [
      {
        id: "18.1",
        contentEs: "EL CLIENTE autoriza y se compromete a otorgar a EL PRESTADOR los apoderamientos necesarios para realizar, en su nombre y por el período de vigencia del presente contrato, las presentaciones telemáticas de declaraciones, autoliquidaciones o comunicaciones ante la AEAT. Esta autorización deberá formalizarse obligatoriamente mediante: (a) apoderamiento telemático en el sistema Cl@ve PIN de la AEAT, o (b) representación conforme a certificado digital de EL PRESTADOR, previa inscripción del apoderamiento en el registro correspondiente de la AEAT. Sin el otorgamiento efectivo de dicho apoderamiento, EL PRESTADOR no podrá proceder a la presentación de las declaraciones, sin que ello genere responsabilidad alguna por su parte.",
        contentPl: "KLIENT upoważnia i zobowiązuje się udzielić USŁUGODAWCY niezbędnych pełnomocnictw do dokonywania w jego imieniu i przez okres obowiązywania niniejszej umowy elektronicznych zgłoszeń deklaracji, rozliczeń lub komunikatów przed AEAT. Upoważnienie to musi być obowiązkowo sformalizowane poprzez: (a) pełnomocnictwo elektroniczne w systemie Cl@ve PIN AEAT, lub (b) reprezentację zgodną z certyfikatem cyfrowym USŁUGODAWCY, po uprzednim wpisie pełnomocnictwa do odpowiedniego rejestru AEAT. Bez skutecznego udzielenia tego pełnomocnictwa USŁUGODAWCA nie może przystąpić do składania deklaracji, co nie generuje żadnej odpowiedzialności z jego strony."
      },
      {
        id: "18.2",
        contentEs: "EL CLIENTE podrá revocar esta autorización en cualquier momento mediante comunicación escrita con antelación mínima de diez (10) días hábiles, sin perjuicio del derecho de EL PRESTADOR a percibir los honorarios por servicios ya prestados.",
        contentPl: "KLIENT może cofnąć to upoważnienie w dowolnym momencie poprzez pisemną komunikację z wyprzedzeniem co najmniej dziesięciu (10) dni roboczych, bez uszczerbku dla prawa USŁUGODAWCY do otrzymania honorariów za już wykonane usługi."
      }
    ]
  },
  {
    number: "DECIMONOVENA",
    titleEs: "DECIMONOVENA. RECTIFICACIÓN DE DECLARACIONES",
    titlePl: "DZIEWIĘTNASTA. KOREKTA DEKLARACJI",
    sections: [
      {
        id: "19.1",
        contentEs: "Si con posterioridad a la presentación de las declaraciones se detectaran errores u omisiones:\na) Imputables a EL PRESTADOR: Este asumirá la presentación de las declaraciones complementarias o rectificativas necesarias sin coste adicional y responderá de los intereses de demora generados, sin perjuicio de la limitación de responsabilidad establecida.\nb) Imputables a información incorrecta del CLIENTE: La presentación de declaraciones rectificativas o complementarias requerirá presupuesto adicional y los intereses, recargos o sanciones serán de cuenta del CLIENTE.\nc) Por cambios normativos o interpretativos posteriores: Serán de cuenta del CLIENTE, pudiendo contratar los servicios de rectificación mediante presupuesto adicional. En ningún caso implicará responsabilidad de EL PRESTADOR el haber aplicado la normativa vigente y los criterios interpretativos de la Administración Tributaria existentes en el momento de la presentación de las declaraciones.",
        contentPl: "Jeśli po złożeniu deklaracji zostaną wykryte błędy lub pominięcia:\na) Leżące po stronie USŁUGODAWCY: USŁUGODAWCA przejmie złożenie niezbędnych deklaracji uzupełniających lub korygujących bez dodatkowych kosztów i odpowie za wygenerowane odsetki za zwłokę, bez uszczerbku dla ustalonego ograniczenia odpowiedzialności.\nb) Leżące po stronie nieprawidłowych informacji KLIENTA: Złożenie deklaracji korygujących lub uzupełniających wymaga dodatkowej wyceny, a odsetki, dopłaty lub sankcje obciążają KLIENTA.\nc) Z powodu późniejszych zmian normatywnych lub interpretacyjnych: Obciążają KLIENTA, który może zakontraktować usługi korekty poprzez dodatkową wycenę. W żadnym wypadku USŁUGODAWCA nie ponosi odpowiedzialności za zastosowanie obowiązujących przepisów i kryteriów interpretacyjnych Administracji Podatkowej istniejących w momencie składania deklaracji."
      }
    ]
  },
  {
    number: "VIGÉSIMA",
    titleEs: "VIGÉSIMA. CONFIDENCIALIDAD Y PROTECCIÓN DE DATOS",
    titlePl: "DWUDZIESTA. POUFNOŚĆ I OCHRONA DANYCH",
    sections: [
      {
        id: "20.1",
        contentEs: "Conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), EL CLIENTE actuará como Responsable del Tratamiento y EL PRESTADOR como Encargado del Tratamiento conforme al art. 28 RGPD. La base jurídica del tratamiento es la ejecución del presente contrato (art. 6.1.b RGPD) y el cumplimiento de obligaciones legales en materia tributaria (art. 6.1.c RGPD).",
        contentPl: "Zgodnie z Rozporządzeniem (UE) 2016/679 (RODO) i Ustawą Organiczną 3/2018 (LOPDGDD), KLIENT działa jako Administrator Danych, a USŁUGODAWCA jako Podmiot Przetwarzający zgodnie z art. 28 RODO. Podstawą prawną przetwarzania jest wykonanie niniejszej umowy (art. 6.1.b RODO) i wypełnienie obowiązków prawnych w sprawach podatkowych (art. 6.1.c RODO)."
      },
      {
        id: "20.2",
        contentEs: "La única finalidad del tratamiento de los datos será la prestación de los servicios fiscales detallados en el presente contrato.",
        contentPl: "Jedynym celem przetwarzania danych jest świadczenie usług podatkowych szczegółowo opisanych w niniejszej umowie."
      },
      {
        id: "20.3",
        contentEs: "EL PRESTADOR se obliga a: (a) tratar los datos personales únicamente siguiendo instrucciones del CLIENTE, (b) garantizar confidencialidad, (c) implementar y mantener medidas técnicas y organizativas apropiadas conforme al artículo 32 del RGPD, incluyendo el cifrado de datos, control de accesos, copias de seguridad y registro de actividades de tratamiento, (d) no subcontratar sin autorización previa y por escrito del CLIENTE, (e) asistir al CLIENTE en el ejercicio de derechos de los interesados, (f) suprimir o devolver datos una vez finalizada la prestación, (g) poner a disposición del CLIENTE toda la información necesaria para demostrar el cumplimiento de las obligaciones del RGPD.",
        contentPl: "USŁUGODAWCA zobowiązuje się do: (a) przetwarzania danych osobowych wyłącznie zgodnie z instrukcjami KLIENTA, (b) gwarantowania poufności, (c) wdrażania i utrzymywania odpowiednich środków technicznych i organizacyjnych zgodnie z art. 32 RODO, w tym szyfrowania danych, kontroli dostępu, kopii zapasowych i rejestru czynności przetwarzania, (d) niepodzlecania bez uprzedniej pisemnej zgody KLIENTA, (e) wspomagania KLIENTA w wykonywaniu praw osób, których dane dotyczą, (f) usunięcia lub zwrotu danych po zakończeniu świadczenia, (g) udostępnienia KLIENTOWI wszystkich informacji niezbędnych do wykazania zgodności z obowiązkami RODO."
      },
      {
        id: "20.4",
        contentEs: "Las categorías de datos personales objeto de tratamiento incluyen datos identificativos, datos de características personales y datos económicos y financieros, estrictamente necesarios para la prestación del servicio.",
        contentPl: "Kategorie danych osobowych objętych przetwarzaniem obejmują dane identyfikacyjne, dane dotyczące cech osobowych oraz dane ekonomiczne i finansowe, ściśle niezbędne do świadczenia usługi."
      },
      {
        id: "20.5",
        contentEs: "EL CLIENTE podrá ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad dirigiéndose a EL PRESTADOR: admin@pgkhiszpania.com.",
        contentPl: "KLIENT może wykonywać swoje prawa dostępu, sprostowania, usunięcia, sprzeciwu, ograniczenia przetwarzania i przenoszenia, kontaktując się z USŁUGODAWCĄ: admin@pgkhiszpania.com."
      },
      {
        id: "20.6",
        contentEs: "Los datos personales serán conservados durante el plazo de vigencia del contrato y, posteriormente, durante el plazo de prescripción de las obligaciones tributarias (4 años desde la finalización del plazo de presentación de la declaración).",
        contentPl: "Dane osobowe będą przechowywane przez okres obowiązywania umowy, a następnie przez okres przedawnienia zobowiązań podatkowych (4 lata od zakończenia terminu składania deklaracji)."
      },
      {
        id: "20.7",
        contentEs: "EL PRESTADOR no realizará transferencias internacionales de datos fuera del Espacio Económico Europeo sin el consentimiento previo y por escrito del CLIENTE y sin garantizar un nivel de protección adecuado conforme al Capítulo V del RGPD.",
        contentPl: "USŁUGODAWCA nie będzie dokonywał międzynarodowych transferów danych poza Europejski Obszar Gospodarczy bez uprzedniej pisemnej zgody KLIENTA i bez zapewnienia odpowiedniego poziomu ochrony zgodnie z Rozdziałem V RODO."
      }
    ]
  },
  {
    number: "VIGÉSIMA PRIMERA",
    titleEs: "VIGÉSIMA PRIMERA. COMUNICACIONES",
    titlePl: "DWUDZIESTA PIERWSZA. KOMUNIKACJA",
    sections: [
      {
        id: "21.1",
        contentEs: "Todas las comunicaciones entre las partes relacionadas con el presente contrato deberán realizarse por escrito, preferentemente por correo electrónico, a: klient@pgkhiszpania.com.",
        contentPl: "Wszelka komunikacja między stronami związana z niniejszą umową musi odbywać się na piśmie, najlepiej drogą elektroniczną, na adres: klient@pgkhiszpania.com."
      },
      {
        id: "21.2",
        contentEs: "Las comunicaciones por correo electrónico se considerarán recibidas: (a) en el mismo día, si se envían antes de las 15:00 horas de un día hábil, (b) al día hábil siguiente, si se envían después de las 15:00 horas o en día inhábil. Se considerarán días inhábiles los sábados, domingos y festivos nacionales en España.",
        contentPl: "Komunikaty przesłane pocztą elektroniczną uważa się za otrzymane: (a) tego samego dnia, jeśli wysłane przed godziną 15:00 w dniu roboczym, (b) następnego dnia roboczego, jeśli wysłane po godzinie 15:00 lub w dniu wolnym od pracy. Za dni wolne od pracy uważa się soboty, niedziele i święta narodowe w Hiszpanii."
      }
    ]
  },
  {
    number: "VIGÉSIMA SEGUNDA",
    titleEs: "VIGÉSIMA SEGUNDA. PROPIEDAD INTELECTUAL",
    titlePl: "DWUDZIESTA DRUGA. WŁASNOŚĆ INTELEKTUALNA",
    sections: [
      {
        id: "22.1",
        contentEs: "Titularidad: La propiedad intelectual de los informes, cálculos, metodologías y cualquier material elaborado por EL PRESTADOR corresponde en exclusiva a EL PRESTADOR.",
        contentPl: "Własność: Własność intelektualna raportów, obliczeń, metodologii i wszelkich materiałów opracowanych przez USŁUGODAWCĘ należy wyłącznie do USŁUGODAWCY."
      },
      {
        id: "22.2",
        contentEs: "Licencia de uso: EL CLIENTE adquiere un derecho de uso no exclusivo e intransferible sobre los materiales entregados, exclusivamente para cumplimiento de sus obligaciones tributarias. Quedan prohibidos: reproducción para terceros, cesión, venta, uso comercial, ingeniería inversa, eliminación de marcas de EL PRESTADOR, modificación o publicación.",
        contentPl: "Licencja użytkowania: KLIENT nabywa niewyłączne i niezbywalne prawo do korzystania z dostarczonych materiałów, wyłącznie w celu wypełnienia swoich obowiązków podatkowych. Zabronione jest: powielanie dla osób trzecich, cesja, sprzedaż, użycie komercyjne, inżynieria wsteczna, usuwanie znaków USŁUGODAWCY, modyfikacja lub publikacja."
      },
      {
        id: "22.3",
        contentEs: "Consecuencias del uso indebido: En caso de incumplimiento de las prohibiciones establecidas en el apartado 22.2, EL PRESTADOR podrá: a) Exigir el cese inmediato del uso no autorizado. b) Resolver el contrato de forma inmediata, sin perjuicio de las responsabilidades ya nacidas. c) Reclamar la indemnización de los daños y perjuicios efectivamente causados y debidamente acreditados, incluyendo el lucro cesante derivado del uso no autorizado y los costes de defensa legal. d) Ejercer las acciones civiles y penales que correspondan conforme a la Ley de Propiedad Intelectual (Real Decreto Legislativo 1/1996).",
        contentPl: "Konsekwencje niewłaściwego użycia: W przypadku naruszenia zakazów określonych w punkcie 22.2, USŁUGODAWCA może: a) Żądać natychmiastowego zaprzestania nieautoryzowanego użycia. b) Rozwiązać umowę ze skutkiem natychmiastowym, bez uszczerbku dla już powstałych zobowiązań. c) Dochodzić odszkodowania za faktycznie poniesione i należycie udokumentowane szkody, w tym utracone korzyści wynikające z nieautoryzowanego użycia i koszty obrony prawnej. d) Podjąć działania cywilne i karne zgodnie z Ustawą o Własności Intelektualnej (Królewski Dekret Legislacyjny 1/1996)."
      },
      {
        id: "22.4",
        contentEs: "Propiedad de datos del CLIENTE: Todos los datos personales, documentos originales y demás información aportada por EL CLIENTE son y seguirán siendo de su exclusiva propiedad.",
        contentPl: "Własność danych KLIENTA: Wszystkie dane osobowe, oryginalne dokumenty i inne informacje dostarczone przez KLIENTA są i pozostaną jego wyłączną własnością."
      }
    ]
  },
  {
    number: "VIGÉSIMA TERCERA",
    titleEs: "VIGÉSIMA TERCERA. RESOLUCIÓN AMISTOSA DE CONFLICTOS",
    titlePl: "DWUDZIESTA TRZECIA. POLUBOWNE ROZSTRZYGANIE SPORÓW",
    sections: [
      {
        id: "23.1",
        contentEs: "Las partes acuerdan que, en caso de cualquier discrepancia relacionada con el presente contrato, intentarán resolverla de buena fe mediante negociación directa antes de acudir a los tribunales.",
        contentPl: "Strony uzgadniają, że w przypadku jakiejkolwiek rozbieżności związanej z niniejszą umową, będą próbować rozwiązać ją w dobrej wierze poprzez bezpośrednie negocjacje przed zwróceniem się do sądów."
      },
      {
        id: "23.2",
        contentEs: "Si en el plazo de quince (15) días naturales desde que una parte comunique a la otra su disconformidad no se alcanza un acuerdo, cualquiera de las partes podrá: (a) acudir a una entidad de mediación de consumo acreditada, de forma voluntaria y gratuita para el consumidor, conforme a la Ley 7/2017 de resolución alternativa de litigios en materia de consumo, o (b) iniciar las acciones judiciales que considere oportunas.",
        contentPl: "Jeśli w terminie piętnastu (15) dni kalendarzowych od momentu, gdy jedna strona zakomunikuje drugiej swoją niezgodę, nie zostanie osiągnięte porozumienie, każda ze stron może: (a) zwrócić się do akredytowanego podmiotu mediacji konsumenckiej, dobrowolnie i bezpłatnie dla konsumenta, zgodnie z Ustawą 7/2017 o alternatywnym rozstrzyganiu sporów konsumenckich, lub (b) wszcząć postępowanie sądowe, które uzna za stosowne."
      },
      {
        id: "23.3",
        contentEs: "El sometimiento a mediación no es obligatorio, pero EL PRESTADOR se compromete a participar en ella de buena fe si EL CLIENTE así lo solicita.",
        contentPl: "Poddanie się mediacji nie jest obowiązkowe, ale USŁUGODAWCA zobowiązuje się uczestniczyć w niej w dobrej wierze, jeśli KLIENT tego zażąda."
      },
      {
        id: "23.4",
        contentEs: "Durante el proceso de mediación se suspenderán los plazos de prescripción y caducidad de las acciones.",
        contentPl: "W trakcie procesu mediacji terminy przedawnienia i wygaśnięcia roszczeń ulegają zawieszeniu."
      }
    ]
  },
  {
    number: "VIGÉSIMA CUARTA",
    titleEs: "VIGÉSIMA CUARTA. FUERZA MAYOR",
    titlePl: "DWUDZIESTA CZWARTA. SIŁA WYŻSZA",
    sections: [
      {
        id: "24.1",
        contentEs: "Ninguna de las partes será responsable del incumplimiento de sus obligaciones cuando este sea consecuencia de eventos de fuerza mayor (acontecimientos extraordinarios, imprevisibles e inevitables). Se considerarán eventos de fuerza mayor: catástrofes naturales, guerras, disturbios, actos terroristas, huelgas generales, caída de sistemas informáticos de la AEAT que impidan la presentación telemática, o pandemias oficialmente declaradas.",
        contentPl: "Żadna ze stron nie ponosi odpowiedzialności za niewykonanie swoich zobowiązań, gdy wynika ono z zdarzeń siły wyższej (zdarzeń nadzwyczajnych, nieprzewidywalnych i nieuniknionych). Za zdarzenia siły wyższej uważa się: katastrofy naturalne, wojny, zamieszki, akty terrorystyczne, strajki generalne, awarię systemów informatycznych AEAT uniemożliwiającą elektroniczne składanie deklaracji, lub oficjalnie ogłoszone pandemie."
      },
      {
        id: "24.2",
        contentEs: "La parte afectada deberá notificar a la otra en cuarenta y ocho (48) horas. Si el evento persiste más de treinta (30) días, cualquiera de las partes podrá resolver el contrato sin penalización, liquidándose los servicios efectivamente prestados.",
        contentPl: "Strona dotknięta zobowiązana jest powiadomić drugą stronę w ciągu czterdziestu ośmiu (48) godzin. Jeśli zdarzenie trwa dłużej niż trzydzieści (30) dni, każda ze stron może rozwiązać umowę bez kary, z rozliczeniem faktycznie wykonanych usług."
      }
    ]
  },
  {
    number: "VIGÉSIMA QUINTA",
    titleEs: "VIGÉSIMA QUINTA. CESIÓN",
    titlePl: "DWUDZIESTA PIĄTA. CESJA",
    sections: [
      {
        id: "25.1",
        contentEs: "El presente contrato tiene carácter personal e intuitu personae. Ninguna de las partes podrá ceder, transferir o subcontratar total o parcialmente sus derechos u obligaciones sin el consentimiento previo y por escrito de la otra parte. Excepción: EL PRESTADOR podrá subcontratar servicios auxiliares (traducciones, notificaciones) manteniendo la responsabilidad directa frente al CLIENTE y las obligaciones de confidencialidad y protección de datos.",
        contentPl: "Niniejsza umowa ma charakter osobisty i intuitu personae. Żadna ze stron nie może cedować, przenosić ani podzlecać całkowicie lub częściowo swoich praw lub obowiązków bez uprzedniej pisemnej zgody drugiej strony. Wyjątek: USŁUGODAWCA może podzlecać usługi pomocnicze (tłumaczenia, powiadomienia), zachowując bezpośrednią odpowiedzialność wobec KLIENTA oraz obowiązki poufności i ochrony danych."
      }
    ]
  },
  {
    number: "VIGÉSIMA SEXTA",
    titleEs: "VIGÉSIMA SEXTA. INTEGRIDAD DEL CONTRATO",
    titlePl: "DWUDZIESTA SZÓSTA. INTEGRALNOŚĆ UMOWY",
    sections: [
      {
        id: "26.1",
        contentEs: "El presente contrato constituye el acuerdo íntegro entre las partes y sustituye cualquier negociación, acuerdo o comunicación previa, oral o escrita. En caso de contradicción entre el contrato y sus anexos, prevalecerá el texto del contrato principal, salvo que expresamente se establezca lo contrario.",
        contentPl: "Niniejsza umowa stanowi pełne porozumienie między stronami i zastępuje wszelkie wcześniejsze negocjacje, umowy lub komunikaty, ustne lub pisemne. W przypadku sprzeczności między umową a jej załącznikami, pierwszeństwo ma tekst umowy głównej, chyba że wyraźnie postanowiono inaczej."
      }
    ]
  },
  {
    number: "VIGÉSIMA SÉPTIMA",
    titleEs: "VIGÉSIMA SÉPTIMA. LEGISLACIÓN APLICABLE Y JURISDICCIÓN",
    titlePl: "DWUDZIESTA SIÓDMA. PRAWO WŁAŚCIWE I JURYSDYKCJA",
    sections: [
      {
        id: "27.1",
        contentEs: "El presente contrato se regirá e interpretará conforme a la legislación española, incluyendo la normativa imperativa en materia de protección de consumidores y usuarios.",
        contentPl: "Niniejsza umowa podlega prawu hiszpańskiemu i będzie interpretowana zgodnie z nim, w tym z bezwzględnie obowiązującymi przepisami dotyczącymi ochrony konsumentów i użytkowników."
      },
      {
        id: "27.2",
        contentEs: "Cualquier controversia derivada de la interpretación, validez, ejecución o resolución del contrato se someterá a los Juzgados y Tribunales del domicilio del consumidor, sin perjuicio de los fueros imperativos previstos en la Ley de Enjuiciamiento Civil y del Reglamento (UE) 1215/2012.",
        contentPl: "Wszelkie spory wynikające z interpretacji, ważności, wykonania lub rozwiązania umowy będą poddane sądom właściwym dla miejsca zamieszkania konsumenta, bez uszczerbku dla obowiązkowych jurysdykcji przewidzianych w Ustawie o postępowaniu cywilnym i Rozporządzeniu (UE) 1215/2012."
      },
      {
        id: "27.3",
        contentEs: "En contratos con consumidores residentes en otro Estado miembro de la Unión Europea, la elección de la legislación española no privará al consumidor de la protección que le otorguen las disposiciones imperativas de su país de residencia habitual, conforme al artículo 6 del Reglamento (CE) 593/2008 (Roma I).",
        contentPl: "W umowach z konsumentami zamieszkałymi w innym państwie członkowskim Unii Europejskiej, wybór prawa hiszpańskiego nie pozbawi konsumenta ochrony przyznanej mu przez bezwzględnie obowiązujące przepisy kraju jego zwykłego pobytu, zgodnie z art. 6 Rozporządzenia (WE) 593/2008 (Rzym I)."
      },
      {
        id: "27.4",
        contentEs: "Para cualquier reclamación o consulta, EL CLIENTE podrá dirigirse a EL PRESTADOR: C/ Matilde Peñaranda, 27, 5.º A, 03183 Torrevieja (Alicante) o al correo electrónico: info@pgkhiszpania.com. Se facilitarán hojas oficiales de reclamaciones y acceso a sistemas de resolución alternativa de litigios conforme a la Ley 7/2017.",
        contentPl: "W przypadku jakichkolwiek reklamacji lub zapytań, KLIENT może skontaktować się z USŁUGODAWCĄ: C/ Matilde Peñaranda, 27, 5.º A, 03183 Torrevieja (Alicante) lub pod adresem e-mail: info@pgkhiszpania.com. Zostaną udostępnione oficjalne arkusze reklamacyjne oraz dostęp do systemów alternatywnego rozstrzygania sporów zgodnie z Ustawą 7/2017."
      },
      {
        id: "27.5",
        contentEs: "Las reclamaciones serán atendidas en un plazo máximo de diez (10) días hábiles desde su recepción.",
        contentPl: "Reklamacje będą rozpatrywane w maksymalnym terminie dziesięciu (10) dni roboczych od ich otrzymania."
      }
    ]
  },
  {
    number: "VIGÉSIMA OCTAVA",
    titleEs: "VIGÉSIMA OCTAVA. IDIOMA DEL CONTRATO",
    titlePl: "DWUDZIESTA ÓSMA. JĘZYK UMOWY",
    sections: [
      {
        id: "28.1",
        contentEs: "El presente contrato se redacta en español y polaco. Ambas versiones son válidas; no obstante, en caso de discrepancia, prevalecerá la versión en español, que será la única jurídicamente vinculante. EL CLIENTE declara expresamente comprender suficientemente el idioma español o haber recibido traducción adecuada que le permite conocer el contenido íntegro del contrato y sus implicaciones jurídicas.",
        contentPl: "Niniejsza umowa jest sporządzona w języku hiszpańskim i polskim. Obie wersje są ważne; jednakże w przypadku rozbieżności, pierwszeństwo ma wersja hiszpańska, która będzie jedyną prawnie wiążącą. KLIENT oświadcza wyraźnie, że dostatecznie rozumie język hiszpański lub otrzymał odpowiednie tłumaczenie umożliwiające mu poznanie pełnej treści umowy i jej implikacji prawnych."
      }
    ]
  }
];

// ===========================================
// CIERRE Y FIRMAS
// ===========================================
export const closingSection = {
  declarationEs: "Ambas partes declaran haber leído, comprendido y aceptado el contenido y alcance del presente contrato. En prueba de conformidad, ambas partes firman el presente contrato en duplicado, quedando un ejemplar en poder de cada una.",
  declarationPl: "Obie strony oświadczają, że przeczytały, zrozumiały i zaakceptowały treść i zakres niniejszej umowy. Na dowód zgodności, obie strony podpisują niniejszą umowę w dwóch egzemplarzach, przy czym każda ze stron zatrzymuje jeden egzemplarz.",
  
  signatures: {
    prestador: {
      labelEs: "EL PRESTADOR",
      labelPl: "USŁUGODAWCA",
      companyName: "POLSKA GRUPA KONSULTINGOWA, S.L.",
      representative: "D.ª Natalia Małgorzata Sikora"
    },
    cliente: {
      labelEs: "EL CLIENTE",
      labelPl: "KLIENT"
    }
  }
};

// ===========================================
// DATOS BANCARIOS
// ===========================================
export const bankDetails = {
  entity: "REVOLUT BANK UAB",
  holder: "POLSKA GRUPA KONSULTINGOWA, S.L.",
  cif: "B22682827",
  iban: "ES34 1583 0001 1493 3147 3575",
  bic: "REVOESM2",
  conceptTemplate: (clientName: string, nie: string, year: string) => 
    `IRNR ${year} – ${clientName} ${nie}`
};

// Meses en español y polaco
export const months = {
  es: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
  pl: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]
};
