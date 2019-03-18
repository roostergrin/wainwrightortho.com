<template lang="pug" src="./team.pug"></template>

<script>
export default {
  data () {
    return {
      selectedLocation: 0,
      activeMember: 0,
      activeRow: 0
    }
  },
  computed: {
    props () {
      return this.$store.state.pages.team
    }
  },
  methods: {
    toggleLocation (i) {
      this.selectedLocation = i
    },
    handleHover (i, k) {
      this.activeMember = i
      this.activeRow = k
    }
  }
}
</script>
