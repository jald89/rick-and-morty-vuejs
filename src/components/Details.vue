<template>
    <div class=" col-md-10 mb-4 offset-md-1">
    <div class="row">
        <div class=" col-md-6">
         <img class="card-img-top" :src="character.image" alt="Card image cap">
        </div>
        <div class=" col-md-6">
            <div class="card-body text-start">
                <h5 class="card-title">{{character.name}}</h5>
                <p class="card-text">Género: {{character.gender}}</p>
                <p class="card-text">Especie: {{character.species}}</p>
                <p class="card-text">Tipo: {{character.type || '-'}}</p>
                <p class="card-text">Origen: {{character.origin.name}}</p>
                <p class="card-text">Localidad: {{character.location.name}}</p>
                <p class="card-text">Episodios:</p>
                <label>
                    <span v-for="cap in character.episode" :key="cap" class="badge bg-secondary m-1">
                        {{cap.replace('https://rickandmortyapi.com/api/episode/', 'Episodio ')}}
                    </span>
                </label>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Details',
  props: ['character'],
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
