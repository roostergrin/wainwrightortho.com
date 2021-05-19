<template lang="pug" src="./custom-announcement.pug"></template>

<script>
export default {
  data: () => {
    return {
      isShowing: false
    }
  },
  methods: {
    closeModal () {
      this.isShowing = false
    }
  },
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  }
}
</script>
