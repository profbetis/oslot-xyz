<script>
import Vue from 'vue'

export default {
  name: 'tabs',

  template: '#tabs-template',

  data: () => {
    return {
      tabs: [
        'Browse',
        'Submit',
        'Forum',
        'Account'
      ],
      currentTab: 0
    }
  }
}
</script>



<template id="tabs-template">
  <nav id="tabs" class="flexbox">

    <div v-for='(name, which) in tabs'
         v-bind:class="['tab', (which === currentTab) ? 'active-tab' : 'inactive-tab']">
      {{ name }}
    </div>

  </nav>
</template>



<style>
#tabs{
}
#tabs div{
  width: 100%;
  padding: 0.25em;
  transition: all 0.1s ease;
  border-left: 1px solid #606060;
}
#tabs div.active-tab{
  color: #f0b000;
  background: #404040;
}
#tabs div.active-tab:hover{
}
#tabs div.inactive-tab{
  color: #a0a0a0;
  background: #303030;
  border-bottom: 1px solid #606060;
}
#tabs div.inactive-tab:hover{
  background: #383838;
  cursor: pointer;
}
</style>
