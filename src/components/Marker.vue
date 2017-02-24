<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import L from 'leaflet'
import Visibility from '../mixins/Visibility.js'

export default {
  mixins: [Visibility],
  props: {
    latLng: {
      custom: true,
      default: null
    },
    icon: {
      custom: false,
      default: function() { return new L.Icon.Default(); }
    },
    draggable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    createLeafletObject() {
      console.debug("Creating marker...");
      const options = {
        draggable: this.draggable
      };
      if (this.icon) {
        options.icon = this.icon
      }
      return L.marker(this.latLng, options)
    },
    setLatLng(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setLatLng(newVal)
      }
    },
    setIcon(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setIcon(newVal)
      }
    },
    setDraggable(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj && this.$lfObj.dragging) {
        newVal ? this.$lfObj.dragging.enable() : this.$lfObj.dragging.disable()
      }
    }
  },
  watch: {
    latLng: function (newVal, oldVal) {
      this.setLatLng(newVal, oldVal)
    },
    icon: function (newVal, oldVal) {
      this.setIcon(newVal, oldVal)
    },
    draggable: function (newVal, oldVal) {
      this.setDraggable(newVal, oldVal)
    }
  }
}
</script>
