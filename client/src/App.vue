<template>
<div class="section">
  <div class="container">
    <div class="columns">
      <div class="column">
        <simple-upload />
      </div>

      <div class="column">
        <multiple-upload />
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import simpleUpload from './components/simpleUpload.vue';
  import multipleUpload from './components/multipleUpload.vue';
  export default {
    name: "App",
    components: {simpleUpload, multipleUpload}
  }
</script>

<style scoped>

</style>