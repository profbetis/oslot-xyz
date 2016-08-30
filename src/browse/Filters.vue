<script>
import Vue from 'vue'

export default {
  name: 'filters',

  template: '#filters-template',

  data: () => {
    return {
      keywords: [
        'floor',
        'architecture',
        'profbetis',
        'white',
        'glass',
        'parametric'
      ]
    }
  }
}
</script>

<template id="filters-template">
  <div id="filters">

    <div class="panel">
      <h1>Filters</h1>

      <div id="keyword-filter" class="filter-section">
        <h2>Keywords</h2>

        <div class='sub-section'>
          <h3>Tag Logic Operator</h3>
          <div class='flexbox'>
            <div class='label-switch active'>AND</div>
            <div class='label-switch'>OR</div>
          </div>
        </div>

        <div class='sub-section'>
          <h3>Tag List</h3>
          <div v-for="tag in keywords" class="keyword-tag">{{ tag }}</div>
        </div>

        <div class='sub-section'>
          <h3>New Tag Entry</h3>
          <input placeholder="Search Terms">
        </div>
      </div>

      <div id="category-filter" class="filter-section">
        <h2>Categories</h2>
        <input type="checkbox">Materials<br>
        <input type="checkbox">Generators<br>
        <input type="checkbox">Volumes<br>
        <input type="checkbox">Camera Geometry<br>
        <input type="checkbox">Other<br>
      </div>

      <div id="rating-filter" class="filter-section">
        <h2>Rating</h2>
        <div class='sub-section'>
          <h3>Minimum Rating</h3>
          <div class='flexbox'>
            <div class="rating-button">0</div>
            <div class="rating-button">1</div>
            <div class="rating-button">2</div>
            <div class="rating-button">3</div>
            <div class="rating-button">4</div>
          </div>
        </div>
        <div class='sub-section'>
          <h3>Maximum Rating</h3>
          <div class='flexbox'>
            <div class="rating-button">1</div>
            <div class="rating-button">2</div>
            <div class="rating-button">3</div>
            <div class="rating-button">4</div>
            <div class="rating-button">5</div>
          </div>
        </div>
      </div>

      <div id="compatibility-filter" class="filter-section">
        <h2>Program Compatibility</h2>
        <div class='flexbox'>
          <div class="compatibility-button">Arnold</div>
          <div class="compatibility-button">Blender</div>
          <div class="compatibility-button">Octane</div>
          <div class="compatibility-button">Vray</div>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
#filters{
  width: 33%;
  min-width: 16em;
  max-width: 16em;
}

div #filters{
  padding: 0;
}

#filters .panel {
  background: #383838;
}

#filters div div div{
  padding: 0;
  margin: 0.5em 0;
}

#filters .filter-section{
  text-align: left;
  background: #303030;
  padding: 1em;
  margin-top: 0.5em;
  margin-bottom: 1em;
}
#filters .filter-section:last-of-type{
  margin-bottom: 0.5em;
}

#filters .sub-section{
  /*background: #282828;*/
  margin: 0;
  padding: 0em 0;
}

#keyword-filter .label-switch{
  width: 100%;
  margin: 0;
}
#keyword-filter div.keyword-tag{
  font-size: 0.8em;
  background: #202020;
  padding: 0.25em 0.5em;
  margin: 0.125em;
  width: auto;
  display: inline-block;
}
#keyword-filter div.keyword-tag:hover{
  text-decoration: line-through;
  color: #f0b000;
  background: #383838;
  cursor: pointer;
}
#rating-filter div.rating-button{
  width: 100%;
  text-align: center;
}
#compatibility-filter div.compatibility-button{
  font-size: 1em;
  background: #202020;
  padding: 0.25em 0.5em;
  margin: 0.125em;
  display: inline-block;
}

#filters h3{ border-bottom: 1px solid #505050;}
</style>
