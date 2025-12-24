export interface Contract {
  id: string;
  name: string;
  namePL?: string;
  description: string;
  descriptionPL?: string;
  available: boolean;
  route?: string;
}

export interface ContractSection {
  id: string;
  title: string;
  titlePL?: string;
  contracts: Contract[];
}

export const contractSections: ContractSection[] = [
  {
    id: 'servicios-profesionales',
    title: '1. Contratos de Prestación de Servicios Profesionales',
    titlePL: '1. Umowy o Świadczenie Usług Profesjonalnych',
    contracts: [
      {
        id: 'gestion-contable-fiscal-laboral',
        name: 'Contrato de Prestación de Servicios de Gestión Contable, Fiscal y Laboral',
        namePL: 'Umowa o Świadczenie Usług Księgowych, Podatkowych i Kadrowych',
        description: 'Gestión integral de contabilidad, fiscalidad y nóminas para empresas',
        descriptionPL: 'Kompleksowe usługi księgowe, podatkowe i kadrowe dla firm',
        available: false
      },
      {
        id: 'gestion-contable-fiscal',
        name: 'Contrato de Prestación de Servicios de Gestión Contable y Fiscal',
        namePL: 'Umowa o Świadczenie Usług Księgowych i Podatkowych',
        description: 'Servicios de contabilidad y asesoría fiscal',
        descriptionPL: 'Usługi księgowe i doradztwo podatkowe',
        available: false
      },
      {
        id: 'planificacion-tributaria',
        name: 'Contrato para Planificación Tributaria y Optimización Fiscal',
        namePL: 'Umowa o Planowanie Podatkowe i Optymalizację Fiskalną',
        description: 'Estrategias de optimización fiscal y planificación tributaria',
        descriptionPL: 'Strategie optymalizacji podatkowej i planowania fiskalnego',
        available: false
      },
      {
        id: 'modelo-210',
        name: 'Contrato de Prestación de Servicios para Presentación del Modelo 210',
        namePL: 'Umowa o Świadczenie Usług Złożenia Deklaracji Modelo 210',
        description: 'Para declaración de rentas de no residentes en España',
        descriptionPL: 'Dla deklaracji dochodów nierezydentów w Hiszpanii',
        available: true,
        route: '/contrato'
      }
    ]
  },
  {
    id: 'constitucion-empresas',
    title: '2. Contratos para Constitución y Alta de Empresas/Autónomos',
    titlePL: '2. Umowy o Zakładanie Firm i Rejestrację Działalności',
    contracts: [
      {
        id: 'constitucion-sl',
        name: 'Contrato para Constitución de Sociedad Limitada (SL)',
        namePL: 'Umowa o Założenie Spółki z o.o. (SL)',
        description: 'Creación y registro de sociedades limitadas en España',
        descriptionPL: 'Zakładanie i rejestracja spółek z o.o. w Hiszpanii',
        available: false
      },
      {
        id: 'alta-autonomo',
        name: 'Contrato para Alta como Autónomo',
        namePL: 'Umowa o Rejestrację Działalności Gospodarczej',
        description: 'Registro y alta en el régimen de autónomos',
        descriptionPL: 'Rejestracja i zgłoszenie do systemu samozatrudnienia',
        available: false
      },
      {
        id: 'constitucion-comunidad-bienes',
        name: 'Contrato para Constitución de Comunidad de Bienes',
        namePL: 'Umowa o Utworzenie Wspólnoty Majątkowej',
        description: 'Creación de comunidades de bienes entre socios',
        descriptionPL: 'Tworzenie wspólnot majątkowych między wspólnikami',
        available: false
      }
    ]
  },
  {
    id: 'inmobiliarios',
    title: '3. Contratos Inmobiliarios y de Arrendamiento',
    titlePL: '3. Umowy Nieruchomościowe i Najmu',
    contracts: [
      {
        id: 'arrendamiento-vivienda',
        name: 'Contrato de Arrendamiento de Vivienda',
        namePL: 'Umowa Najmu Mieszkania',
        description: 'Alquiler de vivienda habitual',
        descriptionPL: 'Wynajem mieszkania na stałe zamieszkanie',
        available: false
      },
      {
        id: 'arrendamiento-turistico',
        name: 'Contrato de Arrendamiento Turístico',
        namePL: 'Umowa Najmu Turystycznego',
        description: 'Alquiler vacacional y de temporada',
        descriptionPL: 'Wynajem wakacyjny i sezonowy',
        available: false
      },
      {
        id: 'arrendamiento-local',
        name: 'Contrato de Arrendamiento de Local Comercial',
        namePL: 'Umowa Najmu Lokalu Handlowego',
        description: 'Alquiler de locales para actividad comercial',
        descriptionPL: 'Wynajem lokali na działalność handlową',
        available: false
      },
      {
        id: 'compraventa-inmueble',
        name: 'Contrato de Compraventa de Inmueble',
        namePL: 'Umowa Kupna-Sprzedaży Nieruchomości',
        description: 'Compra y venta de propiedades inmobiliarias',
        descriptionPL: 'Kupno i sprzedaż nieruchomości',
        available: false
      }
    ]
  },
  {
    id: 'representacion-tramites',
    title: '4. Contratos de Representación y Trámites Administrativos',
    titlePL: '4. Umowy o Reprezentację i Sprawy Administracyjne',
    contracts: [
      {
        id: 'representacion-aeat',
        name: 'Contrato de Representación ante la AEAT',
        namePL: 'Umowa o Reprezentację przed AEAT',
        description: 'Representación fiscal ante la Agencia Tributaria',
        descriptionPL: 'Reprezentacja podatkowa przed Urzędem Skarbowym',
        available: false
      },
      {
        id: 'tramitacion-nie',
        name: 'Contrato para Tramitación de NIE',
        namePL: 'Umowa o Uzyskanie NIE',
        description: 'Obtención del Número de Identificación de Extranjero',
        descriptionPL: 'Uzyskanie Numeru Identyfikacji Cudzoziemca',
        available: false
      },
      {
        id: 'poderes-notariales',
        name: 'Contrato para Gestión de Poderes Notariales',
        namePL: 'Umowa o Zarządzanie Pełnomocnictwami Notarialnymi',
        description: 'Tramitación y gestión de poderes ante notario',
        descriptionPL: 'Załatwianie pełnomocnictw u notariusza',
        available: false
      }
    ]
  },
  {
    id: 'herencias-sucesiones',
    title: '5. Contratos de Herencias y Sucesiones',
    titlePL: '5. Umowy o Spadki i Dziedziczenie',
    contracts: [
      {
        id: 'gestion-herencia',
        name: 'Contrato para Gestión de Herencia en España',
        namePL: 'Umowa o Zarządzanie Spadkiem w Hiszpanii',
        description: 'Tramitación completa de herencias y sucesiones',
        descriptionPL: 'Kompleksowe załatwianie spraw spadkowych',
        available: false
      },
      {
        id: 'aceptacion-herencia',
        name: 'Contrato para Aceptación de Herencia',
        namePL: 'Umowa o Przyjęcie Spadku',
        description: 'Gestión de aceptación y adjudicación de herencia',
        descriptionPL: 'Zarządzanie przyjęciem i przydziałem spadku',
        available: false
      },
      {
        id: 'impuesto-sucesiones',
        name: 'Contrato para Liquidación del Impuesto de Sucesiones',
        namePL: 'Umowa o Rozliczenie Podatku od Spadków',
        description: 'Cálculo y presentación del impuesto de sucesiones',
        descriptionPL: 'Obliczenie i złożenie podatku od spadków',
        available: false
      }
    ]
  },
  {
    id: 'asesoria-legal',
    title: '6. Contratos de Asesoría Legal y Defensa Jurídica',
    titlePL: '6. Umowy o Doradztwo Prawne i Obronę Sądową',
    contracts: [
      {
        id: 'asesoria-legal-general',
        name: 'Contrato de Asesoría Legal General',
        namePL: 'Umowa o Ogólne Doradztwo Prawne',
        description: 'Servicios de consultoría y asesoramiento legal',
        descriptionPL: 'Usługi konsultingowe i doradztwo prawne',
        available: false
      },
      {
        id: 'defensa-procedimientos',
        name: 'Contrato para Defensa en Procedimientos Administrativos',
        namePL: 'Umowa o Obronę w Postępowaniach Administracyjnych',
        description: 'Representación en recursos y reclamaciones',
        descriptionPL: 'Reprezentacja w odwołaniach i reklamacjach',
        available: false
      },
      {
        id: 'reclamacion-deudas',
        name: 'Contrato para Reclamación de Deudas',
        namePL: 'Umowa o Dochodzenie Długów',
        description: 'Gestión de cobro de deudas e impagos',
        descriptionPL: 'Zarządzanie windykacją długów',
        available: false
      }
    ]
  },
  {
    id: 'otros-servicios',
    title: '7. Otros Contratos y Servicios Especializados',
    titlePL: '7. Inne Umowy i Usługi Specjalistyczne',
    contracts: [
      {
        id: 'traduccion-jurada',
        name: 'Contrato de Servicios de Traducción Jurada',
        namePL: 'Umowa o Usługi Tłumaczenia Przysięgłego',
        description: 'Traducciones oficiales español-polaco',
        descriptionPL: 'Oficjalne tłumaczenia hiszpańsko-polskie',
        available: false
      },
      {
        id: 'mediacion-conflictos',
        name: 'Contrato de Mediación en Conflictos',
        namePL: 'Umowa o Mediację w Sporach',
        description: 'Servicios de mediación y resolución de conflictos',
        descriptionPL: 'Usługi mediacji i rozwiązywania sporów',
        available: false
      },
      {
        id: 'consultoria-inversiones',
        name: 'Contrato de Consultoría para Inversiones en España',
        namePL: 'Umowa o Doradztwo Inwestycyjne w Hiszpanii',
        description: 'Asesoramiento para inversores extranjeros',
        descriptionPL: 'Doradztwo dla inwestorów zagranicznych',
        available: false
      }
    ]
  }
];
