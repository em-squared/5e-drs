<template>
  <div class="magic-items">

    <Breadcrumb />

    <h1>Liste des objets magiques</h1>

    <v-data-table
      class="data-table"
      :headers="headers"
      :items="magicitems"
      item-key="key"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :search="search"
      disable-pagination
      hide-default-footer
    >

      <template v-slot:item.title="{ item }">
        <router-link :to="{ path: item.path }" class="subtitle-2">{{ item.title }}</router-link>
      </template>

      <template v-slot:item.frontmatter.attunement="{ item }">
        <span v-if="item.frontmatter.attunement">{{ item.frontmatter.attunement }}</span>
      </template>

    </v-data-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Breadcrumb from '@theme/components/Breadcrumb'

export default {
  components: { Breadcrumb },

  data () {
    return {
      sortBy: 'title',
      sortDesc: false,
      headers: [
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

  mounted () {
    this.$store.commit('setHasRightDrawer', true)
    this.$store.commit('setRightDrawer', true)
    this.$store.commit('setInRightDrawer', 'magicItemFilters')
  }
}
</script>

<style lang="scss">

</style>
