<template>
  <main class="page content">
    <div class="theme-default-content">
      <div v-if="spells.length > 0">
        <masonry class="d-print-none" :cols="{'default': 2, 960: 1}" :gutter="24">
          <SpellCard v-for="(spell, idx) in spells" :spell="spell" :showActions="true" :key="idx">
          </SpellCard>
        </masonry>
        <div class="d-none d-print-block" v-for="spell in spells">
          <div>
            <h2 class="d-flex align-center">
              <div class="mr-4">{{ spell.title }}</div>
              <v-btn class="d-print-none mr-2" small depressed link :to="{ path: '/creation-de-sort/', query: { key: spell.key } }"><v-icon left>mdi-pencil</v-icon> Modifier</v-btn>
              <v-btn color="error" class="d-print-none" small depressed @click="$store.commit('mySpells/removeSpell', spell)"><v-icon left>mdi-delete</v-icon> Supprimer</v-btn>
            </h2>
          </div>
          <Spell :spell="spell" :isList="true" :hideTitle="true" />
        </div>
      </div>
      <template v-else>
        Vous n'avez écrit aucun sort dans votre grimoire.
      </template>
    </div>

  </main>
</template>

<script>
import Spell from '@theme/components/Spell'
import SpellCard from '@theme/components/SpellCard'

export default {
  name: 'MySpells',

  components: {
    Spell,
    SpellCard
  },

  data () {
    return {

    }
  },

  computed: {
    spells () {
      return this.$store.state.mySpells.spells
    }
  },

  methods: {
  }
}
</script>

<style lang="scss">
</style>
