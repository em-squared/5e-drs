---
title: "Nuée d'yeux"
isSwarm: true
swarmSize: "TP"
type: "Aberration"
size: "G"
alignment: "Neutre Mauvais"
challenge: "4"
hitDiceCount: 13
abilityScores:
  for: 10
  dex: 20
  con: 16
  int: 8
  sag: 15
  cha: 17
ac:
  armorType: null
skills:
  - name: "discretion"
  - name: "perception"
    isExpert: true
  - name: "perspicacite"
    isExpert: true
movement:
  walk: 1,50
  fly: 12
  hover: true
senses:
  darkvision: 18
conditionImmunities:
  - "a-terre"
  - "charme"
  - "entrave"
  - "etourdi"
  - "paralyse"
  - "petrifie"
  - "terrorise"
damageTypeResistances:
  - "contondant"
  - "perforant"
  - "tranchant"
languages:
  - "comprend le commun"
  - "mais ne peut pas parler"
source: "Livre des monstres"
source_page: 325
---
## Capacités
_**Nuée**_. La nuée peut occuper le même emplacement qu'une autre créature et inversement. Elle peut traverser n'importe quelle ouverture d'au moins 12 centimètres carrés. La nuée ne peut pas récupérer de points de vie ni gagner de points de vie temporaires.

## Actions
_**Extraction oculaire**_. Chaque créature qui occupe le même emplacement que la nuée doit réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 13, sans quoi elle est momentanément [_aveuglée_](/gerer-la-sante-du-personnage/#aveugle) car ses yeux commencent à lui sortir des orbites. Cette cécité persiste tant que la créature affectée reste dans le même emplacement que la nuée et se termine à la fin du tour de la créature [_aveuglée_](/gerer-la-sante-du-personnage/#aveugle) si elle est sortie de l'emplacement de la nuée. Un sort de soin met temporairement fin à la cécité, mais pas un sort de restauration. Si une créature déjà temporairement [_aveuglée_](/gerer-la-sante-du-personnage/#aveugle) est la cible d'une nouvelle extraction oculaire et rate son [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde), elle est définitivement _aveugle_ : ses yeux jaillissent de ses orbites et rejoignent la nuée (ce qui lui inflige 1d8 dégâts perforants). Si la cible réussit l'un ou l'autre de ses [jets de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde), elle est immunisée contre l'extraction oculaire pendant 24 heures (mais ne recouvre pas la vue tant qu'elle est au sein de la nuée). Une nuée d'yeux avec 50 points de vie ou moins ne peut pas utiliser ce pouvoir.

_**Regard (Recharge 5-6)**_. La nuée vise toutes les créatures présentes dans son emplacement avec une attaque de regard. Elle choisit l'un des deux effets suivants : [_confusion_](/grimoire/confusion/) ou [_immobiliser un humanoïde_](/grimoire/immobiliser-un-humanoide/). Chaque cible présente dans l'emplacement de la nuée est affectée à moins de réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Charisme DD 14. Même les créatures qui détournent le regard ou sont _aveugles_ peuvent être affectées par cette attaque de regard. L'effet de [_confusion_](/grimoire/confusion/) ou [_immobiliser un humanoïde_](/grimoire/immobiliser-un-humanoide/) dure 1d4 rounds.
