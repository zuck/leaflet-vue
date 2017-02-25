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
      <v-geojson :geojson-data="frGeoJsonData" :feature-style="frGeoJsonStyle" :visible="showFrGeoJson"/>
      <v-geojson :geojson-data="esGeoJsonData" :feature-style="esGeoJsonStyle" :visible="showEsGeoJson"/>
      <v-geojson :geojson-data="itGeoJsonData" :feature-style="itGeoJsonStyle" :visible="showItGeoJson"/>
    </v-map>
    <div class="infobox">
      <h1>Map + GeoJSON</h1>
      <label>ZOOM:</label>
      <input type="number" v-model="zoom" :min="minZoom" :max="maxZoom"/>
      <br/>
      <label>ITALY?</label>
      <input type="checkbox" v-model="showItGeoJson"/>
      <br/>
      <label>FRANCE?</label>
      <input type="checkbox" v-model="showFrGeoJson"/>
      <br/>
      <label>SPAIN?</label>
      <input type="checkbox" v-model="showEsGeoJson"/>
      Check to show...
    </div>
  </div>
</template>

<script>
import LeafletVue from 'leaflet-vue'
import itGeoJsonData from '../assets/geojson/italy.json'
import frGeoJsonData from '../assets/geojson/france.json'
import esGeoJsonData from '../assets/geojson/spain.json'

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
      esGeoJsonData: esGeoJsonData,
      itGeoJsonStyle: function (feature) {
        return {
          weight: 4,
          color: 'blue',
          fillColor: 'blue',
          fillOpacity: 0.5
        }
      },
      frGeoJsonStyle: {
        weight: 2,
        color: 'yellow',
        fillColor: 'yellow',
        fillOpacity: 0.3
      },
      esGeoJsonStyle: {
        weight: 1,
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.3
      },
      showFrGeoJson: true,
      showEsGeoJson: false,
      showItGeoJson: true
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
