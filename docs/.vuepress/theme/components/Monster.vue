<template>
  <main class="page content">

    <div class="theme-default-content">
      <h1>{{ $page.title }}</h1>
      <div class="monster-type-size-alignment">
        {{ displayMonsterTypeSizeAlignment() }}
      </div>
      <div class="monster-details">
        <!-- Statblock -->
        <div class="monster-armor-class">
          <strong>Classe d'armure</strong>
          <span>{{ displayAC() }}</span>
        </div>
        <div class="monster-hit-points">
          <strong>Points de vie</strong>
          <span>{{ displayHP() }}</span>
        </div>
        <div class="monster-movement">
          <strong>Vitesse</strong>
          <template>{{ displayMovement() }}</template>
        </div>
        <div class="monster-ability-scores d-flex">
          <div class="monster-ability-scores-physical d-flex">
            <div class="ability-str text-center">
              <div class="ability-label">
                <strong>For</strong>
              </div>
              <div class="ability-score">
                {{ displayAbilityScore(monster.abilityScores.for) }}
              </div>
            </div>
            <div class="ability-dex text-center">
              <div class="ability-label">
                <strong>Dex</strong>
              </div>
              <div class="ability-score">
                {{ displayAbilityScore(monster.abilityScores.dex) }}
              </div>
            </div>
            <div class="ability-con text-center">
              <div class="ability-label">
                <strong>Con</strong>
              </div>
              <div class="ability-score">
                {{ displayAbilityScore(monster.abilityScores.con) }}
              </div>
            </div>
          </div>
          <div class="monster-ability-scores-mental d-flex">
            <div class="ability-int text-center">
              <div class="ability-label">
                <strong>Int</strong>
              </div>
              <div class="ability-score">
                {{ displayAbilityScore(monster.abilityScores.int) }}
              </div>
            </div>
            <div class="ability-wis text-center">
              <div class="ability-label">
                <strong>Sag</strong>
              </div>
              <div class="ability-score">
                {{ displayAbilityScore(monster.abilityScores.sag) }}
              </div>
            </div>
            <div class="ability-cha text-center">
              <div class="ability-label">
                <strong>Cha</strong>
              </div>
              <div class="ability-score">
                {{ displayAbilityScore(monster.abilityScores.cha) }}
              </div>
            </div>
          </div>
        </div>
        <div class="monster-saving-throws" v-if="monster.savingThrows">
          <strong>Jets de sauvegarde</strong>
          <span class="monster-saving-throw" v-for="(savingThrow, idx) in monster.savingThrows">
            <template>{{displaySavingThrowBonus(savingThrow)}}</template><template v-if="idx < monster.savingThrows.length - 1">, </template>
          </span>
        </div>
        <div class="monster-skills" v-if="monster.skills">
          <strong>Compétences</strong>
          <span class="monster-skill" v-for="(skill, idx) in monster.skills">
            <template>{{displaySkillBonus(skill)}}</template><template v-if="idx < monster.skills.length - 1">, </template>
          </span>
        </div>
        <div class="monster-damage-type-vulnerabilities" v-if="monster.damageTypeVulnerabilities">
          <strong>Vulnérabilité aux dégâts</strong>
          <span v-html="displayDamageTypes(monster.damageTypeVulnerabilities)"></span>
        </div>
        <div class="monster-damage-type-resistances" v-if="monster.damageTypeResistances">
          <strong>Résistance aux dégâts</strong>
          <span v-html="displayDamageTypes(monster.damageTypeResistances)"></span>
        </div>
        <div class="monster-damage-type-immunities" v-if="monster.damageTypeImmunities">
          <strong>Immunité contre les dégâts</strong>
          <span v-html="displayDamageTypes(monster.damageTypeImmunities)"></span>
        </div>
        <div class="monster-condition-immunities" v-if="monster.conditionImmunities">
          <strong>Immunité contre les états</strong>
          <span v-html="displayConditionImmunities()"></span>
        </div>
        <div class="monster-senses">
          <strong>Sens</strong>
          <template>{{ displaySenses() }}</template>
        </div>
        <div class="monster-languages">
          <strong>Langes</strong>
          <template v-if="monster.languages">{{ displayLanguages() }}</template>
          <template v-else>—</template>
        </div>
        <div class="monster-challenge">
          <strong>Dangerosité</strong>
          <template>{{ displayChallenge() }}</template>
        </div>
        <div class="monster-environments" v-if="monster.environments">
          <strong>Environnements :</strong>
          <span v-html="displayList(monster.environments)"></span>
        </div>
        <div class="monster-dungeon-types" v-if="monster.dungeonTypes">
          <strong>Types de donjons :</strong>
          <span v-html="displayList(monster.dungeonTypes)"></span>
        </div>
      </div>
    </div>

    <Content class="mt-4"/>

    <p v-if="$page.frontmatter.source" class="source">Source : <em>{{ monster.source }}</em></p>

  </main>
