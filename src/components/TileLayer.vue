<template>
</template>

<script>
import L from 'leaflet'
import LeafletObject from '../mixins/LeafletObject.js'
import AddToParent from '../mixins/AddToParent.js'
import OverlayContainer from '../mixins/OverlayContainer.js'
import Layer from '../mixins/Layer.js'
import ZoomMaxMin from '../mixins/ZoomMaxMin'

export default {
  mixins: [
    LeafletObject,
    AddToParent,
    OverlayContainer,
    Layer,
    ZoomMaxMin
  ],
  props: {
    url: {
      type: String,
      default: null
    },
    noWrap: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.mapLeafletEvents([
      'loading',
      'tileunload',
      'tileloadstart',
      'tileerror',
      'tileload',
      'load'
    ])
  },
  methods: {
    createLeafletObject() {
      console.debug("Creating tile layer...");
      return L.tileLayer(this.url, {
        noWrap: this.noWrap,
        pane: this.pane || 'overlayPane',
        zIndex: this.zIndex,
        minZoom: this.minZoom,
        maxZoom: this.maxZoom,
        attribution: this.attribution
      });
    },
    setUrl(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setUrl(newVal)
      }
    }
  },
  watch: {
    url: function (newVal, oldVal) {
      this.setUrl(newVal, oldVal)
    }
  }
}
</script>

<style>
</style>
