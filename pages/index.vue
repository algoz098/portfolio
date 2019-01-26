<template>
  <section class="container">
    <h1>
      <span class="border-primary">
        {{$t('about')}}
      </span>
    </h1>

    <h2>
      <strong>artur</strong> sena<strong class="color-purple">.</strong>
    </h2>

    <h3 class="color-purple">
      {{$t('web developer')}}
    </h3>

    <div class="row mt-0">
      <div class="col-xl-6 mt-0">
        <p>
          {{$t('about_prefix')}}

          <strong class="color-purple">
            {{$t('php')}}
          </strong>

          {{$t('and')}}

          <strong class="color-purple">
            {{$t('js')}}
          </strong>
        </p>
      </div>
    </div>

    <div class="row mt-5 buttons">
      <div class="col-xl-6">
        <b-btn variant="purple" class="mr-5">
          {{$t('hire me')}}
        </b-btn>

        <b-btn>
          {{$t('know more')}}
        </b-btn>
      </div>
    </div>

    <div class="row mt-0">
      <div class="col-xl-6 d-flex">
        <div class="prev-clients">
          {{$t('previous clients')}}
        </div>

        <span class="icon" v-b-tooltip="'NKX Brasil'">
          N
        </span>

        <span class="icon" v-b-tooltip="'TS Auto Mecanica'">
          TS
        </span>

        <span class="icon" v-b-tooltip="'MAER Controle de Frotas'">
          MR
        </span>
      </div>
    </div>

    <div class="row mt-0">
      <div class="col-xl-6 text-center say">
        {{$t('say')}}
      </div>
    </div>
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo
  }
}
</script>

<style <style scoped>
.container{
  /* background-position: ; */
  background-position-y: center;
  background-position-x: calc(100% - 300px);
  background-repeat: no-repeat;
  background-image: url(/img/bg_avatar.png);
  background-attachment: fixed;
}
.say{
  color: rgba(255, 255, 255, 0.39);
  font-family: ProximaNovaLight;
  font-size: 35px;
  margin-top: 98px;
  margin-bottom: 58px;
}

.icon:hover{
  color: rgba(255, 255, 255, 0.8);
}

.icon{
  color: rgba(255, 255, 255, 0.39);
  font-size: 35px;
  margin-left: 5px;
  margin-right: 5px;
  font-family: ProximaNovaLight;
}

.prev-clients::after{
  content: '';
  position: absolute;
  width: 2px;
  height: 55px;
  transform: rotate(25deg);
  background-color: #744bff;
  top: 3px;
  right: -10px;
}

.prev-clients{
  margin-right: 34px;
  width: 70px;
  position: relative;
  font-family: ProximaNovaLight;
  color: #744bff;
  font-size: 19px;
  text-transform: capitalize;
}

.buttons{
  margin-bottom: 77px;
}

.btn{
  border-radius: 0px;
  font-size: 28px;
  padding-left: 57px;
  padding-right: 57px;
  padding-top: 26px;
  padding-bottom: 26px;
  background-color: rgba(255, 255, 255, 0.059);
  border-color: rgba(255, 255, 255, 0.029);
}

.btn-purple{
  background-color: #744bff;
  border-color: #744bff;
  color: white;
}

p{
  margin-top: 66px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 43px;
  font-family: ProximaNovaLight;
}

.color-purple{
  color: #744bff;
}

h3{
  color: white;
  font-size: 43px;
  font-family: ProximaNovaRegular;
}

h2{
  margin-top: 122px;
  color: white;
  font-size: 105px;
  margin-bottom: 0px;
  font-family: ProximaNovaLight;
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
