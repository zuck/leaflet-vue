import L from 'leaflet'

module.exports = {
  props: {
    offset: {
      type: Object,
      default: L.point(0, 7)
    }
  }
}
