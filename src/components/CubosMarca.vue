<template>
    <div class="container my-4">
        <h1>Cubos de la marca <span class="text-danger">{{ $route.params.marca }}</span></h1>
        <hr>
        <div class="row row-cols-sm-3 row-cols-md-4 justify-content-between">
            <div v-for="cubo of cubos" :key="cubo" class="card col my-2" style="width: 18rem;">
                <img :src="cubo.imagen" width="50px" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{ cubo.nombre }}</h5>
                    <p class="card-text">{{ cubo.precio }}€</p>
                    <router-link :to="'/cubo/'+cubo.idCubo" class="btn btn-primary w-100">Detalles</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CubosService from '@/services/CubosService';


const service = new CubosService();
export default {
    data(){
        return {
            cubos: []
        }
    },
    mounted(){
        this.loadData();
    },
    watch:{
        '$route.params.marca'(nextVal, prevVal){
            if(nextVal !== prevVal){
                this.loadData();
            }
        }
    },
    methods: {
        loadData(){
            service.getCubosMarca(this.$route.params.marca)
            .then(res => {
                this.cubos = res;
            })
        },
    }
}
</script>

<style>

</style>