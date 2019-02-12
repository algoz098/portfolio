<template>
  <section class="container" :style="`background-image: url(${env()}img/bg_avatar.png);`">
    <h1>
      <span class="border-primary">
        {{$t('work')}}
      </span>
    </h1>

    <div class="row mt-88">
      <div class="col-xl-4 mt-3"
        v-for="(e, i) in works"
        :key="i"
      >
        <my-card
          :data="e"
        />
      </div>
    </div>
  </section>
</template>

<script>
import myCard from '~/components/my-card.vue'

export default {
  head(){
    return{
      title: "Artur Sena's Portifolio",
      description: `${this.$t('about_prefix')} ${this.$t('php')} ${this.$t('and')} ${this.$t('js')}`,
      'og:locale': this.$store.state.locale
    }
  },

  components: {
    myCard
  },

  data(){
    return {
      works:[
        {
          img: `${this.env()}img/sylvio.png`,
          name: 'Sylvio Lanches'
        },
        {
          img: `${this.env()}img/camelo.png`,
          name: 'Camelo Soluções LTDA'
        },
        {
          img: `${this.env()}img/maer.jpg`,
          name: 'MAER Controle de frotas'
        },
        {
          img: `${this.env()}img/nkx.jpg`,
          name: 'NKX Brasil'
        },
      ]
    }
  }
}
</script>

<style scoped>
.mt-88{
  margin-top: 88px;
}

h1{
  margin-top: 122px;
  color: white;
  font-size: 43px;
  font-family: ProximaNovaLight;
}

.border-primary{
  padding-bottom: 18px;
  border-bottom: 3px solid #744bff;

}
</style>
