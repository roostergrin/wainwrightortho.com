<template lang="pug" src="./welcome.pug"></template>

<script>
export default {
  computed: {
    props () {
      return this.$store.state.pages.welcome
    }
  }
}
</script>
