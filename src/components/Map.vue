<template>
  <div class="map-container">
    <div id="map">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import L from 'leaflet'
import LeafletObject from '../mixins/LeafletObject'
import LayerContainer from '../mixins/LayerContainer.js'
import OverlayContainer from '../mixins/OverlayContainer'
import ZoomMaxMin from '../mixins/ZoomMaxMin'

export default {
  mixins: [
    LeafletObject,
    LayerContainer,
    OverlayContainer,
    ZoomMaxMin
  ],
  props: {
    center: {
      custom: true,
      default: null
    },
    zoom: {
      type: Number,
      default: 10,
    },
    worldCopyJump: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.mapLeafletEvents([
      'baselayerchange',
      'overlayadd',
      'overlayremove',
      'zoomlevelschange',
      'resize',
      'unload',
      'viewreset',
      'load',
      'zoomstart',
      'movestart',
      'zoom',
      'move',
      'zoomend',
      'moveend',
      'autopanstart',
      'zoomanim',
    ])
  },
  mounted: function() {
    this.deferredMountedTo(this.$lfObj)
  },
  methods: {
    createLeafletObject() {
      console.debug("Creating map...")
      return L.map(this.$el, {
        center: this.center,
        zoom: this.zoom,
        minZoom: this.minZoom,
        maxZoom: this.maxZoom,
        worldCopyJump: this.worldCopyJump
      })
    },
    afterDeferredMount(parent) {
      this.$lfObj.whenReady(function() {
        this.$emit('ready')
      }, this)
    },
    panTo(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.panTo(newVal)
      }
    },
    setZoom(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (this.$lfObj) {
        this.$lfObj.setZoom(newVal)
      }
    }
  },
  watch: {
    center: function (newVal, oldVal) {
      this.panTo(newVal, oldVal)
    },
    zoom: function (newVal, oldVal) {
      this.setZoom(newVal, oldVal)
    }
  }
}
</script>

<style>
  #map,
  .map-container {
    height: 100%;
    width: 100%;
  }
</style>
