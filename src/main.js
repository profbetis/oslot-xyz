import Vue from 'vue'
import Library from './Library.vue'
import SiteHeader from './SiteHeader.vue'

new Vue({
  el: '#app',

  components: {
    Library,
    SiteHeader
  },

  render (h) {
    return h({},[
      SiteHeader,
      Library
    ])
  }
})
