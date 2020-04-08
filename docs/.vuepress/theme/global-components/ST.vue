<template>
  <span>
    <router-link :to="{ path: spellPath }" v-if="spell">
      <v-tooltip content-class="spell-tooltip-container" top>
        <template v-slot:activator="{ on }">
          <em v-on="on">{{ label }}</em>
        </template>
        <div class="spell-tooltip">
          <p class="spell-tooltip-title"><strong>{{ spell.title }}</strong></p>
          <div class="spell-details">
            <div class="spell-school-level" v-html="displaySchoolLevel()"></div>
            <div class="spell-casting-time"><strong>Temps d'incantation</strong> : {{ spell.frontmatter.casting_time }}</div>
            <div class="spell-range"><strong>Portée</strong> : {{ spell.frontmatter.range }}</div>
            <div class="spell-components"><strong>Composantes</strong> :
              <template v-if="spell.frontmatter.components.verbal">V</template><template v-if="spell.frontmatter.components.somatic || spell.frontmatter.components.material">,</template>
              <template v-if="spell.frontmatter.components.somatic">S</template><template v-if="spell.frontmatter.components.material">,</template>
              <template v-if="spell.frontmatter.components.material">M</template>
              <template v-if="spell.frontmatter.components.materials">({{spell.frontmatter.components.materials}})</template>
            </div>
            <div class="spell-duration"><strong>Durée</strong> : <span v-if="spell.frontmatter.concentration">concentration, </span>{{ spell.frontmatter.duration }}</div>
          </div>
          <div class="spell-description" v-html="spell.frontmatter.description"></div>
        </div>
      </v-tooltip>
    </router-link>
    <router-link :to="{ path: spellPath }" v-else><em>{{ label }}</em></router-link>
  </span>
</template>

<script>
/*
** Spell tooltip
*/
import {displaySchoolLevel} from '@theme/util/spellHelpers'

export default {
  name: 'SpellTooltip',

  props: [
    'l', // label
    's' // spell slug
  ],

  data () {
    return {
      spellPath: '',
      spell: ''
    }
  },

  computed: {
    label () {
      if (this.l) {
        return this.l
      } else if (this.spell) {
        return this.spell.title.toLowerCase()
      }
      return '[Sort non trouvé]'
    }
  },

  methods: {
    displaySchoolLevel () {
      return displaySchoolLevel(this.spell.frontmatter)
    }
  },

  mounted () {
    this.spellPath = '/grimoire/' + this.s + '/'
    this.spell = this.$site.pages.find((el) => el.path === this.spellPath || el.path === this.spellPath + "/")
  }
}
</script>

<style lang="scss">
</style>
