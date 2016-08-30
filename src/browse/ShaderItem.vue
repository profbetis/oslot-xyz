<script>
import Vue from 'vue'

export default {
  name: 'shader-item',

  template: '#shader-item-template',

  props: {
    'name': String,
    'author': String,
    'categories': Array,
    'rating': Number,
    'compatibility': Array
  },

  data: () => {
    return {
    }
  }
}
</script>

<template id="shader-item-template">
  <div class="shader-item">

    <div class='shader-thumb'>
      <img src="../assets/mat-prev/oslot-matprev01.jpg"></img>
    </div>

    <div class='shader-info'>
      <h1>{{ name }}</h1>
      <h3>by {{ author }}</h3>
      <h3>{{ categories }}</h3>
      <h2>{{ rating }} Stars</h2>
      <h3>{{ compatibility }}</h3>
    </div>

  </div>
</template>

<style>
#shader-view .shader-item{
  width: 250px;
  text-align: left;
  margin: 0.25em;
  padding: 0em;
  background: #303030;
  display: inline-block;
}
#shader-view .shader-thumb{
  margin: 0;
  padding: 0;
}
#shader-view .shader-info{
  padding: 1em;
  padding-top: 0.25em;
  margin: 0;
}
.shader-item img{
  width: 100%;
  margin: 0em;
  object-fit: cover;
}
.shader-item h1,
.shader-item h3{
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0em;
}
.shader-item h1{
  color: #c0c0c0;
}
.shader-item h3{
  color: #a0a0a0;
}
</style>
