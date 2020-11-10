<template>
  <main class="page content">

    <div class="theme-default-content">
      <template v-if="!hideTitle">
        <h1 v-if="!isList">{{ monster.title }}</h1>
        <h2 v-else>{{ monster.title }}</h2>
      </template>
      <div class="monster-type-size-alignment title">
        {{ displayMonsterTypeSizeAlignment() }}
      </div>
      <div class="monster-details">
        <div class="break-avoid">
          <!-- Statblock -->
          <div class="monster-armor-class">
            <strong>Classe d'armure</strong>
            <span>{{ displayAC() }}</span>
          </div>
          <div class="monster-hit-points">
            <strong v-if="$store.state.l5r">Points de combativité</strong>
            <strong v-else>Points de vie</strong>
            <span>{{ hp }}</span>
          </div>
          <div v-if="$store.state.l5r" class="monster-vitality-points">
            <strong>Points de vitalité</strong>
            <span>{{ vp }}</span>
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
                  {{ displayAbilityScore(monsterStats.abilityScores.for) }}
                </div>
              </div>
              <div class="ability-dex text-center">
                <div class="ability-label">
                  <strong>Dex</strong>
                </div>
                <div class="ability-score">
                  {{ displayAbilityScore(monsterStats.abilityScores.dex) }}
                </div>
              </div>
              <div class="ability-con text-center">
                <div class="ability-label">
                  <strong>Con</strong>
                </div>
                <div class="ability-score">
                  {{ displayAbilityScore(monsterStats.abilityScores.con) }}
                </div>
              </div>
            </div>
            <div class="monster-ability-scores-mental d-flex">
              <div class="ability-int text-center">
                <div class="ability-label">
                  <strong>Int</strong>
                </div>
                <div class="ability-score">
                  {{ displayAbilityScore(monsterStats.abilityScores.int) }}
                </div>
              </div>
              <div class="ability-wis text-center">
                <div class="ability-label">
                  <strong>Sag</strong>
                </div>
                <div class="ability-score">
                  {{ displayAbilityScore(monsterStats.abilityScores.sag) }}
                </div>
              </div>
              <div class="ability-cha text-center">
                <div class="ability-label">
                  <strong>Cha</strong>
                </div>
                <div class="ability-score">
                  {{ displayAbilityScore(monsterStats.abilityScores.cha) }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="break-avoid">
          <div class="monster-saving-throws" v-if="monsterStats.customSavingThrows || (monsterStats.savingThrows && monsterStats.savingThrows.length > 0)">
            <strong>Jets de sauvegarde</strong>
              <template v-if="monsterStats.customSavingThrows">{{monsterStats.customSavingThrows}}</template>
              <template v-else>
                <template v-for="(savingThrow, idx) in monsterStats.savingThrows">
                  <template>{{displaySavingThrowBonus(savingThrow)}}</template><template v-if="idx < monsterStats.savingThrows.length - 1">, </template>
                </template>
              </template>
          </div>
          <div class="monster-skills" v-if="monsterStats.customSkills || (monsterStats.skills && monsterStats.skills.length > 0)">
            <strong>Compétences</strong>
            <template v-if="monsterStats.customSkills">{{monsterStats.customSkills}}</template>
            <template v-else>
              <span v-for="(skill, idx) in monsterStats.skills">
                <template>{{displaySkillBonus(skill)}}</template><template v-if="idx < monsterStats.skills.length - 1">, </template>
              </span>
            </template>
          </div>
          <div class="monster-damage-type-vulnerabilities" v-if="monsterStats.customDamageTypeVulnerabilities || (monsterStats.damageTypeVulnerabilities && monsterStats.damageTypeVulnerabilities.length > 0)">
            <strong>Vulnérabilité aux dégâts</strong>
            <span v-if="monsterStats.customDamageTypeVulnerabilities">{{ monsterStats.customDamageTypeVulnerabilities }}</span>
            <span v-else v-html="displayDamageTypes(monsterStats.damageTypeVulnerabilities)"></span>
          </div>
          <div class="monster-damage-type-resistances" v-if="monsterStats.damageTypeResistances && monsterStats.damageTypeResistances.length > 0">
            <strong>Résistance aux dégâts</strong>
            <span v-html="displayDamageTypes(monsterStats.damageTypeResistances)"></span>
          </div>
          <div class="monster-damage-type-immunities" v-if="monsterStats.damageTypeImmunities && monsterStats.damageTypeImmunities.length > 0">
            <strong>Immunité contre les dégâts</strong>
            <span v-html="displayDamageTypes(monsterStats.damageTypeImmunities)"></span>
          </div>
          <div class="monster-condition-immunities" v-if="monsterStats.conditionImmunities && monsterStats.conditionImmunities.length > 0">
            <strong>Immunité contre <template v-if="monsterStats.conditionImmunities.length == 1">l'état</template><template v-else>les états</template></strong>
            <!-- <span v-html="displayConditionImmunities()"></span> -->
            <span v-for="(condition, idx) in monsterStats.conditionImmunities">
              <template v-if="idx < monsterStats.conditionImmunities.length - 2 && idx > 1">,</template>
              <template v-if="idx == monsterStats.conditionImmunities.length - 1 && monsterStats.conditionImmunities.length > 1">et</template>
              <em><router-link :to="{ path: conditionPath(condition) }">{{displayCondition(condition)}}</router-link></em>
            </span>
          </div>
          <div class="monster-senses">
            <strong>Sens</strong>
            <template>{{ displaySenses() }}</template>
          </div>
          <div class="monster-languages">
            <strong>Langues</strong>
            <template>{{ languages }}</template>
          </div>
          <div class="monster-challenge">
            <strong>Dangerosité</strong>
            <template>{{ displayChallenge() }}</template>
          </div>
          <div class="monster-environments" v-if="monsterStats.environments">
            <strong>Environnements :</strong>
            <span v-html="displayList(monsterStats.environments)"></span>
          </div>
          <div class="monster-dungeon-types" v-if="monsterStats.dungeonTypes">
            <strong>Types de donjons :</strong>
            <span v-html="displayList(monsterStats.dungeonTypes)"></span>
          </div>
        </div>
      </div>
    </div>

    <Content v-if="!monster.custom" :pageKey="monster.key" class="mt-4" />
    <div v-else v-html="md.render(monster.content)" class="mt-4"></div>

    <p v-if="$page.frontmatter.source" class="source">Source : <em>{{ monsterStats.source }}</em><template v-if="monsterStats.source_page">, page {{ monsterStats.source_page }}</template></p>
    <p v-if="monster.author" class="source">Auteur : <em>{{ monster.author }}</em></p>

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
import MarkdownIt from 'markdown-it'

export default {

  props: ['monster', 'isList', 'hideTitle'],

  data () {
    return {
      md: new MarkdownIt()
    }
  },

  computed: {
    monsterStats () {
      return this.monster.frontmatter
    },
    proficiencyBonus () {
      return this.getProficiencyBonus()
    },
    passivePerception () {
      let result = 10 + getModifier(this.monsterStats.abilityScores.sag)
      if (this.monsterStats.skills) {
        this.monsterStats.skills.forEach((skill, idx) => {
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

    hp () {
      if (this.monsterStats.customHP) {
        return this.monsterStats.customHP
      } else if (this.monsterStats.hitDiceCount) {
        let hitDieSize = 8 // Dé de vie moyen par défaut
        if (this.monsterStats.hitDieSize) {
          hitDieSize = this.monsterStats.hitDieSize
        } else if (this.monsterStats.size) {
          hitDieSize = stats.sizes[this.monsterStats.size].hitDie
        }
        let hitPointsBonus = 0
        if (this.monsterStats.hitDiceCount > 1) {
          hitPointsBonus = Math.floor(this.monsterStats.hitDiceCount / 2)
        }
        let averageHP = this.monsterStats.hitDiceCount * (hitDieSize / 2) + this.monsterStats.hitDiceCount * getModifier(this.monsterStats.abilityScores.con) + hitPointsBonus
        let conMod = ""
        if (getModifier(this.monsterStats.abilityScores.con) != 0) {
          conMod = this.monsterStats.hitDiceCount * getModifier(this.monsterStats.abilityScores.con)
          conMod = displayBonus(conMod)
        }
        return averageHP + ' (' + this.monsterStats.hitDiceCount + "d" + hitDieSize + conMod + ')'
      }
      return ""
    },

    vp () {
      return Number(this.monsterStats.abilityScores.con) + 4 + Math.floor(this.monsterStats.challenge)
    },

    languages () {
      let result = this.monsterStats.languages.join(', ')
      if (this.monsterStats.customLanguage) {
        if (result != '') {
          result += ', '
        }
        result += this.monsterStats.customLanguage
      }
      if (this.monsterStats.telepathy) {
        if (result != '') {
          result += ', '
        }
        result += 'télépathie ' + this.monsterStats.telepathy + ' m'
      }
      if (result == '') {
        return '—'
      }
      return result
    },
  },

  methods: {
    displayList (list) { return list.join(', ') },
    displayAbilityScore (value) { return displayAbilityScore(value) },
    getModifier (value) { return getModifier(value) },
    getProficiencyBonus () {
      if (this.monsterStats.proficiencyBonus) {
        return parseInt(this.monsterStats.proficiencyBonus)
      }
      return getProficiencyBonus(this.monsterStats.challenge)
    },

    displayMonsterTypeSizeAlignment () {
      return displayMonsterTypeSizeAlignment(this.monsterStats)
    },

    displaySavingThrowBonus (ability) {
      let result = stats.abilities[ability].abbr
      let bonus = displayBonus(getModifier(this.monsterStats.abilityScores[ability]) + this.proficiencyBonus)
      result += ' ' + bonus
      return result
    },

    displaySkillBonus (skill) {
      if (skill.name == 'custom') {
        return skill.value
      }
      let result = stats.skills[skill.name].label
      if (skill.invalid) {
        result += ' ' + displayBonus(skill.value)
        return result
      }
      let bonus = getModifier(this.monsterStats.abilityScores[stats.skills[skill.name].ability]) + this.proficiencyBonus
      if (skill.isExpert) {
        bonus += this.proficiencyBonus // Bonus de maître doublé pour les experts
      }
      bonus  = displayBonus(bonus)
      result += ' ' + bonus
      return result
    },

    displayChallenge () {
      return displayChallenge(this.monsterStats.challenge, true)
    },

    displayMovement () {
      if (this.monsterStats.customMovement) {
        return this.monsterStats.customMovement
      }
      let result = ''
      if (this.monsterStats.movement.walk) {
        result += this.monsterStats.movement.walk + ' m'
      } else {
        result += '0 m'
      }
      if (this.monsterStats.movement.climb) {
        if (result != '') {
          result += ', '
        }
        result += 'escalade ' + this.monsterStats.movement.climb + ' m'
      }
      if (this.monsterStats.movement.burrow) {
        if (result != '') {
          result += ', '
        }
        result += 'fouissement ' + this.monsterStats.movement.burrow + ' m'
      }
      if (this.monsterStats.movement.swim) {
        if (result != '') {
          result += ', '
        }
        result += 'nage ' + this.monsterStats.movement.swim + ' m'
      }
      if (this.monsterStats.movement.fly) {
        if (result != '') {
          result += ', '
        }
        result += 'vol ' + this.monsterStats.movement.fly + ' m'
        if (this.monsterStats.movement.hover) {
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
      if (!this.monsterStats.ac.armorType) {
        ac = 10 + getModifier(this.monsterStats.abilityScores.dex)
      } else {
        // Le type d'armure n'est pas formalisé. On prend la valeur brute
        if (this.monsterStats.ac.armorType == 'custom') {
          return this.monsterStats.ac.value
        }

        // Le monstre a une armure naturelle.
        // CA =  10 + Armure naturelle + Dex
        if (this.monsterStats.ac.armorType == 'armure naturelle') {
          armor = this.monsterStats.ac.armorType
          if (parseInt(this.monsterStats.ac.value)) {
            ac = ac + parseInt(this.monsterStats.ac.value) + getModifier(this.monsterStats.abilityScores.dex)
          } else {
            ac = ac + getModifier(this.monsterStats.abilityScores.dex)
          }
        } else if (this.monsterStats.ac.armorType == 'armure du mage') {
          hasMageArmor = true
          ac = ac + getModifier(this.monsterStats.abilityScores.dex)
          mageArmorAc = mageArmorAc + getModifier(this.monsterStats.abilityScores.dex)
          armor = mageArmorAc + ' avec armure du mage'
        } else {
          // Le monstre a un type d'armure défini.
          // On calcule sa CA selon le type
          let armorType = armorTypes[this.monsterStats.ac.armorType]

          // Le type d'armure n'existe pas. On l'ignore.
          // CA = 10 + Dex
          if (!armorType) {
            ac = ac + getModifier(this.monsterStats.abilityScores.dex)
          } else {
            // L'armure n'impose pas de limite de Dex
            armor = this.monsterStats.ac.armorType
            if (armorType.maxDex === false) {
              ac = armorType.value + getModifier(this.monsterStats.abilityScores.dex)
            } else {
              // La limite de Dex de l'armure est inférieure à la Dex du monstre
              if (armorType.maxDex === 0) {
                ac = armorType.value
              } else if ((armorType.maxDex !== 0) && (armorType.maxDex <= getModifier(this.monsterStats.abilityScores.dex))) {
                ac = armorType.value + armorType.maxDex
              } else {
                ac = armorType.value + getModifier(this.monsterStats.abilityScores.dex)
              }
            }
          }
        }
      }


      // Le monstre a un bouclier. Sa CA augmente de 2.
      if (this.monsterStats.ac.hasShield) {
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

    displaySenses () {
      let result = ''
      if (this.monsterStats.senses) {
        if (this.monsterStats.senses.tremorsense) {
          result += 'perception des vibrations ' + this.monsterStats.senses.tremorsense + ' m'
        }
        if (this.monsterStats.senses.blindsight || this.monsterStats.senses.customBlindSight) {
          if (result != '') {
            result += ', '
          }
          if (this.monsterStats.senses.customBlindSight) {
            result += 'vision aveugle ' + this.monsterStats.senses.customBlindSight
          } else {
            result += 'vision aveugle ' + this.monsterStats.senses.blindsight + ' m'
          }
        }
        if (this.monsterStats.senses.darkvision || this.monsterStats.senses.customDarkvision) {
          if (result != '') {
            result += ', '
          }
          if (this.monsterStats.senses.customDarkvision) {
            result += 'vision dans le noir ' + this.monsterStats.senses.customDarkvision
          } else {
            result += 'vision dans le noir ' + this.monsterStats.senses.darkvision + ' m'
          }
        }
        if (this.monsterStats.senses.truesight || this.monsterStats.senses.customTrueSight) {
          if (result != '') {
            result += ', '
          }
          if (this.monsterStats.senses.customTrueSight) {
            result += 'vision parfaite ' + this.monsterStats.senses.customTrueSight
          } else {
            result += 'vision parfaite ' + this.monsterStats.senses.truesight + ' m'
          }
        }
        if (result != '') {
          result += ', '
        }
      }
      if (this.monsterStats.senses && this.monsterStats.senses.customPassivePerception) {
        result += 'Perception passive ' + this.monsterStats.senses.customPassivePerception
      } else {
        result += 'Perception passive ' + this.passivePerception
      }
      return result
    },

    conditionPath (condition) {
      return '/gerer-la-sante-du-personnage/#' + condition
    },

    displayCondition (condition) {
      return stats.conditions[condition].label
    },

    displayConditionImmunities () {
      let result = ''
      this.monsterStats.conditionImmunities.forEach((condition, idx) => {
        if (result != '') {
          if (idx == this.monsterStats.conditionImmunities.length - 1) {
            result += ' et '
          } else {
            result += ', '
          }
        }
        result += '<em><router-link :to="{ path: \'/gerer-la-sante-du-personnage/#' + condition + '\' }">' + stats.conditions[condition].label + '</router-link></em>'
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
