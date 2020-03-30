<template>
  <v-navigation-drawer class="main-drawer" v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" width="300" app>
    <!-- <v-treeview
        item-key="path"
        item-text="title"
        :items="items"
        dense
        open-all
        hoverable
        open-on-click
        activatable
        @update:active="updateActive"
      >
      </v-treeview> -->
    <v-list dense nav>
      <template v-for="item in items">
        <v-list-group v-if="item.children" :key="item.title" v-model="item.expanded">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </template>

          <template v-for="child in item.children">
            <v-list-group v-if="child.children" :key="child.title" sub-group v-model="child.expanded">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ child.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item v-for="subchild in child.children" link :to="{path: subchild.path}">
                <v-list-item-content>
                  <v-list-item-title>
                    {{ subchild.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-item v-else :key="child.title" link :to="{path: child.path}">
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-group>
        <v-list-item v-else :key="item.title" link :to="{path: item.path}">
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
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
    }
  },

  mounted () {
    this.items = this.$site.themeConfig.sidebar
  },

  methods: {
    updateActive (active) {
      console.log(active)
      if (active[0] == undefined) return
      const path = active[0].replace('.html', '')
      this.$router.push(path)
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



// Case of treeview
.v-treeview-node__level {
  width: 12px;
}
</style>
