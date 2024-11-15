<template>
  <MenuComponent :isLogin="isLogin" @updateIsLogin="updateIsLogin"/>
  <router-view></router-view>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'
export default {
  name: 'App',
  components: {
    MenuComponent
    
  },
  data(){
    return{
      isLogin: localStorage.getItem('bearer_token') !== null,
    }
  },
  methods: {
    updateIsLogin(status){
      this.isLogin = status;
    }
  }
}
</script>

<style>

</style>
