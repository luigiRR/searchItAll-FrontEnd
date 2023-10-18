<template>
  <div v-for="item in businesstype.list" :key="item.businessTypeId" style="display: flex;">
    <div class="card" style="width: 18rem;" v-on:click="foots(item)">
      <div class="card-body">
        <h5 class="text-3xl font-bold underline">{{item.businessTypeName}}</h5>
        <BeakerIcon class="h-6 w-6 text-blue-500" />
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
</template>
<script>
    import server from '../server';

    export default {
        name: 'businessType',
        components:{},
        data(){
            return{
                businesstype:{list:[]}
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

            foots(item){
              console.log(item.businessTypeId);
            }
        }
    }
</script>

<style>

</style>