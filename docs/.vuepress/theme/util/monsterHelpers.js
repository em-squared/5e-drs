import {stats} from '../../data/stats'
import {CHALLENGES} from '../../data/monsters'
import {armorTypes} from '../../data/armorTypes.js'

// Calcul du modificateur de caractéristique
export function getModifier (score) {
  return Math.floor((score - 10) / 2)
}

// Ajoute un + devant les valeurs positives pour l'affichage
export function displayBonus (value) {
  if (value >= 0) {
    value = '+' + value
  }
  return value
}

// Affichage d'un score de caractéristiques sous la forme 16 (+3)
export function displayAbilityScore (score) {
  let modifier = getModifier(score)
  if (modifier >= 0) {
    modifier = '+' + modifier
  }
  return score + ' (' + modifier + ')'
}

// Calcul du bonus de maîtrise en fonction du niveau
export function getProficiencyBonus (level) {
  if (level <= 1) {
    return 2
  }
  return Math.ceil(level / 4) + 1
}

// Affiche l'indice de dangerosité
export function displayChallenge (challenge, xp = false) {
  let result = ''
  if (stats.challenges[challenge]) {
    result += stats.challenges[challenge].label
    if (xp) {
      result += ' (PX : ' + stats.challenges[challenge].xp + ')'
    }
    return result
  }
  return challenge
}

// Affiche le type, la taille et l'alignement
export function displayMonsterTypeSizeAlignment (monster, hideAlignment = false, showChallenge = false) {
  let result = ''
  if (monster.isSwarm) {
    result = 'Nuée de taille '+ monster.size + ' composée ' + stats.monsterTypes[monster.type].swarm
    if (monster.subtype) {
      result += ' (' + monster.subtype + ')'
    }
    result += ' de taille ' + monster.swarmSize
  } else {
    result = monster.type
    if (monster.subtype) {
      result += ' (' + monster.subtype + ')'
    }
    result += ' de taille ' + monster.size
  }
  if (!hideAlignment) {
    if (monster.alignment) {
      result += ', ' + monster.alignment
    } else {
      result += ', non alignée'
    }
  }
  if (showChallenge) {
    result += ', Dangerosité : ' + displayChallenge(monster.challenge)
  }
  return result
}

