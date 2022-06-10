<template>
  <div class="container">
    <div class="row" v-if="result">
      <Details :character="result"/>
    </div>
    <div class="row" v-if="!result">
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Details from '@/components/Details.vue'
import API from "@/utils/api";

export default {
  name: 'Home',
  data () {
    return {
      result : null,
      next: null,
      prev: null,
      id: null
    }
  },
  mounted() {
    this.id = this.$route.params.id;
  },
  components: {
    Details
  },
  created() {
    API.find(this.$route.params.id).then(result => {
      this.result = result.data;
      console.log(result)
    })
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
