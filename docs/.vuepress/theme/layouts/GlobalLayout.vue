<template>
  <v-app class="srd">

    <NavDrawer />
    <RightDrawer v-if="hasRightDrawer" />

    <Navbar />

    <v-content>
      <v-container fluid>
        <v-row align="start" justify="center">
          <v-col cols="12">
            <DefaultGlobalLayout/>
          </v-col>
        </v-row>
      </v-container>
      <v-overlay :value="loading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </v-content>
  </v-app>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
import Navbar from '@theme/components/Navbar.vue'
import NavDrawer from '@theme/components/NavDrawer.vue'
import RightDrawer from '@theme/components/RightDrawer.vue'

export default {
  name: 'GlobalLayout',

  components: {
    DefaultGlobalLayout: GlobalLayout,
    Navbar,
    NavDrawer,
    RightDrawer
  },

  data () {
    return {
    }
  },

  computed: {
    loading () {
      return this.$store.state.loading
    },
    hasRightDrawer() {
      return this.$store.state.hasRightDrawer
    }
  },

  mounted () {
    this.$vuetify.theme.dark = this.$store.state.isThemeDark
  },

  methods: {
  }
}
</script>
