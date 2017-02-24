module.exports = {
  props: {
    content: {
      type: String,
      default: '',
    }
  },
  methods: {
    setContent(newVal, oldVal) {
      if (newVal == oldVal) return;
      if (this.$lfObj) {
        this.$lfObj.setContent(newVal)
      }
    }
  },
  watch: {
    content: function (newVal, oldVal) {
      this.setContent(newVal, oldVal)
    }
  }
}
