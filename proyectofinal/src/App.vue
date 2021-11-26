<template>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Tienda</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" to="/home" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <router-link  class="nav-link"  to="/catalogop">Catálogo</router-link>
        </li>
        <li class="nav-item">
          <router-link  class="nav-link"  to="/catalogoa">Catálogo de productos</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-item disabled"></a>
        </li>
      </ul>
       <ul class="navbar-nav ms-auto">
        <li v-if="user?.email==null" class="nav-item">
          <router-link  class="nav-link" to="/Autenticacion">Ingresar</router-link>
        </li>
        <li v-if="user?.email!=null" class="nav-item">
          <button @click="cerrar_sesion()" class="btn btn-secondary">Cerrar Sesión</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="container mt-3">
<router-view></router-view>  
</div>

</template>
<script>
import { auth } from '@/utils/firebase.js'
import { onAuthStateChanged, signOut } from 'firebase/auth'
export default {
  data() {
    return{
      user:null
    }
  },
  methods:{
    usuario_logueado()
    {
      onAuthStateChanged(auth, (user)=> {
        this.user= user;
      })
    },
       async cerrar_sesion()
        {
            await signOut(auth)
        },



  },

  mounted(){
    this.usuario_logueado()
    }
}
</script>

<style>

</style>