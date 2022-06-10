<template>
  <div class="container">
    <div class="row" v-if="result">
      <Card :character="character" v-for="character in result" :key="character.id" />
    </div>
    <nav v-if="result">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" @click="prevPage()" v-if="prev">Anterior</a></li>
        <li class="page-item"><a class="page-link" @click="nextPage()" v-if="next">Siguiente</a></li>
      </ul>
    </nav>
    <div class="row" v-if="!result">
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import API from "@/utils/api";

export default {
  name: 'Home',
  data () {
    return {
      result : null,
      next: null,
      prev: null,
      name: null
    }
  },
  mounted() {
    console.log(this.$route.params.name)
    this.name = this.$route.params.name;
  },
  components: {
    Card
  },
  created() {
    API.findByName(this.$route.params.name).then(result => {
      this.result = result.data.results;
      this.next = result.data.info.next;
      this.prev = result.data.info.prev;
      console.log(result)
    }).catch(error => console.log(error))
  },
  methods: {
      nextPage: function(){
        this.result = null;
        API.getNext(this.next).then(result => {
          this.result = result.data.results;
          this.next = result.data.info.next;
          this.prev = result.data.info.prev;
          console.log(result)
        }).catch(error => console.log(error))
      },
      prevPage: function(){
        this.result = null;
        API.getNext(this.prev ).then(result => {
          this.result = result.data.results;
          this.next = result.data.info.next;
          this.prev = result.data.info.prev;
          console.log(result)
        }).catch(error => console.log(error))
      }
  }
}
</script>
<style scoped>
  .page-link{
    cursor: pointer
  }
  .btn.btn-primary{
    color: #E4A788 !important
  }
  .lds-spinner {
  color: #E4A788;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 40px auto
}
.lds-spinner div {
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 37px;
  width: 6px;
  height: 18px;
  border-radius: 20%;
  background: #E4A788;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

</style>
