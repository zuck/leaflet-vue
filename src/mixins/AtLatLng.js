module.exports = {
  props: {
    latLng: {
      custom: true,
      default: function() { return [0,0] }
    }
  },
  methods: {
    setLatLng(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setLatLng(newVal)
      }
    }
  },
  watch: {
    latLng: function (newVal, oldVal) {
      this.setLatLng(newVal, oldVal)
    }
  }
}
