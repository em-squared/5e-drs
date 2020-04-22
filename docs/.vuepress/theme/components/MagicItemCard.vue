<template>
  <v-card class="d-flex flex-column mb-6 magic-item-card">
    <v-card-title>
      {{ magicItem.title }}
      <v-spacer></v-spacer>
      <v-card-actions v-if="showActions">
        <v-btn dark icon class="d-print-none mr-2" link :to="{ path: '/creation-d-objet-magique/', query: { key: magicItem.key } }"><v-icon>mdi-pencil</v-icon></v-btn>
        <v-btn dark icon class="d-print-none" @click="$store.commit('myMagicItems/removeMagicItem', magicItem)"><v-icon>mdi-delete</v-icon></v-btn>
      </v-card-actions>
    </v-card-title>
    <v-card-text>
      <div class="magic-item-details mt-3">
        <div class="magic-item-rarity-attunement title" v-html="displayItemMeta()"></div>
      </div>

      <v-divider class="mt-3" />

      <Content v-if="!magicItem.custom" :pageKey="magicItem.key" class="mt-4" />
      <div v-else v-html="md.render(magicItem.content)" class="mt-4"></div>

      <p v-if="magicItem.frontmatter.source" class="source">Source : <em>{{ magicItem.frontmatter.source }}</em></p>
    </v-card-text>
  </v-card>
</template>

<script>
import { displayItemMeta } from '@theme/util/magicItemHelpers'
import MarkdownIt from 'markdown-it'

export default {
  name: 'MagicItemCard',

  props: ['magicItem', 'showActions', 'isShort'],

  data () {
    return {
      md: new MarkdownIt()
    }
  },

  methods: {
    displayItemMeta () {
      return displayItemMeta(this.magicItem.frontmatter)
    }
  },
}
</script>

<style lang="scss">
@import '../styles/colors';

.magic-item-card {
  .v-card__title {
    background-color: $color-dragon;
    color: #fff;
    padding-top: 0;
    padding-bottom: 0;
  }

  p.source {
    margin-bottom: 0;
  }
}
</style>
