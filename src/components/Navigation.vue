<template>
  <div class="navigation">
    <router-link v-if="$route.name === 'cart'" :to="{name: 'builder'}">
      Назад
    </router-link>
    <router-link v-else :to="{name: 'cart'}">
      Заказы
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style lang="scss" scoped>
.navigation {
  position: absolute;
  top: 0;
  right: 0;
  height: 60px;
  vertical-align: middle;
  padding-right: 1rem;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
