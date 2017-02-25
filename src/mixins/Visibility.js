module.exports = {
  props: {
    visible: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
    beforeDeferredMount(parent) {
      // Store parent but attach to it only if visible is true.
      this.$lfParent = parent
      if (this.visible) {
        this.addToParent(parent)
      }
    },
    setVisible(newVal, oldVal) {
      if (newVal == oldVal) return
      if (newVal) {
        this.addToParent(this.$lfParent)
      } else {
        this.$lfParent = this.removeFromParent()
      }
    }
  },
  watch: {
    visible: function (newVal, oldVal) {
      this.setVisible(newVal, oldVal)
    }
  }
}
