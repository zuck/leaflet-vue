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
import Shape from '../mixins/Shape.js'

export default {
  mixins: [
    LeafletObject,
    AddToParent,
    OverlayContainer,
    Layer,
    Visibility,
    Path,
    GetBounds,
    Shape
  ],
  methods: {
    createLeafletObject() {
      console.debug("Creating polygon...")
      return L.polygon(this.latLngs, {
        smoothFactor: this.smoothFactor,
        noClip: this.noClip,
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
    }
  }
}
</script>
