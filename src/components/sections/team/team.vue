<template lang="pug" src="./team.pug"></template>

<script>
export default {
  computed: {
    props () {
      return this.$store.state.pages.team
    }
  }
}
</script>
