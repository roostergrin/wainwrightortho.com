<template lang="pug" src="./navigation.pug"></template>

<script>
export default {
  methods: {
    toggleMenu () {
      this.$store.state.nav ? this.$store.dispatch('VIEW_NAV', false) : this.$store.dispatch('VIEW_NAV', true)
    }
  }
}
</script>
