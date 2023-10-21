<template>
  <div class="p-4 flex flex-col gap-y-6">
    <div>
      <p class="text-xl font-bold mb-4">TODO LO QUE NECESITAS</p>
      <div class="flex flex-wrap gap-x-4 -z-50">
        <div v-for="item in businesstype.list" :key="item.businessTypeId" >
          <button class="bg-[#181818] hover:bg-[#282828] shadow-lg p-3 justify-center w-48 relative group/item rounded-lg"  v-on:click="getElementsByBusinessType(item)">
            <div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-36 rounded-lg"></div>
            <p class="overflow-hidden text-sm mt-4">{{ item.businessTypeName }}</p>
            <p class="overflow-hidden text-sm mt-2 text-[#757575]">{{ item.categoryName }}</p>
          </button>
        </div>
      </div>
    </div>
  </div> 
</template>
<script>
    import server from '../server';
    //import CardsBusinessType from './CardsBusinessType.vue';

    export default {
        name: 'businessType',
        components:{},
        data(){
            return{
                businesstype:{list:[]},
                business:{list:[]}
            }
        },
        mounted(){

          this.getBusinessType();
        },
        methods: {
            async getBusinessType(){
                let response = await server.businessType({});
                this.businesstype.list = response.data.list
            },

            async getElementsByBusinessType(item){
              let plainObject = JSON.parse(JSON.stringify(item));
              let response = await server.getBusinessForType({categoryId:item.categoryId,businessTypeId:item.businessTypeId});
              this.business.list = response.data.list
            }
        }
    }
</script>

<style>

</style>