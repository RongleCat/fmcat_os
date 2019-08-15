export default {
  state: {
    windowFocus: '',
    windowList:[]
  },
  mutations: {
    setWindowFocus(state,param){
      state.windowFocus = param
    },
    addWindow(state,param){
      state.windowList.push(param)
      state.windowFocus = param
    }
  }
}