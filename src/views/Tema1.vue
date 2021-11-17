<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bg2

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 La muerte en la tanatopraxia

    .row.align-items-center.mb-4
      .col-lg-5
        figure(data-aos='fade-right')
          img(src='@/assets/curso/t1/f1.png' alt='La muerte como experiencia')
      .col-lg-7
        p Desde hace <b>miles de años el hombre ha realizado rituales para darle explicación a los fenómenos que ocurren en la cotidianidad de la vida como nacer, crecer y morir.</b> Siendo de estos, <b><span class="cp">la muerte una experiencia rodeada de tabú y explicaciones en todas las religiones, culturas y épocas del ser humano.</span></b>  
        p Históricamente se tiene evidencia que incluso <b>desde la época de los neandertales, aproximadamente 400.000 años A.C,</b> se <b><span class="cp">realizaban prácticas con los muertos, empezando por sus cuidados hasta su despedida.</span></b> El tratamiento que se le realiza a los cuerpos muertos ha marcado grandes momentos de la humanidad, en todos los tiempos y en todas las culturas se han realizado procesos para preservar el cuerpo y los vivos han realizado rituales de despedida. 
    
    .row.align-items-center.mb-5
      .col-lg-7.order-lg-first.order-last
        p <b>En la actualidad se siguen realizando procesos para detener temporalmente la descomposición natural del cuerpo</b>, en la que sus familiares o allegados puedan hacer un ritual de despedida. Toda esta historia y la evolución que ha tenido hasta en el momento actual y <b><span class="cp">en Colombia devela la necesidad de profesionalizar el sector funerario para conservar los rituales funerarios</span></b> y el trato digno en la muerte, ayudando así al trámite del duelo de las personas que quedan.
        .cajon.color-secundario.p-4
          p.mb-0 Etimológicamente hablando <b>la muerte viene de la raíz latina <span class='cac'><em>mors - mortis</em></span> que significa fin o ausencia de vida.</b>  La muerte entonces <b><span class="cp">es la finalización de todas las funciones vitales del organismo como la circulación, la respiración, el sistema nervioso central y lo cognitivo,</span></b> es decir, que un fallecimiento de un cuerpo humano es un proceso que implica cambios químicos y físicos involucrados en el fin de una vida orgánica. <b>La muerte es la interrupción definitiva de las funciones vitales y la relación de un ser humano con el contexto social.</b> 
      .col-lg-5.order-first.order-lg-last
        figure
          img(src='@/assets/curso/t1/f2.png' alt='La muerte como experiencia').mb-4

    p.mb-5 A continuación, se exponen algunas 
      b descripciones de la muerte en el 
      b.cac contexto biológico. 
      | Se sugiere leer con atención las características con la intención de que establezca diferencias y similitudes entre estos conceptos.

    .row.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/t1/f3.svg' alt='Muerte en el contexto biológico')
      .col-lg-7
        LineaTiempoD.color-primario
          div(numero="1" titulo="Muerte celular")
            p Todos los organismos pluricelulares tienen mecanismos de regulación durante todo su ciclo de vida, en los que unas células son creadas por división de las células, y otras son programadas para morir. En el campo celular existen dos muertes: 1. La apoptosis y 2. La autofagia.
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img.mx-auto(src='@/assets/curso/t1/f4.svg' alt='Imagen relacionada' style='width:155px;')
              .tarjeta.tarjeta-white--color-red.fblanco
                .p-4.ps-0.py-5
                  h4 La apoptosis
                  p.mb-0 Es el tipo principal de muerte celular que ocurre en condiciones normales y controladas como en el crecimiento.
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img.mx-auto(src='@/assets/curso/t1/f5.svg' alt='Imagen relacionada' style='width:155px;')
              .tarjeta.tarjeta-white--color-red.fblanco
                .p-4.ps-0.py-5
                  h4 La autofagia
                  p.mb-0 Ayuda a las células como mecanismo de defensa del organismo al eliminar células que ya no sirven o son defectuosas, a esto se le llama “auto digestión controlada” y no produce inflamación, ni dolor.
            p En ocasiones las células con funciones más específicas como las del cerebro o músculos también pueden morir, debido a las patologías que tenga la persona.
          div(numero="2" titulo="Necrobiosis")
            p Ocurre muerte celular sin un ambiente controlado, por lo general es cuando son producidas por agentes externos al cuerpo como la hipotermia, traumatismos, isquemia, bacterias o microorganismos que afecten las funciones normales de una zona determinada, en este caso sí ocurre inflamación y dolor que se extiende a los tejidos cercanos.
          div(numero="3" titulo="Necrosis")
            p Ocurre muerte celular debido a patologías existentes. Ellas son lesiones tipo úlceras en los que ocurre la muerte del tejido o de la extremidad, su presencia en el cuerpo ocurre por falta de irrigación sanguínea y presencia microbiana. Se le conoce también como gangrena y es común que se de en pacientes diabéticos.
          div(numero="4" titulo="Síncope")
            p Es la pérdida de conciencia transitoria, llamado comúnmente como desmayo, que puede durar desde segundos hasta un minuto. Se producen por arritmias o enfermedades del corazón; pero también pueden aparecer por aspectos como calor, olor, cansancio, etc. Cuando llegan a ser graves se tienden a hacer maniobras de resurrección, aplicación de medicamentos o corriente eléctrica para dicho fin.
          div(numero="5" titulo="Asfixia")
            p Ocurre cuando hay fallas en el proceso respiratorio normal.
          div(numero="6" titulo="Muerte aparente")
            p Es la disminución de las funciones vitales. Se le conocía a esta como estados catatónicos o catalepsia. Se requieren tratamientos médicos para tratar la enfermedad y en algunas ocasiones se produce la muerte definitiva.

    .row.mb-5
      .col-lg-7.order-lg-first.order-last
        LineaTiempoD.color-primario
          div(numero="7" titulo="Estado agonal")
            p Es el estado de transición entre la vida y la muerte. El moribundo presenta algunos síntomas visibles tales como:  1. Los músculos y las funciones de los esfínteres se relajan por completo, 2. Se genera un sonido respiratorio tipo gorgoteo que se produce en la garganta, debido a la acumulación de mucosas, 3. Espasmos musculares y 4. pérdida de la lucidez mental.
          div(numero="8" titulo="Muerte biológica o muerte somática")
            p Es el cese total y definitivo de las funciones principales del cuerpo y del sistema cardiorespiratorio. En este momento los demás sistemas y tejidos del cuerpo comienzan a colapsar.
          div(numero="9" titulo="Muerte cerebral")
            p El cerebro está dividido en dos partes: corteza y tallo cerebrales. La muerte cerebral ocurre cuando hay un daño en el tallo cerebral. Esta parte es la encargada de controlar las funciones principales del cuerpo y la conciencia. El fallo en el tallo cerebral detiene las funciones de los pulmones y del corazón. La muerte cerebral puede ser causada por traumatismos como accidentes, impactos de bala, trombosis, intoxicación, entre otras.
          div(numero="10" titulo="Coma")
            p Esta muerte surge cuando la corteza cerebral se altera o se daña. En este estado la persona pierde la conciencia que puede durar minutos, años y en los casos más graves  la muerte. 
            p En términos generales, una persona en coma puede percibir estímulos a los cuales el cuerpo puede dar respuesta y este se puede medir con el uso de la “escala de Glasgow” en la que se mide el coma en un rango de 3 a 15, siendo el 3 el indicador de un coma profundo y 15 indica casi consciente. En algunas ocasiones se puede inducir al coma mediante sedantes, pero es controlado y con propósitos médicos específicos.
          div(numero="11" titulo="Muerte celular <em>postmortem</em>")
            p En este caso todas las células con funciones específicas del cuerpo mueren al no tener oxígeno y nutrientes. Este proceso ocurre a los pocos minutos u horas del fallecimiento de la persona. Así: 
            .row.align-items-center.justify-content-center
              .col-lg-6
                ol.lista-ol--cuadro.lista-ol--separador
                  li 
                    .lista-ol--cuadro__vineta.fcp
                      span 1
                    | Células cerebrales: 5 minutos.
                  li 
                    .lista-ol--cuadro__vineta.fcp
                      span 2
                    | Células musculares: 3 horas.
                  li 
                    .lista-ol--cuadro__vineta.fcp
                      span 3
                    | Células de la córnea: 6 horas.
                  li 
                    .lista-ol--cuadro__vineta.fcp
                      span 4
                    | Glóbulos: 6 horas.
              .col-lg-5
                img(src='@/assets/curso/t1/f7.svg' alt='Muerte en el contexto biológico')
      .col-lg-5.order-lg-last.order-first
        figure
          img(src='@/assets/curso/t1/f6.svg' alt='Muerte en el contexto biológico').mb-4
    
    .row.align-items-center.bg3.afterCP1.p-5.mb-5.sm-fg
      .col-lg-4
      .col-lg-1(data-aos="fade-right")
        figure
          img(src='@/assets/curso/icon-admiracion.svg' alt='Símbolo de atención').w85px.noMobile
        img(src='@/assets/curso/t1/bg3f1.png' alt='Símbolo de atención').onlyMobile.mb-4
      .col-lg-6
        p.bordeLnegro.mb-0 <b>Comprendidas algunas causas biológicas por las que un cuerpo puede explorar la muerte,</b> es momento de <b><span class="cp">explicar los tipos de muerte.</span></b> Cabe mencionar que algunas de ellas requieren una intervención legal que esclarezca el deceso de un cuerpo, estas son:

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Muerte natural")
        .row.align-items-center
          .col-md-7.mb-4
            h4 Muerte natural
            p Es aquella muerte que se conoce como a causa de patologías o resultado del envejecimiento. En estos casos no hay indicios de criminalidad, por lo que no requiere investigación judicial.
            p La muerte la certifica un ente médico autorizado, que haya presenciado la muerte o conociendo la historia clínica o epicrisis del fallecido.
            p Existe un caso excepcional en el que se realiza necropsias clínicas al fallecido siendo por muertes naturales y es con el fin de estudiar o investigar clínica y científicamente patologías extrañas.
          .col-md-5
            figure
              img(src='@/assets/curso/t1/f8.png' alt='Muerte certificada por un médico')
      .py-3.py-md-4(titulo="Muerte violenta")
        .row.align-items-center
          .col-md-7.mb-4
            h4 Muerte violenta
            p En esta muerte intervienen agentes externos al cuerpo que detienen sus funciones orgánicas. Entre ellas  se encuentran las muertes generadas en vías de tránsito, intoxicaciones, drogas, caídas, homicida o suicida. 
            p Para establecer el mecanismo o la causa de la muerte se realiza la autopsia médico legal. en la que se revisa minuciosamente todas las evidencias que haya en el lugar de los hechos: el cuerpo, los órganos, se hacen tomas de fluidos corporales, fotografías, versiones de testigos y demás evidencias que se puedan suministrar para la investigación judicial. 
          .col-md-5
            figure
              img(src='@/assets/curso/t1/f9.png' alt='Intervienen agentes externos')
      .py-3.py-md-4(titulo="Muerte por establecer")
        .row.align-items-center
          .col-md-7.mb-4
            h4 Muerte por establecer
            p En ella se sospecha violencia o criminalidad por parte de otras personas, el médico es quien avisa a la autoridad competente si existieran señales o pueda presumirse violencia, se deberá realizar una necropsia médico legal como en el caso de las muertes violentas para establecer sus causas.
          .col-md-5
            figure
              img(src='@/assets/curso/t1/f10.png' alt='Se sospecha violencia o criminalidad')
    
    p.mb-5 <b>Es <span class="cac">responsabilidad</span> del ente médico detectar los signos de fallecimiento y certificar la muerte.</b> Estos signos pueden ser:

    .row.align-items-center.justify-content-around.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/t1/f11.svg' alt='Signos del fallecimiento')
      .col-lg-5
        ol.lista-ol--cuadro.lista-ol--separador
                  li 
                    .lista-ol--cuadro__vineta.fcp
                      span 1
                    | Detenimiento de la respiración. 
                  li 
                    .lista-ol--cuadro__vineta.fcp
                      span 2
                    | Detenimiento de la circulación. 
                  li 
                    .lista-ol--cuadro__vineta.fcp
                      span 3
                    | Flacidez muscular.
                  li 
                    .lista-ol--cuadro__vineta.fcp
                      span 4
                    | Cambios oculares: pérdida de brillo, aplanamiento ocular, pupilas sin reacción, nublado de córnea.
                  li 
                    .lista-ol--cuadro__vineta.fcp
                      span 5
                    | Lividez cadavérica.
                  li 
                    .lista-ol--cuadro__vineta.fcp
                      span 6
                    | Rigidez cadavérica. 
                  li 
                    .lista-ol--cuadro__vineta.fcp
                      span 7
                    | Enfriamiento del cuerpo.
                  li 
                    .lista-ol--cuadro__vineta.fcp
                      span 8
                    | Descomposición.
    p.mb-5 Cuando un cuerpo humano finaliza todas sus funciones vitales ocurren cambios antes y después de su fallecimiento. Conocer estos cambios es muy importante, pues de estos van a depender los procedimientos y las técnicas que se deban aplicar en la tanatopraxia y las posibles complicaciones que se tengan al momento de la preservación. En este momento se describirán los fenómenos agonales y cadavéricos para que pueda compararlos y valorarlos en su contexto de acción. Inicie revisando la siguiente información:

    .row.align-items-center.bg4.afterCP1.p-5.mb-5.sm-fg
      .col-lg-1(data-aos="fade-right")
        figure
          img(src='@/assets/curso/icon-admiracion.svg' alt='Símbolo de atención').w85px.noMobile
        img(src='@/assets/curso/t1/bg4f1.png' alt='Símbolo de atención').mb-4.onlyMobile
      .col-lg-7
        p.bordeLnegro.mb-0 <b><span class="cac">Los fenómenos agonales</span></b> son <b>cambios que ocurren en el cuerpo de la persona durante en el proceso del fallecimiento gracias a la disminución metabólica,</b> estos cambios ocurren sobre todo en personas que llevan padeciendo alguna enfermedad o por proceso natural del envejecimiento.
      .col

    p Se invita a identificar los diferentes cambios que pueden ocurrir en un cuerpo en el marco del anterior fenómeno.
    .col-lg-10.mx-auto.mb-5
      LineaTiempoD.color-primario.mb-5
        div(numero="1" titulo="Cambios de temperatura")
          p Pueden ocurrir dos cambios de temperatura en el cuerpo, el calentamiento o fiebre agonal y el enfriamiento agonal.
          .row.align-items-center.justify-content-center
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/t1/f12.svg' alt='Signos del fallecimiento')
            .col-md-6
              .tarjeta-avatar-b.mb-4
                .tarjeta-avatar-b__img
                  img.mx-auto(src='@/assets/curso/t1/ca.svg' alt='Imagen relacionada' style='width:71px;')
                .tarjeta.tarjeta-white--color-red.fblanco
                  .p-4.ps-0.py-5
                    h4 Fiebre agonal
                    p.mb-0 Es la elevación de la temperatura corporal antes del fallecimiento y puede deberse a infecciones o presencia de microorganismos.
              .tarjeta-avatar-b.mb-4
                .tarjeta-avatar-b__img
                  img.mx-auto(src='@/assets/curso/t1/cb.svg' alt='Imagen relacionada' style='width:71px;')
                .tarjeta.tarjeta-white--color-blue.fblanco
                  .p-4.ps-0.py-5
                    h4 Algor agonal
                    p.mb-0 Es la disminución de la temperatura corporal, la temperatura se concentra en los órganos principales y las extremidades se tornan frías, por lo general se evidencia en personas de avanzada edad o cuando tienen patologías largas.
        div(numero="2" titulo="Cambios en la circulación")
          p Como las funciones vitales se están reduciendo al mínimo, en la circulación ocurren varios efectos como:
          .row.justify-content-around.align-items-center
            .col-lg-6
              ul
                ol.lista-ol--cuadro.lista-ol--separador
                  li 
                    .lista-ol--cuadro__vineta.fcp
                      span 1
                    | Los latidos del corazón cada vez son más suaves.
                  li 
                    .lista-ol--cuadro__vineta.fcp
                      span 2
                    | Aparecen coágulos.
                  li 
                    .lista-ol--cuadro__vineta.fcp
                      span 3
                    | Asentamiento de la sangre en ciertas zonas del cuerpo, debido a la gravedad. 
              p Este cambio específicamente influye de manera directa en la preservación circulatoria de inyección y drenaje.
            .col-lg-3
              figure
                img(src='@/assets/curso/t1/f13.svg' alt='Signos del fallecimiento')
        div(numero="3" titulo="Cambios de humedad")
          p Este cambio hace referencia a la retención de líquidos o deshidratación en el cuerpo humano. Estos se pueden referir a: 
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img(src='@/assets/curso/t1/f14.svg' alt='imagen relacionada')
            .col-lg-6
              .tarjeta-avatar-b.mb-4
                .tarjeta-avatar-b__img
                  img.mx-auto(src='@/assets/curso/t1/ca.svg' alt='Imagen relacionada' style='width:71px;')
                .tarjeta.tarjeta-white--color-red.fblanco
                  .p-4.ps-0.py-5
                    p.mb-0 El edema, es la acumulación de líquidos en los tejidos del cuerpo gracias a ciertos tratamientos médicos o patologías.
              .tarjeta-avatar-b.mb-4
                .tarjeta-avatar-b__img
                  img.mx-auto(src='@/assets/curso/t1/cb.svg' alt='Imagen relacionada' style='width:71px;')
                .tarjeta.tarjeta-white--color-blue.fblanco
                  .p-4.ps-0.py-5
                    p.mb-0 Deshidratación, como su nombre lo dice es la disminución de los líquidos de los tejidos.
                        
    .row.align-items-center.bg5.afterCP1.p-5.mb-5.sm-fg
      .col-lg-4
      .col-lg-1(data-aos="fade-right")
        figure
          img(src='@/assets/curso/icon-admiracion.svg' alt='Símbolo de atención').w85px.noMobile
        img(src='@/assets/curso/t1/bg5f1.png' alt='Símbolo de atención').mb-4.onlyMobile
      .col-lg-6
        p.bordeLnegro.mb-0 Hasta ahora ha leído un fenómeno de los dos mencionados. Es momento que reconozca el fenómeno o <b><span class="cac">cambio <em>postmortem</em></span>, definido como el cambio que ocurre en el cuerpo después del fallecimiento de la persona, puede presentarse desde las primeras horas y se prolonga con el paso del tiempo.</b> Estos cambios son los que <b><span class="cp">se tratan con las correctas técnicas de embalsamamiento y pueden retrasarse o interrumpirse,</span></b> en algunos casos pueden hasta revertir levemente alguno de los cambios, siempre y cuando se intervenga el cuerpo en el menor tiempo posible después de la muerte.

    p.mb-5 Entre más pase tiempo entre el fallecimiento y la intervención tanatopractor los cambios se harán más graves y se complica más el proceso de preservación. Existen dos tipos de cambios, los físicos y los químicos y, estos a su vez abarcan cambios más específicos. Véalos a continuación.

    .row.mb-5
      .col-md-6
        figure
          img(src='@/assets/curso/t1/f15.svg' alt='Fenómeno postmortem')
      .col-md-6
        h2 <span class="fnegro texto-blanco px-1">Físico</span>
        P Son cambios que modifican el aspecto físico del cuerpo.
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="<em>Algor mortis</em>")
            p Se le conoce como el enfriamiento cadavérico, en este punto la temperatura del cuerpo se iguala a la temperatura ambiente del lugar en que fallezca, comienza desde las extremidades hasta los órganos internos.
          div(titulo="Hipósptasis")
            p Es el proceso por el cual ocurre el estancamiento de la sangre o congestión sanguínea dentro del sistema circulatorio hacia zonas bajas del cuerpo, debido a la fuerza de gravedad.
          div(titulo="<em>Livor mortis</em>")
            p Se le conoce como lividez cadavérica, es la coloración sanguínea que se extiende hacia la piel y zonas visibles. Al detenerse la circulación,  la sangre cae hacia la posición en que se encuentre el cuerpo.
          div(titulo="Espasmo cadavérico")
            p Es un tipo de rigidez instantánea que se genera por impulsos nerviosos que quedaron almacenados en el cerebro y en  el sistema nervioso. Estos movimientos en muchas ocasiones son imperceptibles.
          div(titulo="Deshidratación cadavérica")
            p Es la pérdida de fluidos en los tejidos. Se presenta la hipóstasis. La piel tiende a verse con una textura de acartonamiento, decoloraciones amarillentas en la piel. Este cambio no es recurrente en todos los cuerpos.
          div(titulo="Edema")
            p Es la acumulación de agua o de líquido en el cuerpo, se puede presentar por zonas como extremidades o en general en todo el cuerpo y se da por tratamientos médicos o patologías.
          div(titulo="Viscosidad de la sangre")
            p Es el “engrosamiento” o coagulación de la sangre. Entre más tiempo pase entre el fallecimiento y el proceso de tanatopraxia, más compleja será la remoción de la sangre.
          div(titulo="Translocación de microorganismos")
            p El cuerpo en vida normalmente tiene una microflora en el intestino que ayuda a los procesos funcionales, pero al momento del fallecimiento esos mismos microorganismos comienzan a migrar a las demás partes del cuerpo y son uno de los factores principales para la descomposición del cuerpo.

    .row.mb-5
      .col-md-6.order-lg-first.order-last
        h2 <span class="fnegro texto-blanco px-1">Químico</span>
        P Son cambios químicos que cambian las estructuras del cuerpo y lo modifican.
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Coloración <em>postmortem</em>")
            p Esto sucede cuando algunas células, luego del fallecimiento, poseen reservas de oxígeno dentro de ellas y genera que algunas funciones del metabolismo reguladoras de la temperatura continúen, es allí que se produce la caloricidad.
          div(titulo="<em>Rigor mortis</em>")
            p Es un proceso de contractura muscular gradual que varía en las personas fallecidas. Esta comienza entre las 3 o 6 horas luego del fallecimiento. Es necesario romper esta rigidez antes de iniciar con el proceso de embalsamamiento con masajes y movimientos de rotación y flexión de las extremidades para ayudar a que la inyección de químico preservante y el drenaje de la sangre sea óptima, además que permite posicionar el cuerpo en un estado natural.
          div(titulo="pH")
            p Es el medidor de acidez o alcalinidad del cuerpo, se mide de la acidez máxima con el 0 hasta la alcalinidad máxima con el 14 donde el número 7 hace referencia al pH neutro; el pH normal de los cuerpos en vida es de 7,4 pero al momento del fallecimiento tiende a caer hacia el número 3 de acidez, a medida que las horas de fallecimiento aumentan el pH cambia a la alcalinidad, el proceso de descomposición tiende a una alcalinidad máxima.
          div(titulo="Coloración <em>postmortem</em>")
            p Es uno de los signos del fallecimiento en el que se presentan cambios de la tonalidad de la piel por los tonos rojizos de la sangre, esta se puede modificar por medio de la inyección vascular. Existen coloraciones muy específicas que manchan la piel y no se pueden remover por medio de la inyección vascular.
          div(titulo="Putrefacción o descomposición")
            p Es el proceso químico en el que la materia orgánica se descompone. Ocurre en diversas partes del cuerpo en simultáneo, comienza desde las células, los tejidos hasta los órganos. 
            p La descomposición es evidente cuando se presenta algunos de los siguientes fenómenos: 1. Desprendimiento de piel, 2. Cambio de color, 3. Presencia de gases en los tejidos, 4. Olor putrefacto y 5. Presencia de líquidos por los orificios naturales que se le conoce como purga.
      .col-md-6.order-first.order-lg-last
        figure
          img(src='@/assets/curso/t1/f16.svg' alt='Fenómeno postmortem')
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
