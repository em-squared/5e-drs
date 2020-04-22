<template>
  <v-card class="d-flex flex-column mb-6 spell-card">
    <v-card-title>
      {{ spell.title }}
      <v-spacer></v-spacer>
      <v-card-actions v-if="showActions">
        <v-btn dark icon class="d-print-none mr-2" link :to="{ path: '/creation-de-sort/', query: { key: spell.key } }"><v-icon>mdi-pencil</v-icon></v-btn>
        <v-btn dark icon class="d-print-none" @click="$store.commit('mySpells/removeSpell', spell)"><v-icon>mdi-delete</v-icon></v-btn>
      </v-card-actions>
    </v-card-title>
    <v-card-text>
      <div class="spell-details mt-3">
        <div class="spell-school-level title" v-html="displaySchoolLevel()"></div>
        <v-row>
          <v-col cols="12" md="6" class="pb-0">
            <div class="spell-casting-time"><strong>Temps d'incantation</strong> : {{ spell.frontmatter.casting_time }}</div>
          </v-col>
          <v-col cols="12" md="6" class="pb-0">
            <div class="spell-range"><strong>Portée</strong> : {{ spell.frontmatter.range }}</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="pb-0">
            <div class="spell-components"><strong>Composantes</strong> :
              <template v-if="spell.frontmatter.components.verbal">V</template><template v-if="spell.frontmatter.components.somatic || spell.frontmatter.components.material">,</template>
              <template v-if="spell.frontmatter.components.somatic">S</template><template v-if="spell.frontmatter.components.material">,</template>
              <template v-if="spell.frontmatter.components.material">M</template>
              <template v-if="spell.frontmatter.components.material && spell.frontmatter.components.materials">({{spell.frontmatter.components.materials}})</template>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="pb-0">
            <div class="spell-duration"><strong>Durée</strong> : <span v-if="spell.frontmatter.concentration">concentration, </span>{{ spell.frontmatter.duration }}</div>
          </v-col>
        </v-row>
      </div>

      <v-divider class="mt-3" />

      <Content v-if="!spell.custom" :pageKey="spell.key" class="mt-4" />
      <div v-else v-html="md.render(spell.content)" class="mt-4"></div>

      <div class="spell-classes" v-if="!isShort">
        <strong>Classe</strong> : <span v-for="(c, idx) in spell.frontmatter.classes" :key="idx">{{c}}<template v-if="idx != spell.frontmatter.classes.length-1">, </template><template v-if="idx == spell.frontmatter.classes.length-1 && spell.frontmatter.customClasses">, </template></span>
        <template v-if="spell.frontmatter.customClasses">
          <template>{{ spell.frontmatter.customClasses }}</template>
        </template>
      </div>
      <p v-if="spell.frontmatter.source" class="source">Source : <em>{{ spell.frontmatter.source }}</em></p>
    </v-card-text>
  </v-card>
</template>

<script>
import { displaySchoolLevel } from '@theme/util/spellHelpers'
import MarkdownIt from 'markdown-it'

export default {
  name: 'SpellCard',

  props: ['spell', 'showActions', 'isShort'],

  data () {
    return {
      md: new MarkdownIt()
    }
  },

  methods: {
    displaySchoolLevel () {
      return displaySchoolLevel(this.spell.frontmatter)
    }
  },
}
</script>

<style lang="scss">
@import '../styles/colors';

.spell-card {
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
