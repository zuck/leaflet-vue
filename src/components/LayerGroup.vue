<template>
  <slot></slot>
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

export default {
  mixins: [
    LeafletObject,
    AddToParent,
    OverlayContainer,
    Layer,
    LayerContainer,
    Visibility,
    ToGeoJson
  ],
  methods: {
    createLeafletObject() {
      console.debug("Creating layer group...")
      return L.layerGroup()
    }
  }
}
</script>
