<template lang="pug" src="./patients.pug"></template>

<script>
export default {
  data () {
    return {
      show: 0
    }
  },
  computed: {
    props () {
      return this.$store.state.pages.patients
    }
  },
  async created () {
    setInterval(() => {
      if (this.show === (this.props.testimonials.length - 1)) {
        this.show = 0
      } else {
        this.show++
      }
    }, 8000)
  },
  methods: {
    handleClick () {
      this.$store.dispatch('VIEW_SHOWMODAL', true)
    }
  }
}
</script>
