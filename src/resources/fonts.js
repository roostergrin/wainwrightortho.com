/* eslint-disable */
var WebFont = require('webfontloader')

const fonts = () => {
  WebFont.load({
    google: {
      families: [ 'Open+Sans:400,600' ]
    }
  })
}

export default fonts()
/* eslint-enable */
