<template id="library-template">
  <div id="library">
    <img src='./assets/logo.png'>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  template: '#library-template',

  data: () => {
    return {
      msg: 'Hello Vue 2.0!'
    }
  }
}
</script>

<style>
</style>
