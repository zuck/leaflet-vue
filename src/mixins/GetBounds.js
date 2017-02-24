module.exports = {
  methods: {
    getBounds() {
      if (this.$lfObj) {
        return this.$lfObj.getBounds();
      }
      return null;
    }
  }
}
