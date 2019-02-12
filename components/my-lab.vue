<template>
  <b-card
    :img-src="data.img"
  >
    <h2>
      {{data.name}}
    </h2>

    <p class="m-0">
      {{data.description}}
    </p>

    <b-btn variant="link" :href="data.link">
      check now >
    </b-btn>
  </b-card>
</template>

<style scoped>
a{
  color: #744bff
}

p{
  color: #ffffff49;
  padding-left: 10px;
}

.card-body{
  padding-left: 2px;
  padding-right: 2px;
  padding-right: 27px;
  padding-top: 27px;
}

h2{
  text-transform: lowercase;
  color: white;
  font-family: ProximaNovaLight;
  font-size: 26px;
  padding-left: 10px;
  text-align: left;
}

.card{
  background-color: #1e1a34;
  border-radius: 0px;
}

.card-img{
  border-radius: 0px;
  height: 175px;
}
</style>


<script>
export default {
  props:{
    data: null
  }
}
</script>

