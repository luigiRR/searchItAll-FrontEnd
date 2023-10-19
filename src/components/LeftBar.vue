<template>
    <div class="h-[10%] p-2">
        <HomeSearch></HomeSearch>
    </div>
    <div class="h-[95%] p-2">
        <Library></Library>
    </div>
</template>

<script>
    import HomeSearch from './HomeSearch.vue';
    import Library from './Library.vue'

    export default {
        name: 'leftBar',
        components:{HomeSearch,Library},
        data(){
            return{}
        },
        mounted(){},
        methods: {}
    }
</script>

<style scoped>
</style>