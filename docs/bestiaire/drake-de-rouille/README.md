---
title: "Drake de rouille"
type: "Dragon"
size: "M"
alignment: "Chaotique Mauvais"
challenge: "8"
hitDiceCount: 19
abilityScores:
  for: 20
  dex: 15
  con: 19
  int: 12
  sag: 8
  cha: 8
ac:
  armorType: "armure naturelle"
  value: 5
skills:
  - name: "discretion"
  - name: "perception"
    invalid: true
    value: 3
movement:
  walk: 6
  burrow: 1,50
  fly: 30
senses:
  darkvision: 18
  customPassivePerception: 13
conditionImmunities:
  - "empoisonne"
  - "paralyse"
damageTypeVulnerabilities:
  - "acide"
damageTypeImmunities:
  - "poison"
languages:
  - "commun"
  - "draconique"
dungeonTypes:
  - Ruines extérieures
source: "Livre des monstres"
source_page: 152
---
## Actions
_**Attaques multiples**_. Le drake fait une attaque de _morsure_ et un _balayage de queue_.

_**Morsure**_. _Attaque d'arme au corps à corps_ : +8 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 18 (3d8 + 5) dégâts perforants et la cible doit réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 16, sans quoi elle contracte le _tétanos du drake de rouille_.

_**Balayage de queue**_. _Attaque d'arme au corps à corps_ : +8 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 14 (2d8 + 5) dégâts contondants.

_**Régurgitation de ferraille (Recharge 5–6)**_. Un drake de rouille peut vomir du métal rouillé sur un cône de 4,50 mètres. Les cibles qui se trouvent dans la zone affectée subissent 55 (10d10) dégâts tranchants, ou moitié moins si elles réussissent un jet de Dextérité DD 15. Par ailleurs, les créatures affectées doivent également faire un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 15 pour éviter de contracter le _tétanos du drake de rouille_.

_**Tétanos du drake de rouille**_. Les symptômes de cette maladie se manifestent au bout de 1d4 jours : les créatures affectées font l'expérience de spasmes musculaires douloureux, notamment au niveau de la mâchoire. Au bout de chaque repos long, la créature affectée refait le [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde). Si elle échoue, elle subit une réduction de 1d3 points de Dextérité et est [_paralysée_](/gerer-la-sante-du-personnage/#paralyse) pendant 24 heures. Si elle réussit, elle ne subit pas de dégâts et se sent assez bien pour agir normalement pendant la journée. La créature répète cette opération jusqu'à ce qu'elle meure des suites de la perte de Dextérité, se remette naturellement en réussissant ses [jets de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde)s après deux repos longs consécutifs, ou soit soignée avec [_restauration inférieure_](/grimoire/restauration-inferieure/) ou une magie comparable. Une fois guérie, la victime récupère 1d3 points de Dextérité après chaque repos long ; elle peut récupérer tous ses points de Dextérité d'un seul coup grâce à [_restauration supérieure_](/grimoire/restauration-superieure/) ou une magie comparable.
