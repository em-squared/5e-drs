---
title: "Dragon bleu, dragonnet"
type: "Dragon"
size: "M"
alignment: "Loyal Mauvais"
challenge: "3"
hitDiceCount: 8
abilityScores:
  for: 17
  dex: 10
  con: 15
  int: 12
  sag: 11
  cha: 15
savingThrows:
  - "dex"
  - "con"
  - "sag"
  - "cha"
ac:
  armorType: "armure naturelle"
  value: 7
skills:
  - name: "discretion"
  - name: "perception"
    isExpert: true
movement:
  walk: 9
  burrow: 4,50
  fly: 18
senses:
  blindsight: 3
  darkvision: 18
damageTypeImmunities:
  - "foudre"
languages:
  - "draconique"
environments:
  - Désert chaud
  - Littoral
source: "Créatures & Oppositions"
source_page: 87
---
## Actions
_**Morsure**_. _Attaque d'arme au corps à corps_ : +5 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 8 (1d10+3) dégâts perforants plus 3 (1d6) dégâts de foudre.

_**Souffle de foudre (Recharge 5-6)**_. Le dragon souffle de la foudre sur une ligne de 9 mètres de long et 1,50 mètre de large. Les créatures sur cette ligne doivent chacune effectuer un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Dextérité DD 12 ; elles subissent 22 (4d10) dégâts de foudre en cas d'échec ou la moitié de ces dégâts seulement en cas de réussite.
