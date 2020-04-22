<template>
  <div class="spell">
    <div class="d-flex align-center mb-4 d-print-none">
      <Breadcrumb class="mr-auto" />
      <v-btn color="primary" class="mr-4" depressed link to="/creation-de-sort/"><v-icon left>mdi-plus</v-icon> Créer un sort</v-btn>
      <v-btn :outlined="!isSpellInSpellBook" color="accent" class="mr-4" depressed @click="toggleSpellInSpellBook"><v-icon>mdi-book</v-icon> {{ displayToggleSpellButton }}</v-btn>
      <v-btn color="primary" class="mr-4" depressed link to="/mon-grimoire/">Mon Grimoire</v-btn>
    </div>
    <Spell :spell="$page" />
    <Edit />
  </div>
</template>

<script>
import Breadcrumb from '@theme/components/Breadcrumb'
import Spell from '@theme/components/Spell'
import Edit from '@theme/components/Edit'

export default {
  name: 'SpellLayout',

  components: {
    Breadcrumb,
    Spell,
    Edit
  },

  computed: {
    isSpellInSpellBook () {
      let isInSpellBook = false
      for (let s of this.$store.state.mySpells.spells) {
        if (s.key == this.$page.key) {
          isInSpellBook = true
        }
      }
      return isInSpellBook
    },

    displayToggleSpellButton () {
      if (this.isSpellInSpellBook) {
        return 'Supprimer de mon grimoire'
      }
      return 'Ajouter à mon grimoire'
    }
  },

  methods: {
    toggleSpellInSpellBook () {
      if (this.isSpellInSpellBook) {
        this.$store.commit('mySpells/removeSpell', this.$page)
      } else {
        this.$store.commit('mySpells/addSpell', this.$page)
      }
    }
  },

  mounted () {
    this.$store.commit('setHasRightDrawer', false)
    this.$store.commit('setRightDrawer', this.$vuetify.breakpoint.lgAndUp)
    this.$store.commit('setInRightDrawer', null)
  }
}
</script>

<style>
</style>
