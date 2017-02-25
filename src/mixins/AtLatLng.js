module.exports = {
  props: {
    latLng: {
      custom: true,
      default: null
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
