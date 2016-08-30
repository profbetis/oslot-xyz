<script>
import Vue from 'vue'

import SiteHeader from './SiteHeader.vue'
import Library from './Library.vue'

export default {
  name: 'app',

  template: '#app-template',

  components: {
    'site-header': SiteHeader,
    'library': Library
  },

  data: () => {
    return {
    }
  }
}
</script>

<template id="app-template">
  <div id="app">

    <site-header></site-header>
    <library></library>

  </div>
</template>

<style>
</style>
