# leaflet-vue

> Vue components for Leaflet

This package is heavily inspired by [Vue2Leaflet][1] and [vue-map][2] projects.

## Build Setup

``` bash
# install dependencies
npm install

# build for production with minification
npm run build

# Run demo at localhost:8080
npm link
cd demo
npm link leaflet-vue
npm install
npm run dev
```

## Use in your app

``` js
import LeafletVue from 'leaflet-vue'

Vue.component('v-map', LeafletVue.Map);
Vue.component('v-tilelayer', LeafletVue.TileLayer);

// In your template

<v-map :zoom=13 :center="[47.413220, -1.219482]">
    <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
</v-map>
```

## License

The MIT License (MIT)

Copyright (c) 2017 Emanuele Bertoldi

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[1]: https://github.com/KoRiGaN/Vue2Leaflet
[2]: https://github.com/dattn/vue-map
