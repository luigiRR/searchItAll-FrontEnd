<template>
    <div class="p-2 rounded-lg flex flex-col bg-[#121212] gap-y-4 h-full">
       <div>
            <ActionsLibrary></ActionsLibrary>
       </div>
       <div class="h-full overflow-hidden hover:overflow-y-auto">
            <ContentLibrary></ContentLibrary>
       </div>
    </div>
</template>

<script>
    import ActionsLibrary from './ActionLibrary.vue'
    import ContentLibrary from './ContentLibrary.vue'
    export default {
        name: 'Library',
        components:{ActionsLibrary,ContentLibrary},
        data(){
            return{}
        },
        mounted(){},
        methods: {}
    }
</script>