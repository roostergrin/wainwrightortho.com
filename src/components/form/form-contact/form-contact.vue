<template lang="pug" src="./form-contact.pug"></template>

<script>
import api from 'api'
import axios from 'axios'
export default {
  data: () => {
    return {
      fullname: '',
      phone: '',
      email: '',
      message: '',
      postUrl: api + '/rg-mail/v1/contact',
      formSubmitted: false,
      formSuccess: false
    }
  },
  methods: {
    validate () {
      this.$validator.validateAll()
        .then(res => {
          if (res) {
            this.onSubmit()
          }
        })
        .catch(e => { console.log(e) })
    },
    onSubmit () {
      this.formSubmitted = true
      axios.post(this.postUrl, {
        fullname: this.fullname,
        phone: this.phone,
        email: this.email,
        message: this.message
      })
        .then(res => {
          this.active = ''
          this.formSuccess = true
          this.formSubmitted = false
        })
        .catch(e => { console.log(e) })
    }
  }
}
</script>
