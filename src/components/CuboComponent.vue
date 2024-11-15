<template>
    <div class="container my-4">
        <h1>{{ cubo.nombre }}</h1>
        <hr>
        <div class="card w-100 p-3">
            <img :src="cubo.imagen" class="card-img-top" width="200px">
            <table class="card-body table">
                <thead>
                    <tr>
                        <th>Marca y modelo</th>
                        <th>Valoración</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ cubo.marca }} {{ cubo.modelo }}</td>
                        <td>{{ cubo.valoracion }}</td>
                        <td>{{ cubo.precio }}€</td>
                    </tr>
                </tbody>
            </table>
            <router-link to="/" class="btn btn-warning w-100">Volver</router-link>
        </div>
        <div v-if="comentarios.length > 0">
            <h3 class="mt-4">Comentarios</h3>
            <hr>
            <table>
                <tbody>
                    <tr v-for="comentario of comentarios" :key="comentario">
                        <td class="pe-4">Usuario {{ comentario.idUsuario }}</td>
                        <td>{{ comentario.comentario }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import CubosService from '@/services/CubosService';

const service = new CubosService();
export default {
    data(){
        return {
            cubo: {
                idCubo: 0,
                nombre: "",
                modelo: "",
                marca: "",
                color: "",
                imagen: "",
                precio: 0,
                valoracion: 0
            }, 
            comentarios: []
        }
    },
    mounted(){
        this.loadData();
        this.loadComentarios();
    },
    watch:{
        'this.$route.params.id'(nextVal, prevVal){
            if(nextVal !== prevVal){
                this.loadData();
                this.loadComentarios();
            }
        }
    },
    methods: {
        loadData(){
            service.getCuboId(this.$route.params.id)
            .then(res=>{
                this.cubo = res;
            })
        },

        loadComentarios(){
            service.getComentariosId(this.$route.params.id)
            .then(res=>{
                this.comentarios = res;
            })
        }
    }
}
</script>

<style scoped>
    img {
        margin: 0 auto;
        width: 50%;
    }
</style>