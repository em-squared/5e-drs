---
title: "Cerbère"
type: "Créature monstrueuse"
size: "G"
alignment: "Neutre Mauvais"
challenge: "6"
hitDiceCount: 12
abilityScores:
  for: 18
  dex: 12
  con: 16
  int: 5
  sag: 14
  cha: 10
ac:
  armorType: "armure naturelle"
  value: 4
skills:
  - name: "discretion"
    invalid: true
    value: 5
  - name: "perception"
    invalid: true
    value: 10
movement:
  walk: 12
senses:
  truesight: 12
  customPassivePerception: 20
conditionImmunities:
  - "assourdi"
  - "aveugle"
  - "empoisonne"
damageTypeImmunities:
  - "poison"
languages:
  - "—"
environments:
  - Bois / Forêt
  - Jungle
  - Montagnes
source: "Créatures & Oppositions"
source_page: 39
---
## Capacités
_**Détection des proies**_. Le cerbère peut détecter la direction de la créature à sang chaud de taille moyenne (ou petite, faute de mieux) la plus proche de lui dans un rayon d'un kilomètre. Pour cela il doit faire un test de Sagesse (Perception) opposé à la Dextérité (Discrétion) de sa cible. Si la cible est située à plus de 300 mètres de distance, il subit un [_désavantage_](/utiliser-les-caracteristiques/#avantage-et-desavantage) à son test.

## Actions
_**Attaques multiples**_. Le cerbère effectue trois attaques de morsure, une pour chaque tête.

_**Morsure**_. _Attaque d'arme au corps à corps_ : +8 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 11 (2d6+4) dégâts perforants et la cible doit réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 14 ou être [_empoisonnée_](/gerer-la-sante-du-personnage/#empoisonne) par la salive.

_**Déchirer**_. Si le cerbère réussi plusieurs attaques de morsure sur la même cible, chaque tête tire violemment dans une direction opposée en tentant de déchirer le corps de la victime. La cible subit 7 (2d6) dégâts perforants supplémentaires par attaque réussie après la première dans le même tour.
