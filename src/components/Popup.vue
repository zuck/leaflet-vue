<template>
</template>

<script>
import L from 'leaflet'
import DivOverlay from '../mixins/DivOverlay.js'
import ContentEditable from '../mixins/ContentEditable.js'

export default {
  mixins: [DivOverlay, ContentEditable],
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
      }).setContent(this.content)
    },
    addToParent(parent) {
      if (this.$lfObj && parent) {
        this.$lfParent = parent
        this.$lfParent.bindPopup(this.$lfObj)
      }
    },
    removeFromParent() {
      var parentObj = null;
      if (this.$lfObj && this.$lfParent && this.$lfParent.getPopup() === this.$lfObj) {
        parentObj = this.$lfParent
        this.$lfParent.unbindPopup()
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
