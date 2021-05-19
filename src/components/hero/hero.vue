<template lang="pug" src="./hero.pug"></template>

<script>
export default {
  computed: {
    props () {
      return this.$store.state.pages.hero
    }
  },
  methods: {
    video () {
      this.$refs.video.playbackRate = 0.5 // Adjust this decimal int for playback speed
    }
  },
  mounted () {
    this.video()
  }
}
</script>
