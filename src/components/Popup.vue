<template>
</template>

<script>
import L from 'leaflet'
import LeafletObject from '../mixins/LeafletObject.js'
import AddToParent from '../mixins/AddToParent.js'
import OverlayContainer from '../mixins/OverlayContainer.js'
import Layer from '../mixins/Layer.js'
import DivOverlay from '../mixins/DivOverlay.js'
import ContentEditable from '../mixins/ContentEditable.js'
import AtLatLng from '../mixins/AtLatLng.js'

export default {
  mixins: [
    LeafletObject,
    AddToParent,
    OverlayContainer,
    Layer,
    DivOverlay,
    ContentEditable,
    AtLatLng
  ],
  props: {
    autoPan: {
      type: Boolean,
      default: true
    },
    keepInView: {
      type: Boolean,
      default: false
    },
    closeButton: {
      type: Boolean,
      default: true
    },
    closeOnClick: {
      type: Boolean,
      default: null
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    createLeafletObject() {
      console.debug("Creating popup...")
      return L.popup({
        offset: this.offset || L.point(0, 7),
        pane: this.pane || 'popupPane',
        attribution: this.attribution,
        autoPan: this.autoPan,
        keepInView: this.keepInView,
        closeButton: this.closeButton,
        closeOnClick: this.closeOnClick,
        autoClose: this.autoClose
      })
      .setContent(this.content)
      .setLatLng(this.latLng)
    },
    addToParent(parent) {
      if (this.$lfObj && parent) {
        this.$lfParent = parent
        if (this.$lfParent.bindPopup) {
          this.$lfParent.bindPopup(this.$lfObj)
        }
        else {
          this.$lfParent.openPopup(this.$lfObj)
        }
      }
    },
    removeFromParent() {
      var parentObj = null
      if (this.$lfObj &&
          this.$lfParent &&
          (!this.$lfParent.getPopup || this.$lfParent.getPopup() === this.$lfObj)) {
        parentObj = this.$lfParent
        if (this.$lfParent.unbindPopup) {
          this.$lfParent.unbindPopup()
        }
        else {
          this.$lfParent.closePopup()
        }
      }
      this.$lfParent = null
      return parentObj
    }
  }
}
</script>

<style>
.leaflet-popup-content-wrapper {
  min-height: 1.5rem;
}
</style>
