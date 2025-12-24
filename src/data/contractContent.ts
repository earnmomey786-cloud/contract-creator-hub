// Contenido completo del contrato bilingüe ES-PL
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
  titleEs: "Contrato de Prestación de Servicios Profesionales para la Confección y Presentación del Modelo 210 – Impuesto sobre la Renta de No Residentes",
  titlePl: "Umowa o Świadczenie Usług Profesjonalnych w zakresie Sporządzenia i Złożenia Formularza 210 – Podatek Dochodowy od Nierezydentów",
  dateFormatEs: (ciudad: string, dia: string, mes: string, anio: string) => 
    `En ${ciudad} a ${dia} de ${mes} de ${anio}`,
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
    { es: "LAS PARTES", pl: "STRONY UMOWY" },
    { es: "MANIFIESTAN", pl: "OŚWIADCZENIA" },
    { es: "PRIMERA. - OBJETO Y ALCANCE", pl: "PIERWSZA. - PRZEDMIOT I ZAKRES" },
    { es: "SEGUNDA. - SERVICIOS CONTRATADOS Y EJECUCIÓN TÉCNICA", pl: "DRUGA. - ZAKONTRAKTOWANE USŁUGI I REALIZACJA TECHNICZNA" },
    { es: "TERCERA. - OBLIGACIONES DEL PRESTADOR", pl: "TRZECIA. - OBOWIĄZKI USŁUGODAWCY" },
    { es: "CUARTA. - OBLIGACIONES DEL CLIENTE", pl: "CZWARTA. - OBOWIĄZKI KLIENTA" },
    { es: "QUINTA. – SERVICIOS CONTRATADOS, HONORARIOS Y FORMA DE PAGO", pl: "PIĄTA. – ZAKONTRAKTOWANE USŁUGI, HONORARIA I FORMA PŁATNOŚCI" },
    { es: "SEXTA. - DURACIÓN Y VIGENCIA", pl: "SZÓSTA. - CZAS TRWANIA I OBOWIĄZYWANIE" },
    { es: "SÉPTIMA. - DERECHO DE DESISTIMIENTO", pl: "SIÓDMA. - PRAWO DO ODSTĄPIENIA" },
    { es: "OCTAVA. - CAUSAS DE RESOLUCIÓN DEL CONTRATO", pl: "ÓSMA. - PRZYCZYNY ROZWIĄZANIA UMOWY" },
    { es: "NOVENA. – RESPONSABILIDAD Y AUTORIZACIONES", pl: "DZIEWIĄTA. – ODPOWIEDZIALNOŚĆ I UPOWAŻNIENIA" },
    { es: "DÉCIMA. - CONFIDENCIALIDAD Y PROTECCIÓN DE DATOS", pl: "DZIESIĄTA. - POUFNOŚĆ I OCHRONA DANYCH" },
    { es: "UNDÉCIMA. - COMUNICACIONES", pl: "JEDENASTA. - KOMUNIKACJA" },
    { es: "DUODÉCIMA. - PROPIEDAD INTELECTUAL", pl: "DWUNASTA. - WŁASNOŚĆ INTELEKTUALNA" },
    { es: "DECIMOTERCERA. - MODIFICACIONES DEL CONTRATO", pl: "TRZYNASTA. - ZMIANY UMOWY" },
    { es: "DECIMOCUARTA. - LEGISLACIÓN APLICABLE Y JURISDICCIÓN", pl: "CZTERNASTA. - PRAWO WŁAŚCIWE I JURYSDYKCJA" },
    { es: "DECIMOQUINTA. - IDIOMA DEL CONTRATO", pl: "PIĘTNASTA. - JĘZYK UMOWY" },
  ]
};

// ===========================================
// LAS PARTES
// ===========================================
export const partiesSection = {
  titleEs: "LAS PARTES",
  titlePl: "STRONY UMOWY",
  prestadorEs: (ciudad: string, dia: string, mes: string, anio: string) => `De una parte, POLSKA GRUPA KONSULTINGOWA, S.L., NIF B-22682827, C/ Matilde Peñaranda, 27, 5.º A, 03183 Torrevieja (Alicante), inscrita en el Registro Mercantil de Alicante (S-8, H-A 199665, I/A-1 de 31.07.25), representada por D.ª Natalia Małgorzata Sikora (en adelante, "EL PRESTADOR")`,
  prestadorPl: (ciudad: string, dia: string, mes: string, anio: string) => `Z jednej strony, POLSKA GRUPA KONSULTINGOWA, S.L., NIF B-22682827, C/ Matilde Peñaranda, 27, 5.º A, 03183 Torrevieja (Alicante), wpisana do Rejestru Handlowego w Alicante (S-8, H-A 199665, I/A-1 z dnia 31.07.25), reprezentowana przez Panią Natalię Małgorzatę Sikorę (zwana dalej "USŁUGODAWCĄ")`,
  clienteEs: (nombre: string, nie: string, email: string, domicilio: string) => `Y de otra parte, D./D.ª ${nombre}, identificado/a con NIE ${nie}, correo electrónico a efectos de notificaciones ${email}, con domicilio fiscal en ${domicilio}, quien actúa en su propio nombre y, en su caso, en nombre y representación del resto de cotitulares del inmueble descrito más adelante, manifestando contar con autorización suficiente para ello, en adelante, "EL CLIENTE".`,
  clientePl: (nombre: string, nie: string, email: string, domicilio: string) => `Z drugiej strony, Pan/Pani ${nombre}, legitymujący/a się numerem NIE ${nie}, adres e-mail do celów powiadomień ${email}, z siedzibą podatkową pod adresem ${domicilio}, działający/a we własnym imieniu oraz, w stosownych przypadkach, w imieniu i na rzecz pozostałych współwłaścicieli nieruchomości opisanej poniżej, oświadczając, że posiada wystarczające upoważnienie w tym zakresie, zwany/a dalej "KLIENTEM".`,
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
      es: "Que EL PRESTADOR es una firma especializada en consultoría tributaria internacional con amplia experiencia en la fiscalidad de no residentes en España. Cuenta con el equipo técnico, la cualificación profesional y los medios telemáticos necesarios para la gestión y presentación de autoliquidaciones ante la Agencia Estatal de Administración Tributaria (AEAT).",
      pl: "Że USŁUGODAWCA jest firmą specjalizującą się w międzynarodowym doradztwie podatkowym, posiadającą bogate doświadczenie w zakresie opodatkowania nierezydentów w Hiszpanii. Dysponuje zespołem technicznym, kwalifikacjami zawodowymi oraz środkami telematycznymi niezbędnymi do zarządzania i składania deklaracji podatkowych przed Państwową Agencją Administracji Podatkowej (AEAT)."
    },
    {
      numeral: "II.",
      esTemplate: (direccion: string, cp: string, provincia: string, comunidad: string) => `Que EL CLIENTE declara su condición de no residente fiscal en España, conforme a lo dispuesto en el Real Decreto Legislativo 5/2004, y es titular, directa o conjuntamente con otros cotitulares, del bien inmueble sito en ${direccion}, CP ${cp}, ${provincia} (${comunidad}). Como titular de rentas inmobiliarias en territorio español, reconoce expresamente su condición de obligado tributario y su deber legal de autoliquidar el Impuesto sobre la Renta de No Residentes (Modelo 210), ante la AEAT, asumiendo que el incumplimiento de los plazos legales puede derivar en responsabilidades, sanciones o recargos según la Ley General Tributaria.`,
      plTemplate: (direccion: string, cp: string, provincia: string, comunidad: string) => `Że KLIENT oświadcza, iż posiada status nierezydenta podatkowego w Hiszpanii, zgodnie z postanowieniami Królewskiego Dekretu Legislacyjnego 5/2004, oraz jest właścicielem, bezpośrednio lub wspólnie z innymi współwłaścicielami, nieruchomości położonej pod adresem ${direccion}, kod pocztowy ${cp}, ${provincia} (${comunidad}). Jako posiadacz dochodów z nieruchomości na terytorium hiszpańskim, wyraźnie uznaje swój status podatnika oraz prawny obowiązek samodzielnego rozliczenia Podatku Dochodowego od Nierezydentów (Formularz 210) przed AEAT, przyjmując do wiadomości, że niedotrzymanie terminów ustawowych może skutkować odpowiedzialnością, sankcjami lub dopłatami zgodnie z Ogólną Ordynacją Podatkową.`
    },
    {
      numeral: "III.",
      es: "Que EL CLIENTE, consciente de la complejidad técnica de la normativa fiscal aplicable a no residentes, manifiesta su interés en contar con el asesoramiento profesional de EL PRESTADOR para el adecuado cumplimiento de sus obligaciones tributarias en España, incluyendo la confección, cálculo, revisión y presentación telemática de las correspondientes autoliquidaciones del IRNR, así como de las actuaciones complementarias o accesorias que resulten necesarias en relación con las rentas obtenidas en territorio español sin mediación de establecimiento permanente.",
      pl: "Że KLIENT, świadomy złożoności technicznej przepisów podatkowych mających zastosowanie do nierezydentów, wyraża zainteresowanie skorzystaniem z profesjonalnego doradztwa USŁUGODAWCY w celu właściwego wypełnienia swoich obowiązków podatkowych w Hiszpanii, w tym sporządzenia, obliczenia, weryfikacji i elektronicznego złożenia odpowiednich deklaracji IRNR, jak również działań uzupełniających lub pomocniczych, które okażą się niezbędne w związku z dochodami uzyskanymi na terytorium hiszpańskim bez pośrednictwa stałego zakładu."
    },
    {
      numeral: "IV.",
      es: "Que ambas partes han acordado suscribir el presente contrato de prestación de servicios conforme a la normativa aplicable y a las siguientes:",
      pl: "Że obie strony uzgodniły zawarcie niniejszej umowy o świadczenie usług zgodnie z obowiązującymi przepisami oraz następującymi postanowieniami:"
    }
  ]
};

