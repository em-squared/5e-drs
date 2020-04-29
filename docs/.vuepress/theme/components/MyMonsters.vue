<template>
  <main class="page content">
    <div class="theme-default-content">
      <template v-if="monsters.length > 0">
        <MonsterCard class="d-print-none" v-for="(monster, idx) in monsters" :monster="monster" :showActions="true" :key="idx">
        </MonsterCard>
        <div class="d-none d-print-block" v-for="monster in monsters">
          <div>
            <h1 class="d-flex align-center">
              <div class="mr-4">{{ monster.title }}</div>
              <v-btn class="d-print-none mr-2" small depressed link :to="{ path: '/creation-de-monstre-pnj/', query: { key: monster.key } }"><v-icon left>mdi-pencil</v-icon> Modifier</v-btn>
              <v-btn color="error" class="d-print-none" small depressed @click="$store.commit('myMonsters/removeMonster', monster)"><v-icon left>mdi-delete</v-icon> Supprimer</v-btn>
            </h1>
          </div>
          <Monster :monster="monster" :isList="true" :hideTitle="true" />
        </div>
      </template>
      <template v-else>
        Vous n'avez recensé aucun monstre dans votre bestiaire.
      </template>
    </div>

  </main>
</template>

<script>
import Monster from '@theme/components/Monster'
import MonsterCard from '@theme/components/MonsterCard'

export default {
  name: 'MyMonsters',

  components: {
    Monster,
    MonsterCard
  },

  data () {
    return {

    }
  },

  computed: {
    monsters () {
      return this.$store.state.myMonsters.monsters
    }
  },

  methods: {
  }
}
</script>

<style lang="scss">
</style>
