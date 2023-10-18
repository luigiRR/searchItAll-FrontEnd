<template>
  <div class="h-screen w-screen bg-[#000] text-white flex flex-col">
    <body class="h-[93%]">
      <div class="flex flex-row h-full">
        <div class="w-60 border">
          <leftBar/>
        </div>
        <div>Content</div>
      </div>
    </body>
    <footer class="h-24">

    </footer>
  </div>
</template>

<script setup>
  import businessType from './views/businessType.vue';
  import leftBar from './components/LeftBar.vue'
</script>

<style scoped>
</style>
