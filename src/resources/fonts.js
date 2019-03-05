/* eslint-disable */

// ----------------------------
// to learn more about importing => https://github.com/typekit/webfontloader
// ----------------------------

var WebFont = require('webfontloader')

const fonts = () => {
  WebFont.load({
    google: {
      families: [ 'Montserrat' ]
    }
  })
}

export default fonts()
/* eslint-enable */