// ===========================================
// CLÁUSULAS DEL CONTRATO
// ===========================================
export const clauses: ContractClause[] = [
  {
    number: "PRIMERA",
    titleEs: "PRIMERA. - OBJETO Y ALCANCE",
    titlePl: "PIERWSZA. - PRZEDMIOT I ZAKRES",
    sections: [
      {
        id: "1.1",
        contentEs: "El objeto del presente contrato es la prestación de servicios de asesoramiento, gestión y cumplimiento de las obligaciones fiscales en España del CLIENTE, en su condición de no residente, a cargo de EL PRESTADOR, conforme a los términos y condiciones establecidos en el presente contrato.",
        contentPl: "Przedmiotem niniejszej umowy jest świadczenie usług doradztwa, zarządzania i wypełniania obowiązków podatkowych w Hiszpanii KLIENTA, w jego charakterze nierezydenta, przez USŁUGODAWCĘ, zgodnie z warunkami określonymi w niniejszej umowie."
      },
      {
        id: "1.2",
        contentEs: "Los servicios específicos que se prestarán en virtud de este contrato son, exclusivamente, los que se detallan en el CLÁUSULA QUINTA - SERVICIOS CONTRATADOS, HONORARIOS Y FORMA DE PAGO.",
        contentPl: "Konkretne usługi, które będą świadczone na mocy niniejszej umowy, to wyłącznie te, które zostały wyszczególnione w KLAUZULI PIĄTEJ - ZAKONTRAKTOWANE USŁUGI, HONORARIA I FORMA PŁATNOŚCI."
      },
      {
        id: "1.3",
        contentEs: "Queda expresamente excluido del objeto de este contrato cualquier servicio no especificado en la Cláusula Quinta. Cualquier servicio adicional o modificación del alcance deberá formalizarse por escrito mediante documento de \"Modificación de Servicios\" aceptado por ambas partes.",
        contentPl: "Z przedmiotu niniejszej umowy wyraźnie wyłączona jest każda usługa niewymieniona w Klauzuli Piątej. Każda dodatkowa usługa lub modyfikacja zakresu musi zostać sformalizowana na piśmie poprzez dokument \"Modyfikacji Usług\" zaakceptowany przez obie strony."
      }
    ]
  },
  {
    number: "SEGUNDA",
    titleEs: "SEGUNDA. - SERVICIOS CONTRATADOS Y EJECUCIÓN TÉCNICA",
    titlePl: "DRUGA. - ZAKONTRAKTOWANE USŁUGI I REALIZACJA TECHNICZNA",
    sections: [
      {
        id: "2.1",
        contentEs: "EL PRESTADOR ejecutará los servicios objeto de este contrato a través de su propio equipo técnico o profesionales colaboradores bajo su directa supervisión y responsabilidad. EL PRESTADOR garantiza que las actuaciones que requieran titulación específica serán validadas por profesionales debidamente cualificados y, en su caso, colegiados.",
        contentPl: "USŁUGODAWCA będzie wykonywał usługi objęte niniejszą umową poprzez własny zespół techniczny lub współpracujących specjalistów pod jego bezpośrednim nadzorem i odpowiedzialnością. USŁUGODAWCA gwarantuje, że działania wymagające specjalistycznych kwalifikacji będą zatwierdzane przez odpowiednio wykwalifikowanych specjalistów, a w stosownych przypadkach, przez członków samorządów zawodowych."
      },
      {
        id: "2.2",
        contentEs: "EL PRESTADOR actuará con total autonomía e independencia de criterio profesional en el desempeño de sus funciones, aplicando sus conocimientos conforme a la normativa vigente y a la lex artis profesional.",
        contentPl: "USŁUGODAWCA będzie działał z pełną autonomią i niezależnością profesjonalnego osądu w wykonywaniu swoich funkcji, stosując swoją wiedzę zgodnie z obowiązującymi przepisami i lex artis zawodową."
      },
      {
        id: "2.3",
        contentEs: "EL PRESTADOR garantiza que la prestación de los servicios se realizará por profesionales debidamente cualificados, y que mantiene en vigor una póliza de responsabilidad civil profesional adecuada a la naturaleza de los servicios contratados, comprometiéndose a aportar acreditación de la misma cuando sea razonablemente requerida por el CLIENTE.",
        contentPl: "USŁUGODAWCA gwarantuje, że świadczenie usług będzie realizowane przez odpowiednio wykwalifikowanych specjalistów oraz że posiada ważną polisę odpowiedzialności cywilnej zawodowej odpowiednią do charakteru zakontraktowanych usług, zobowiązując się do przedstawienia jej potwierdzenia na uzasadnione żądanie KLIENTA."
      },
      {
        id: "2.4",
        contentEs: "Toda comunicación relacionada con la ejecución del presente contrato se realizará directamente entre EL CLIENTE y EL PRESTADOR, quien actuará como único interlocutor a todos los efectos. Las comunicaciones se realizarán en idioma español, pudiendo facilitarse, para la mejor comprensión del CLIENTE, traducciones al idioma polaco, que tendrán carácter informativo, siendo vinculante en todo caso la versión en español.",
        contentPl: "Wszelka komunikacja związana z wykonaniem niniejszej umowy będzie odbywać się bezpośrednio pomiędzy KLIENTEM a USŁUGODAWCĄ, który będzie działał jako jedyny rozmówca we wszystkich sprawach. Komunikacja będzie prowadzona w języku hiszpańskim, przy czym dla lepszego zrozumienia przez KLIENTA mogą być dostarczane tłumaczenia na język polski, które będą miały charakter informacyjny, a wiążąca będzie w każdym przypadku wersja hiszpańska."
      }
    ]
  },
  {
    number: "TERCERA",
    titleEs: "TERCERA. - OBLIGACIONES DEL PRESTADOR",
    titlePl: "TRZECIA. - OBOWIĄZKI USŁUGODAWCY",
    sections: [
      {
        id: "3.1",
        contentEs: "EL PRESTADOR se compromete a prestar los servicios objeto del presente contrato con la diligencia profesional exigible, conforme a la normativa fiscal aplicable y a las buenas prácticas del sector, sin asumir en ningún caso obligaciones de resultado, más allá de las legalmente exigibles.",
        contentPl: "USŁUGODAWCA zobowiązuje się do świadczenia usług objętych niniejszą umową z wymaganą starannością zawodową, zgodnie z obowiązującymi przepisami podatkowymi i dobrymi praktykami branżowymi, bez przyjmowania w żadnym przypadku zobowiązań rezultatu, wykraczających poza wymagane prawnie."
      },
      {
        id: "3.2",
        contentEs: "EL PRESTADOR realizará la gestión organizativa y administrativa necesaria para la correcta ejecución de los servicios contratados, sobre la base de la información y documentación que le sea facilitada por EL CLIENTE, sin que dicha gestión implique la asunción de funciones de supervisión general, control permanente o garantía del cumplimiento de plazos cuya observancia dependa del CLIENTE o de terceros.",
        contentPl: "USŁUGODAWCA przeprowadzi zarządzanie organizacyjne i administracyjne niezbędne do prawidłowego wykonania zakontraktowanych usług, na podstawie informacji i dokumentacji dostarczonej przez KLIENTA, przy czym zarządzanie to nie oznacza przyjęcia funkcji ogólnego nadzoru, stałej kontroli lub gwarancji dotrzymania terminów, których przestrzeganie zależy od KLIENTA lub osób trzecich."
      },
      {
        id: "3.3",
        contentEs: "EL PRESTADOR mantendrá informado al CLIENTE, de forma razonable, del estado de tramitación de las actuaciones realizadas, facilitándole, cuando proceda, copia de las autoliquidaciones o modelos presentados y los justificantes de su presentación, sin que ello suponga una obligación de seguimiento continuado o de asesoramiento permanente no expresamente contratado.",
        contentPl: "USŁUGODAWCA będzie rozsądnie informował KLIENTA o stanie realizacji przeprowadzonych działań, dostarczając mu, gdy będzie to właściwe, kopie złożonych deklaracji lub formularzy oraz potwierdzenia ich złożenia, bez obowiązku ciągłego monitorowania lub stałego doradztwa, które nie zostało wyraźnie zakontraktowane."
      },
      {
        id: "3.4",
        contentEs: "EL PRESTADOR guardará estricto deber de confidencialidad respecto de la información y documentación facilitada por EL CLIENTE, comprometiéndose a utilizarlas exclusivamente para la ejecución de los servicios contratados y a custodiarlas con la diligencia razonable durante la vigencia del contrato o mientras exista obligación legal de conservación.",
        contentPl: "USŁUGODAWCA zachowa ścisły obowiązek poufności w odniesieniu do informacji i dokumentacji dostarczonej przez KLIENTA, zobowiązując się do wykorzystywania ich wyłącznie w celu wykonania zakontraktowanych usług oraz do przechowywania ich z należytą starannością przez okres obowiązywania umowy lub przez okres, w którym istnieje prawny obowiązek przechowywania."
      }
    ]
  },
  {
    number: "CUARTA",
    titleEs: "CUARTA. - OBLIGACIONES DEL CLIENTE",
    titlePl: "CZWARTA. - OBOWIĄZKI KLIENTA",
    sections: [
      {
        id: "4.1",
        contentEs: "EL CLIENTE se compromete a colaborar activamente con EL PRESTADOR, facilitando de forma veraz, completa y actualizada toda la información y documentación que resulte necesaria para la correcta prestación de los servicios contratados, dentro de los plazos que razonablemente le sean indicados.",
        contentPl: "KLIENT zobowiązuje się do aktywnej współpracy z USŁUGODAWCĄ, dostarczając w sposób prawdziwy, kompletny i aktualny wszystkie informacje i dokumentację niezbędne do prawidłowego świadczenia zakontraktowanych usług, w rozsądnych terminach, które zostaną mu wskazane."
      },
      {
        id: "4.2",
        contentEs: "EL CLIENTE es único responsable de la veracidad, exactitud e integridad de los datos, documentos y manifestaciones que facilite. EL PRESTADOR no asumirá responsabilidad alguna por las consecuencias que pudieran derivarse de la omisión, inexactitud, falsedad o falta de actualización de dicha información.",
        contentPl: "KLIENT ponosi wyłączną odpowiedzialność za prawdziwość, dokładność i kompletność dostarczonych danych, dokumentów i oświadczeń. USŁUGODAWCA nie ponosi żadnej odpowiedzialności za konsekwencje, które mogą wyniknąć z pominięcia, niedokładności, fałszywości lub braku aktualizacji tych informacji."
      },
      {
        id: "4.3",
        contentEs: "EL CLIENTE se obliga a abonar los honorarios profesionales correspondientes a los servicios contratados en la cuantía, forma y plazos establecidos en el presente contrato.",
        contentPl: "KLIENT zobowiązuje się do uiszczenia honorariów zawodowych odpowiadających zakontraktowanym usługom w wysokości, formie i terminach określonych w niniejszej umowie."
      },
      {
        id: "4.4",
        contentEs: "EL CLIENTE deberá comunicar de forma inmediata a EL PRESTADOR cualquier modificación de sus datos personales, fiscales o de sus circunstancias que pudiera tener relevancia tributaria, incluyendo, a título meramente enunciativo, cambios de residencia fiscal, titularidad, porcentajes de participación o situación del inmueble.",
        contentPl: "KLIENT zobowiązany jest niezwłocznie powiadomić USŁUGODAWCĘ o wszelkich zmianach swoich danych osobowych, podatkowych lub okoliczności, które mogą mieć znaczenie podatkowe, w tym, tytułem przykładu, o zmianach rezydencji podatkowej, własności, udziałów procentowych lub stanu nieruchomości."
      }
    ]
  },
  {
    number: "QUINTA",
    titleEs: "QUINTA. – SERVICIOS CONTRATADOS, HONORARIOS Y FORMA DE PAGO",
    titlePl: "PIĄTA. – ZAKONTRAKTOWANE USŁUGI, HONORARIA I FORMA PŁATNOŚCI",
    sections: [
      {
        id: "5.1",
        contentEs: "EL CLIENTE contrata a EL PRESTADOR la gestión fiscal del Impuesto sobre la Renta de No Residentes (IRNR) correspondiente al ejercicio indicado, en relación con el inmueble descrito en el presente contrato. Los servicios comprenderán la preparación, cálculo, cumplimentación y presentación telemática ante la Agencia Estatal de Administración Tributaria (AEAT) de las autoliquidaciones del IRNR (Modelo 210) que resulten procedentes, conforme a la normativa vigente y a las rentas obtenidas.",
        contentPl: "KLIENT zleca USŁUGODAWCY zarządzanie podatkowe w zakresie Podatku Dochodowego od Nierezydentów (IRNR) za wskazany rok podatkowy, w odniesieniu do nieruchomości opisanej w niniejszej umowie. Usługi obejmą przygotowanie, obliczenie, wypełnienie i elektroniczne złożenie przed Państwową Agencją Administracji Podatkowej (AEAT) deklaracji IRNR (Formularz 210), które okażą się właściwe, zgodnie z obowiązującymi przepisami i uzyskanymi dochodami."
      },
      {
        id: "5.2a",
        contentEs: "a) Modelo 210 – Imputación de rentas inmobiliarias: Presentación de una declaración individual por cada cotitular correspondiente al ejercicio indicado. Cálculo de la base imponible conforme a la normativa vigente (valor catastral o porcentaje aplicable). Aplicación del tipo impositivo correspondiente según residencia fiscal (UE/EEE o terceros países). Presentación telemática dentro del plazo reglamentario.",
        contentPl: "a) Formularz 210 – Przypisanie dochodów z nieruchomości: Złożenie indywidualnej deklaracji za każdego współwłaściciela za wskazany rok podatkowy. Obliczenie podstawy opodatkowania zgodnie z obowiązującymi przepisami (wartość katastralna lub odpowiedni procent). Zastosowanie odpowiedniej stawki podatkowej według rezydencji podatkowej (UE/EOG lub państwa trzecie). Elektroniczne złożenie w ustawowym terminie."
      },
      {
        id: "5.2b",
        contentEs: "b) Modelo 210 – Rendimientos derivados del arrendamiento (si procede): Presentación de las declaraciones individuales correspondientes a cada cotitular. Determinación del rendimiento conforme a la normativa aplicable, incluyendo ingresos y gastos deducibles que procedan, distribuidos según los porcentajes de titularidad. Aplicación del tipo impositivo conforme a la residencia fiscal.",
        contentPl: "b) Formularz 210 – Dochody z najmu (jeśli dotyczy): Złożenie indywidualnych deklaracji odpowiadających każdemu współwłaścicielowi. Ustalenie dochodu zgodnie z obowiązującymi przepisami, w tym przychodów i kosztów podlegających odliczeniu, rozdzielonych według udziałów własnościowych. Zastosowanie stawki podatkowej zgodnej z rezydencją podatkową."
      },
      {
        id: "5.2c",
        contentEs: "c) Servicios administrativos y técnicos asociados: Revisión preliminar de la documentación facilitada por EL CLIENTE. Tramitación de apoderamientos ante la AEAT, cuando resulte necesario para la presentación en nombre del CLIENTE. Remisión al CLIENTE de los justificantes oficiales de presentación. Custodia digital de la documentación durante el plazo legal de conservación.",
        contentPl: "c) Powiązane usługi administracyjne i techniczne: Wstępny przegląd dokumentacji dostarczonej przez KLIENTA. Przetwarzanie pełnomocnictw przed AEAT, gdy będzie to konieczne do składania w imieniu KLIENTA. Przesłanie KLIENTOWI oficjalnych potwierdzeń złożenia. Cyfrowe przechowywanie dokumentacji przez ustawowy okres przechowywania."
      },
      {
        id: "5.3",
        contentEs: "El CLIENTE facilitará, en los SIETE (7) días siguientes a la firma del contrato, la documentación completa, veraz y actualizada, incluyendo: NIE de cada cotitular, Escritura de compraventa de la propiedad, Recibo IBI del año en curso, Contrato de arrendamiento y/o detalles o justificantes de cobro de rentas, Gastos deducibles vinculados al inmueble (facturas/recibos). La falta de entrega en plazo o la entrega incompleta podrá ocasionar retrasos o imposibilidad de presentar, sin responsabilidad para EL PRESTADOR por tales consecuencias no imputables.",
        contentPl: "KLIENT dostarczy, w ciągu SIEDMIU (7) dni od podpisania umowy, kompletną, prawdziwą i aktualną dokumentację, w tym: NIE każdego współwłaściciela, Akt notarialny nabycia nieruchomości, Pokwitowanie IBI za bieżący rok, Umowę najmu i/lub szczegóły lub potwierdzenia pobierania czynszów, Koszty podlegające odliczeniu związane z nieruchomością (faktury/rachunki). Niedostarczenie w terminie lub niekompletne dostarczenie może spowodować opóźnienia lub niemożność złożenia, bez odpowiedzialności USŁUGODAWCY za takie konsekwencje, za które nie ponosi winy."
      },
      {
        id: "5.4",
        contentEs: "Como contraprestación por los servicios descritos en los apartados anteriores, los honorarios profesionales de EL PRESTADOR ascienden a la cantidad indicada en el presente contrato (más los impuestos indirectos que resulten aplicables). Este importe incluye: La gestión integral de las declaraciones de los cotitulares (imputación, alquiler y anejos como garajes/trasteros si proceden). Emisión de un informe técnico-fiscal firmado por el equipo profesional de EL PRESTADOR, disponible en español y polaco (siendo la versión española la única con validez legal). Custodia digital de la documentación durante el plazo legal de 4 años.",
        contentPl: "Jako wynagrodzenie za usługi opisane w poprzednich punktach, honoraria zawodowe USŁUGODAWCY wynoszą kwotę wskazaną w niniejszej umowie (plus odpowiednie podatki pośrednie). Kwota ta obejmuje: Kompleksowe zarządzanie deklaracjami współwłaścicieli (przypisanie, najem i aneksy jak garaże/komórki lokatorskie, jeśli dotyczy). Wydanie raportu techniczno-podatkowego podpisanego przez zespół profesjonalistów USŁUGODAWCY, dostępnego w języku hiszpańskim i polskim (przy czym wersja hiszpańska jest jedyną mającą moc prawną). Cyfrowe przechowywanie dokumentacji przez ustawowy okres 4 lat."
      },
      {
        id: "5.5",
        contentEs: "La tributación indirecta se determinará conforme a la Ley del IVA y normativa de desarrollo, en función de la condición del CLIENTE (empresario/profesional o consumidor final) y de las reglas de localización del servicio. Cualquier modificación sobrevenida será regularizada conforme a derecho. Si, por cambio de condición o por información sobrevenida, se modificase la calificación, EL PRESTADOR podrá rectificar la facturación y EL CLIENTE abonará la diferencia correspondiente.",
        contentPl: "Opodatkowanie pośrednie zostanie określone zgodnie z Ustawą o VAT i przepisami wykonawczymi, w zależności od statusu KLIENTA (przedsiębiorca/profesjonalista lub konsument końcowy) oraz zasad lokalizacji usługi. Wszelkie późniejsze zmiany zostaną uregulowane zgodnie z prawem. Jeśli, z powodu zmiany statusu lub późniejszych informacji, kwalifikacja ulegnie zmianie, USŁUGODAWCA może skorygować fakturowanie, a KLIENT uiści odpowiednią różnicę."
      },
      {
        id: "5.6",
        contentEs: "Los honorarios se facturarán según acuerdo, y deberán abonarse en el plazo indicado desde la emisión de la factura, mediante transferencia bancaria a la cuenta indicada. El inicio de los trabajos queda condicionado a la recepción del pago y de la documentación requerida.",
        contentPl: "Honoraria będą fakturowane zgodnie z ustaleniami i muszą zostać uiszczone w terminie wskazanym od wystawienia faktury, przelewem bankowym na wskazane konto. Rozpoczęcie prac jest uzależnione od otrzymania płatności i wymaganej dokumentacji."
      },
      {
        id: "5.7",
        contentEs: "El impago total o parcial facultará a EL PRESTADOR para suspender los servicios, resolver el contrato y reclamar las cantidades debidas, sin que ello exonere al CLIENTE del cumplimiento de sus obligaciones fiscales frente a la AEAT.",
        contentPl: "Całkowity lub częściowy brak płatności upoważni USŁUGODAWCĘ do zawieszenia usług, rozwiązania umowy i dochodzenia należnych kwot, bez zwalniania KLIENTA z wypełnienia jego obowiązków podatkowych wobec AEAT."
      },
      {
        id: "5.8",
        contentEs: "No se incluyen: Modelo 210 por ganancias patrimoniales (venta), Impuesto sobre el Patrimonio (714), tributos locales (p. ej., IIVTNU), representación en comprobaciones y/o inspecciones, recursos y requerimientos no imputables al PRESTADOR, planificación fiscal internacional, contabilidad o auditoría, ni cualquier otro servicio no descrito en 5.2. Estos servicios requerirán presupuesto independiente.",
        contentPl: "Nie obejmuje: Formularza 210 za zyski kapitałowe (sprzedaż), Podatku od Majątku (714), podatków lokalnych (np. IIVTNU), reprezentacji w kontrolach i/lub inspekcjach, odwołań i wymogów nieleżących po stronie USŁUGODAWCY, międzynarodowego planowania podatkowego, księgowości lub audytu, ani żadnych innych usług nieopisanych w pkt 5.2. Usługi te wymagają odrębnej wyceny."
      },
      {
        id: "5.9",
        contentEs: "Cualquier modificación del alcance, nº de titulares, periodicidad o precio exigirá documento de \"Modificación de Servicios\" firmado por ambas partes. No procede aceptación tácita en estos extremos.",
        contentPl: "Wszelkie modyfikacje zakresu, liczby właścicieli, częstotliwości lub ceny wymagają dokumentu \"Modyfikacji Usług\" podpisanego przez obie strony. Milcząca akceptacja nie ma zastosowania w tych kwestiach."
      }
    ]
  },
  {
    number: "SEXTA",
    titleEs: "SEXTA. - DURACIÓN Y VIGENCIA",
    titlePl: "SZÓSTA. - CZAS TRWANIA I OBOWIĄZYWANIE",
    sections: [
      {
        id: "6.1",
        contentEs: "El presente contrato entrará en vigor en la fecha de su firma.",
        contentPl: "Niniejsza umowa wchodzi w życie z dniem jej podpisania."
      },
      {
        id: "6.2",
        contentEs: "El contrato tendrá una duración inicial de un (1) año. A su vencimiento, se prorrogará tácitamente por períodos anuales sucesivos, salvo que alguna de las partes notifique su voluntad de no renovarlo con una antelación mínima de treinta (30) días a la fecha de vencimiento.",
        contentPl: "Umowa będzie obowiązywać przez okres początkowy jednego (1) roku. Po jego upływie będzie milcząco przedłużana na kolejne okresy roczne, chyba że którakolwiek ze stron powiadomi o zamiarze nieprzedłużania z wyprzedzeniem co najmniej trzydziestu (30) dni przed datą wygaśnięcia."
      }
    ]
  },
  {
    number: "SÉPTIMA",
    titleEs: "SÉPTIMA. - DERECHO DE DESISTIMIENTO",
    titlePl: "SIÓDMA. - PRAWO DO ODSTĄPIENIA",
    sections: [
      {
        id: "7.1",
        contentEs: "De conformidad con la normativa vigente en materia de consumidores y usuarios, EL CLIENTE, cuando ostente la condición legal de consumidor y el contrato se haya celebrado a distancia o fuera de establecimiento mercantil, dispondrá de un plazo de catorce (14) días naturales desde la firma del contrato para ejercer su derecho de desistimiento, sin necesidad de justificación ni penalización.",
        contentPl: "Zgodnie z obowiązującymi przepisami dotyczącymi konsumentów i użytkowników, KLIENT, gdy posiada status prawny konsumenta i umowa została zawarta na odległość lub poza lokalem przedsiębiorstwa, będzie miał okres czternastu (14) dni kalendarzowych od podpisania umowy na wykonanie prawa do odstąpienia, bez konieczności uzasadnienia ani kary."
      },
      {
        id: "7.2",
        contentEs: "El ejercicio del derecho de desistimiento deberá comunicarse a EL PRESTADOR mediante una declaración inequívoca, por cualquier medio que permita dejar constancia de su envío y recepción (por ejemplo, correo electrónico).",
        contentPl: "Wykonanie prawa do odstąpienia musi zostać zakomunikowane USŁUGODAWCY poprzez jednoznaczne oświadczenie, za pomocą dowolnego środka umożliwiającego potwierdzenie wysłania i odbioru (na przykład e-mail)."
      },
      {
        id: "7.3",
        contentEs: "En caso de que EL CLIENTE solicite expresamente que la prestación de los servicios se inicie durante el período de desistimiento: Si los servicios hubieran sido completamente ejecutados, EL CLIENTE perderá su derecho de desistimiento; Si los servicios se hubieran ejecutado parcialmente, EL CLIENTE deberá abonar el importe proporcional correspondiente a los servicios efectivamente prestados hasta la fecha de desistimiento.",
        contentPl: "W przypadku, gdy KLIENT wyraźnie zażąda rozpoczęcia świadczenia usług w okresie odstąpienia: Jeśli usługi zostały w pełni wykonane, KLIENT utraci prawo do odstąpienia; Jeśli usługi zostały wykonane częściowo, KLIENT musi zapłacić proporcjonalną kwotę odpowiadającą usługom faktycznie wykonanym do daty odstąpienia."
      },
      {
        id: "7.4",
        contentEs: "El derecho de desistimiento regulado en la presente cláusula no resultará aplicable cuando EL CLIENTE no tenga la condición de consumidor o cuando el contrato no se haya celebrado a distancia o fuera de establecimiento mercantil.",
        contentPl: "Prawo do odstąpienia uregulowane w niniejszej klauzuli nie będzie miało zastosowania, gdy KLIENT nie ma statusu konsumenta lub gdy umowa nie została zawarta na odległość lub poza lokalem przedsiębiorstwa."
      }
    ]
  },
  {
    number: "OCTAVA",
    titleEs: "OCTAVA. - CAUSAS DE RESOLUCIÓN DEL CONTRATO",
    titlePl: "ÓSMA. - PRZYCZYNY ROZWIĄZANIA UMOWY",
    sections: [
      {
        id: "8.1",
        contentEs: "Las partes podrán resolver el presente contrato en cualquier momento por mutuo acuerdo escrito.",
        contentPl: "Strony mogą rozwiązać niniejszą umowę w dowolnym momencie za obopólnym pisemnym porozumieniem."
      },
      {
        id: "8.2",
        contentEs: "Cualquiera de las partes podrá resolver el contrato en caso de incumplimiento grave de las obligaciones de la otra. Tendrá la consideración de incumplimiento grave por parte del CLIENTE el impago de los honorarios o la falta de suministro de información necesaria. La parte que resuelva el contrato deberá notificarlo a la incumplidora, otorgándole un plazo de quince (15) días para subsanar, si fuera posible.",
        contentPl: "Każda ze stron może rozwiązać umowę w przypadku poważnego naruszenia obowiązków przez drugą stronę. Za poważne naruszenie ze strony KLIENTA uważa się brak zapłaty honorariów lub niedostarczenie niezbędnych informacji. Strona rozwiązująca umowę musi powiadomić stronę naruszającą, dając jej okres piętnastu (15) dni na naprawę, jeśli to możliwe."
      }
    ]
  },
  {
    number: "NOVENA",
    titleEs: "NOVENA. – RESPONSABILIDAD Y AUTORIZACIONES",
    titlePl: "DZIEWIĄTA. – ODPOWIEDZIALNOŚĆ I UPOWAŻNIENIA",
    sections: [
      {
        id: "9.1",
        contentEs: "EL PRESTADOR responderá exclusivamente por los daños directos que, en su caso, se deriven de una actuación negligente en la prestación de los servicios contratados, siempre que exista relación de causalidad directa y debidamente acreditada.",
        contentPl: "USŁUGODAWCA odpowiada wyłącznie za szkody bezpośrednie, które ewentualnie wynikną z zaniedbania w świadczeniu zakontraktowanych usług, pod warunkiem istnienia bezpośredniego i należycie udowodnionego związku przyczynowego."
      },
      {
        id: "9.2",
        contentEs: "En ningún caso será responsable EL PRESTADOR de los perjuicios que pudieran derivarse para EL CLIENTE como consecuencia de: la aportación de información o documentación incompleta, inexacta, falsa o fuera de plazo, decisiones adoptadas por EL CLIENTE, actuaciones u omisiones de la Administración Tributaria u otros terceros.",
        contentPl: "W żadnym wypadku USŁUGODAWCA nie ponosi odpowiedzialności za szkody, które mogą wyniknąć dla KLIENTA w wyniku: dostarczenia niepełnych, niedokładnych, fałszywych lub spóźnionych informacji lub dokumentacji, decyzji podjętych przez KLIENTA, działań lub zaniechań Administracji Podatkowej lub innych osób trzecich."
      },
      {
        id: "9.3",
        contentEs: "La responsabilidad económica máxima de EL PRESTADOR por los daños directos derivados del presente contrato quedará limitada, como máximo, al importe total de los honorarios efectivamente abonados por EL CLIENTE por el servicio concreto que haya dado lugar a la reclamación. Esta limitación no será aplicable en supuestos de dolo o culpa grave, ni en aquellos casos en que resulte legalmente imperativa una responsabilidad distinta, incluida la normativa de consumidores y usuarios y la normativa de protección de datos.",
        contentPl: "Maksymalna odpowiedzialność finansowa USŁUGODAWCY za szkody bezpośrednie wynikające z niniejszej umowy jest ograniczona maksymalnie do całkowitej kwoty honorariów faktycznie zapłaconych przez KLIENTA za konkretną usługę, która dała podstawę do reklamacji. To ograniczenie nie ma zastosowania w przypadkach winy umyślnej lub rażącego niedbalstwa, ani w przypadkach, w których prawo nakazuje inną odpowiedzialność, w tym przepisy dotyczące konsumentów i użytkowników oraz przepisy o ochronie danych."
      },
      {
        id: "9.4",
        contentEs: "EL CLIENTE autoriza expresamente a EL PRESTADOR para realizar, en su nombre, las presentaciones telemáticas de declaraciones, autoliquidaciones o comunicaciones ante la Agencia Estatal de Administración Tributaria que resulten necesarias para la ejecución de los servicios contratados, ya sea directamente o mediante los correspondientes apoderamientos administrativos.",
        contentPl: "KLIENT wyraźnie upoważnia USŁUGODAWCĘ do dokonywania, w jego imieniu, elektronicznego składania deklaracji, zeznań podatkowych lub komunikatów przed Państwową Agencją Administracji Podatkowej, które okażą się niezbędne do wykonania zakontraktowanych usług, bezpośrednio lub poprzez odpowiednie pełnomocnictwa administracyjne."
      }
    ]
  },
  {
    number: "DÉCIMA",
    titleEs: "DÉCIMA. - CONFIDENCIALIDAD Y PROTECCIÓN DE DATOS",
    titlePl: "DZIESIĄTA. - POUFNOŚĆ I OCHRONA DANYCH",
    sections: [
      {
        id: "10.1",
        contentEs: "De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), las partes acuerdan que, a los efectos de la prestación de los servicios objeto del presente contrato, EL CLIENTE actuará como Responsable del Tratamiento y EL PRESTADOR como Encargado del Tratamiento, en los términos previstos en el artículo 28 del RGPD.",
        contentPl: "Zgodnie z Rozporządzeniem (UE) 2016/679 (RODO) i Ustawą Organiczną 3/2018 (LOPDGDD), strony uzgadniają, że na potrzeby świadczenia usług objętych niniejszą umową, KLIENT będzie działał jako Administrator Danych, a USŁUGODAWCA jako Podmiot Przetwarzający, zgodnie z warunkami przewidzianymi w art. 28 RODO."
      },
      {
        id: "10.2",
        contentEs: "La única finalidad del tratamiento de los datos será la prestación de los servicios fiscales detallados en la CLÁUSULA QUINTA del presente contrato.",
        contentPl: "Jedynym celem przetwarzania danych będzie świadczenie usług podatkowych szczegółowo opisanych w KLAUZULI PIĄTEJ niniejszej umowy."
      },
      {
        id: "10.3",
        contentEs: "Obligaciones del Encargado (EL PRESTADOR): a) Tratar los datos personales únicamente siguiendo instrucciones documentadas del CLIENTE. b) Garantizar que las personas autorizadas para tratar los datos se hayan comprometido a respetar la confidencialidad. c) Tomar todas las medidas de seguridad necesarias de conformidad con el artículo 32 del RGPD. d) No subcontratar el tratamiento sin la autorización previa por escrito del CLIENTE. e) Asistir al CLIENTE para que este pueda cumplir con su obligación de responder a las solicitudes de ejercicio de derechos de los interesados. f) Una vez finalice la prestación de los servicios, y a elección del CLIENTE, suprimir o devolver todos los datos personales y las copias existentes. g) Poner a disposición del CLIENTE toda la información necesaria para demostrar el cumplimiento de sus obligaciones.",
        contentPl: "Obowiązki Podmiotu Przetwarzającego (USŁUGODAWCY): a) Przetwarzać dane osobowe wyłącznie zgodnie z udokumentowanymi instrukcjami KLIENTA. b) Zapewnić, że osoby upoważnione do przetwarzania danych zobowiązały się do zachowania poufności. c) Podjąć wszelkie niezbędne środki bezpieczeństwa zgodnie z art. 32 RODO. d) Nie zlecać przetwarzania podwykonawcom bez uprzedniej pisemnej zgody KLIENTA. e) Pomagać KLIENTOWI w wypełnianiu obowiązku odpowiadania na żądania wykonania praw osób, których dane dotyczą. f) Po zakończeniu świadczenia usług, według wyboru KLIENTA, usunąć lub zwrócić wszystkie dane osobowe i istniejące kopie. g) Udostępnić KLIENTOWI wszystkie informacje niezbędne do wykazania wypełnienia swoich obowiązków."
      },
      {
        id: "10.4",
        contentEs: "Las categorías de datos personales objeto de tratamiento podrán incluir, entre otros, datos identificativos, datos de características personales y datos económicos y financieros, estrictamente necesarios para la prestación del servicio.",
        contentPl: "Kategorie danych osobowych podlegających przetwarzaniu mogą obejmować, między innymi, dane identyfikacyjne, dane dotyczące cech osobowych oraz dane ekonomiczne i finansowe, ściśle niezbędne do świadczenia usługi."
      },
      {
        id: "10.5",
        contentEs: "EL CLIENTE podrá ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad dirigiéndose a EL PRESTADOR a través del correo electrónico: admin@pgkhiszpania.com.",
        contentPl: "KLIENT może wykonywać swoje prawa dostępu, sprostowania, usunięcia, sprzeciwu, ograniczenia przetwarzania i przenoszenia, kontaktując się z USŁUGODAWCĄ pod adresem e-mail: admin@pgkhiszpania.com."
      },
      {
        id: "10.6",
        contentEs: "Ambas partes garantizarán la confidencialidad de la información y de los datos personales tratados, extendiendo el deber a su personal y subcontratistas autorizados, durante la vigencia y con carácter postcontractual.",
        contentPl: "Obie strony zapewnią poufność informacji i przetwarzanych danych osobowych, rozciągając ten obowiązek na swój personel i upoważnionych podwykonawców, w okresie obowiązywania umowy i po jej zakończeniu."
      }
    ]
  },
  {
    number: "UNDÉCIMA",
    titleEs: "UNDÉCIMA. - COMUNICACIONES",
    titlePl: "JEDENASTA. - KOMUNIKACJA",
    sections: [
      {
        id: "11.1",
        contentEs: "Todas las comunicaciones entre las partes relacionadas con el presente contrato deberán realizarse por escrito, preferentemente por correo electrónico, a las direcciones indicadas en el encabezamiento del contrato o a la siguiente dirección habilitada por EL PRESTADOR: klient@pgkhiszpania.com.",
        contentPl: "Wszelka komunikacja między stronami związana z niniejszą umową musi odbywać się na piśmie, najlepiej drogą elektroniczną, na adresy wskazane w nagłówku umowy lub na następujący adres udostępniony przez USŁUGODAWCĘ: klient@pgkhiszpania.com."
      },
      {
        id: "11.2",
        contentEs: "Cualquier cambio en las direcciones de contacto deberá ser comunicado por escrito a la otra parte. En tanto no se notifique dicho cambio, se considerarán válidas las comunicaciones realizadas a las direcciones inicialmente indicadas.",
        contentPl: "Wszelkie zmiany adresów kontaktowych muszą być przekazane drugiej stronie na piśmie. Dopóki taka zmiana nie zostanie zgłoszona, komunikacja kierowana na pierwotnie wskazane adresy będzie uważana za ważną."
      }
    ]
  },
  {
    number: "DUODÉCIMA",
    titleEs: "DUODÉCIMA. - PROPIEDAD INTELECTUAL",
    titlePl: "DWUNASTA. - WŁASNOŚĆ INTELEKTUALNA",
    sections: [
      {
        id: "12.1",
        contentEs: "La propiedad intelectual de los informes, cálculos, hojas de trabajo, documentos técnicos y cualquier otro material elaborado por EL PRESTADOR en ejecución del presente contrato le corresponderá en exclusiva.",
        contentPl: "Własność intelektualna raportów, obliczeń, arkuszy roboczych, dokumentów technicznych i wszelkich innych materiałów opracowanych przez USŁUGODAWCĘ w wykonaniu niniejszej umowy należy wyłącznie do niego."
      },
      {
        id: "12.2",
        contentEs: "No obstante lo anterior, EL CLIENTE adquiere un derecho de uso no exclusivo, intransferible y limitado sobre dichos materiales, exclusivamente para la finalidad para la que fueron elaborados y en relación con sus propias obligaciones fiscales, quedando expresamente prohibida su reproducción, cesión o utilización para fines distintos sin autorización previa y por escrito de EL PRESTADOR.",
        contentPl: "Niezależnie od powyższego, KLIENT nabywa niewyłączne, niezbywalne i ograniczone prawo do korzystania z tych materiałów, wyłącznie w celu, dla którego zostały opracowane i w związku z własnymi obowiązkami podatkowymi, z wyraźnym zakazem ich powielania, cesji lub wykorzystywania do innych celów bez uprzedniej pisemnej zgody USŁUGODAWCY."
      }
    ]
  },
  {
    number: "DECIMOTERCERA",
    titleEs: "DECIMOTERCERA. - MODIFICACIONES DEL CONTRATO",
    titlePl: "TRZYNASTA. - ZMIANY UMOWY",
    sections: [
      {
        id: "13.1",
        contentEs: "Cualquier modificación del presente contrato deberá formalizarse por escrito y contar con la aceptación expresa de ambas partes.",
        contentPl: "Wszelkie zmiany niniejszej umowy muszą być sformalizowane na piśmie i wymagają wyraźnej akceptacji obu stron."
      },
      {
        id: "13.2",
        contentEs: "Las modificaciones de carácter menor, técnico u operativo, que no afecten al objeto principal del contrato, su duración, honorarios, régimen de responsabilidad, legislación aplicable o jurisdicción, podrán comunicarse por correo electrónico y se considerarán aceptadas si no se formula objeción expresa y motivada en el plazo de diez (10) días hábiles desde su recepción. En ningún caso se considerarán modificaciones menores aquellas que afecten a los elementos esenciales del contrato.",
        contentPl: "Zmiany o charakterze drobnym, technicznym lub operacyjnym, które nie wpływają na główny przedmiot umowy, jej czas trwania, honoraria, reżim odpowiedzialności, prawo właściwe lub jurysdykcję, mogą być komunikowane drogą elektroniczną i zostaną uznane za zaakceptowane, jeśli nie zostanie zgłoszony wyraźny i uzasadniony sprzeciw w terminie dziesięciu (10) dni roboczych od ich otrzymania. W żadnym wypadku zmiany wpływające na istotne elementy umowy nie będą uznawane za drobne."
      }
    ]
  },
  {
    number: "DECIMOCUARTA",
    titleEs: "DECIMOCUARTA. - LEGISLACIÓN APLICABLE Y JURISDICCIÓN",
    titlePl: "CZTERNASTA. - PRAWO WŁAŚCIWE I JURYSDYKCJA",
    sections: [
      {
        id: "14.1",
        contentEs: "El presente contrato se regirá e interpretará conforme a la legislación española, incluyendo la normativa imperativa en materia de protección de consumidores y usuarios.",
        contentPl: "Niniejsza umowa podlega prawu hiszpańskiemu i będzie interpretowana zgodnie z nim, w tym z bezwzględnie obowiązującymi przepisami dotyczącymi ochrony konsumentów i użytkowników."
      },
      {
        id: "14.2",
        contentEs: "Cuando EL CLIENTE tenga la condición de consumidor, cualquier controversia que derive de la interpretación, validez, ejecución o resolución del contrato se someterá a los Juzgados y Tribunales del domicilio del consumidor, sin perjuicio de los fueros imperativos previstos en la Ley de Enjuiciamiento Civil y del Reglamento (UE) 1215/2012, no siendo válida ninguna sumisión previa que prive al consumidor de dicha protección.",
        contentPl: "Gdy KLIENT ma status konsumenta, wszelkie spory wynikające z interpretacji, ważności, wykonania lub rozwiązania umowy będą poddane sądom właściwym dla miejsca zamieszkania konsumenta, bez uszczerbku dla obowiązkowych jurysdykcji przewidzianych w Ustawie o postępowaniu cywilnym i Rozporządzeniu (UE) 1215/2012, przy czym nieważne jest jakiekolwiek wcześniejsze poddanie jurysdykcji pozbawiające konsumenta tej ochrony."
      },
      {
        id: "14.3",
        contentEs: "Cuando EL CLIENTE no tenga la condición de consumidor, las partes se someten, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, a los Juzgados y Tribunales de Alicante (España), sin perjuicio de los fueros imperativos que resulten de aplicación.",
        contentPl: "Gdy KLIENT nie ma statusu konsumenta, strony poddają się, z wyraźnym zrzeczeniem się wszelkich innych jurysdykcji, które mogłyby im przysługiwać, sądom w Alicante (Hiszpania), bez uszczerbku dla obowiązkowych jurysdykcji, które mogą mieć zastosowanie."
      },
      {
        id: "14.4",
        contentEs: "En contratos con consumidores residentes en otro Estado miembro de la Unión Europea, la elección de la legislación española no privará al consumidor de la protección que le otorguen las disposiciones imperativas de su país de residencia habitual, conforme al artículo 6 del Reglamento (CE) 593/2008 (Roma I).",
        contentPl: "W umowach z konsumentami zamieszkałymi w innym państwie członkowskim Unii Europejskiej, wybór prawa hiszpańskiego nie pozbawi konsumenta ochrony przyznanej mu przez bezwzględnie obowiązujące przepisy kraju jego zwykłego pobytu, zgodnie z art. 6 Rozporządzenia (WE) 593/2008 (Rzym I)."
      },
      {
        id: "14.5",
        contentEs: "Para cualquier reclamación o consulta durante la vigencia del contrato, EL CLIENTE podrá dirigirse a EL PRESTADOR en la siguiente dirección: C/ Matilde Peñaranda, 27, 5.º A, 03183 Torrevieja (Alicante) o al correo electrónico: info@pgkhiszpania.com. Se facilitarán, cuando proceda, hojas oficiales de reclamaciones y acceso a sistemas de resolución alternativa de litigios conforme a la Ley 7/2017.",
        contentPl: "W przypadku jakichkolwiek reklamacji lub zapytań w okresie obowiązywania umowy, KLIENT może skontaktować się z USŁUGODAWCĄ pod następującym adresem: C/ Matilde Peñaranda, 27, 5.º A, 03183 Torrevieja (Alicante) lub pod adresem e-mail: info@pgkhiszpania.com. W stosownych przypadkach zostaną udostępnione oficjalne arkusze reklamacyjne oraz dostęp do systemów alternatywnego rozstrzygania sporów zgodnie z Ustawą 7/2017."
      },
      {
        id: "14.6",
        contentEs: "Las reclamaciones serán atendidas en un plazo máximo de diez (10) días hábiles desde su recepción.",
        contentPl: "Reklamacje będą rozpatrywane w maksymalnym terminie dziesięciu (10) dni roboczych od ich otrzymania."
      }
    ]
  },
  {
    number: "DECIMOQUINTA",
    titleEs: "DECIMOQUINTA. - IDIOMA DEL CONTRATO",
    titlePl: "PIĘTNASTA. - JĘZYK UMOWY",
    sections: [
      {
        id: "15.1",
        contentEs: "El presente contrato se redacta y formaliza en dos idiomas: español y polaco, facilitándose la versión en polaco a efectos de mejor comprensión por parte del CLIENTE.",
        contentPl: "Niniejsza umowa jest sporządzona i sformalizowana w dwóch językach: hiszpańskim i polskim, przy czym wersja polska jest udostępniana w celu lepszego zrozumienia przez KLIENTA."
      },
      {
        id: "15.2",
        contentEs: "Ambas versiones se consideran válidas; no obstante, en caso de discrepancia, divergencia interpretativa o conflicto entre ambas, prevalecerá la versión redactada en idioma español, que será la única jurídicamente vinculante.",
        contentPl: "Obie wersje są uważane za ważne; jednakże w przypadku rozbieżności, różnic interpretacyjnych lub konfliktu między nimi, pierwszeństwo ma wersja sporządzona w języku hiszpańskim, która będzie jedyną prawnie wiążącą."
      }
    ]
  }
];

// ===========================================
// CIERRE Y FIRMAS
// ===========================================
export const closingSection = {
  declarationEs: "Ambas partes declaran haber leído, comprendido y aceptado expresamente el contenido y alcance del presente contrato. Y en prueba de conformidad, firman el contrato por duplicado y a un solo efecto, en el lugar y fecha indicados en el encabezamiento, quedando un ejemplar en poder de cada parte.",
  declarationPl: "Obie strony oświadczają, że przeczytały, zrozumiały i wyraźnie zaakceptowały treść i zakres niniejszej umowy. Na dowód zgodności podpisują umowę w dwóch egzemplarzach i w jednym celu, w miejscu i dacie wskazanych w nagłówku, przy czym każda ze stron zatrzymuje jeden egzemplarz.",
  
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
