import AddToParent from './AddToParent.js';

module.exports = {
  mixins: [AddToParent],
  props: {
    pane: {
      type: String,
      default: 'overlayPane'
    },
    zIndex: {
      type: Number,
      default: 1
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
