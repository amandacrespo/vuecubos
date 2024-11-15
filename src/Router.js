import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CuboComponent from "./components/CuboComponent.vue";
import CubosMarca from "./components/CubosMarca.vue";
import LoginComponent from "./components/LoginComponent.vue";
import PerfilComponent from "./components/PerfilComponent.vue";
import ComprasComponent from "./components/ComprasComponent.vue";

const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/cubo/:id',
        component: CuboComponent
    },
    {
        path: '/cubos/:marca',
        component: CubosMarca
    },
    {
        path: '/login',
        component: LoginComponent
    },
    {
        path: '/perfil',
        component: PerfilComponent
    },
    {
        path: '/compras',
        component: ComprasComponent
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;
