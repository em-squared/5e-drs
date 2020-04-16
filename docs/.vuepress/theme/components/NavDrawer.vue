<template>
  <v-navigation-drawer class="main-drawer" v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" width="300" app>
    <v-list dense nav>
      <v-btn class="hidden-md-and-up site-title" text link block :to="{ path: '/' }"><img src="/dragon_pourpre.svg" />&nbsp;{{ $site.title }}</v-btn>
      <template v-for="item in items">
        <v-list-group v-if="item.children" :key="item.title" :value="isExpanded(item)" color="accent">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </template>

          <template v-for="child in item.children">
            <v-list-group v-if="child.children" :key="child.title" sub-group :value="isExpanded(child)" color="accent">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ child.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item v-for="subchild in child.children" link :to="{path: subchild.path}" :exact="subchild.exact">
                <v-list-item-content>
                  <v-list-item-title>
                    {{ subchild.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-divider v-else-if="child.type == 'divider'" />
            <v-list-item v-else :key="child.title" link :to="{path: child.path}" :exact="child.exact">
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-group>
        <v-divider v-else-if="item.type == 'divider'" />
        <v-list-item v-else :key="item.title" link :to="{path: item.path}" color="accent" :exact="item.exact">
          <v-list-item-icon v-if="item.icon">
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list-item v-if="$site.themeConfig.repository" link :href="$site.themeConfig.repository" target="_blank">
        <v-list-item-icon>
          <v-icon>mdi-github</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            Sources GitHub
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="$site.themeConfig.kofi" link :href="$site.themeConfig.kofi" target="_blank">
        <v-list-item-icon>
          <v-icon>mdi-glass-mug-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            Encouragez le développement
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="$vuetify.breakpoint.mdAndDown" @click.stop="$store.commit('setIsOpenAboutDialog', true)">
        <v-list-item-icon>
          <v-icon>mdi-information</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            À propos
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavDrawer',

  data () {
    return {
      items: []
    }
  },

  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (newValue) {
        this.$store.commit('setDrawer', newValue)
      }
    },
  },

  mounted () {
    this.items = this.$site.themeConfig.sidebar
  },

  methods: {
    isExpanded (item) {
      if (item.children) {
        for (var i = 0; i < item.children.length; i++) {
          if (item.children[i].path) {
            if (item.children[i].path == this.$route.path) {
              return true
            }
          }
          if (item.children[i].children) {
            for (var j = 0; j < item.children[i].children.length; j++) {
              if (item.children[i].children[j].path) {
                if (item.children[i].children[j].path == this.$route.path) {
                  return true
                }
              }
            }
          }
        }
      }
      // Grimoire
      if ((item.title == "Pour les joueurs") && (this.$route.path.includes('/grimoire/'))) {
        return true
      }
      // Bestiaire
      if ((item.title == "Pour les meneurs") && (this.$route.path.includes('/bestiaire/'))) {
        return true
      }
      // Liste des objets magiques
      if ((item.title == "Pour les meneurs") && (this.$route.path.includes('/liste-objets-magiques/'))) {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss">
// Case of list
.v-application--is-ltr {
  .main-drawer {

    .v-list-group--sub-group {
      .v-list-item__icon:first-child {
        margin-right: 0px;
      }
    }

    .v-list--dense {
      .v-list-group--sub-group {
        .v-list-group__header {
          padding-left: 0px;
        }
      }
    }

    .v-list--nav {
      .v-list-item {
        padding-left: 24px;
      }
    }
  }
}
</style>
