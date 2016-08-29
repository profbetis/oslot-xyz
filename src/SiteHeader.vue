<template>
  <div id='site-header'>
    <h1>OSLOT</h1>
    <h4>An OSL material depot</h4>
  </div>
</template>

<script>
export default {
  data () {
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

<style>
#site-header{
  background: #333;
  color: #ccc;

  font-weight: 200;

  width: 100%;
  padding: 1em;

  border-bottom: 1px solid #fa0;
}

#site-header h1{
  color: #fa0;
  font-size: 2em;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 300;
  letter-spacing: 0.3em;
  margin: 0;
}
#site-header h4{
  color: #aaa;
  font-size: 0.8em;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 300;
  letter-spacing: 0.1em;
  margin: 0;
}
</style>
