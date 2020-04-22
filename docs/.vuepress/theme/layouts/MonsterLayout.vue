<template>
  <div class="monster">
    <div class="d-flex align-center mb-4 d-print-none">
      <Breadcrumb class="mr-auto" />
      <v-btn color="primary" class="mr-4" depressed link to="/creation-de-monstre-pnj/"><v-icon left>mdi-plus</v-icon> Créer un monstre</v-btn>
      <v-btn :outlined="!isMonsterInBestiary" color="accent" class="mr-4" depressed @click="toggleMonsterInBestiary"><v-icon>mdi-book</v-icon> {{ displayToggleMonsterButton }}</v-btn>
      <v-btn color="primary" class="mr-4" depressed link to="/mon-bestiaire/">Mon Bestiaire</v-btn>
    </div>
    <Monster :monster="$page" />
    <Edit />
  </div>
</template>

<script>
import Breadcrumb from '@theme/components/Breadcrumb'
import Monster from '@theme/components/Monster'
import Edit from '@theme/components/Edit'

export default {
  name: 'MonsterLayout',

  components: {
    Breadcrumb,
    Monster,
    Edit
  },

  computed: {
    isMonsterInBestiary () {
      let isInBestiary = false
      for (let s of this.$store.state.myMonsters.monsters) {
        if (s.key == this.$page.key) {
          isInBestiary = true
        }
      }
      return isInBestiary
    },

    displayToggleMonsterButton () {
      if (this.isMonsterInBestiary) {
        return 'Supprimer de mon bestiaire'
      }
      return 'Ajouter à mon bestiaire'
    }
  },

  methods: {
    toggleMonsterInBestiary () {
      if (this.isMonsterInBestiary) {
        this.$store.commit('myMonsters/removeMonster', this.$page)
      } else {
        this.$store.commit('myMonsters/addMonster', this.$page)
      }
    }
  },

  mounted () {
    this.$store.commit('setHasRightDrawer', false)
    this.$store.commit('setRightDrawer', false)
    this.$store.commit('setInRightDrawer', null)
  }
}
</script>

<style>
</style>
