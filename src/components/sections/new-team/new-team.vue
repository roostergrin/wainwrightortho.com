<template lang="pug" src="./new-team.pug"></template>

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
      return this.$store.state.pages['new-team']
    }
  },
  methods: {
    toggleLocation (i) {
      this.selectedLocation = i
      this.activeMember = 0
      this.activeRow = 0
    },
    handleHover (i, k) {
      this.activeMember = i
      this.activeRow = k
    }
  }
}
</script>
