<template lang="pug" src="./contact.pug"></template>

<script>
import Form from 'components/form/form-contact/form-contact'
var mapbox = require('mapbox-gl/dist/mapbox-gl.js')

mapbox.accessToken = 'pk.eyJ1Ijoicm9vc3RlcmdyaW4iLCJhIjoiY2p0N2g1aDNlMHJ3ODQzcDNsOGlqZDR3ZSJ9._jtkyaXWjB_2k9qhXfUd2g'

export default {
  data () {
    return {
      windowWidth: window.innerWidth,
      formActive: false
    }
  },
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
        center: [-90.138345, 41.33012],
        zoom: 9.4,
        pitch: 60,
        attributionControl: false
      })

      if (this.windowWidth < 1024) {
        map.transform.zoom = 8
      }

      this.props.features.forEach((marker, index) => {
        let coords = []
        coords.push(+marker.coordinates.lng, +marker.coordinates.lat)

        let el = document.createElement('div')
        el.className='contact__marker'
        el.style.backgroundImage ='url(https://d22y7cgfo0b8n4.cloudfront.net/contact/Location.svg)'
        el.style.animationDelay = index * .15 + 's'

        var popupOffsets = {
         'bottom': [90, 96],
         }

        let popup = new mapbox.Popup({ offset: popupOffsets, closeOnClick: false})
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
  },
  components: {
    Form
  },
  methods: {
    toggleForm () {
      this.formActive = !this.formActive
    },
    closeForm () {
      this.formActive = false
    },
    handleHover (i) {
      let marker = document.getElementsByClassName('contact__marker')
      marker[i].classList.add('contact__marker--hover')
    },
    handleLeave (i) {
      let marker = document.getElementsByClassName('contact__marker')
      marker[i].classList.remove('contact__marker--hover')
    }
  }
}
</script>
