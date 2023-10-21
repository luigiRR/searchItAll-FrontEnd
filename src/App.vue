<template>
  <div class="h-screen w-screen bg-[#000] text-white flex flex-col">
    <body class="h-[93%]">
      <div class="flex flex-row h-full">
        <div class="w-auto">
          <leftBar/>
        </div>
        <div class="flex-1">
          <div class="h-[105%] p-2">
            <div class="rounded-lg bg-gradient-to-b from-[#ada0a0] via-[#121212] to-[#121212] h-full
            overflow-hidden hover:overflow-y-auto relative scroll bg-local" @scroll="handleScroll($event)">
              <div class="sticky top-0 w-full mb-4 transition-all duration-1000 z-10" :class="bgHeaderActions">
                <HeaderActions></HeaderActions>
                <businessType></businessType>
              </div>
            </div>
          </div>
        </div>
        <div class="-z-10">
        </div>
      </div>
    </body>
    <footer class="h-24">
      <Footer></Footer>
    </footer>
  </div>
</template>

<script setup>
  import leftBar from './components/LeftBar.vue'
  import HeaderActions from './components/HeaderActions.vue'
  import businessType from './components/businessType.vue';
  import Footer from './components/Footer.vue'

  function handleScroll(scroll){
    if(scroll.target.scrollTop > 10){
      bgHeaderActions.value='bg-[#121212]'
    } else {
      bgHeaderActions.value=''
    }
  }
</script>

<style scoped>
  .scroll{
    scrollbar-gutter: stable;
  }
</style>
