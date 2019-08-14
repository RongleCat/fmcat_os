<template>
  <div class="window">
    <div class="title-bar">
      <slot name="title"></slot>
    </div>
    <div class="window-main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.window {
  position: absolute;
  min-width: 300px;
  min-height: 200px;
  max-width: 100vw;
  max-height: 100%;
  background: #fff;
  .title-bar {
    user-select: none;
  }
}
</style>