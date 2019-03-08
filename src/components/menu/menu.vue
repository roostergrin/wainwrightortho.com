<template lang="pug" src="./menu.pug"></template>

<script>

export default {
  computed: {
    props () {
      return this.$store.state.app.app
    }
  },
  methods: {
    handleRoute (i) {
      let section = i + 1
      /* eslint-disable */
      fullpage_api.moveTo(+section)
      /* eslint-enable */
      this.$store.dispatch('VIEW_NAV', false)
    }
  }
}
</script>
