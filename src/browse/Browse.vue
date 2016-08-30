<script>
import Vue from 'vue'

import Filters from './Filters.vue'
import Sidebar from './Sidebar.vue'
import ShaderView from './ShaderView.vue'

export default {
  template: '#browse-template',

  components: {
    'filters': Filters,
    'shader-view': ShaderView,
    'sidebar': Sidebar
  },

  data: () => {
    return {
    }
  }
}
</script>



<template id="browse-template">
  <div id="browse">

    <filters></filters>

    <shader-view></shader-view>

    <sidebar></sidebar>

  </div>
</template>



<style>
#browse{
  display: flex;
  padding: 0.5em;
  color: #c0c0c0;
}
#browse>div{
  margin: 0.5em;
}
</style>
