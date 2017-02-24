<template>
  <div class="container">
    <v-map :zoom="zoom" :min="minZoom" :max="maxZoom" :center="center">
      <v-tilelayer :url="url" :attribution="attribution"/>
      <v-marker :lat-lng="center">
        <v-tooltip :content="strCenter" :direction="'bottom'"/>
        <v-popup :content="popupMsg"/>
      </v-marker>
    </v-map>
    <div class="form">
      <label>ZOOM:</label>
      <input type="number" v-model="zoom" :min="minZoom" :max="maxZoom"/>
      <br/>
      <label>POPUP:</label>
      <input type="text" v-model="popupMsg"/>
    </div>
  </div>
</template>

<script>
import LeafletVue from 'leaflet-vue';

export default {
  components: {
    'v-map': LeafletVue.Map,
    'v-tilelayer' :LeafletVue.TileLayer,
    'v-marker' :LeafletVue.Marker,
    'v-tooltip' :LeafletVue.Tooltip,
    'v-popup' :LeafletVue.Popup
  },
  computed: {
    strCenter: function() { return JSON.stringify(this.center) }
  },
  data () {
    return {
      zoom: 5,
      minZoom: 0,
      maxZoom: 20,
      center: [46.06482, 13.23566],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
      popupMsg: 'Hello World!'
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
  left:55px;
}

.form label {
  display: inline-block;
  width: 6rem;
  text-align: right;
}
</style>