</template>

<script>
import {
  displayBonus,
  getModifier,
  displayAbilityScore,
  getProficiencyBonus,
  displayChallenge,
  displayMonsterTypeSizeAlignment
} from '@theme/util/monsterHelpers'

import {stats} from '../../data/stats.js'
import {armorTypes} from '../../data/armorTypes.js'

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
    },
    passivePerception () {
      let result = 10 + getModifier(this.monster.abilityScores.sag)
      if (this.monster.skills) {
        this.monster.skills.forEach((skill, idx) => {
          if (skill.name == 'perception') {
            if (skill.isExpert) {
              result += this.proficiencyBonus * 2
            } else {
              result += this.proficiencyBonus
            }
          }
        })
      }
      return result
    },
  },

  methods: {
    displayList (list) { return list.join(', ') },
    displayAbilityScore (value) { return displayAbilityScore(value) },
    getModifier (value) { return getModifier(value) },
    getProficiencyBonus () { return getProficiencyBonus(this.monster.challenge) },

    displayMonsterTypeSizeAlignment () {
      return displayMonsterTypeSizeAlignment(this.monster)
    },

    displaySavingThrowBonus (ability) {
      let result = stats.abilities[ability].abbr
      let bonus = displayBonus(getModifier(this.monster.abilityScores[ability]) + this.proficiencyBonus)
      result += ' ' + bonus
      return result
    },

    displaySkillBonus (skill) {
      if (skill.name == 'Perception') {
        if (skill.isExpert) {
          this.monster.perceptionProficiency == 'expert'
        } else {
          this.monster.perceptionProficiency == 'proficient'
        }
      }
      let result = stats.skills[skill.name].label
      let bonus = getModifier(this.monster.abilityScores[stats.skills[skill.name].ability]) + this.proficiencyBonus
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
      } else if (this.monster.hitDiceCount) {
        let hitDieSize = 8 // Dé de vie moyen par défaut
        if (this.monster.hitDieSize) {
          hitDieSize = this.monster.hitDieSize
        } else if (this.monster.size) {
          hitDieSize = stats.sizes[this.monster.size].hitDie
        }
        let hitPointsBonus = 1
        if (this.monster.hitDiceCount > 1) {
          hitPointsBonus = Math.floor(this.monster.hitDiceCount / 2)
        }
        let averageHP = this.monster.hitDiceCount * (hitDieSize / 2) + this.monster.hitDiceCount * getModifier(this.monster.abilityScores.con) + hitPointsBonus
        let conMod = ""
        if (getModifier(this.monster.abilityScores.con) != 0) {
          conMod = this.monster.hitDiceCount * getModifier(this.monster.abilityScores.con)
          conMod = displayBonus(conMod)
        }
        return averageHP + ' (' + this.monster.hitDiceCount + "d" + hitDieSize + conMod + ')'
      }
      return ""
    },

    displayChallenge () {
      return displayChallenge(this.monster.challenge, true)
    },

    displayMovement () {
      let result = ''
      if (this.monster.movement.walk) {
        result += this.monster.movement.walk + ' m'
      } else {
        result += '0 m'
      }
      if (this.monster.movement.climb) {
        if (result != '') {
          result += ', '
        }
        result += 'escalade ' + this.monster.movement.climb + ' m'
      }
      if (this.monster.movement.burrow) {
        if (result != '') {
          result += ', '
        }
        result += 'fouissement ' + this.monster.movement.burrow + ' m'
      }
      if (this.monster.movement.swim) {
        if (result != '') {
          result += ', '
        }
        result += 'nage ' + this.monster.movement.swim + ' m'
      }
      if (this.monster.movement.fly) {
        if (result != '') {
          result += ', '
        }
        result += 'vol ' + this.monster.movement.fly + ' m'
        if (this.monster.movement.hover) {
          result += ' (vol stationnaire)'
        }
      }
      return result
    },

    displayAC () {
      let ac = 10
      let hasMageArmor = false
      let mageArmorAc = 13
      let mageArmor = ''
      let armor = ''
      // Le monstre n'a pas d'armure.
      // CA = 10 + Dex
      if (!this.monster.ac.armorType) {
        ac = 10 + getModifier(this.monster.abilityScores.dex)
      } else {
        // Le type d'armure n'est pas formalisé. On prend la valeur brute
        if (this.monster.ac.armorType == 'custom') {
          return this.monster.ac.value
        }

        // Le monstre a une armure naturelle.
        // CA =  10 + Armure naturelle + Dex
        if (this.monster.ac.armorType == 'armure naturelle') {
          armor = this.monster.ac.armorType
          ac = ac + this.monster.ac.value + getModifier(this.monster.abilityScores.dex)
        } else if (this.monster.ac.armorType == 'armure du mage') {
          hasMageArmor = true
          ac = ac + getModifier(this.monster.abilityScores.dex)
          mageArmorAc = mageArmorAc + getModifier(this.monster.abilityScores.dex)
          armor = mageArmorAc + ' avec armure du mage'
        } else {
          // Le monstre a un type d'armure défini.
          // On calcule sa CA selon le type
          let armorType = armorTypes[this.monster.ac.armorType]

          // Le type d'armure n'existe pas. On l'ignore.
          // CA = 10 + Dex
          if (!armorType) {
            ac = ac + getModifier(this.monster.abilityScores.dex)
          } else {
            // L'armure n'impose pas de limite de Dex
            armor = this.monster.ac.armorType
            if (armorType.maxDex === false) {
              ac = armorType.value + getModifier(this.monster.abilityScores.dex)
            } else {
              // La limite de Dex de l'armure est inférieure à la Dex du monstre
              if (armorType.maxDex <= getModifier(this.monster.abilityScores.dex)) {
                ac = armorType.value + armorType.maxDex
              } else {
                ac = armorType.value + getModifier(this.monster.abilityScores.dex)
              }
            }
          }
        }
      }


      // Le monstre a un bouclier. Sa CA augmente de 2.
      if (this.monster.ac.hasShield) {
        ac = ac + 2
        mageArmorAc = mageArmorAc + 2
        if (armor != '') {
          armor += ', '
        }
        armor += 'bouclier'

        if (hasMageArmor) {
          armor = mageArmorAc + ' avec armure du mage, bouclier'
        }
      }

      if (armor != '') {
        ac += ' (' + armor + ')'
      }

      return ac
    },

    displayLanguages () {
      return this.monster.languages.join(', ')
    },

    displaySenses () {
      let result = ''
      if (this.monster.senses) {
        if (this.monster.senses.tremorsense) {
          result += 'perception des vibrations ' + this.monster.senses.tremorsense + ' m'
        }
        if (this.monster.senses.blindsight) {
          if (result != '') {
            result += ', '
          }
          result += 'vision aveugle ' + this.monster.senses.blindsight + ' m'
        }
        if (this.monster.senses.darkvision) {
          if (result != '') {
            result += ', '
          }
          result += 'vision dans le noir ' + this.monster.senses.darkvision + ' m'
        }
        if (this.monster.senses.truesight) {
          if (result != '') {
            result += ', '
          }
          result += 'vision parfaite ' + this.monster.senses.truesight + ' m'
        }
        if (result != '') {
          result += ', '
        }
      }

      result += 'Perception passive ' + this.passivePerception
      return result
    },

    displayConditionImmunities () {
      let result = ''
      this.monster.conditionImmunities.forEach((condition, idx) => {
        if (result != '') {
          if (idx == this.monster.conditionImmunities.length - 1) {
            result += ' et '
          } else {
            result += ', '
          }
        }
        result += '<em>' + stats.conditions[condition].label + '</em>'
      })
      return result
    },

    displayDamageTypes (damageTypes) {
      let result = ''
      damageTypes.forEach((damageType, idx) => {
        if (result != '') {
          if (idx == damageTypes.length - 1) {
            result += ' et '
          } else {
            result += ', '
          }
        }
        result += stats.damageTypes[damageType].label
      })
      return result
    }
  },

  mounted () {
    //console.log(this.$page)
  }
}
</script>

<style lang="scss">
@import '../styles/colors';

.monster-ability-scores {
  margin: 12px 0;
  
  .ability-label, .ability-score {
    padding: 0 8px;
  }

  .ability-label {
    border-bottom: 1px solid $color-dragon;
  }

}
</style>
