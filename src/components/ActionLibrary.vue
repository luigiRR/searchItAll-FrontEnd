<template>
    <div class="flex flex-col">
       <div class="flex justify-between gap-x-10">
            <button class="flex text-left text-gray-300 hover:text-white font-bold">
                <icon icon="fa-solid fa-bars" class="w-6 h-6 mr-2"/>Tu bibliotea
            </button>
            <div>
                <button class="w-6 h-6 text-gray-300 hover:text-white font-bold">
                    <icon icon="fa-solid fa-plus "/>
                </button>
            </div>
       </div>
       <div class="flex gap-x-2 mt-4">
            <!--<button v-if="isActive()"><icon icon="fa-solid fa-xmark"/></button>-->
            <button v-for="chip in chips.list" :key="chip.id" 
            class="rounded-2xl bg-[#222222] text-sm px-3 py-1"
            v-on:click="chip.checked=!chip.checked" :class="chip.checked?'bg-white text-black':''">
                {{ chip.name }}
            </button>
       </div>
    </div>
</template>

<script>

export default {
        name: 'ActionsLibrary',
        components:{},
        data(){
            return{
                chips:{list:[
                    {id:1,'name':'Playlist','actions':'','checked':false},
                    {id:2,'name':'Artist','actions':'','checked':false},
                    {id:3,'name':'Albuns','actions':'','checked':false}   
                ]}
            }
        },
        mounted(){},
        methods: {
            isActive(){
                return this.chips.list.find(e=>e.checked)
            }
        }
    }
</script>