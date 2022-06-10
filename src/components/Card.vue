<template>
    <div class=" col-md-3 mb-4">
    <div class="card">
        <img class="card-img-top" :src="character.image" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{character.name}}</h5>
            <p class="card-text">Género: {{character.gender}}</p>
            <p class="card-text">Especie: {{character.species}}</p>
            <p class="card-text">Tipo: {{character.type || '-'}}</p>
            <p class="card-text">Origen: {{character.origin.name}}</p>
            <p class="card-text">Localidad: {{character.location.name}}</p>
            <router-link :to="{name:'Character', params: {id: character.id}}" class="btn btn-primary">Ver más</router-link>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['character'],
  methods:{
      verMas: function(url){
          console.log(url)
      }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
