import AddToParent from './AddToParent.js'
import OverlayContainer from './OverlayContainer.js'

module.exports = {
  mixins: [AddToParent, OverlayContainer],
  props: {
    zIndex: {
      type: Number,
      default: 1
    },
    pane: {
      type: String,
      default: null
    },
    attribution: {
      type: String,
      default: null
    }
  },
  methods: {
    setZIndex(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setZIndex(newVal)
      }
    }
  },
  watch: {
    zIndex: function (newVal, oldVal) {
      this.setZIndex(newVal, oldVal)
    }
  }
}
