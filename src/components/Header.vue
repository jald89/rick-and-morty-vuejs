<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
  <div class="container-fluid">

    <router-link class="navbar-brand" to="/">
      <img src="/brand-icon.png" width="30" height="30" alt="">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Inicio</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" to="/about">Lugares</router-link>
        </li> -->
      </ul>
    </div>
     <form class="d-flex" v-on:submit.prevent>
      <input class="form-control me-2" type="search" placeholder="Buscar personaje" aria-label="Buscar personaje" v-model="name" required>
      <button class="btn btn-outline-success" type="button" @click="submit">Buscar</button>
    </form>
  </div>
</nav>
</template>
<script>
export default {
  name : 'Header',
  data () {
    return {
      name : null
    }
  },
  methods:{
    submit : function(){
      this.$router.push({name : 'Browser', params: { name: this.name } })
    }
  }
}
</script>
