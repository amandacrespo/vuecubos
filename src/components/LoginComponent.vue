<template>
    <div class="container my-4">
        <h1>Iniciar sesión</h1>
        <hr>
        <form  @submit.prevent="login">
            <div class="mb-3">
                <label 
                    for="email" 
                    class="form-label"
                >Email: </label>
                <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    v-model="user.email"
                >
            </div>
            <div class="mb-3">
                <label 
                    for="password" 
                    class="form-label"
                >Contraseña: </label>
                <input 
                    type="password" 
                    class="form-control" 
                    id="password" 
                    v-model="user.password"
                >
            </div>
            <button class="btn btn-primary w-100">Iniciar sesión</button>
        </form>
    </div>
</template>

<script>
import { Global } from '@/Global';
import CubosService from '@/services/CubosService';

const service = new CubosService();
export default {
    data(){
        return {
            user:{
                email: '',
                password: ''
            }
        }
    },
    mounted(){
        if(Global.token !== null){
            this.$router.push('/perfil');
            alert('Ya estás registrado!');
        }
    },
    methods:{
        login(){
            service.setLogin(this.user)
            .then(res=>{
                console.error(res);
                if(res !== undefined){
                    Global.token = 'Bearer '+ res;
                    this.$router.push('/perfil')
                } 
            })
            .catch(error => {
                console.error(error);
                alert('No se ha podido iniciar sesion, comprueba los datos');
            })
        }
    }
}
</script>

<style>

</style>