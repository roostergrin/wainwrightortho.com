<template lang="pug" src="./home.pug"></template>

<script>
import Hero from 'components/hero/hero'
import Welcome from 'section/welcome/welcome'

import config from '../../config'

export default {
  data () {
    return {
      fullpageOptions: {
        licenseKey: config.fullpage.KEY,
        anchors: ['hero-section', 'welcome-section'],
        easingcss3: 'cubic-bezier(.52, .01, .16, 1)',
        responsiveHeight: 600,
        responsiveWidth: 767,
        scrollingSpeed: 800,
        sectionSelector: '.pages-home__section'
      }
    }
  },
  name: 'Home',
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    Hero,
    Welcome
  }
}
</script>
