<template>
  <section class="container" :style="`background-image: url(${env()}img/bg_avatar.png);`">
    <h1>
      <span class="border-primary">
        {{$t('lab')}}
      </span>
    </h1>

    <div class="row mt-88">
      <div class="col-xl-6 mt-3"
        v-for="(e, i) in works"
        :key="i"
      >
        <my-lab
          :data="e"
        />
      </div>
    </div>
  </section>
</template>

<script>
import myLab from '~/components/my-lab.vue'

export default {
  head(){
    return{
      title: "Artur Sena's Portifolio",
      description: `${this.$t('about_prefix')} ${this.$t('php')} ${this.$t('and')} ${this.$t('js')}`,
      'og:locale': this.$store.state.locale
    }
  },

  components: {
    myLab
  },

  data(){
    return {
      works:[
        {
          img: `${this.env()}img/gas-track-quasar.png`,
          name: 'Gas Track Quasar',
          description: `A tracking app for gas spend made in QuasarJS`,
          link: `https://github.com/algoz098/gas-track-quasar`
        },
        {
          img: `${this.env()}img/gas-trac.png`,
          name: 'Gas Track NS-Vue',
          description: `A tracking app for gas spend made in Nativescript-vue`,
          link: `https://github.com/algoz098/gas-track`
        },
        {
          img: `${this.env()}img/turing-app.png`,
          name: 'Turing APP',
          description: `A example beer project in VueJS`,
          link: `https://github.com/algoz098/turring-app`
        },
        {
          img: `${this.env()}img/electron.png`,
          name: 'Electron Music Player',
          description: `A music player built in Electron`,
          link: `https://github.com/algoz098/electron-music`
        },
        {
          img: `${this.env()}img/laravel-erp.png`,
          name: 'Laravel ERP',
          description: `A unfinished laravel erp project`,
          link: `https://github.com/algoz098/Laravel-erp`
        },
        {
          img: `${this.env()}img/canvas-test.png`,
          name: 'Vue Canvas Test',
          description: `A little VueJS Canvas databinding test`,
          link: `https://github.com/algoz098/vue-canvas-test`
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
