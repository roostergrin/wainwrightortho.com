<template lang="pug" src="./home.pug"></template>

<script>
import Contact from 'section/contact/contact'
import Hero from 'components/hero/hero'
import Patients from 'section/patients/patients'
import NewTeam from 'section/new-team/new-team'
import Treatments from 'section/treatments/treatments'
import Welcome from 'section/welcome/welcome'
import DrJain from 'section/dr-jain/dr-jain'
import Announcement from 'components/custom/custom-announcement/custom-announcement'

// import config from '../../config'

export default {
  data () {
    return {
      fullpageOptions: {
        // licenseKey: config.fullpage.KEY,
        // anchors: ['hero-section', 'welcome-section'],
        easingcss3: 'cubic-bezier(.52, .01, .16, 1)',
        // responsiveHeight: 600,
        onLeave: this.onLeave,
        responsiveWidth: 769,
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
    Contact,
    Hero,
    Patients,
    NewTeam,
    Treatments,
    Welcome,
    DrJain,
    Announcement
  },
  methods: {
    onLeave (origin, destination, direction) {
      if (destination.index === 2) {
        setTimeout(() => { destination.item.classList.add('sliding') }, 355)
      } else {
        origin.item.classList.remove('sliding')
      }
      if (destination.index === 5) {
        setTimeout(() => { destination.item.classList.add('marker') }, 350)
      } else {
        setTimeout(() => { origin.item.classList.remove('marker') }, 400)
      }
    }
  }
}
</script>
