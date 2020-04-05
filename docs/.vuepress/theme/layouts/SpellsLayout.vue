<template>
  <div class="spells">

    <Breadcrumb />

    <v-data-table
      class="data-table"
      :headers="headers"
      :items="spells"
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
        <template v-if="item.frontmatter.components.verbal">V</template><template v-if="item.frontmatter.components.somatic || item.frontmatter.components.material">,</template>
        <template v-if="item.frontmatter.components.somatic">S</template><template v-if="item.frontmatter.components.material">,</template>
        <template v-if="item.frontmatter.components.material">M</template>
      </template>

      <template v-slot:item.frontmatter.classes="{ item }">
        <span v-for="(c, idx) in item.frontmatter.classes" :key="idx">{{c}}<template v-if="idx != item.frontmatter.classes.length-1">, </template></span>
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
        { text: "Niveau", align: 'center', sortable: true, value: 'frontmatter.level' },
        { text: "École", align: 'start', sortable: false, value: 'frontmatter.school' },
        { text: "Temps d'incantation", align: 'start', sortable: false, value: 'frontmatter.casting_time' },
        { text: "Durée", align: 'start', sortable: false, value: 'frontmatter.duration' },
        { text: "Concentration", align: 'center', sortable: false, value: 'frontmatter.concentration' },
        { text: "Rituel", align: 'center', sortable: false, value: 'frontmatter.ritual' },
        { text: "Composantes", align: 'center', sortable: false, value: 'frontmatter.components' },
        { text: "Classes", align: 'start', sortable: false, value: 'frontmatter.classes' }
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
        results = results.filter(item => {
          for (var i = 0; i < item.frontmatter.classes.length; i++) {
            return selectedClasses.indexOf(item.frontmatter.classes[i]) > -1
          }
        })
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

  mounted () {
    this.$store.commit('setHasRightDrawer', true)
    this.$store.commit('setRightDrawer', true)
    this.$store.commit('setInRightDrawer', 'spellFilters')
  }
}
</script>

<style lang="scss">

</style>
