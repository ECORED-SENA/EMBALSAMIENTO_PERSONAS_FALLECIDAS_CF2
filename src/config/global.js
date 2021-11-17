export default {
  global: {
    componenteFormativo: 'Embalsamar la persona fallecida',
    descripcionCurso:
      'El presente componente de formación surge de la necesidad identificar el proceso que se realiza para el embalsamamiento de un cadáver de acuerdo a la normatividad vigente y protocolos técnicos.  En este proceso se involucra la identificación de químicos que contribuyen a retardar la descomposición del cuerpo para que se realice su ritual de despedida. Bienvenido.',
    imagenBannerPrincipal: require('@/assets/curso/banner-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner-bg.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La muerte en la tanatopraxia',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Descomposición en la tanatopraxia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de descomposición',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Orden de descomposición del cuerpo humano',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Períodos y signos de la descomposición',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Naturaleza y propósito del embalsamamiento',
        desarrolloContenidos: true,
        subMenu: [
          /*{
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Higienización integral',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Propósito estético de la tanatopraxia',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Propósito de la preservación química',
            hash: 't_3_3',
          },*/
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'De la Cruz, D. y Holmes, R. (2018). Turning art into science. Tuesday Evening Publications.',
    },
    {
      referencia:
        'Diccionario médico. (s.f.). Sutura en bolsa de tabaco. Cun.es. ',
      link:
        'https://www.cun.es/diccionario-medico/terminos/sutura-bolsa-tabaco ',
    },
    {
      referencia:
        'Mayer, R. (2006). Embalsamamiento. Historia, teoría y práctica. McGraw Hill.',
    },
    {
      referencia:
        'Resolución 0773 de 2021. [Ministerio del Trabajo]. Por la cual se definen las acciones que deben desarrollar los empleadores para la aplicación del sistema globalmente armonizado de clasificación y etiquetado de productos químicos en los lugares de trabajo. ',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/61442826/0773.PDF/3047cc2b-eae1-e021-e9bf-d8c0eac23e05?t=1617984928238 ',
    },
    {
      referencia:
        'Serrano, V (2018). La química de los fenómenos cadavéricos. Universitat de València. ',
    },
    {
      referencia:
        'The Dodge Company. (2008). The preparation room. The Dodge Company. ',
    },
  ],
  glosario: [
    {
      termino: 'Aurícula derecha',
      significado:
        'Cámara del lado derecho del corazón vista como el centro de drenaje. Se usa como un sitio de drenaje con instrumentos desde la vena yugular interna y de forma directa con un trocar o por la pared torácica.',
    },
    {
      termino: 'Centro de distribución de los líquidos',
      significado: 'Aorta ascendente.',
    },
    { termino: 'Dermis', significado: 'Piel real.' },
    {
      termino: 'Descomposición',
      significado:
        'Separación de los compuestos en sustancias más simples, mediante la acción de enzimas bacterianas o autolíticas.',
    },
    {
      termino: 'Edema',
      significado:
        'Acumulación anormal de líquidos en los tejidos o cavidades corporales.',
    },
    {
      termino: 'Embalsamamiento',
      significado:
        'Proceso de tratamiento químico del cadáver para reducir la presencia y el crecimiento de microorganismos; retardar temporalmente la descomposición orgánica y restablecer un aspecto físico aceptable.',
    },
    {
      termino: 'Gas en tejido',
      significado:
        'Acumulación postmortem de gas en tejido o cavidades, generada por un bacilo formador de gas anaerobio (clostridium perfringens).',
    },
    {
      termino: 'Glutaraldehído',
      significado:
        'Está en la categoría de aldehído. Su uso en Tanatopraxia data de 1955, se encuentra en concentraciones acuosas del 25% con un olor suave y color claro. Su uso se ha extendido, ya que reacciona a estructuras de proteínas en un amplio rango de pH, por lo cual ayuda a retrasar los cambios de los procesos de descomposición.',
    },
    {
      termino: 'Guías anatómicas',
      significado:
        'Referencias descriptivas para localizar arterias y venas mediante las estructuras anatómicas conocidas.',
    },
    {
      termino: 'Paraformaldehido',
      significado:
        'Está en la categoría de aldehído. Este es polímero que contiene entre 85% y 99% de formaldehído, este se usa principalmente en polvo como compuesto de endurecimiento y para pulverizar las paredes toracoabdominales.',
    },
    {
      termino: 'Químico para cavidades',
      significado:
        'Producto químico para embalsamar, que se inyecta en la cavidad del cadáver después de la aspiración en el embalsamamiento de la cavidad.',
    },
    {
      termino: 'Surfactantes',
      significado:
        'Son químicos encargados de reducir la presión de superficie de la solución para que fluyan más fácilmente en el sistema circulatorio.',
    },
    {
      termino: 'Trioxane',
      significado:
        'Está en la categoría de aldehído. Es un material cristalino incoloro, de olor parecido al cloroformo. También es usado como preservante auxiliar en los líquidos usados en tanatopraxia, pero resulta más costoso que otros líquidos, por ello no es muy común.',
    },
  ],
  complementario: [
    {
      texto:
        'Serrano, V. (2018). La química de los fenómenos cadavéricos. Universitat de València.',
      tipo: 'Texto digital',
      link: 'https://www.uv.es/gicf/4A1_Serrano_GICF_29.pdf',
    },
    {
      texto:
        'Resolución 0773 de 2021. [Ministerio del Trabajo]. Por la cual se definen las acciones que deben desarrollar los empleadores para la aplicación del sistema globalmente armonizado de clasificación y etiquetado de productos químicos en los lugares de trabajo.',
      tipo: 'Otro',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/61442826/0773.PDF/3047cc2b-eae1-e021-e9bf-d8c0eac23e05?t=1617984928238',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lina María Restrepo Zapata',
        cargo: 'Experta temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Luz María Uribe Lotero',
        cargo: 'Experta temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo:
          'Instructora (EPC) – Líder desarrollo curricular servicios personales',
        centro: 'Centro de Servicios de Salud – Regional Antioquia',
      },
      {
        nombre: 'Adriana Maria Bustamante Cataño',
        cargo: 'Profesional de diseño y producción curricular',
        centro: 'Centro de Servicios de Salud – Regional Antioquia',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Jesús Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
