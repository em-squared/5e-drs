<template>
  <div class="spells">

    <div class="d-flex flex-wrap align-center">
      <Breadcrumb class="mr-auto mb-4" />
      <div class="d-flex flex-wrap align-center">
        <v-btn color="primary" class="mr-4 mb-4" depressed link to="/creation-de-sort/"><v-icon left>mdi-plus</v-icon> Créer un sort</v-btn>
        <v-btn color="primary" class="mb-4" depressed link to="/mon-grimoire/">Mon grimoire</v-btn>
      </div>
    </div>

    <h1>Grimoire</h1>


    <v-data-table
      class="data-table"
      :headers="headers"
      :items="spells"
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

      <template v-slot:item.isInSpellBook="{ item }">
        <v-simple-checkbox off-icon="mdi-bookmark-outline" on-icon="mdi-bookmark" @input="toggleSpellInSpellBook(item)" :value="isSpellInSpellBook(item)"></v-simple-checkbox>
      </template>

      <template v-slot:item.title="{ item }">
        <router-link :to="{ path: item.path }" class="subtitle-2">{{ item.title }}</router-link>
      </template>

      <template v-slot:item.frontmatter.level="{ item }">
        <span v-if="item.frontmatter.level == 0">Tour de magie</span>
        <span v-else>{{ item.frontmatter.level }}</span>
      </template>

      <template v-slot:item.frontmatter.concentration="{ item }">
        <span v-if="item.frontmatter.concentration">concentration</span>
      </template>

      <template v-slot:item.frontmatter.ritual="{ item }">
        <span v-if="item.frontmatter.ritual">rituel</span>
      </template>

      <template v-slot:item.frontmatter.components="{ item }">
        <template v-if="item.frontmatter.components">
          <template v-if="item.frontmatter.components.verbal">V</template><template v-if="item.frontmatter.components.verbal && (item.frontmatter.components.somatic || item.frontmatter.components.material)">,</template>
          <template v-if="item.frontmatter.components.somatic">S</template><template v-if="item.frontmatter.components.somatic && item.frontmatter.components.material">,</template>
          <template v-if="item.frontmatter.components.material">M</template>
        </template>
      </template>

      <!-- <template v-slot:item.frontmatter.classes="{ item }">
        <span v-for="(c, idx) in item.frontmatter.classes" :key="idx">{{c}}<template v-if="idx != item.frontmatter.classes.length-1">, </template></span>
      </template> -->

    </v-data-table>

    <v-row class="align-center">
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
        { text: "", align: 'center', sortable: false, value: 'isInSpellBook' },
        { text: "Nom", align: 'start', sortable: true, value: 'title' },
        { text: "Niveau", align: 'center', sortable: true, value: 'frontmatter.level' },
        { text: "École", align: 'start', sortable: false, value: 'frontmatter.school' },
        { text: "Temps d'incantation", align: 'start', sortable: false, value: 'frontmatter.casting_time' },
        { text: "Durée", align: 'start', sortable: false, value: 'frontmatter.duration' },
        { text: "Concentration", align: 'center', sortable: false, value: 'frontmatter.concentration' },
        { text: "Rituel", align: 'center', sortable: false, value: 'frontmatter.ritual' },
        { text: "Composantes", align: 'center', sortable: false, value: 'frontmatter.components' },
        // { text: "Classes", align: 'start', sortable: false, value: 'frontmatter.classes' }
      ],
    }
  },

  computed: {
    ...mapState({
      search: state => state.spellFilters.search,
      classes: state => state.spellFilters.classes,
      levels: state => state.spellFilters.levels,
      schools: state => state.spellFilters.schools,
      mustBeConcentration: state => state.spellFilters.mustBeConcentration,
      mustBeRitual: state => state.spellFilters.mustBeRitual,
      componentVerbal: state => state.spellFilters.componentVerbal,
      componentSomatic: state => state.spellFilters.componentSomatic,
      componentMaterial: state => state.spellFilters.componentMaterial,
    }),

    spells() {
      let results = this.$pagination.pages

      // Filter concetration
      if (this.mustBeConcentration !== undefined) {
        results = results.filter(item => {
          return item.frontmatter.concentration === this.mustBeConcentration
        })
      }

      // Filter ritual
      if (this.mustBeRitual !== undefined) {
        results = results.filter(item => {
          return item.frontmatter.ritual === this.mustBeRitual
        })
      }

      // Filter components
      if (this.componentVerbal !== undefined) {
        results = results.filter(item => {
          return item.frontmatter.components.verbal === this.componentVerbal
        })
      }
      if (this.componentSomatic !== undefined) {
        results = results.filter(item => {
          return item.frontmatter.components.somatic === this.componentSomatic
        })
      }
      if (this.componentMaterial !== undefined) {
        results = results.filter(item => {
          return item.frontmatter.components.material === this.componentMaterial
        })
      }

      // Filter classes
      let selectedClasses = []
      for (var i = 0; i < this.classes.length; i++) {
        if (this.classes[i].value) {
          selectedClasses.push(this.classes[i].label)
        }
      }
      if (selectedClasses.length) {
        let classFiltered = []
        for (var i = 0; i < selectedClasses.length; i++) {
          for (var j = 0; j < results.length; j++) {
            if (results[j].frontmatter.classes.indexOf(selectedClasses[i]) > -1) {
              if (classFiltered.indexOf(results[j]) < 0) {
                classFiltered.push(results[j])
              }
            }
          }
        }
        results = classFiltered
      }

      // Filter levels
      let selectedLevels = []
      for (var i = 0; i < this.levels.length; i++) {
        if (this.levels[i].value) {
          selectedLevels.push(this.levels[i].level)
        }
      }
      if (selectedLevels.length) {
        results = results.filter(item => {
          return selectedLevels.indexOf(item.frontmatter.level) > -1
        })
      }

      // Filter schools
      let selectedSchools = []
      for (var i = 0; i < this.schools.length; i++) {
        if (this.schools[i].value) {
          selectedSchools.push(this.schools[i].label)
        }
      }
      if (selectedSchools.length) {
        results = results.filter(item => {
          return selectedSchools.indexOf(item.frontmatter.school) > -1
        })
      }

      return results
    }
  },

  methods: {
    isSpellInSpellBook (spell) {
      let isInSpellBook = false
      for (let s of this.$store.state.mySpells.spells) {
        if (s.key == spell.key) {
          isInSpellBook = true
        }
      }
      return isInSpellBook
    },
    toggleSpellInSpellBook (spell) {
      if (this.isSpellInSpellBook(spell)) {
        this.$store.commit('mySpells/removeSpell', spell)
      } else {
        this.$store.commit('mySpells/addSpell', spell)
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
    this.$store.commit('setDrawer', this.$vuetify.breakpoint.lgAndUp)
    this.$store.commit('setHasRightDrawer', true)
    this.$store.commit('setRightDrawer', this.$vuetify.breakpoint.lgAndUp)
    this.$store.commit('setInRightDrawer', 'spellFilters')

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
