<template>
  <div>
    <div id="side">
      <h1><a href="https://github.com/zuck/leaflet-vue">leaflet-vue</a></h1>
      <h2>Demo:</h2>
      <ul>
        <li>
          <a href="#" @click="currentView='simple'">Simple map</a>
        </li>
        <li>
          <a href="#" @click="currentView='geo-json-test'">Map + GeoJSON</a>
        </li>
      </ul>
    </div>
    <div id="container">
      <component :is="currentView"></component>
    </div>
  </div>
</template>

<script>

import Simple from './components/Simple'
import GeoJsonTest from './components/GeoJsonTest'

export default {
  name: 'app',
  components: {
    Simple,
    GeoJsonTest
  },
  data () {
    return {
      currentView: 'simple'
    }
  }
}
</script>

<style lang='scss'>
.leaflet-fake-icon-image-2x {
  background-image: url(../../node_modules/leaflet/dist/images/marker-icon-2x.png);
}
.leaflet-fake-icon-shadow {
  background-image: url(../../node_modules/leaflet/dist/images/marker-shadow.png);
}

@import "../../node_modules/leaflet/dist/leaflet.css";

#side {
  float:left;
  width:200px;
  padding:0 15px;
  overflow-y:auto;
}

#container {
  position:absolute;
  top:0;
  bottom:0;
  right:0;
  left:230px;
}
</style>
