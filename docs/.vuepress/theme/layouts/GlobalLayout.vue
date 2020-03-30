<template>
  <v-app>

    <NavDrawer />

    <Navbar />

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="start" justify="center">
          <v-col cols="12">
            <DefaultGlobalLayout/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
import Navbar from '@theme/components/Navbar.vue'
import NavDrawer from '@theme/components/NavDrawer.vue'

export default {
  name: 'GlobalLayout',

  components: {
    DefaultGlobalLayout: GlobalLayout,
    Navbar,
    NavDrawer
  },

  data () {
    return {
      items: [
        { icon: 'mdi-contacts', text: 'Contacts' },
        { icon: 'mdi-history', text: 'Frequently contacted' },
        { icon: 'mdi-content-copy', text: 'Duplicates' },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'mdi-plus', text: 'Create label' },
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' },
          ],
        },
        { icon: 'mdi-settings', text: 'Settings' },
        { icon: 'mdi-message', text: 'Send feedback' },
        { icon: 'mdi-help-circle', text: 'Help' },
        { icon: 'mdi-cellphone-link', text: 'App downloads' },
        { icon: 'mdi-keyboard', text: 'Go to the old version' },
      ],
    }
  },

  computed: {
  },

  mounted () {
  },

  methods: {
  }
}
</script>
