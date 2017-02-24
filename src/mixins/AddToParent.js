module.exports = {
  created() {
    this.mapLeafletEvents([
      'add',
      'remove'
    ])
  },
  beforeDestroy() {
    this.removeFromParent()
  },
  methods: {
    beforeDeferredMount(parent) {
      this.addToParent(parent)
    },
    addToParent(parent) {
      if (this.$lfObj && parent) {
        this.$lfParent = parent
        if (!this.$lfParent.hasLayer(this.$lfObj)) {
          this.$lfObj.addTo(this.$lfParent)
        }
      }
    },
    removeFromParent() {
      var parentObj = null
      if (this.$lfObj && this.$lfParent) {
        parentObj = this.$lfParent
        if (this.$lfParent.hasLayer(this.$lfObj)) {
          this.$lfParent.removeLayer(this.$lfObj);
        }
        this.$lfParent = null
      }
      return parentObj
    },
  }
}
