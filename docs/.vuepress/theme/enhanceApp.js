import Vuex from 'vuex'
import store from '../store'
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/es5/util/colors'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  require('./styles/main.scss')
  Vue.use(Vuex)
  Vue.mixin({ store: store })
  Vue.use(Vuetify)
  options.vuetify = new Vuetify({
    theme: {
      light: {
        primary: '#563f5a', // Héros
        // secondary: colors.red.lighten4, // #FFCDD2
        accent: '#9b1c47' // Dragons
      }
    }
  })
}
