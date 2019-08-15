export default {
  state: {
    background: 'https://static.fmcat.top/background/gamersky_06origin_11_201932153AA5.jpg?x-oss-process=image/interlace,1/quality,q_90',
    w_background: false
  },
  mutations: {
    setBackground(state, param) {
      state.background = param
    },
    setWindowState(state, param) {
      state['w_' + param] = !state['w_' + param]
    }
  }
}