// Affiche la Classe d'armure
export function displayAC (monster) {
  let ac = 10
  let hasMageArmor = false
  let mageArmorAc = 13
  let mageArmor = ''
  let armor = ''
  // Le monstre n'a pas d'armure.
  // CA = 10 + Dex
  if (!monster.frontmatter.ac.armorType) {
    ac = 10 + getModifier(monster.frontmatter.abilityScores.dex)
  } else {
    // Le type d'armure n'est pas formalisé. On prend la valeur brute
    if (monster.frontmatter.ac.armorType == 'custom') {
      return monster.frontmatter.ac.value
    }

    // Le monstre a une armure naturelle.
    // CA =  10 + Armure naturelle + Dex
    if (monster.frontmatter.ac.armorType == 'armure naturelle') {
      armor = monster.frontmatter.ac.armorType
      if (parseInt(monster.frontmatter.ac.value)) {
        ac = ac + parseInt(monster.frontmatter.ac.value) + getModifier(monster.frontmatter.abilityScores.dex)
      } else {
        ac = ac + getModifier(monster.frontmatter.abilityScores.dex)
      }
    } else if (monster.frontmatter.ac.armorType == 'armure du mage') {
      hasMageArmor = true
      ac = ac + getModifier(monster.frontmatter.abilityScores.dex)
      mageArmorAc = mageArmorAc + getModifier(monster.frontmatter.abilityScores.dex)
      armor = mageArmorAc + ' avec armure du mage'
    } else {
      // Le monstre a un type d'armure défini.
      // On calcule sa CA selon le type
      let armorType = armorTypes[monster.frontmatter.ac.armorType]

      // Le type d'armure n'existe pas. On l'ignore.
      // CA = 10 + Dex
      if (!armorType) {
        ac = ac + getModifier(monster.frontmatter.abilityScores.dex)
      } else {
        // L'armure n'impose pas de limite de Dex
        armor = monster.frontmatter.ac.armorType
        if (armorType.maxDex === false) {
          ac = armorType.value + getModifier(monster.frontmatter.abilityScores.dex)
        } else {
          // La limite de Dex de l'armure est inférieure à la Dex du monstre
          if (armorType.maxDex === 0) {
            ac = armorType.value
          } else if ((armorType.maxDex !== 0) && (armorType.maxDex <= getModifier(monster.frontmatter.abilityScores.dex))) {
            ac = armorType.value + armorType.maxDex
          } else {
            ac = armorType.value + getModifier(monster.frontmatter.abilityScores.dex)
          }
        }
      }
    }
  }


  // Le monstre a un bouclier. Sa CA augmente de 2.
  if (monster.frontmatter.ac.hasShield) {
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
}

// Affiche les points de vie
export function displayHP (monster) {
  if (monster.frontmatter.customHP) {
    return monster.frontmatter.customHP
  } else if (monster.frontmatter.hitDiceCount) {
    let hitDieSize = 8 // Dé de vie moyen par défaut
    if (monster.frontmatter.hitDieSize) {
      hitDieSize = monster.frontmatter.hitDieSize
    } else if (monster.frontmatter.size) {
      hitDieSize = stats.sizes[monster.frontmatter.size].hitDie
    }
    let hitPointsBonus = 0
    if (monster.frontmatter.hitDiceCount > 1) {
      hitPointsBonus = Math.floor(monster.frontmatter.hitDiceCount / 2)
    }
    let averageHP = monster.frontmatter.hitDiceCount * (hitDieSize / 2) + monster.frontmatter.hitDiceCount * getModifier(monster.frontmatter.abilityScores.con) + hitPointsBonus
    let conMod = ""
    if (getModifier(monster.frontmatter.abilityScores.con) != 0) {
      conMod = monster.frontmatter.hitDiceCount * getModifier(monster.frontmatter.abilityScores.con)
      conMod = displayBonus(conMod)
    }
    return averageHP + ' (' + monster.frontmatter.hitDiceCount + "d" + hitDieSize + conMod + ')'
  }
  return ""
}

// Affiche les vitesses de déplacement
export function displayMovement (monster) {
  if (monster.frontmatter.customMovement) {
    return monster.frontmatter.customMovement
  }
  let result = ''
  if (monster.frontmatter.movement.walk) {
    result += monster.frontmatter.movement.walk + ' m'
  } else {
    result += '0 m'
  }
  if (monster.frontmatter.movement.climb) {
    if (result != '') {
      result += ', '
    }
    result += 'escalade ' + monster.frontmatter.movement.climb + ' m'
  }
  if (monster.frontmatter.movement.burrow) {
    if (result != '') {
      result += ', '
    }
    result += 'fouissement ' + monster.frontmatter.movement.burrow + ' m'
  }
  if (monster.frontmatter.movement.swim) {
    if (result != '') {
      result += ', '
    }
    result += 'nage ' + monster.frontmatter.movement.swim + ' m'
  }
  if (monster.frontmatter.movement.fly) {
    if (result != '') {
      result += ', '
    }
    result += 'vol ' + monster.frontmatter.movement.fly + ' m'
    if (monster.frontmatter.movement.hover) {
      result += ' (vol stationnaire)'
    }
  }
  return result
}

export function getMonsterProficiencyBonus (monster) {
  if (monster.frontmatter.proficiencyBonus) {
    return parseInt(monster.frontmatter.proficiencyBonus)
  }
  return getProficiencyBonus(monster.frontmatter.challenge)
}

export function displaySavingThrowBonus (monster, ability) {
  let result = stats.abilities[ability].abbr
  let bonus = displayBonus(getModifier(monster.frontmatter.abilityScores[ability]) + getMonsterProficiencyBonus(monster))
  result += ' ' + bonus
  return result
}

export function displaySavingThrows(monster) {
  if (monster.frontmatter.customSavingThrows) {
    return monster.frontmatter.customSavingThrows
  }
  let savingThrows = []

  if (monster.frontmatter.savingThrows && monster.frontmatter.savingThrows.length > 0) {
    for (var st of monster.frontmatter.savingThrows) {
      savingThrows.push(displaySavingThrowBonus(monster, st))
    }
  }

  return savingThrows.join(', ')
}

export function displaySkillBonus (monster, skill) {
  if (skill.name == 'custom') {
    return skill.value
  }
  let result = stats.skills[skill.name].label
  if (skill.invalid) {
    result += ' ' + displayBonus(skill.value)
    return result
  }
  let bonus = getModifier(monster.frontmatter.abilityScores[stats.skills[skill.name].ability]) + getMonsterProficiencyBonus(monster)
  if (skill.isExpert) {
    bonus += getMonsterProficiencyBonus(monster) // Bonus de maître doublé pour les experts
  }
  bonus  = displayBonus(bonus)
  result += ' ' + bonus
  return result
}

export function displaySkills(monster) {
  if (monster.frontmatter.customSkills) {
    return monster.frontmatter.customSkills
  }

  let skills = []

  if (monster.frontmatter.skills && monster.frontmatter.skills.length > 0) {
    for (var skill of monster.frontmatter.skills) {
      skills.push(displaySkillBonus(monster, skill))
    }
  }

  return skills.join(', ')
}

export function displayDamageTypes (damageTypes) {
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

export function displayVulnerabilities(monster) {
  if (monster.frontmatter.customDamageTypeVulnerabilities) {
    return monster.frontmatter.customDamageTypeVulnerabilities
  }

  let vulnerabilities = ''

  if (monster.frontmatter.damageTypeVulnerabilities && monster.frontmatter.damageTypeVulnerabilities.length > 0) {
    vulnerabilities = displayDamageTypes(monster.frontmatter.damageTypeVulnerabilities)
  }

  return vulnerabilities
}

export function displayResistances(monster) {

  let resistances = ''

  if (monster.frontmatter.damageTypeResistances && monster.frontmatter.damageTypeResistances.length > 0) {
    resistances = displayDamageTypes(monster.frontmatter.damageTypeResistances)
  }

  return resistances
}

export function displayImmunities(monster) {

  let immunities = ''

  if (monster.frontmatter.damageTypeImmunities && monster.frontmatter.damageTypeImmunities.length > 0) {
    immunities = displayDamageTypes(monster.frontmatter.damageTypeImmunities)
  }

  return immunities
}

export function displayCondition (condition) {
  return stats.conditions[condition].label
}

export function displayConditionImmunities(monster) {

  let result = ''

  if (monster.frontmatter.conditionImmunities && monster.frontmatter.conditionImmunities.length > 0) {
    monster.frontmatter.conditionImmunities.forEach((condition, idx) => {
      if (result != '') {
        if (idx == monster.frontmatter.conditionImmunities.length - 1) {
          result += ' et '
        } else {
          result += ', '
        }
      }
      result += stats.conditions[condition].label
    })
  }

  return result
}

export function getMonsterPassivePerception (monster) {
  let result = 10 + getModifier(monster.frontmatter.abilityScores.sag)
  if (monster.frontmatter.skills) {
    monster.frontmatter.skills.forEach((skill, idx) => {
      if (skill.name == 'perception') {
        if (skill.isExpert) {
          result += getMonsterProficiencyBonus(monster) * 2
        } else {
          result += getMonsterProficiencyBonus(monster)
        }
      }
    })
  }
  return result
}

export function displaySenses (monster) {
  let result = ''
  if (monster.frontmatter.senses) {
    if (monster.frontmatter.senses.tremorsense) {
      result += 'perception des vibrations ' + monster.frontmatter.senses.tremorsense + ' m'
    }
    if (monster.frontmatter.senses.blindsight || monster.frontmatter.senses.customBlindSight) {
      if (result != '') {
        result += ', '
      }
      if (monster.frontmatter.senses.customBlindSight) {
        result += 'vision aveugle ' + monster.frontmatter.senses.customBlindSight
      } else {
        result += 'vision aveugle ' + monster.frontmatter.senses.blindsight + ' m'
      }
    }
    if (monster.frontmatter.senses.darkvision || monster.frontmatter.senses.customDarkvision) {
      if (result != '') {
        result += ', '
      }
      if (monster.frontmatter.senses.customDarkvision) {
        result += 'vision dans le noir ' + monster.frontmatter.senses.customDarkvision
      } else {
        result += 'vision dans le noir ' + monster.frontmatter.senses.darkvision + ' m'
      }
    }
    if (monster.frontmatter.senses.truesight || monster.frontmatter.senses.customTrueSight) {
      if (result != '') {
        result += ', '
      }
      if (monster.frontmatter.senses.customTrueSight) {
        result += 'vision parfaite ' + monster.frontmatter.senses.customTrueSight
      } else {
        result += 'vision parfaite ' + monster.frontmatter.senses.truesight + ' m'
      }
    }
    if (result != '') {
      result += ', '
    }
  }
  if (monster.frontmatter.senses && monster.frontmatter.senses.customPassivePerception) {
    result += 'Perception passive ' + monster.frontmatter.senses.customPassivePerception
  } else {
    result += 'Perception passive ' + getMonsterPassivePerception(monster)
  }
  return result
}


// Retourne le nombre de points de combat pour un indice de dangerosité
export function getPCbyChallenge(challenge) {
  let challengeIndex = CHALLENGES.findIndex(item => item.value == challenge)
  if (challengeIndex > -1) {
    return CHALLENGES[challengeIndex].pc
  }
  return false
}
