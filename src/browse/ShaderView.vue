<script>
import Vue from 'vue'

import ShaderItem from './ShaderItem.vue'

export default {
  name: 'shader-view',

  template: '#shader-view-template',

  components: {
    'shader-item': ShaderItem
  },

  data: () => {
    return {
      shaders: [
        {
          name: 'Dark Copper',
          categories: [
            'Materials',
            'Metallic'
          ],
          author: 'profbetis',
          rating: 4.8,
          compatibility: [
            'Octane'
          ]
        },
        {
          name: 'Wood Flooring (Panels)',
          categories: [
            'Materials',
            'Architecture',
            'Basic'
          ],
          author: 'profbetis',
          rating: 4.2,
          compatibility: [
            'Arnold',
            'Octane',
            'Vray'
          ]
        },
        {
          name: 'Glossy Wall Paint',
          categories: [
            'Materials',
            'Architecture',
            'Basic'
          ],
          author: 'profbetis',
          rating: 3.9,
          compatibility: [
            'Blender',
            'Octane'
          ]
        },
        {
          name: 'Frosted Glass',
          categories: [
            'Materials',
            'Architecture',
            'Glass'
          ],
          author: 'profbetis',
          rating: 3.3,
          compatibility: [
            'Octane',
            'Vray'
          ]
        },
        {
          name: 'White Clay',
          categories: [
            'Materials',
            'Basic'
          ],
          author: 'profbetis',
          rating: 4.8,
          compatibility: [
            'Arnold',
            'Blender',
            'Octane',
            'Vray'
          ]
        },
        {
          name: 'Water with Displacement',
          categories: [
            'Materials',
            'Liquids',
            'Water'
          ],
          author: 'rikk_the_gajin',
          rating: 3.7,
          compatibility: [
            'Blender',
            'Octane'
          ]
        },
        {
          name: 'Optical Glass',
          categories: [
            'Materials',
            'Transluscent',
            'Glass'
          ],
          author: 'skybase',
          rating: 4.2,
          compatibility: [
            'Arnold',
            'Vray'
          ]
        }
      ]
    }
  }
}
</script>

<template id="shader-view-template">
  <div id="shader-view">

  <shader-item v-for='shader in shaders'
    :name='shader.name'
    :author='shader.author'
    :categories='shader.categories'
    :rating='shader.rating'
    :compatibility='shader.compatibility'>
  </shade-item>

  </div>
</template>

<style>
#shader-view{
  width: 100%;
  margin-top: -0.25em;
}
</style>
