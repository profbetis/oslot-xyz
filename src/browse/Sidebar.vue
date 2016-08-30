<script>
import Vue from 'vue'

export default {
  name: 'sidebar',

  template: '#sidebar-template',

  data: () => {
    return {
    }
  }
}
</script>

<template id="sidebar-template">
  <div id="sidebar">

  <div class="panel">
    <h1>Sidebar</h1>
    <p>Things will fill this up</p>
  </div>

  </div>
</template>

<style>
#sidebar{
  width: 33%;
  min-width: 16em;
  max-width: 16em;
}
div #sidebar{
  padding: 0;
}
#sidebar .panel{
  background: #383838;
}
</style>
