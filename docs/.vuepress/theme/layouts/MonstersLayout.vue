<template>
  <div class="monsters">

    <Breadcrumb />

    <h1>Bestiaire</h1>

    <v-data-table
      class="data-table"
      :headers="headers"
      :items="monsters"
      item-key="key"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
    >

      <template v-slot:item.title="{ item }">
        <router-link :to="{ path: item.path }" class="subtitle-2">{{ item.title }}</router-link>
      </template>

      <template v-slot:item.frontmatter.challenge="{ item }">
        <span>{{ displayChallenge(item.frontmatter.challenge) }}</span>
      </template>

      <template v-slot:item.frontmatter.environments="{ item }">
        <span v-if="item.frontmatter.environments">{{ displayList(item.frontmatter.environments) }}</span>
      </template>

      <template v-slot:item.frontmatter.dungeonTypes="{ item }">
        <span v-if="item.frontmatter.dungeonTypes">{{ displayList(item.frontmatter.dungeonTypes) }}</span>
      </template>

    </v-data-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Breadcrumb from '@theme/components/Breadcrumb'
import {
  displayChallenge
} from '@theme/util/monsterHelpers'

export default {
  components: { Breadcrumb },

  data () {
    return {
      sortBy: 'title',
      sortDesc: false,
      headers: [
        { text: "Nom", align: 'start', sortable: true, value: 'title' },
        { text: "ID", align: 'center', sortable: true, value: 'frontmatter.challenge' },
        { text: "Type", align: 'start', sortable: false, value: 'frontmatter.type' },
        { text: "Taille", align: 'center', sortable: false, value: 'frontmatter.size' },
        { text: "Sous-type", align: 'start', sortable: false, value: 'frontmatter.subtype' },
        { text: "Environnements", align: 'start', sortable: false, value: 'frontmatter.environments' },
        { text: "Type de donjons", align: 'start', sortable: false, value: 'frontmatter.dungeonTypes' },
      ],
    }
  },

  computed: {
    ...mapState({
      search: state => state.monsterFilters.search,
      types: state => state.monsterFilters.types,
      sizes: state => state.monsterFilters.sizes,
    }),

    monsters() {
      let results = this.$pagination.pages

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

      // Filter sizes
      let selectedSizes = []
      for (var i = 0; i < this.sizes.length; i++) {
        if (this.sizes[i].value) {
          selectedSizes.push(this.sizes[i].abbr)
        }
      }
      if (selectedSizes.length) {
        results = results.filter(item => {
          return selectedSizes.indexOf(item.frontmatter.size) > -1
        })
      }

      return results
    }
  },

  methods: {
    displayList (list) { return list.join(', ') },
    displayChallenge (challenge) { return displayChallenge(challenge) },
  },

  mounted () {
    this.$store.commit('setHasRightDrawer', true)
    this.$store.commit('setRightDrawer', this.$vuetify.breakpoint.lgAndUp)
    this.$store.commit('setInRightDrawer', 'monsterFilters')
  }
}
</script>

<style lang="scss">

</style>
