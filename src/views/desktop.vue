<template>
  <div>
    <div class="desktop-view" :style="{backgroundImage:`url(${background})`}"
      v-rightMenu="menudata">
      <div class="app-layer">
        <div class="item" v-for="(item, name, index) in apps" :key="index">
          <div class="app-main" :class="[item.focus?'focus':'']"
            @click="appSelect(item,name)">
            <img draggable="false" :src="item.icon" :title="item.name">
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
      <Background v-model="w_background" />
      <!-- <Window :pos="{x:100,y:100}" title="任务管理器">
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
      <Window :pos="{x:30,y:30}">
        <template #title>
          <div class="icon"></div>
          任务管理器1
        </template>
        <div class="task-manager">
          <div class="item">Adobe Photoshop CC 2019</div>
          <div class="item">Adobe Photoshop CC 2019</div>
          <div class="item">Adobe Photoshop CC 2019</div>
          <div class="item">Adobe Photoshop CC 2019</div>
          <div class="item">Adobe Photoshop CC 2019</div>
          <div class="item">Adobe Photoshop CC 2019</div>
        </div>
      </Window> -->
    </div>
    <TaskBar />
  </div>
</template>

<script>
import TaskBar from '@/components/TaskBar'
import Background from '@/windows/background'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      apps: {
        chrome: {
          icon: 'https://fmcat-os.oss-cn-hangzhou.aliyuncs.com/app_icon/chrome.png',
          name: 'Google Chrome',
          focus: false
        },
        bdwp: {
          icon: 'https://fmcat-os.oss-cn-hangzhou.aliyuncs.com/app_icon/bdwp.png',
          name: '百度网盘',
          focus: false
        }
      },
      w_background: false,
      menudata: {
        boxClass: 'right-menu,desktop-menu',
        menus: [
          {
            content: '更改背景',
            callback: 'openBackground',
            optionClass: 'menu-item'
          }
        ]
      }
    }
  },
  components: {
    TaskBar,
    Background
  },
  computed: {
    ...mapState({
      background: state => state.desktop.background,
      windowList: state => state.window.windowList
    }),
    checkWindowState() {
      this.windowList
    }
  },
  methods: {
    appSelect(item, name) {
      for (const key in this.apps) {
        if (this.apps.hasOwnProperty(key)) {
          this.apps[key].focus = false
        }
      }
      item.focus = true
    },
    openBackground() {
      this.w_background = true
      console.log(this.w_background)
    }
  }
}
</script>

<style lang="scss" scoped>
.task-manager {
  width: 800px;
  user-select: none;
}

.app-layer {
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  user-select: none;
  .item {
    margin: 1px;
    width: 74px;
    height: 74px;
    margin-bottom: 10px;
    .app-main {
      padding: 3px 0;
      font-size: 12px;
      color: #fff;
      text-shadow: 0 0 5px rgba(#000, 8);
      text-align: center;
      border: 1px solid transparent;
      img {
        vertical-align: baseline;
        width: 30px;
        height: 30px;
        margin-bottom: 4px;
      }
      p {
        @include textMultipleLine(2);
        cursor: default;
      }
      &:hover {
        border-color: rgba(#80c2f9, 0.2);
        background-color: rgba(#80c2f9, 0.15);
        outline: 1px solid rgba(#80c2f9, 0.15);
      }
      &.focus {
        border-color: rgba(#80c2f9, 0.35);
        background-color: rgba(#80c2f9, 0.25);
        outline: 1px solid rgba(#80c2f9, 0.25);
        &:hover {
          border-color: rgba(#54aef9, 0.35);
          background-color: rgba(#54aef9, 0.25);
          outline: 1px solid rgba(#54aef9, 0.25);
        }
      }
    }
  }
}
</style>