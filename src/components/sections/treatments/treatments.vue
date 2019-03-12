<template lang="pug" src="./treatments.pug"></template>

<script>
export default {
  data () {
    return {
      activeSlide: 0
    }
  },
  computed: {
    props () {
      return this.$store.state.pages.treatments
    }
  },
  methods: {
    moveSlide (i) {
      this.activeSlide = i
    },
    moveUp () {
      this.$el.classList.add('treatments--sliding')
      setTimeout(() => {
        this.$el.classList.remove('treatments--sliding')
      }, 550)
      if (this.activeSlide === (this.props.slides.length - 1)) {
        this.activeSlide = 0
      } else {
        this.activeSlide++
      }
    },
    moveDown () {
      this.$el.classList.add('treatments--sliding')
      setTimeout(() => {
        this.$el.classList.remove('treatments--sliding')
      }, 550)
      if (this.activeSlide === 0) {
        this.activeSlide = this.props.slides.length - 1
      } else {
        this.activeSlide--
      }
    }
  }
}
</script>
