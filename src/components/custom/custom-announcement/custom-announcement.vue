<template lang="pug" src="./custom-announcement.pug"></template>

<script>
export default {
  data: () => {
    return {
      isShowing: true
    }
  },
  methods: {
    closeModal () {
      this.isShowing = false
    }
  }
}
</script>
