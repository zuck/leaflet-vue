module.exports = {
  methods: {
    toGeoJson() {
      if (this.$lfObj) {
        return this.$lfObj.toGeoJSON()
      }
      return null
    }
  }
}
