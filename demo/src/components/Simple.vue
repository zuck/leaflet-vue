<template>
  <div class="container">
    <v-map :zoom="zoom" :min="minZoom" :max="maxZoom" :center="center">
      <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
    </v-map>
    <div class="form">
      <label>ZOOM:</label>
      <input type="number" v-model="zoom" :min="minZoom" :max="maxZoom">
    </div>
  </div>
</template>

<script>
import LeafletVue from 'leaflet-vue';

export default {
  components: {
    'v-map': LeafletVue.Map,
    'v-tilelayer' :LeafletVue.TileLayer
  },
  data () {
    return {
      zoom: 5,
      minZoom: 0,
      maxZoom: 20,
      center: [46.0637, 13.24458],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    }
  }
}
</script>

<style scoped>
.container {
  width:100%;
  height:100%;
}

.form {
  position:absolute;
  z-index:999;
  top:10px;
  left:80px;
}
</style>
