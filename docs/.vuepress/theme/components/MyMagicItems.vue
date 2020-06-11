<template>
  <main class="page content">
    <div class="theme-default-content">
      <div v-if="magicItems.length > 0">

        <div class="d-print-none mb-12">

          <v-data-table
            class="data-table"
            :headers="headers"
            :items="magicItems"
            item-key="key"
            :sort-by="sortBy"
            :sort-desc="sortDesc"
            must-sort
            :items-per-page="-1"
            hide-default-footer
            show-expand
            @click:row="onClickRow"
          >

            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length" class="pa-4">
                <MagicItem :magicItem="getMagicItem(item)" />
              </td>
            </template>

            <template v-slot:item.title="{ item }">
              <span class="subtitle-2">{{ item.title }}</span>
            </template>

            <template v-slot:item.frontmatter.attunement="{ item }">
              <span v-if="item.frontmatter.attunement">{{ item.frontmatter.attunement }}</span>
            </template>

            <template v-slot:item.actions="{ item }">
              <div class="text-no-wrap">
                <v-btn class="d-print-none" v-if="item.custom" small depressed icon @click="share(item)"><v-icon>mdi-share-variant</v-icon></v-btn>
                <v-btn class="d-print-none mr-2" small depressed icon @click.stop="toggleHidePrint(item)">
                  <v-icon v-if="isHiddenPrint(item)">mdi-printer-off</v-icon>
                  <v-icon v-else>mdi-printer</v-icon>
                </v-btn>
                <v-btn class="d-print-none mr-2" small depressed link icon :to="{ path: '/creation-d-objet-magique/', query: { key: item.key } }"><v-icon>mdi-pencil</v-icon></v-btn>
                <v-btn color="error" class="d-print-none" small depressed icon @click="removeMagicItem(item)"><v-icon>mdi-delete</v-icon></v-btn>
              </div>
            </template>

          </v-data-table>
        </div>

        <div class="d-none d-print-block column-count-2">
          <div v-for="magicItem in magicItems">
            <div v-if="!isHiddenPrint(magicItem)">
              <h2 class="d-flex align-center">
                <div class="mr-4">{{ magicItem.title }}</div>
                <v-btn class="d-print-none mr-2" small depressed link :to="{ path: '/creation-de-sort/', query: { key: magicItem.key } }"><v-icon left>mdi-pencil</v-icon> Modifier</v-btn>
                <v-btn color="error" class="d-print-none" small depressed @click="removeMagicItem(magicItem)"><v-icon left>mdi-delete</v-icon> Supprimer</v-btn>
              </h2>
              <MagicItem :magicItem="getMagicItem(magicItem)" :isList="true" :hideTitle="true" />
            </div>
          </div>
        </div>
      </div>
      <template v-else>
        Vous n'avez aucun objet magique.
      </template>
    </div>

  </main>
</template>

<script>
import MagicItem from '@theme/components/MagicItem'

export default {
  name: 'MyMagicItems',

  components: {
    MagicItem
  },

  data () {
    return {
      sortBy: 'title',
      sortDesc: false,
      headers: [
        { text: "Nom", align: 'start', sortable: true, value: 'title' },
        { text: "Type", align: 'start', sortable: false, value: 'frontmatter.type' },
        { text: "Rareté", align: 'start', sortable: false, value: 'frontmatter.rarity' },
        { text: "Harmonisation", align: 'start', sortable: false, value: 'frontmatter.attunement' },
        { text: "", align: 'center', sortable: false, value: 'actions' },
      ],
    }
  },

  computed: {
    magicItems () {
      return this.$store.state.myMagicItems.magicItems
    }
  },

  methods: {
    toggleHidePrint (magicItem) {
      if (this.isHiddenPrint(magicItem)) {
        this.$store.commit('myMagicItems/removeNotPrintedMagicItem', magicItem)
      } else {
        this.$store.commit('myMagicItems/addNotPrintedMagicItem', magicItem)
      }
    },
    isHiddenPrint (magicItem) {
      if (this.$store.state.myMagicItems.notPrintedMagicItems) {
        let idx = this.$store.state.myMagicItems.notPrintedMagicItems.findIndex(item => item.key == magicItem.key)
        if (idx >= 0) {
          return true
        }
      }
      return false
    },
    onClickRow (row, item) {
      item.expand(!item.isExpanded)
    },
    removeMagicItem (magicItem) {
      this.$store.commit('myMagicItems/removeMagicItem', magicItem)
      this.$store.commit('setSnackbarText', "L'objet magique " + magicItem.title + " a été supprimé de votre bibliothèque")
      this.$store.commit('setIsOpenSnackbar', true)
    },
    share (item) {
      this.$store.commit('setShareURI', encode(item))
      this.$store.commit('setIsOpenShareHomebrewDialog', true)
    },
    getMagicItem (item) {
      if (!item.custom && item.path) {
        let magicItem = this.$site.pages.find((el) => el.path === item.path || el.path === item.path + "/")
        return magicItem
      }
      return item
    }
  }
}
</script>

<style lang="scss">
</style>
