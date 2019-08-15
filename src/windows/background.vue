<template>
  <Window :pos="{x:100,y:100}"
    icon="https://fmcat-os.oss-cn-hangzhou.aliyuncs.com/app_icon/background.png"
    title="背景" :nesting="true" @close="$emit('input',false)" v-if="value">
    是是是
  </Window>
</template>

<script>
export default {
  props: {
    value: { type: Boolean, default: false }
  },
  mounted() {
    console.log(this.value)
  }
}
</script>

<style lang="scss" scoped>
</style>