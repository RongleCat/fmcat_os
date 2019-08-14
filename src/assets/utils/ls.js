export default {
  get(key) {
    return window.localStorage.getItem(key)
  },
  set(key, value) {
    if (typeof (value) === 'object') {
      value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
  },
  del(key) {
    window.localStorage.removeItem(key)
  }
}