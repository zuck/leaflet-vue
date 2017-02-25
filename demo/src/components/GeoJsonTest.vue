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
      <v-geojson :geojson-data="frGeoJsonData" :feature-style="geoJsonStyleObj" :visible="showGeoJson"/>
      <v-geojson :geojson-data="itGeoJsonData" :feature-style="geoJsonStyleFn" :visible="showGeoJson"/>
    </v-map>
    <div class="infobox">
      <h1>Map + GeoJSON</h1>
      <label>ZOOM:</label>
      <input type="number" v-model="zoom" :min="minZoom" :max="maxZoom"/>
      <br/>
      <label>GeoJSON?</label>
      <input type="checkbox" v-model="showGeoJson"/>
    </div>
  </div>
</template>

<script>
import LeafletVue from 'leaflet-vue'
import itGeoJsonData from '../assets/geojson/italy.json'
import frGeoJsonData from '../assets/geojson/france.json'

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
      itGeoJsonData: itGeoJsonData,
      frGeoJsonData: frGeoJsonData,
      geoJsonStyleFn: function (feature) {
        return {
          weight: 4,
          color: '#e47647',
          opacity: 1,
          fillColor: '#e4ce7f',
          fillOpacity: 0.5
        }
      },
      geoJsonStyleObj: {
        weight: 4,
        color: 'yellow',
        fillColor: 'yellow',
        fillOpacity: 0.3
      },
      showGeoJson: true
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
</style>
