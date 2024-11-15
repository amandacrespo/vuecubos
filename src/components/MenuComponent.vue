<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/022/750/436/small_2x/3d-home-icon-free-png.png" width="50px" class="navbar-brand">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Cubos</router-link>
                    </li>     
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Marcas
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="(marca) of marcas" :key="marca">
                                <router-link class="dropdown-item" :to="/cubos/+marca">{{ marca }}</router-link>
                            </li>
                        </ul>
                    </li>        
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Seguridad
                        </a>
                        <ul class="dropdown-menu">
                            <li class="nav-item">
                                <router-link class="dropdown-item" to="/login">Iniciar sesión</router-link>
                            </li>    
                            <li class="nav-item">
                                <router-link class="dropdown-item" to="/">Registrarse</router-link>
                            </li>       
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Usuario
                        </a>
                        <ul class="dropdown-menu"> 
                            <li class="nav-item">
                                <router-link class="dropdown-item" to="/perfil">Perfil</router-link>
                            </li>    
                            <li class="nav-item">
                                <router-link class="dropdown-item" to="/compras">Compras</router-link>
                            </li>    
                            <li class="nav-item">
                                <button class="dropdown-item" @click="logout()">Cerrar sesión</button>
                            </li>    
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { Global } from '@/Global';
import CubosService from '@/services/CubosService';

const service = new CubosService();
export default {
    data(){
        return{
            marcas: [],
            isLogin: Global.token
        }
    },
    mounted(){
        service.getMarcas()
        .then(res => {
            this.marcas = res;
        })
    },
    methods: {
        logout(){
            // localStorage.removeItem('bearer_token');
            Global.token = null;
            this.$router.push('/login');
            alert('Sesión cerrada correctamente');
        }
    },
    watch:{
        'isLogin'(nextVal, prevVal){
            if(nextVal !== prevVal){
                this.isLogin = Global.token !== null;
            }
        }
    }
}
</script>

<style>

</style>