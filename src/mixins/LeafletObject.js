module.exports = {
  mounted: function() {
    this.$lfObj = this.createLeafletObject()
    if (this.$lfObj && this.$parent && this.$parent.$lfObj) {
      this.deferredMountedTo(this.$parent.$lfObj)
    }
  },
  methods: {
    deferredMountedTo: function(parent) {
      this.beforeDeferredMount(parent)
      if (this.$lfObj) {
        var newParent = parent
        if (this.$parent && this.$parent.$lfObj) {
          newParent = this.$lfObj
        }
        this.$children.forEach(function(child) {
          if (child.deferredMountedTo) {
            child.deferredMountedTo(newParent)
          }
        });
      }
      this.afterDeferredMount(parent)
    },
    createLeafletObject: function() {
      return null
    },
    beforeDeferredMount: function(parent) {
      // Do nothing.
    },
    afterDeferredMount: function(parent) {
      // Do nothing.
    }
  }
}
