module.exports = {
  created() {
    this.mapLeafletEvents([
      'layeradd',
      'layerremove'
    ])
  }
}
