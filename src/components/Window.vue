<template>
  <div class="window" v-move="init" :style="{borderColor}"
    :class="[windowFocus===windowId?'focus':'']" @mousedown="setFocusSelf"
    v-if="value">
    <div class="title-bar">
      <div class="custom left" v-if="customTitle">
        <slot name="title"></slot>
      </div>
      <div class="default left" v-else>
        <div class="icon"><img :src="icon" draggable="false"></div>{{title}}
      </div>
      <div class="btn-list">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item" @click="close"></div>
      </div>
    </div>
    <div class="window-main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import day from 'dayjs'
import { mapState } from 'vuex'
export default {
  props: {
    pos: {
      type: Object,
      default: {}
    },
    customTitle: {
      default: false
    },
    icon: {
      default: 'https://fmcat-os.oss-cn-hangzhou.aliyuncs.com/app_icon/default.png'
    },
    title: {
      default: '默认窗口标题'
    },
    borderColor: {
      default: '#fff'
    },
    value: { type: Boolean, default: true },
    nesting: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      windowId: null
    }
  },
  computed: {
    init() {
      let { pos } = this
      let option = {}
      return Object.assign(option, pos)
    },
    // windowList: state => state.windowList
    ...mapState({
      windowList: state => state.window.windowList,
      windowFocus: state => state.window.windowFocus
    })
  },
  created() {
    this.windowId = day().format('YYMMDD') + (this.windowList.length+20)
    this.$store.commit('addWindow', this.windowId)
  },
  methods: {
    setFocusSelf() {
      this.$store.commit('addWindow', this.windowId)
    },
    close() {
      if (this.nesting) {
        this.$emit('close')
      } else {
        this.$emit('input', false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.window {
  position: absolute;
  min-width: 300px;
  min-height: 200px;
  max-width: 100vw;
  max-height: 100%;
  background: #fff;
  box-shadow: 0 0 10px rgba(#000, 0.5);
  border: 1px solid #707070;
  .title-bar {
    user-select: none;
    display: flex;
    .left {
      flex: 1;
    }
    .btn-list {
      padding-left: 50px;
      display: flex;
      .item {
        width: 46px;
        height: 28px;
        background-image: url('../assets/images/title_btn.png');
        background-repeat: no-repeat;
        background-position-x: center;
        transition: background-color 0.2s;
        &:hover {
          background-color: #e5e5e5;
          &:nth-child(3) {
            background-color: #e81123;
            background-position-y: bottom;
          }
        }

        @for $i from 1 to 4 {
          &:nth-child(#{$i}) {
            background-position-y: ($i - 1) * -56px;
          }
        }
      }
    }
    .default {
      display: flex;
      align-items: center;
      .icon {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 16px;
          height: 16px;
          display: block;
          object-fit: contain;
        }
      }
    }
  }
  &.focus {
    z-index: 99 !important;
  }
}
</style>