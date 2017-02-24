module.exports = {
  props: {
    visible: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
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
