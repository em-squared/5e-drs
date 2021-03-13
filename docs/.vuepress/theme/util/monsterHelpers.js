import {stats} from '../../data/stats'
import {CHALLENGES} from '../../data/monsters'

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


// Retourne le nombre de points de combat pour un indice de dangerosité
export function getPCbyChallenge(challenge) {
  let challengeIndex = CHALLENGES.findIndex(item => item.value == challenge)
  if (challengeIndex > -1) {
    return CHALLENGES[challengeIndex].pc
  }
  return false
}
