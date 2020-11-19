<template>
  <main class="page content">

    <div class="theme-default-content">
      <template v-if="!hideTitle">
        <h1 v-if="!isList">{{ spell.title }}</h1>
        <h2 v-else>{{ spell.title }}</h2>
      </template>
      <div class="spell-details">
        <div class="spell-school-level title" v-html="displaySchoolLevel()"></div>
        <div class="spell-casting-time"><strong>Temps d'incantation</strong> : {{ spell.frontmatter.casting_time }}</div>
        <div class="spell-range"><strong>Portée</strong> : {{ spell.frontmatter.range }}</div>
        <div class="spell-components"><strong>Composantes</strong> :
          <template v-if="spell.frontmatter.components.verbal">V</template><template v-if="spell.frontmatter.components.verbal && (spell.frontmatter.components.somatic || spell.frontmatter.components.material)">,</template>
          <template v-if="spell.frontmatter.components.somatic">S</template><template v-if="spell.frontmatter.components.somatic && spell.frontmatter.components.material">,</template>
          <template v-if="spell.frontmatter.components.material">M</template>
          <template v-if="spell.frontmatter.components.material && spell.frontmatter.components.materials">({{spell.frontmatter.components.materials}})</template>
        </div>
        <div class="spell-duration"><strong>Durée</strong> : <span v-if="spell.frontmatter.concentration">concentration, </span>{{ spell.frontmatter.duration }}</div>
        <div class="spell-classes" v-if="!isShort">
          <strong>Classe</strong> : <span v-for="(c, idx) in spell.frontmatter.classes" :key="idx">{{c}}<template v-if="idx != spell.frontmatter.classes.length-1">, </template><template v-if="idx == spell.frontmatter.classes.length-1 && spell.frontmatter.customClasses">, </template></span>
          <template v-if="spell.frontmatter.customClasses">
            <template>{{ spell.frontmatter.customClasses }}</template>
          </template>
        </div>
      </div>
    </div>

    <template v-if="!isShort">
      <Content v-if="!spell.custom" :pageKey="spell.key" class="mt-4" />
      <div v-else v-html="md.render(spell.content)" class="mt-4"></div>
    </template>
    <div v-else v-html="spell.frontmatter.description" class="mt-4"></div>

    <p v-if="spell.frontmatter.source" class="source">Source : <em>{{ spell.frontmatter.source }}</em></p>
    <p v-if="spell.author" class="source">Auteur : <em>{{ spell.author }}</em></p>

  </main>
</template>

<script>
import { displaySchoolLevel } from '@theme/util/spellHelpers'
import MarkdownIt from 'markdown-it'

export default {
  name: 'Spell',

  props: ['spell', 'isList', 'hideTitle', 'isShort'],

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

  mounted () {
    // console.log(this.spell)
  }
}
</script>

<style lang="scss">
</style>
