<template>
  <b-card
    :img-src="data.img"
  >
    <h2>
      {{data.name}}
    </h2>
  </b-card>
</template>

<style scoped>
.card-body{
  padding-left: 2px;
  padding-right: 2px;
  padding-right: 27px;
  padding-top: 27px;
}

h2{
  color: white;
  font-family: ProximaNovaLight;
  font-size: 26px;
  text-align: left;
}

.card{
  background-color: rgba(255, 255, 255, 0.07);
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

