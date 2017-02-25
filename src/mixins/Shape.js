export default {
  props: {
    latLngs: {
      type: Array,
      default: []
    },
    smoothFactor: {
      type: Number,
      default: 1.0
    },
    noClip: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    setLatLngs(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setLatLngs(newVal)
      }
    },
    addLatLng(latLng) {
      if (this.$lfObj && latLng) {
        this.$lfObj.addLatLng(latLng)
      }
    }
  },
  watch: {
    latLngs: function(newVal, oldVal) {
      this.setLatLngs(newVal, oldVal)
    }
  }
}
