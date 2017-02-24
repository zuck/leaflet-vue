module.exports = {
  created() {
    this.mapLeafletEvents([
      'popupopen',
      'popupclose',
      'tooltipopen',
      'tooltipclose'
    ])
  }
}
