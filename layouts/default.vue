<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-xl-2 pl-0 ">
      <div class="d-flex flex-column justify-content-between sticky-top">
        <div class="avatar">
          <b-img src="/img/avatar.png" />
        </div>

        <b-list-group>
          <b-list-group-item to="/">
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
</template>

<style scoped>
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
