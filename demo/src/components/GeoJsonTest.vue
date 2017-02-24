<template>
  <div class="container">
    <v-map
      :zoom="zoom"
      :min="minZoom"
      :max="maxZoom"
      :center="center"
      @zoomend="zoomChanged"
    >
      <v-tilelayer :url="url" :attribution="attribution"/>
      <v-geojson :geojson-data="geojsonData" :feature-style="geojsonStyle"/>
    </v-map>
    <div class="form">
      <label>ZOOM:</label>
      <input type="number" v-model="zoom" :min="minZoom" :max="maxZoom"/>
    </div>
  </div>
</template>

<script>
import LeafletVue from 'leaflet-vue'
import geojsonItaly from '../assets/geojson/italy.json'

export default {
  components: {
    'v-map': LeafletVue.Map,
    'v-tilelayer': LeafletVue.TileLayer,
    'v-geojson': LeafletVue.GeoJson
  },
  data () {
    return {
      zoom: 5,
      minZoom: 0,
      maxZoom: 20,
      center: [46.06482, 13.23566],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
      geojsonData: geojsonItaly,
      geojsonStyle: function (feature) {
        return {
          weight: 4,
          color: '#e47647',
          opacity: 1,
          fillColor: '#e4ce7f',
          fillOpacity: 0.5
        }
      }
    }
  },
  methods: {
    zoomChanged(evt) {
      this.zoom = evt.target.getZoom()
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
