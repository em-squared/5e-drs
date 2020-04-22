<template>
  <v-card class="d-flex flex-column mb-6 monster-card">
    <v-card-title>
      {{ monster.title }}
      <v-spacer></v-spacer>
      <v-card-actions v-if="showActions">
        <v-btn dark icon class="d-print-none mr-2" link :to="{ path: '/creation-de-monstre-pnj/', query: { key: monster.key } }"><v-icon>mdi-pencil</v-icon></v-btn>
        <v-btn dark icon class="d-print-none" @click="$store.commit('myMonsters/removeMonster', monster)"><v-icon>mdi-delete</v-icon></v-btn>
      </v-card-actions>
    </v-card-title>
    <v-card-text>
      <div class="monster-card-details mt-3">
        <Monster :monster="monster" :hideTitle="true" />
      </div>

      <v-divider class="mt-3" />

      <p v-if="monster.frontmatter.source" class="source">Source : <em>{{ monster.frontmatter.source }}</em></p>
    </v-card-text>
  </v-card>
</template>

<script>
import Monster from '@theme/components/Monster'
import { displaySchoolLevel } from '@theme/util/monsterHelpers'
import MarkdownIt from 'markdown-it'

export default {
  name: 'MonsterCard',

  components: { Monster },

  props: ['monster', 'showActions', 'isShort'],

  data () {
    return {
      md: new MarkdownIt()
    }
  },

  methods: {
    displaySchoolLevel () {
      return displaySchoolLevel(this.monster.frontmatter)
    }
  },
}
</script>

<style lang="scss">
@import '../styles/colors';

.monster-card {
  .v-card__title {
    background-color: $color-dragon;
    color: #fff;
    padding-top: 0;
    padding-bottom: 0;
  }

  .monster-card-details {
    column-count: 2;

    .monster-ability-scores, .break-avoid {
      break-inside: avoid;
    }
  }

  p.source {
    margin-bottom: 0;
  }

  .break-avoid {
    break-inside: avoid;
  }
}
</style>
