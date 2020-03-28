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
  Vue.use(Vuex)
  Vue.mixin({ store: store })
  Vue.use(Vuetify)
  options.vuetify = new Vuetify({
    theme: {
      // primary: colors.red.darken1, // #E53935
      // secondary: colors.red.lighten4, // #FFCDD2
      // accent: colors.indigo.base // #3F51B5
    }
  })
}
