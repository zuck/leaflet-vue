module.exports = {
  props: {
    minZoom: {
      type: Number,
      default: 0,
    },
    maxZoom: {
      type: Number,
      default: 20,
    }
  },
  methods: {
    setMinZoom(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (this.$lfObj) {
        this.$lfObj.setMinZoom(newVal)
      }
    },
    setMaxZoom(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (this.$lfObj) {
        this.$lfObj.setMaxZoom(newVal)
      }
    }
  },
  watch: {
    minZoom: function (newVal, oldVal) {
      this.setMinZoom(newVal, oldVal)
    },
    maxZoom: function (newVal, oldVal) {
      this.setMaxZoom(newVal, oldVal)
    }
  }
}
