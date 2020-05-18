<template>
  <span>
    <template v-if="tooltipObject">
      <router-link :to="{ path: tooltipObject.basePath + '#' + tooltipObject.id }">
        <v-tooltip content-class="condition-tooltip-container" top>
          <template v-slot:activator="{ on }">
            <em v-on="on">{{ l }}</em>
          </template>
          <div class="condition-tooltip">
            <p class="condition-tooltip-title"><strong>{{ tooltipObject.title }}</strong></p>
            <ul class="condition-description"><li v-for="d in tooltipObject.description" v-html="d"></li></ul>
          </div>
        </v-tooltip>
      </router-link>
    </template>
    <template v-else><em>{{ l }}</em></template>
  </span>
</template>

<script>
/*
** Condition tooltip
*/
import {displaySchoolLevel} from '@theme/util/spellHelpers'
import {tooltips} from '../../data/ruleTooltips.js'
import Router from 'vue-router'

export default {
  name: 'RuleTooltip',

  props: [
    'l', // label
    't' // condition
  ],

  data () {
    return {
      tooltipObject: null,
      tooltips: tooltips
    }
  },

  methods: {

  },

  mounted () {
    this.tooltipObject = this.tooltips[this.t]
    // console.log(this.tooltipObject)
  }
}
</script>

<style lang="scss">
</style>
