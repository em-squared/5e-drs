---
title: "Dragon blanc, dragonnet"
type: "Dragon"
size: "M"
alignment: "Chaotique Mauvais"
challenge: "2"
hitDiceCount: 5
abilityScores:
  for: 14
  dex: 10
  con: 14
  int: 5
  sag: 10
  cha: 11
savingThrows:
  - "dex"
  - "con"
  - "sag"
  - "cha"
ac:
  armorType: "armure naturelle"
  value: 6
skills:
  - name: "discretion"
  - name: "perception"
    isExpert: true
movement:
  walk: 9
  burrow: 4,50
  swim: 9
  fly: 18
senses:
  blindsight: 3
  darkvision: 18
damageTypeImmunities:
  - "froid"
languages:
  - "draconique"
environments:
  - Arctique / Subarctique
source: "Créatures & Oppositions"
source_page: 83
---
## Actions
_**Morsure**_. _Attaque d'arme au corps à corps_ : +4 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 7 (1d10+2) dégâts perforants plus 2 (1d4) dégâts de froid.

_**Souffle de glace (Recharge 5-6)**_. Le dragon souffle de la glace sur un cône de 4,50 mètres. Les créatures dans ce cône doivent chacune effectuer un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 12 ; elles subissent 22 (5d8) dégâts de froid en cas d'échec ou la moitié de ces dégâts seulement en cas de réussite.
