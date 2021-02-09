import Vuex from 'vuex'
import store from '../store'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify'
import fr from 'vuetify/es5/locale/fr'
import colors from 'vuetify/es5/util/colors'

// Stockage des donneés utilisateur dans le navigateur
store.subscribe((mutation, state) => {
  if (mutation.type.includes('mySpells')) {
    localStorage.setItem('mySpells', JSON.stringify(state.mySpells))
  } else if (mutation.type.includes('myMonsters')) {
    localStorage.setItem('myMonsters', JSON.stringify(state.myMonsters))
  } else if (mutation.type.includes('myMagicItems')) {
    localStorage.setItem('myMagicItems', JSON.stringify(state.myMagicItems))
  }
})

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  require('./styles/main.scss')
  Vue.use(Vuex)
  Vue.mixin({
    store: store
  })
  Vue.use(Vuetify)
  options.vuetify = new Vuetify({
    theme: {
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          primary: '#4c6477', // Dragons (Bleu)
          navbar: '#435a3f', // Héros (Vert)
          accent: '#435a3f', // Héros
        },
        dark: {
          primary: '#6c8599', // Dragons (Bleu)
          navbar: '#435a3f', // Héros (Vert)
          accent: '#6c8599', // Dragons
        }
      }
    },
    lang: {
      locales: { fr },
      current: 'fr',
    },
  })
}
