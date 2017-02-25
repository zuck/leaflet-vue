<template>
</template>

<script>
import L from 'leaflet'
import LeafletObject from '../mixins/LeafletObject.js'
import AddToParent from '../mixins/AddToParent.js'
import OverlayContainer from '../mixins/OverlayContainer.js'
import Layer from '../mixins/Layer.js'
import LayerContainer from '../mixins/LayerContainer.js'
import Visibility from '../mixins/Visibility.js'
import ToGeoJson from '../mixins/ToGeoJson.js'
import GetBounds from '../mixins/GetBounds.js'

export default {
  mixins: [
    LeafletObject,
    AddToParent,
    OverlayContainer,
    Layer,
    LayerContainer,
    Visibility,
    ToGeoJson,
    GetBounds
  ],
  props: {
    geojsonData: {
      type: Object,
      default: null
    },
    featureStyle: {
      type: Function
    },
    onEachFeature: {
      object: Function
    },
    filter: {
      object: Function
    },
    coordsToLatLng: {
      object: Function
    }
  },
  methods: {
    createLeafletObject() {
      console.debug("Creating geojson...");
      return L.geoJSON(this.geojsonData, {
        style: this.featureStyle,
        onEachFeature: this.onEachFeature,
        filter: this.filter,
        coordsToLatLng: this.coordsToLatLng,
        pane: this.pane || 'overlayPane',
        attribution: this.attribution
      })
    },
    setGeoJsonData(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.clearLayers()
        this.$lfObj.addData(newVal)
      }
    },
    setFeatureStyle(newVal, oldVal) {
      if (newVal == oldVal) return;
      if (this.$lfObj) {
        this.$lfObj.setStyle(newVal)
      }
    }
  },
  watch: {
    geojsonData: function (newVal, oldVal) {
      this.setGeoJsonData(newVal, oldVal)
    },
    featureStyle: function (newVal, oldVal) {
      this.setFeatureStyle(newVal, oldVal)
    }
  }
};
</script>
