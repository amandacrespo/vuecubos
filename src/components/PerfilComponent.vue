<template>
    <div class="container m-3">
        <h1>Mi perfil (User 1)</h1>
        <table class="table">
            <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ perfil.nombre }}</td>
                    <td>{{ perfil.email }}</td>
                </tr>
            </tbody>
        </table>
        <router-link class="btn btn-primary w-100" to="/compras">Mostrar compras</router-link>
    </div>
</template>

<script>
import { Global } from '@/Global';
import CubosService from '@/services/CubosService';

const service = new CubosService();
export default {
    data(){
        return{
            perfil: {
                idUsuario: 0,
                nombre: "",
                email: "",
                pass: ""
            },
        }
    },
    mounted(){
        if(Global.token == null){
            this.$router.push('/login');
        } else {
            service.getPerfil(Global.token)
            .then(res => {
                this.perfil = res;
            })
        }
    },
}
</script>

<style>

</style>