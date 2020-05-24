<template>
  <div class="spell">
    <div class="d-flex flex-wrap align-center d-print-none">
      <Breadcrumb class="mr-auto b-4" />
      <div class="d-flex flex-wrap align-center">
        <v-btn color="primary" class="mr-4 mb-4" depressed link to="/creation-de-sort/"><v-icon left>mdi-plus</v-icon> Créer un sort</v-btn>
        <v-btn :outlined="!isSpellInSpellBook" color="accent" class="mr-4 mb-4" depressed @click="toggleSpellInSpellBook"><v-icon>mdi-book</v-icon> {{ displayToggleSpellButton }}</v-btn>
        <MySpellsButton />
      </div>
    </div>
    <Spell :spell="$page" />
    <Edit />
  </div>
</template>

<script>
import Breadcrumb from '@theme/components/Breadcrumb'
import Spell from '@theme/components/Spell'
import MySpellsButton from '@theme/global-components/MySpellsButton'
import Edit from '@theme/components/Edit'
import { isResourceInLibrary } from '@theme/util'

export default {
  name: 'SpellLayout',

  components: {
    Breadcrumb,
    Spell,
    MySpellsButton,
    Edit
  },

  computed: {
    isSpellInSpellBook () {
      return isResourceInLibrary(this.$page, this.$store.state.mySpells.spells)
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
        this.$store.commit('setSnackbarText', "Le sort " + this.$page.title + " a été supprimé de votre grimoire")
        this.$store.commit('setIsOpenSnackbar', true)
      } else {
        this.$store.commit('mySpells/addSpell', this.$page)
        this.$store.commit('setSnackbarText', "Le sort " + this.$page.title + " a été ajouté à votre grimoire")
        this.$store.commit('setIsOpenSnackbar', true)
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
