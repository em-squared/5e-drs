<template>
  <main class="page content">
    <div class="theme-default-content">
      <div v-if="magicItems.length > 0">
        <masonry class="d-print-none" :cols="{'default': 2, 960: 1}" :gutter="24">
          <MagicItemCard v-for="(magicItem, idx) in magicItems" :magicItem="magicItem" :showActions="true" :key="idx">
          </MagicItemCard>
        </masonry>
        <div class="d-none d-print-block" v-for="magicItem in magicItems">
          <div>
            <h2 class="d-flex align-center">
              <div class="mr-4">{{ magicItem.title }}</div>
              <v-btn class="d-print-none mr-2" small depressed link :to="{ path: '/creation-de-sort/', query: { key: magicItem.key } }"><v-icon left>mdi-pencil</v-icon> Modifier</v-btn>
              <v-btn color="error" class="d-print-none" small depressed @click="$store.commit('myMagicItems/removeMagicItem', magicItem)"><v-icon left>mdi-delete</v-icon> Supprimer</v-btn>
            </h2>
          </div>
          <MagicItem :magicItem="magicItem" :isList="true" :hideTitle="true" />
        </div>
      </div>
      <template v-else>
        Vous n'avez aucun objet magique.
      </template>
    </div>

  </main>
</template>

<script>
import MagicItem from '@theme/components/MagicItem'
import MagicItemCard from '@theme/components/MagicItemCard'

export default {
  name: 'MyMagicItems',

  components: {
    MagicItem,
    MagicItemCard
  },

  data () {
    return {

    }
  },

  computed: {
    magicItems () {
      return this.$store.state.myMagicItems.magicItems
    }
  },

  methods: {
  }
}
</script>

<style lang="scss">
</style>
