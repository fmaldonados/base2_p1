<template>
  <div class="about container">
    <h1 class="page-header">About</h1>
    <p>Simple app to create questions for your students</p>    
    <p>Version 17.01</p>  

<body id="app">
  <div class="container">
      <div class="btn-group" data-toggle="buttons" v-radio="value">
         <label class="btn btn-primary"> <input type="radio" autocomplete="off" value="R1" />Radio 1</label>
         <label class="btn btn-primary"> <input type="radio" autocomplete="off" value="R2" />Radio 2</label>
         <label class="btn btn-primary"> <input type="radio" autocomplete="off" value="R3" />Radio 3</label>
      </div>
     <h3> Result: {{value}} </h3>
  </div>
</body>
    
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
