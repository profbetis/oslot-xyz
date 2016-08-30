<script>
import Vue from 'vue'

import SiteHeader from './SiteHeader.vue'
import Tabs from './Tabs.vue'
import Browse from './browse/Browse.vue'

export default {
  name: 'app',

  template: '#app-template',

  components: {
    'site-header': SiteHeader,
    'tabs': Tabs,
    'browse': Browse
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

    <tabs></tabs>

    <browse></browse>

  </div>
</template>

<style>
</style>
