<template>
  <div class="wrapper">
    <div class="controls">
      <button class="button" :disabled="activeSlide === 1" @click="prevSlide">
        Prev
      </button>
      <button class="button" :disabled="activeSlide === slideCount" @click="nextSlide">
        Next
      </button>
    </div>
    <v-touch @swiperight="prevSlide" @swipeleft="nextSlide">
      <div class="slider" :style="{left: slideOffsetLeft + 'px'}">
        <div v-for="slide in 5" :key="slide" class="slide">
          {{ slide }}
        </div>
      </div>
    </v-touch>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  data: () => ({
    slideCount: 0,
    activeSlide: 1,
    slideOffsetLeft: 0,
    slideOffsetStep: 0,
  }),
  mounted() {
    this.initSlider();

    window.addEventListener('resize', () => {
      this.initSlider();
    });
  },
  methods: {
    initSlider() {
      this.slideOffsetStep = this.$el.clientWidth;
      this.slideCount = this.$el.querySelectorAll('.slide').length;
    },
    openSlide(id) {
      if (id > 0 && id <= this.slideCount) {
        this.activeSlide = id;
        this.slideOffsetLeft = -(this.activeSlide * this.slideOffsetStep - this.slideOffsetStep);
      }
    },
    prevSlide() {
      if (this.activeSlide > 1) {
        this.activeSlide -= 1;
        this.openSlide(this.activeSlide);
      }
    },
    nextSlide() {
      if (this.activeSlide < this.slideCount) {
        this.activeSlide += 1;
        this.openSlide(this.activeSlide);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
	width: 100%;
	height: 90vh;
	position: relative;
	overflow: hidden;
}

.controls {
  position: absolute;
  height: inherit;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .button {
    z-index: 10;
    background: transparent;
    border: none;
    padding: 3rem 2rem;
    outline: none;
    cursor: pointer;

    &:disabled {
      color: #ccc;
    }
  }
}

.slider {
  min-width: auto;
  height: 90vh;
  display: flex;
  position: relative;
  align-items: stretch;
  transition: all .5s ease;

  .slide {
    min-width: 100%;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 100%;
  }
}

</style>
