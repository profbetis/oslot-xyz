<script>
import Vue from 'vue'

export default {
  template: '#site-header-template',

  data: () => {
    return {
      shaderCount: 3862,
      userCount: 19140,
      authorCount: 1337,
      localUser: {
        fullName: 'Kevin Weber',
        userName: 'profbetis'
      }
    }
  }
}
</script>



<template id="site-header-template">
  <div id="site-header">
    <h1>OSLOT</h1>
    <h4>An OSL material depot</h4>
  </div>
</template>



<style>
#site-header{
  background: #383838;
  color: #c0c0c0;

  font-weight: 200;

  width: 100%;
  padding: 0.5em;

  border-bottom: 1px solid #f0b000;
}

#site-header h1{
  color: #f0b000;
  font-size: 2em;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 300;
  letter-spacing: 0.3em;
  margin: 0;
}
#site-header h4{
  color: #c0c0c0;
  font-size: 0.8em;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 300;
  letter-spacing: 0.1em;
  margin: 0;
}
</style>
