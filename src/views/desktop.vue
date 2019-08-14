<template>
  <div>
    <div class="desktop-view"
      style="background-image:url(https://static.fmcat.top/background/gamersky_06origin_11_201932153AA5.jpg?x-oss-process=image/interlace,1/quality,q_90)">
      <Window>
        <template #title>
          <div class="icon"></div>
          任务管理器
        </template>
        <div class="task-manager">
          <div class="item">Adobe Photoshop CC 2019</div>
          <div class="item">Adobe Photoshop CC 2019</div>
          <div class="item">Adobe Photoshop CC 2019</div>
          <div class="item">Adobe Photoshop CC 2019</div>
          <div class="item">Adobe Photoshop CC 2019</div>
          <div class="item">Adobe Photoshop CC 2019</div>
        </div>
      </Window>
    </div>
    <TaskBar />
  </div>
</template>

<script>
import Window from '@/components/Window'
import TaskBar from '@/components/TaskBar'
export default {
  components: {
    TaskBar,
    Window
  }
}
</script>

<style lang="scss" scoped>
.desktop {
  font-size: 50px;
  color: $m;
}

.task-manager {
  width: 800px;
  user-select: none;
}
</style>