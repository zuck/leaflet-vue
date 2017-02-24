import Layer from './Layer.js'

module.exports = {
  mixins: [Layer],
  props: {
    offset: {
      custom: true,
      default: function() { return null }
    }
  }
}
