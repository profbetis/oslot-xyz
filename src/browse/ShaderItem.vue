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
      allPrograms: [
        'Arnold',
        'Blender',
        'Octane',
        'Vray'
      ]
    }
  },

  methods: {
    isCompatibleWith: function (which){
      return (this.compatibility.indexOf(which) > -1) ? true : false
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
      <div class='name'>{{ name }}</div>
      <div class='author'>by {{ author }}</div>
      <div class='categories'>
        <span class='categories-category'
        v-for='(category, index) in categories'>
          {{ index === 0 ? '' : '»'}} {{ category }}
        </span>
      </div>
      <div class='rating'>{{ rating }} Stars</div>
      <div class='compatibility'>
        <div v-bind:class="['compatibility-icon', isCompatibleWith(program) ? 'is-compatible' : '']"
        v-for='program in allPrograms'>
          {{ program }}
        </div>
      </div>
      <div class='download'>☇</div>
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
.shader-item img{
  width: 100%;
  margin: 0em;
  object-fit: cover;
}

#shader-view .shader-info{
  position: relative;
  padding: 1em;
  padding-top: 0.25em;
  margin: 0;
}
.shader-item div{
  margin: 0;
  padding: 0;
}
.shader-item .name,
.shader-item .author,
.shader-item .categories{
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0em;
}
.shader-item .name{
  font-size: 1.3em;
  line-height: 1em;
  margin-top: 0.125em;
  color: #e0e0e0;
}
.shader-item .author{
  font-size: 0.8em;
  color: #a0a0a0;
}
.shader-item .categories{
  font-size: 1em;
  color: #c0c0c0;
  margin-bottom: 0.25em;
}
.shader-item .rating{
  padding: 0.25em;
  text-align: center;
  outline: 1px dotted #f0b000;
  position: absolute;
  top: 0.5em;
  right: 1em;
}
.shader-item .compatibility{
  display: inline-flex;
  position: static;
}
.shader-item .compatibility-icon{
  color: #808080;
  outline: 1px dotted #606060;
  margin-right: 0.5em;
  width: 2em;
  height: 2em;
  line-height: 2em;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
}
.shader-item .compatibility-icon.is-compatible{
  color: #c0c0c0;
  outline-color: #f0b000;
}
.shader-item .download{
  color: #f0b000;
  outline: 1px solid #606060;
  text-align: center;
  vertical-align: middle;
  line-height: 2em;
  position: absolute;
  bottom: 1em;
  right: 1em;
  width: 2em;
  height: 2em;
  margin-top: 0.25em;
  cursor: pointer;
}
.shader-item .download:hover{
  background: #404040;
}
</style>
