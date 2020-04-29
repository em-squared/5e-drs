<template>
  <div class="monsters">

    <div class="d-flex flex-wrap align-center">
      <Breadcrumb class="mr-auto mb-4" />
      <div class="d-flex flex-wrap align-center">
        <v-btn color="primary" class="mr-4 mb-4" depressed link to="/creation-de-monstre-pnj/"><v-icon left>mdi-plus</v-icon> Créer un monstre</v-btn>
        <v-btn color="primary" class="mb-4" depressed link to="/mon-bestiaire/">Mon bestiaire</v-btn>
      </div>
    </div>

    <h1>Bestiaire</h1>

    <v-data-table
      class="data-table"
      :headers="headers"
      :items="monsters"
      item-key="key"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      must-sort
      :search="search"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      @page-count="pageCount = $event"
      hide-default-footer
    >

      <template v-slot:item.isInBestiary="{ item }">
        <v-simple-checkbox off-icon="mdi-bookmark-outline" on-icon="mdi-bookmark" @input="toggleMonsterInBestiary(item)" :value="isMonsterInBestiary(item)"></v-simple-checkbox>
      </template>

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

    <v-row class="align-center  mb-12 pb-6">
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
import { displayChallenge } from '@theme/util/monsterHelpers'
import { setUrlParams, getUrlParameter } from '@theme/util/filterHelpers'

export default {
  components: { Breadcrumb },

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
        { text: "", align: 'center', sortable: false, value: 'isInBestiary' },
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
      environments: state => state.monsterFilters.environments,
      dungeonTypes: state => state.monsterFilters.dungeonTypes,
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

      // Filter environments
      let selectedEnvironments = []
      for (var i = 0; i < this.environments.length; i++) {
        if (this.environments[i].value) {
          selectedEnvironments.push(this.environments[i].label)
        }
      }
      if (selectedEnvironments.length) {
        let classFiltered = []
        for (var i = 0; i < selectedEnvironments.length; i++) {
          for (var j = 0; j < results.length; j++) {
            if (results[j].frontmatter.environments) {
              if (results[j].frontmatter.environments.indexOf(selectedEnvironments[i]) > -1) {
                if (classFiltered.indexOf(results[j]) < 0) {
                  classFiltered.push(results[j])
                }
              }
            }
          }
        }
        results = classFiltered
      }

      // Filter dungeon types
      let selectedDungeonTypes = []
      for (var i = 0; i < this.dungeonTypes.length; i++) {
        if (this.dungeonTypes[i].value) {
          selectedDungeonTypes.push(this.dungeonTypes[i].label)
        }
      }
      if (selectedDungeonTypes.length) {
        let classFiltered = []
        for (var i = 0; i < selectedDungeonTypes.length; i++) {
          for (var j = 0; j < results.length; j++) {
            if (results[j].frontmatter.dungeonTypes) {
              if (results[j].frontmatter.dungeonTypes.indexOf(selectedDungeonTypes[i]) > -1) {
                if (classFiltered.indexOf(results[j]) < 0) {
                  classFiltered.push(results[j])
                }
              }
            }
          }
        }
        results = classFiltered
      }

      return results
    }
  },

  methods: {
    displayList (list) { return list.join(', ') },
    displayChallenge (challenge) { return displayChallenge(challenge) },
    isMonsterInBestiary (monster) {
      let isInBestiary = false
      for (let m of this.$store.state.myMonsters.monsters) {
        if (m.key == monster.key) {
          isInBestiary = true
        }
      }
      return isInBestiary
    },
    toggleMonsterInBestiary (monster) {
      if (this.isMonsterInBestiary(monster)) {
        this.$store.commit('myMonsters/removeMonster', monster)
      } else {
        this.$store.commit('myMonsters/addMonster', monster)
      }
    },

    selectItemPerPage (value) {
      setUrlParams("lignes", [value])
    },

    changePage (page) {
      console.log(page)
      setUrlParams("page", [page])
    }
  },

  mounted () {
    this.$store.commit('setHasRightDrawer', true)
    this.$store.commit('setRightDrawer', this.$vuetify.breakpoint.lgAndUp)
    this.$store.commit('setInRightDrawer', 'monsterFilters')

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
