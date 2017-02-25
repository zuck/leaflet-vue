module.exports = {
  props: {
    stroke: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      custom: true,
      default: 'red'
    },
    weight: {
      type: Number,
      default: 3
    },
    opacity: {
      type: Number,
      default: 1.0
    },
    lineCap: {
      type: String,
      default: 'round'
    },
    lineJoin: {
      type: String,
      default: 'round'
    },
    dashArray: {
      type: String,
      default: null
    },
    dashOffset: {
      type: String,
      default: null
    },
    fill: {
      type: Boolean
    },
    fillColor: {
      type: String,
      custom: true
    },
    fillOpacity: {
      type: Number,
      cdefault: 0.2
    },
    fillRule: {
      type: String,
      default: 'evenodd'
    }
  },
  methods: {
    setStroke(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setStyle({ stroke: newVal });
      }
    },
    setColor(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setStyle({ color: newVal });
      }
    },
    setWeight(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setStyle({ weight: newVal });
      }
    },
    setOpacity(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setStyle({ opacity: newVal });
      }
    },
    setLineCap(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setStyle({ lineCap: newVal });
      }
    },
    setLineJoin(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setStyle({ lineJoin: newVal });
      }
    },
    setDashArray(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setStyle({ dashArray: newVal });
      }
    },
    setDashOffset(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setStyle({ dashOffset: newVal });
      }
    },
    setFill(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setStyle({ fill: newVal });
      }
    },
    setFillColor(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setStyle({ fillColor: newVal });
      }
    },
    setFillOpacity(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setStyle({ fillOpacity: newVal });
      }
    },
    setFillRule(newVal, oldVal) {
      if (newVal == oldVal) return
      if (this.$lfObj) {
        this.$lfObj.setStyle({ fillRule: newVal });
      }
    }
  },
  watch: {
    stroke: function(newVal, oldVal) {
      this.setStroke(newVal, oldVal)
    },
    color: function(newVal, oldVal) {
      this.setColor(newVal, oldVal)
    },
    weight: function(newVal, oldVal) {
      this.setWeight(newVal, oldVal)
    },
    opacity: function(newVal, oldVal) {
      this.setOpacity(newVal, oldVal)
    },
    lineCap: function(newVal, oldVal) {
      this.setLineCap(newVal, oldVal)
    },
    lineJoin: function(newVal, oldVal) {
      this.setLineJoin(newVal, oldVal)
    },
    dashArray: function(newVal, oldVal) {
      this.setDashArray(newVal, oldVal)
    },
    dashOffset: function(newVal, oldVal) {
      this.setDashOffset(newVal, oldVal)
    },
    fill: function(newVal, oldVal) {
      this.setFill(newVal, oldVal)
    },
    fillColor: function(newVal, oldVal) {
      this.setFillColor(newVal, oldVal)
    },
    fillOpacity: function(newVal, oldVal) {
      this.setFillOpacity(newVal, oldVal)
    },
    fillRule: function(newVal, oldVal) {
      this.setFillRule(newVal, oldVal)
    }
  }
}
