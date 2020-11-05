---
title: "Nuée de papillons de mort"
isSwarm: true
swarmSize: "TP"
type: "Bête"
size: "G"
alignment: "Chaotique Mauvais"
challenge: "4"
hitDiceCount: 11
abilityScores:
  for: 1
  dex: 13
  con: 10
  int: 1
  sag: 12
  cha: 15
ac:
  armorType: "armure naturelle"
  value: 4
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
  - "paralyse"
  - "petrifie"
  - "terrorise"
damageTypeVulnerabilities:
  - "feu"
  - "froid"
damageTypeResistances:
  - "contondant"
  - "perforant"
  - "tranchant"
languages:
  - "—"
environments:
  - Bois / Forêt
  - Plaine / Champs / Prairie / Savane
source: "Livre des monstres"
source_page: 327
---
## Capacités
_**Poison puissant**_. Le poison d'une nuée de papillons de mort affecte les morts-vivants tangibles, même si ceux-ci sont normalement immunisés contre les poisons.

_**Nuée**_. Une nuée peut occuper le même emplacement qu'une autre créature et inversement. La nuée peut traverser n'importe quelle ouverture assez grande pour laisser passer un insecte de Très Petite taille. La nuée ne peut pas récupérer de points de vie ni gagner de points de vie temporaires.

_**Poids des ailes**_. La vitesse d'une créature qui se trouve dans le même emplacement qu'une nuée de papillons de mort se trouve réduite de moitié et la créature doit réussir un jet de sauvegarde de Dextérité DD 13 ou se trouver _aveuglée_. Ces deux effets prennent fin si, à la fin de son tour, la créature ne se trouve plus dans le même emplacement que la nuée. Si une créature réussit son jet de sauvegarde, elle est immunisée contre l'effet de cécité de la nuée (mais pas contre la réduction de sa vitesse) pendant 24 heures.

## Actions
_**Attaques multiples**_. La nuée porte une attaque de _morsure_ contre toutes les créatures avec lesquelles elle partage un emplacement.

_**Morsures**_. _Attaque d'arme au corps à corps_ : +3 pour toucher, allonge 0 m, toutes les créatures dans l'emplacement de la nuée.  
_Touché_ : 22 (6d6 +1) dégâts perforants ou 11 (3d6 + 1) dégâts perforants si la nuée n'a plus que la moitié de ses points de vie ou moins. La cible subit également 10 (3d6) dégâts de poison et est _empoisonnée_ pendant 1d4 rounds ; elle peut réduire cette quantité de dégâts de moitié et ne pas se trouver dans l'état _empoisonné_ si elle réussit un jet de sauvegarde de Constitution DD 13.
