<template lang="pug" src="./hero.pug"></template>

<script>
export default {
  computed: {
    props () {
      return this.$store.state.pages.hero
    }
  },
  mounted () {
    this.$refs.video.playbackRate = 0.5
  }
}
</script>
