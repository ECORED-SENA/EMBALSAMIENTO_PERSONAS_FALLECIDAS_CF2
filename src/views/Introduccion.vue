<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure(data-aos="fade-right")
            img(src='@/assets/curso/if1.svg' alt='Morgue')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-4 <b><span class="cp">Apreciado aprendiz</span></b>, bienvenido a esta <b>experiencia de aprendizaje pensada en el segundo momento del proceso de embalsamamiento.</b> Para iniciar se invita a que revise el siguiente recurso de aprendizaje.
            p.mb-0 <b>¡Bienvenido!</b>


    .tarjeta.p-4.mb-5.sbg1
      SlyderA
        .row.align-items-center.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .cajon-b.color-primario.p-4
              p.mb-0 Esta experiencia de aprendizaje se enfoca en la realización del embalsamamiento del cadáver de acuerdo con los protocolos establecidos. En esta práctica histórica debe reconocer los cambios que suceden en un cuerpo después del cese de la actividad biológica y fisicoquímica. Uno de esos cambios es la descomposición, un proceso natural que lleva a reducir al cuerpo sin vida en partes mínimas.
          .col-md-4
            figure
              img(src='@/assets/curso/if2.png' alt='Realización del embalsamamiento')
        .row.align-items-center.justify-content-center
          .col-md-4
            figure
              img(src='@/assets/curso/if3.png' alt='Desarrollo de conocimientos')
          .col-md-6.mb-4.mb-md-0
            .cajon-c.color-primario.p-4
              p.mb-0 Debido a lo anterior, surge la necesidad del desarrollo de conocimientos, habilidades y actitudes en las personas que están interesadas en continuar su proyecto laboral en el servicio funerario.
        .row.align-items-center.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .cajon-b.color-primario.p-4
              p.mb-0 Como es de su conocimiento, el proceso de embalsamamiento o tanatopraxia es una práctica central del servicio funerario, porque de ella depende la realización del traslado final del cuerpo sin comprometer la salubridad de las personas que estuvieron involucradas en el traslado inicial e intermedio.
          .col-md-4
            figure
              img(src='@/assets/curso/if4.png' alt='Práctica central del servicio funerario')

    .tarjeta-avatar-b.mb-4
      .tarjeta-avatar-b__img(data-aos="fade-right")
        img.mx-auto(src='@/assets/curso/if7.svg' alt='Señal de atención' style='width:135px;')
      .tarjeta.tarjeta-white--color-red
        .p-5
          p.mb-0
            b.cp Recuerde que el proceso de embalsamamiento 
            b que se desarrolló en tres momentos: desinfección, preservación química y tanatoestética, debe cumplir con el 
            b.cac uso de elementos de bioseguridad 
            b para protegerse de uno o varios riesgos.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
