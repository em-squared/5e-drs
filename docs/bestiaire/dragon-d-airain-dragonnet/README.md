---
title: "Dragon d'airain, dragonnet"
type: "Dragon"
size: "M"
alignment: "Chaotique Bon"
challenge: "1"
hitDiceCount: 3
abilityScores:
  for: 15
  dex: 10
  con: 13
  int: 10
  sag: 11
  cha: 13
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
  fly: 18
senses:
  blindsight: 3
  darkvision: 18
damageTypeImmunities:
  - "feu"
languages:
  - "draconique"
environments:
  - Désert chaud
dungeonTypes:
  - Ruines extérieures
source: "Créatures & Oppositions"
source_page: 105
---
## Actions
_**Morsure**_. _Attaque d'arme au corps à corps_ : +4 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 7 (1d10+2) dégâts perforants.

_**Souffles (Recharge 5-6)**_. Le dragon utilise l'un des souffles suivants :
* _Souffle de feu_. Le dragon souffle du feu sur une ligne de 6 mètres de long et 1,50 mètre de large. Les créatures sur cette ligne doivent chacune effectuer un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Dextérité DD 11 ; elles subissent 14 (4d6) dégâts de feu en cas de [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) raté ou la moitié de ces dégâts seulement en cas de réussite.
* _Souffle soporifique_. Le dragon souffle un gaz soporifique sur un cône de 4,50 mètres. Les créatures dans ce cône doivent chacune réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 11 pour ne pas tomber [_inconscientes_](/gerer-la-sante-du-personnage/#inconscient) pendant 1 minute. Une créature victime de cet effet reprend connaissance si elle subit des dégâts ou si quelqu'un consacre une action à lui faire reprendre ses esprits.
