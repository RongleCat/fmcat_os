export default {
  install: function (Vue, options) {
    let GLOBLEsize = 0;
    // 声明
    Vue.directive("move", {
      bind(el, binding, vnode) {
        let $titleBar = el.querySelector('.title-bar')
        let { x, y } = binding.value
        let body = null
        let l = 0, t = 0;
        let bw = 0, bh = 0;
        let isDown = false;
        el.style.zIndex = GLOBLEsize
        GLOBLEsize++
        setPos({ x, y })

        $titleBar.addEventListener('mousedown', function (e) {
          let $p = e.target.offsetParent
          bw = $p.offsetWidth
          bh = $p.offsetHeight
          body = $p.parentElement

          x = e.clientX;
          y = e.clientY;

          //获取左部和顶部的偏移量
          l = $p.offsetLeft;
          t = $p.offsetTop;
          //开关打开
          isDown = true;
          this.addEventListener('mousemove', moveEl, false)
        }, false)

        function moveEl(e) {
          if (isDown == false) {
            return;
          }
          //获取x和y
          let nx = e.clientX;
          let ny = e.clientY;
          //计算移动后的左偏移量和顶部的偏移量
          let nl = nx - (x - l);
          let nt = ny - (y - t);

          if (nl <= 0) {
            nl = 0
          }
          if (nt <= 0) {
            nt = 0
          }
          if (nt >= body.clientHeight - bh) {
            nt = body.clientHeight - bh
          }
          if (nl >= body.clientWidth - bw) {
            nl = body.clientWidth - bw
          }
          setPos({ x: nl, y: nt })
        }

        $titleBar.addEventListener('mouseup', function () {
          isDown = false;
          this.removeEventListener('mousemove', moveEl)
        }, false)

        $titleBar.addEventListener('mouseout', function () {
          isDown = false;
          this.removeEventListener('mousemove', moveEl)
        }, false)

        function setPos({ x, y }) {
          el.style.top = y + 'px'
          el.style.left = x + 'px'
        }
      }
    })
  }
}