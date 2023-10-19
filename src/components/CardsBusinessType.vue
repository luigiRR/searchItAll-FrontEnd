<template>
    <div class="bg-[#181818] hover:bg-[#282828] shadow-lg p-3 justify-center w-48 relative group/item rounded-lg">
        <p class="overflow-hidden text-sm mt-4">{{ business.businessTypeName }}</p>
        <p class="overflow-hidden text-sm mt-4 text-[#757575]">{{ business.businessTypeName }}</p>
    </div>
</template>

<script>
export default {
    name: 'CardBusinessType',
    components:{},
    props:{
        business:Object
    },
    data(){
        return{}
    },
    mounted(){
        console.log('sd', this.business)
    },
    methods: {}
}
</script>