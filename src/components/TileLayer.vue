<template>
</template>

<script>
import L from 'leaflet'
import Layer from '../mixins/Layer'
import ZoomMaxMin from '../mixins/ZoomMaxMin'

export default {
  mixins: [Layer, ZoomMaxMin],
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
