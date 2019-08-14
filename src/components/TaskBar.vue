<template>
  <div class="task-bar" :class="[size?'small':'']" v-rightMenu="menudata">
    <div class="start-region">
      <div class="btn-start" title="开始"></div>
    </div>
    <div class="task-region"></div>
    <div class="status-region">
      <div class="btn-message" :title="msgCount?`有${msgCount}条新通知`:'没有新通知'"
        :class="[msgCount?'has-new':'']">
      </div>
      <div class="btn-showtop"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msgCount: 0,
      size: 0,
      menudata: {
        boxClass: 'right-menu,task-menu',
        menus: [
          {
            content: '<span>切换任务栏大小</span>',
            callback: 'changeSize',
            optionClass: 'menu-item'
          }
        ]
      }
    }
  },
  created() {
    this.size = parseInt(this.$ls.get('taskBarSize'))
  },
  methods: {
    changeSize() {
      this.size = this.size ? 0 : 1
      this.$ls.set('taskBarSize', this.size)
    }
  }
}
</script>

<style lang="scss" scoped>
.task-bar {
  width: 100%;
  height: 40px;
  display: flex;
  background-color: #2c2f31;

  .start-region {
    flex-shrink: 0;
    .btn-start {
      width: 48px;
      background-image: url('../assets/images/btn_start.png');
      background-repeat: no-repeat;
      background-position-x: center;
      &:hover {
        background-position-y: bottom;
      }
    }
  }
  .task-region {
    flex: 1;
  }
  [class^='btn-'] {
    background-color: #2c2f31;
    height: 100%;
    &:hover {
      background-color: #424447;
    }
  }
  .status-region {
    flex-shrink: 0;
    display: flex;
    flex-wrap: nowrap;
    .btn-showtop {
      width: 5px;
      border-left: 1px solid #808383;
      margin-left: 8px;
    }
    .btn-message {
      width: 40px;
      background-image: url('../assets/images/btn_message.png');
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: bottom;
      &.has-new {
        background-position-y: top;
      }
    }
  }
  &.small {
    height: 30px;
    .btn-message {
      background-position-y: -45px;
      &.has-new {
        background-position-y: -5px;
      }
    }
    .btn-start {
      width: 36px;
      background-position-y: -5px;
      &:hover {
        background-position-y: -45px;
      }
    }
  }
}
</style>