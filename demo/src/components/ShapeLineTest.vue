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
      <v-circlemarker :latLng="center" :radius="markerRadius" :color="'red'" :fillOpacity="0.5"/>
      <v-circlemarker :latLng="dstCenter" :radius="markerRadius" :color="'blue'" :fillOpacity="0.5"/>
      <v-polyline :latLngs="polylinePoints" :color="'green'" :dashArray="'5, 10'" v-if="showPath"/>
      <v-polygon :latLngs="polygonPoints" :color="'yellow'" :fillOpacity="0.5"/>
      <div v-for="pnt in polygonPoints">
        <v-marker :latLng="pnt"/>
      </div>
    </v-map>
    <div class="infobox">
      <h1>Shapes &amp; Lines</h1>
      <label>ZOOM:</label>
      <input type="number" v-model="zoom" :min="minZoom" :max="maxZoom"/>
      <br/>
      <label>RADIUS:</label>
      <input type="number" v-model="markerRadius" :min="5" :max="50"/>
      <br/>
      <label>PATH?</label>
      <input type="checkbox" v-model="showPath"/>
    </div>
  </div>
</template>

<script>
import LeafletVue from 'leaflet-vue'

export default {
  components: {
    'v-map': LeafletVue.Map,
    'v-tilelayer': LeafletVue.TileLayer,
    'v-marker': LeafletVue.Marker,
    'v-polyline': LeafletVue.Polyline,
    'v-polygon': LeafletVue.Polygon,
    'v-circlemarker': LeafletVue.CircleMarker
  },
  data () {
    return {
      zoom: 5,
      minZoom: 0,
      maxZoom: 20,
      center: [46.06482, 13.23566],
      dstCenter: [41.90482, 12.52566],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
      markerRadius: 15,
      polylinePoints: [
        [46.06482, 13.23566],
        [45.56482, 12.23566],
        [45.36482, 11.83566],
        [44.56482, 11.23566],
        [43.75482, 11.19566],
        [43.45482, 11.79566],
        [43.25482, 11.79566],
        [43.05482, 11.89566],
        [42.20482, 12.62566],
        [41.90482, 12.52566]
      ],
      showPath: true,
      polygonPoints: [
        [44.40482, 5.02566],
        [46.60482, 3.02566],
        [44.40482, 1.02566],
      ]
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
