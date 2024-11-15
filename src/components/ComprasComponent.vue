<template>
    <div class="container m-3">
        <h1>Tus compras</h1>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <th>Num. pedido</th>
                    <th>Id cubo</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="compra of compras" :key="compra">
                    <td>{{ compra.idPedido }}</td>
                    <td>{{ compra.idCubo }}</td>
                    <td>{{ compra.fechaPedido }}</td>
                </tr>
            </tbody>
        </table>
        <router-link class="btn btn-primary me-2" to="/perfil">Volver al perfil</router-link>
        <button class="btn btn-primary">Realizar pedido</button>
    </div>
</template>

<script>
import { Global } from '@/Global';
import CubosService from '@/services/CubosService';

const service = new CubosService();
export default {
    data(){
        return{
            compras:[],
        }
    },
    mounted(){
        if(Global.token == null){
            this.$router.push('/login');
        } else {
            service.getCompras(Global.token)
            .then(res => {
                this.compras = res;
            })
        }
    },
}
</script>

<style>

</style>