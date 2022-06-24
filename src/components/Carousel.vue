<template>
  <carousel-3d
    :controls-visible="true"
    :autoplay="true"
    :clickable="false"
    :height="300"
  >
  <slide v-for="(slide, i) in slides" :index="i" :key="i">
    <figure>
      <img :src="slide.src" />
      <figcaption>
        <v-btn text color="white">{{ slide.text }}</v-btn>
      </figcaption>
    </figure>
  </slide>
  </carousel-3d>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  components: {
    Carousel3d,
    Slide,
  },
  data: () => ({
    slides: [
      {src: require('../../public/01.jpg'), text: 'Cheb Khaled'},
      {src: require('../../public/02.jpeg'), text: 'Saalking'},
      {src: require('../../public/03.png'), text: 'Chakira'},
    ]
  }),
}
</script>

<style lang="scss" scoped>

</style>