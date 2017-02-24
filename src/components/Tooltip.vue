<template>
</template>

<script>
import L from 'leaflet'
import LeafletObject from '../mixins/LeafletObject.js'
import DivOverlay from '../mixins/DivOverlay.js'
import ContentEditable from '../mixins/ContentEditable.js'

export default {
  mixins: [
    LeafletObject,
    DivOverlay,
    ContentEditable
  ],
  props: {
    direction: {
      type: String,
      default: 'auto'
    },
    permanent: {
      type: Boolean,
      default: false
    },
    sticky: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    createLeafletObject() {
      console.debug("Creating tooltip...")
      return L.tooltip({
        offset: this.offset || L.point(0, 0),
        pane: this.pane || 'tooltipPane',
        attribution: this.attribution,
        direction: this.direction,
        permanent: this.permanent,
        sticky: this.sticky
      }).setContent(this.content)
    },
    addToParent(parent) {
      if (this.$lfObj && parent) {
        this.$lfParent = parent
        this.$lfParent.bindTooltip(this.$lfObj)
      }
    },
    removeFromParent() {
      var parentObj = null
      if (this.$lfObj && this.$lfParent && this.$lfParent.getTooltip() === this.$lfObj) {
        parentObj = this.$lfParent
        this.$lfParent.unbindTooltip()
      }
      this.$lfParent = null
      return parentObj
    }
  }
}
</script>
