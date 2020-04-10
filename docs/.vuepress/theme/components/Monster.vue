<template>
  <main class="page content">

    <div class="theme-default-content">
      <h1>{{ $page.title }}</h1>
      <div class="monster-hit-points">
        <strong>Points de vie</strong>
        <span>{{ displayHP() }}</span>
      </div>
      <div class="monster-details">
        <!-- Statblock -->
        <div class="monster-ability-scores">
          <div class="ability-str">
            {{ displayAbilityScore(monster.abilityScores.for) }}
          </div>
          <div class="ability-dex">
            {{ displayAbilityScore(monster.abilityScores.dex) }}
          </div>
          <div class="ability-con">
            {{ displayAbilityScore(monster.abilityScores.con) }}
          </div>
          <div class="ability-int">
            {{ displayAbilityScore(monster.abilityScores.int) }}
          </div>
          <div class="ability-wis">
            {{ displayAbilityScore(monster.abilityScores.sag) }}
          </div>
          <div class="ability-cha">
            {{ displayAbilityScore(monster.abilityScores.cha) }}
          </div>
        </div>
        <div class="monster-saving-throws">
          <strong>Jets de sauvegarde</strong>
          <span class="monster-saving-throw" v-for="(savingThrow, idx) in monster.savingThrows">
            <template>{{displaySavingThrowBonus(savingThrow)}}</template><template v-if="idx < monster.savingThrows.length - 1">, </template>
          </span>
        </div>
        <div class="monster-skills">
          <strong>Compétences</strong>
          <span class="monster-skill" v-for="(skill, idx) in monster.skills">
            <template>{{displaySkillBonus(skill)}}</template><template v-if="idx < monster.skills.length - 1">, </template>
          </span>
        </div>
      </div>
    </div>

    <Content slot-key="special-traits" class="mt-4" />
    <Content slot-key="actions" class="mt-4" />
    <Content slot-key="reactions" class="mt-4" />
    <Content slot-key="legendary-actions" class="mt-4" />
    <Content/>

    <p v-if="$page.frontmatter.source" class="source">Source : <em>{{ monster.source }}</em></p>

  </main>
</template>

<script>
import {
  displayBonus,
  getModifier,
  displayAbilityScore,
  getProficiencyBonus
} from '@theme/util/monsterHelpers'

import {stats} from '../../data/stats.js'

export default {

  data () {
    return {
    }
  },

  computed: {
    monster () {
      return this.$page.frontmatter
    },
    proficiencyBonus () {
      return this.getProficiencyBonus()
    }
  },

  methods: {
    displayAbilityScore (value) { return displayAbilityScore(value) },
    getModifier (value) { return getModifier(value) },
    getProficiencyBonus () { return getProficiencyBonus(this.monster.level) },

    displaySavingThrowBonus (ability) {
      let result = stats.abilities[ability].abbr
      let bonus = displayBonus(getModifier(this.monster.abilityScores[ability]) + this.proficiencyBonus)
      result += ' ' + bonus
      return result
    },

    displaySkillBonus (skill) {
      let result = skill.name
      let bonus = getModifier(this.monster.abilityScores[skill.ability]) + this.proficiencyBonus
      if (skill.isExpert) {
        bonus += this.proficiencyBonus // Bonus de maître doublé pour les experts
      }
      bonus  = displayBonus(bonus)
      result += ' ' + bonus
      return result
    },

    displayHP () {
      if (this.monster.customHP) {
        return this.monster.customHP
      } else if (this.monster.level) {
        let hitDieSize = 8 // Dé de vie moyen par défaut
        if (this.monster.hitDieSize) {
          hitDieSize = this.monster.hitDieSize
        } else if (this.monster.size) {
          hitDieSize = stats.sizes[this.monster.size].hitDie
        }
        let hitDiceBonus = 1
        if (this.monster.level > 1) {
          hitDiceBonus = Math.floor(this.monster.level / 2)
        }
        let averageHP = this.monster.level * (hitDieSize / 2) + this.monster.level * getModifier(this.monster.abilityScores.con) + hitDiceBonus
        let conMod = ""
        if (getModifier(this.monster.abilityScores.con) != 0) {
          conMod = this.monster.level * getModifier(this.monster.abilityScores.con)
          conMod = displayBonus(conMod)
        }
        return averageHP + ' (' + this.monster.level + "d" + hitDieSize + conMod + ')'
      }
      return ""
    },
  },

  mounted () {
    //console.log(this.$page)
  }
}
</script>

<style lang="scss">
</style>
