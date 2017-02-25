<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import L from 'leaflet'
import LeafletObject from '../mixins/LeafletObject.js'
import AddToParent from '../mixins/AddToParent.js'
import OverlayContainer from '../mixins/OverlayContainer.js'
import Layer from '../mixins/Layer.js'
import Visibility from '../mixins/Visibility.js'
import AtLatLng from '../mixins/AtLatLng.js'

export default {
  mixins: [
    LeafletObject,
    AddToParent,
    OverlayContainer,
    Layer,
    Visibility,
    AtLatLng
  ],
  props: {
    icon: {
      custom: false,
      default: function() { return new L.Icon.Default(); }
    },
    draggable: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.mapLeafletEvents([
      'move',
      'dragstart',
      'movestart',
      'drag',
      'dragend',
      'moveend'
    ])
  },
  methods: {
    createLeafletObject() {
      console.debug("Creating marker...")
      return L.marker(this.latLng, {
        draggable: this.draggable,
        icon: this.icon,
        pane: this.pane || 'markerPane'
      })
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
    icon: function (newVal, oldVal) {
      this.setIcon(newVal, oldVal)
    },
    draggable: function (newVal, oldVal) {
      this.setDraggable(newVal, oldVal)
    }
  }
}
</script>
