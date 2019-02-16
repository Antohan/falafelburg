<template>
  <div class="builder">
    <swiper />
  </div>
</template>

<script>
import Swiper from '@/components/Swiper';

export default {
  name: 'Builder',
  components: { Swiper },
};
</script>

<style lang="scss" scoped>
.builder {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>
