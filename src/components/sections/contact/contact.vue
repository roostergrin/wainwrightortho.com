<template lang="pug" src="./contact.pug"></template>

<script>
var mapbox = require('mapbox-gl/dist/mapbox-gl.js')

mapbox.accessToken = 'pk.eyJ1Ijoicm9vc3RlcmdyaW4iLCJhIjoiY2p0N2g1aDNlMHJ3ODQzcDNsOGlqZDR3ZSJ9._jtkyaXWjB_2k9qhXfUd2g'

export default {
  computed: {
    props () {
      return this.$store.state.pages.contact
    }
  },
  async mounted () {
    setTimeout(() => {
      /* eslint-disable */
      var map = new mapbox.Map({
        container: this.$refs.map,
        style: 'mapbox://styles/mapbox/satellite-v9',
        interactive: false,
        center: [-90.238, 41.540],
        zoom: 9.4,
        pitch: 60,
        attributionControl: false
      })

      this.props.features.forEach((marker) => {
        let coords = []
        coords.push(+marker.coordinates.lng, +marker.coordinates.lat)

        let el = document.createElement('div')
        el.className='contact__marker'
        el.style.backgroundImage ='url(https://d22y7cgfo0b8n4.cloudfront.net/contact/Location.svg)'

        let popup = new mapbox.Popup({ offset: 35, closeOnClick: false})
        .setLngLat(coords)
        .setHTML(marker.popup)

        new mapbox.Marker(el)
        .setLngLat(coords)
        .addTo(map)
        .setPopup(popup)
        .togglePopup
      })
      /* eslint-enable */
    }, 10)
  }
}
</script>
