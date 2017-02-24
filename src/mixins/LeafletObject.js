module.exports = {
  mounted: function() {
    // Create Leaflet object.
    this.$lfObj = this.createLeafletObject()
    // Map Leaflet events to Vue events.
    if (this.$lfObj && this.$lfEventMappings) {
      this.$lfEventMappings.forEach(eventName => {
        this.$lfObj.on(eventName, ev => this.$emit(eventName, ev))
      })
    }
    // Deferred mount of children elements.
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
    mapLeafletEvents: function(mappings) {
      this.$lfEventMappings = this.$lfEventMappings || []
      if (typeof mappings === 'function') {
        mappings = mappings()
      }
      this.$lfEventMappings = this.$lfEventMappings.concat(mappings)
    },
    beforeDeferredMount: function(parent) {
      // Do nothing.
    },
    afterDeferredMount: function(parent) {
      // Do nothing.
    }
  }
}
