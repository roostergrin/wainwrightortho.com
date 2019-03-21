<template lang="pug" src="./modal.pug"></template>

<script>
import Form from 'components/form/form-contact/form-contact'

export default {
  components: {
    Form
  },
  methods: {
    handleClose () {
      this.$store.dispatch('VIEW_SHOWMODAL', false)
    }
  }
}
</script>
