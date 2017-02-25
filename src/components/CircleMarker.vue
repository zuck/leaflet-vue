<template>
  <slot></slot>
</template>

<script>
import L from 'leaflet'
import LeafletObject from '../mixins/LeafletObject.js'
import AddToParent from '../mixins/AddToParent.js'
import OverlayContainer from '../mixins/OverlayContainer.js'
import Layer from '../mixins/Layer.js'
import Visibility from '../mixins/Visibility.js'
import Path from '../mixins/Path.js'
import GetBounds from '../mixins/GetBounds.js'
import AtLatLng from '../mixins/AtLatLng.js'

export default {
  mixins: [
    LeafletObject,
    AddToParent,
    OverlayContainer,
    Layer,
    Visibility,
    Path,
    GetBounds,
    AtLatLng
  ],
  props: {
    radius: {
      type: Number,
      default: 10
    }
  },
  methods: {
    createLeafletObject() {
      console.debug("Creating circle marker...")
      return L.circleMarker(this.latLng, {
        radius: this.radius,
        stroke: this.stroke,
        color: this.color,
        weight: this.weight,
        opacity: this.opacity,
        lineCap: this.lineCap,
        lineJoin: this.lineJoin,
        dashArray: this.dashArray,
        dashOffset: this.dashOffset,
        fill: this.fill || true,
        fillColor: this.fillColor,
        fillOpacity: this.fillOpacity,
        fillRule: this.fillRule,
        pane: this.pane || 'overlayPane'
      })
    },
    setRadius(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setRadius(newVal)
      }
    }
  },
  watch: {
    radius: function (newVal, oldVal) {
      this.setRadius(newVal, oldVal)
    }
  }
}
</script>
