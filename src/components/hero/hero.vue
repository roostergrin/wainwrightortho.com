<template lang="pug" src="./hero.pug"></template>

<script>
export default {
  computed: {
    props () {
      return this.$store.state.pages.hero
    }
  }
}
</script>
