<template>
  <div class="magic-items">

    <div class="d-flex flex-wrap align-center">
      <Breadcrumb class="mr-auto mb-4" />
      <div class="d-flex flex-wrap align-center">
        <v-btn color="primary" class="mr-4 mb-4" depressed link to="/creation-d-objet-magique/"><v-icon left>mdi-plus</v-icon> Créer un objet magique</v-btn>
        <MyMagicItemsButton />
      </div>
    </div>

    <h1>Liste des objets magiques</h1>

    <div class="active-filters mb-2">
      <div class="types-filter mb-1" v-if="selectedTypes.length > 0">
        <strong>Types</strong> : <v-chip class="mr-1" v-for="(type, idx) in selectedTypes">{{ type }}</v-chip>
      </div>
      <div class="levels-filter mb-1" v-if="selectedRarities.length > 0">
        <strong>Rareté</strong> : <v-chip class="mr-1" v-for="(rarity, idx) in selectedRarities">{{ rarity }}</v-chip>
      </div>
      <div class="attunement-filter mb-1" v-if="hasAttunement !== undefined">
        <strong>Harmonisation</strong> :
        <v-chip class="mr-1" v-if="hasAttunement === true" dark color="green">oui</v-chip>
        <v-chip class="mr-1" v-if="hasAttunement === false" dark color="red">non</v-chip>
      </div>
    </div>

    <v-data-table
      class="data-table"
      :headers="headers"
      :items="magicitems"
      item-key="key"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      must-sort
      :search="search"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      @page-count="pageCount = $event"
      hide-default-footer
      show-expand
      @click:row="onClickRow"
    >

      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length" class="pa-4">
          <MagicItem :magicItem="item" />
        </td>
      </template>

      <template v-slot:item.isInTreasureChest="{ item }">
        <v-simple-checkbox off-icon="mdi-bookmark-outline" on-icon="mdi-bookmark" @input="toggleItemInTreasureChest(item)" :value="isItemInTreasureChest(item)"></v-simple-checkbox>
      </template>

      <template v-slot:item.title="{ item }">
        <router-link :to="{ path: item.path }" class="subtitle-2">{{ item.title }}</router-link>
      </template>

      <template v-slot:item.frontmatter.attunement="{ item }">
        <span v-if="item.frontmatter.attunement">{{ item.frontmatter.attunement }}</span>
      </template>

    </v-data-table>

    <v-row class="align-center mb-12 pb-6">
      <v-col :cols="12" md="3">
        <v-select v-model="itemsPerPage" :items="itemsPerPageChoices" label="Lignes par page" @change="selectItemPerPage"></v-select>
      </v-col>
      <v-col :cols="12" md="9">
        <v-pagination v-model="page" :length="pageCount" :total-visible="7" @input="changePage"></v-pagination>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Breadcrumb from '@theme/components/Breadcrumb'
import { setUrlParams, getUrlParameter } from '@theme/util/filterHelpers'
import { isResourceInLibrary } from '@theme/util'
import MagicItem from '@theme/components/MagicItem'
import MyMagicItemsButton from '@theme/global-components/MyMagicItemsButton'

export default {
  components: { Breadcrumb, MagicItem, MyMagicItemsButton },

  data () {
    return {
      sortBy: 'title',
      sortDesc: false,
      itemsPerPage: 10,
      itemsPerPageChoices: [
        {text: '5', value: 5},
        {text: '10', value: 10},
        {text: '15', value: 15},
        {text: 'Tous', value: -1},
      ],
      page: 1,
      pageCount: 0,
      headers: [
        { text: "", align: 'center', sortable: false, value: 'isInTreasureChest' },
        { text: "Nom", align: 'start', sortable: true, value: 'title' },
        { text: "Type", align: 'start', sortable: false, value: 'frontmatter.type' },
        { text: "Rareté", align: 'start', sortable: false, value: 'frontmatter.rarity' },
        { text: "Harmonisation", align: 'start', sortable: false, value: 'frontmatter.attunement' },
      ],
    }
  },

  computed: {
    ...mapState({
      search: state => state.magicItemFilters.search,
      types: state => state.magicItemFilters.types,
      rarities: state => state.magicItemFilters.rarities,
      hasAttunement: state => state.magicItemFilters.hasAttunement,
    }),

    selectedTypes() {
      let result = []
      for (let type of this.types) {
        if (type.value) {
          result.push(type.label)
        }
      }
      return result
    },

    selectedRarities() {
      let result = []
      for (let rarity of this.rarities) {
        if (rarity.value) {
          result.push(rarity.label)
        }
      }
      return result
    },

    magicitems() {
      let results = this.$pagination.pages

      // Filter attunement
      if (this.hasAttunement !== undefined) {
        if (this.hasAttunement === true) {
          results = results.filter(item => {
            return item.frontmatter.attunement
          })
        } else {
          results = results.filter(item => {
            return item.frontmatter.attunement === false
          })
        }
      }

      // Filter types
      let selectedTypes = []
      for (var i = 0; i < this.types.length; i++) {
        if (this.types[i].value) {
          selectedTypes.push(this.types[i].label)
        }
      }
      if (selectedTypes.length) {
        results = results.filter(item => {
          return selectedTypes.indexOf(item.frontmatter.type) > -1
        })
      }

      // Filter rarities
      let selectedRarities = []
      for (var i = 0; i < this.rarities.length; i++) {
        if (this.rarities[i].value) {
          selectedRarities.push(this.rarities[i].label)
        }
      }
      if (selectedRarities.length) {
        results = results.filter(item => {
          return selectedRarities.indexOf(item.frontmatter.rarity) > -1
        })
      }

      return results
    }
  },

  methods: {
    isItemInTreasureChest (magicItem) {
      return isResourceInLibrary(magicItem, this.$store.state.myMagicItems.magicItems)
    },
    toggleItemInTreasureChest (magicItem) {
      if (this.isItemInTreasureChest(magicItem)) {
        this.$store.commit('myMagicItems/removeMagicItem', magicItem)
        this.$store.commit('setSnackbarText', "L'objet magique " + magicItem.title + " a été supprimé de votre bibliothèque")
        this.$store.commit('setIsOpenSnackbar', true)
      } else {
        this.$store.commit('myMagicItems/addMagicItem', magicItem)
        this.$store.commit('setSnackbarText', "L'objet magique " + magicItem.title + " a été ajouté à votre bibliothèque")
        this.$store.commit('setIsOpenSnackbar', true)
      }
    },

    selectItemPerPage (value) {
      setUrlParams("lignes", [value])
    },

    changePage (page) {
      // console.log(page)
      setUrlParams("page", [page])
    },

    onClickRow (row, item) {
      item.expand(!item.isExpanded)
    }
  },

  mounted () {
    this.$store.commit('setHasRightDrawer', true)
    this.$store.commit('setRightDrawer', this.$vuetify.breakpoint.lgAndUp)
    this.$store.commit('setInRightDrawer', 'magicItemFilters')

    let itemsPerPage = parseInt(getUrlParameter(window.location.href, "lignes"))
    if (itemsPerPage) {
      this.itemsPerPage = itemsPerPage
    }
    let page = parseInt(getUrlParameter(window.location.href, "page"))
    if (page) {
      this.page = page
    }
  }
}
</script>

<style lang="scss">

</style>
