<template>
  <header class="header">
    <div class="logo">
      <slot name="logo" />
    </div>
    <slot name="navigation" />
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 60px;
  box-shadow: 2px 2px 5px 0 rgba(0,0,0,.095);
  overflow: hidden;
  box-sizing: border-box;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.logo {
  img {
    height: 60px;
  }
}
</style>
