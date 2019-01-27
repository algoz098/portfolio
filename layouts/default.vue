<template>
<div >
  <b-navbar toggleable="xl" class="d-xl-none " type="dark" variant="purple">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand  :to="'/'">
      <b-img-lazy :src="`/img/avatar.png`" height="30"/>
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item  :to="'/'">
          {{$t('about')}}
        </b-nav-item>

        <b-nav-item href="#">
          {{$t('work')}}
        </b-nav-item>

        <b-nav-item href="#">
          {{$t('labs')}}
        </b-nav-item>

        <b-nav-item href="#">
          {{$t('contact')}}
        </b-nav-item>

        <b-nav-item href="https://github.com/algoz098" target="_blank">
          {{$t('Git Hub')}}
        </b-nav-item>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item 
            @click="$i18n.locale = 'en'"
          >
            EN
          </b-dropdown-item>

          <b-dropdown-item
            @click="$i18n.locale = 'pt-br'"
          >
            pt-BR
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <div class="container-fluid">
    <div class="row">
      <div class="d-none d-xl-block col-xl-2 pl-0 ">
        <div class="d-flex flex-column justify-content-between sticky-top">
          <div class="avatar">
            <img :src="`${env()}/img/avatar.png`" />
          </div>

          <b-list-group>
            <b-list-group-item :to="'/'">
              {{$t('about')}}
            </b-list-group-item>
            
            <b-list-group-item to="/work">
              {{$t('work')}}
            </b-list-group-item>
            
            <b-list-group-item to="/labs">
              {{$t('labs')}}
            </b-list-group-item>
            
            <b-list-group-item to="/contact">
              {{$t('contact')}}
            </b-list-group-item>
          </b-list-group>

          <div  class="social text-center">
            <div class="d-inline-block text-light"
              v-b-tooltip="'Change language'"
              @click="$i18n.locale = 'pt-br'"
            >
              pt-BR
            </div>
            <div class="d-inline-block text-light"
              v-b-tooltip="'Change language'"
              @click="$i18n.locale = 'en'"
            >
              EN
            </div>

            <a href="https://github.com/algoz098" target="_blank">
              <b-img src="/img/social.png"  />
            </a>
          </div>
        </div>
      </div>
    
      <div class="col-xl-9">
        <nuxt />
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    env(){
      if(window.location.href.includes('/portfolio/')){
        return '/portifolio'
      }

      return ''
    }
  }
}
</script>


<style scoped>
.bg-purple{
  background-color:#744bff;
}

.text-light{
  color: rgba(255, 255, 255, 0.425)!important;
  cursor: pointer;
}

.font-size-10{
  font-size: 14px!important;
}

.social{
  margin-bottom: 60px;  
}

.flex-column{
  width: 100%;
  height: 100vh;
}

.list-group-item:hover{
  background-color: rgba(255, 255, 255, 0.031);
}

.list-group-item{
  font-family: ProximaNovaLight;
  background-color:transparent;
  border: none;
  color: white;
  padding-left: 77px;
  border-radius: 0px;
  font-size: 35px;
  padding-top: 17px;
  padding-bottom: 17px;
}
.list-group-item.active{
  color:#744bff;
  border-left: 10px solid #744bff;
  padding-left: 67px;
}

.avatar{
  margin-top: 124px;
  margin-left: 69px;
  margin-right: 69px;
  margin-bottom: 54px;
}

.container-fluid{
    background-size: 100% 100%;
    background-image: url(/img/bg.jpg);
    background-attachment: fixed;
}
</style>
