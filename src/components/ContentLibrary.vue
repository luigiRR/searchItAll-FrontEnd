<template>
    <div class="flex flex-row mb-2">
        <div class="flex text-left font-bold mt-1">
            <button v-on:click="categories()" class="text-gray-300 hover:text-white"><icon icon="fa-solid fa-magnifying-glass" class="w-4 h-4 mr-2"/></button>
            <input v-model="category.filters.sarch" class="w-full mr-2 text-black text-sm rounded-lg"/>
        </div>
    </div>
    <button v-for="category in category.list" :key="category.id" class="flex flex-row p-2 hover:bg-[#1a1a1a] rounded-lg w-full">
        <div class="mr-2"><icon icon="fa-solid fa-utensils"/></div>
        <div class="flex flex-col">
            <p class="text-gray-400 font-bold">{{ category.categoryName }}</p>
        </div>
    </button>
</template>

<script>
import server from '../server';


export default {
        name: 'ContentLibrary',
        components:{},
        data(){
            return{
                category:{filters:{},list:[]}
            }
        },
        mounted(){
            this.categories();
        },
        methods: {
            async categories(){
                let response = await server.categories({});
                this.category.list=response.data.list;
            }
        }
    }
</script>

<style>
    ::-webkit-scrollbar{
        width: 10px;
        background-color: #121212;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #ccc;
    }
</style>