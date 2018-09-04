<template>
  <div>
    <div class="contain">
      <div class="row mt-4">
        <div class="col text-center">
          <h1 class="light">Mark Down Preview</h1>
        </div>
      </div>
      <div class="row m-4">
        <div class="col-sm-6">
          <h4 class="light text-center">Markdown</h4>
          <textarea class="info" v-model="markdown"/>
        </div>
        <div class="col-sm-6">
          <h4 class="light text-center">Preview</h4>
          <div :key="markdown" class="info" 
          v-markdown >
            {{markdown}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        markdown: '',
      };
    },
  }


</script>

<style scoped>
textarea {
  resize: none;
  border: 2px solid orange;
  outline: none;
}
.info{
  height: 400px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
