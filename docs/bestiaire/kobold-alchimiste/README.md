---
title: "Kobold, Alchimiste"
type: "Humanoïde"
subtype: "kobold"
size: "P"
alignment: "Loyal Neutre"
challenge: "2"
hitDiceCount: 8
abilityScores:
  for: 7
  dex: 16
  con: 15
  int: 16
  sag: 9
  cha: 8
savingThrows: 
  - "dex"
ac: 
  armorType: "armure de cuir clouté"
skills: 
  - name: "arcanes"
  - name: "medecine"
    isExpert: true
movement: 
  walk: 9
senses: 
  darkvision: 18
conditionImmunities: 
  - "empoisonne"
damageTypeImmunities: 
  - "poison"
languages: 
  - "commun"
  - "draconique"
dungeonTypes:
  - Caverne aménagée
source: "Livre des monstres"
source_page: 254
---
## Capacités
_**Apothicaire**_. Par une action bonus, le kobold peut choisir l'un des types de dégâts suivants : acide, froid ou feu. Il est résistant aux dégâts du type choisi jusqu'à ce qu'il utilise de nouveau cette action. De plus, il maîtrise le matériel d'empoisonneur.

_**Tactique de meute**_. Le kobold est [_avantagé_](/utiliser-les-caracteristiques/#avantage-et-desavantage) sur les jets d'attaque contre une créature si au moins l'un de ses alliés se trouve dans un rayon de 1,50 mètre autour d'elle et n'est pas [_neutralisé_](/gerer-la-sante-du-personnage/#neutralise).

_**Sensibilité à la lumière du soleil**_. Le kobold est [_désavantagé_](/utiliser-les-caracteristiques/#avantage-et-desavantage) sur les jets d'attaque et de Sagesse (Perception) basés sur la vue s'il est exposé à la lumière du soleil.

## Actions
_**Attaques multiples**_. Le kobold fait deux attaques.

_**Dague**_. _Attaque d'arme au corps à corps_ : +5 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 5 (1d4 + 3) dégâts perforants plus 5 (2d4) dégâts de poison.

_**Fléchette**_. _Attaque d'arme à distance_ : +5 pour toucher, portée 6/18 m, une cible.  
_Touché_ : 5 (1d4 + 3) dégâts perforants plus 5 (2d4) dégâts de poison.

_**Protection alchimique (recharge après un court ou un long repos)**_. Le kobold choisit jusqu'à six créatures alliées dans les 3 mètres. Il libère des vapeurs alchimiques qui leur donnent une résistance aux dégâts de poison pendant 10 minutes. Il peut à la place leur donner la même résistance que celle actuellement active avec le trait apothicaire.

_**Fiole explosive (recharge 5-6)**_. Le kobold lance une fiole de substance volatile en un point situé dans un rayon de 9 mètres. Elle explose dans un rayon de 4,50 mètres. Les créatures de la zone subissent 17 (5d6) dégâts de poison et sont [_empoisonnées_](/gerer-la-sante-du-personnage/#empoisonne) pendant 1 minute. Celles qui réussissent un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Dextérité DD 13 subissent la moitié des dégâts seulement et ne sont pas [_empoisonnées_](/gerer-la-sante-du-personnage/#empoisonne). Une cible [_empoisonnée_](/gerer-la-sante-du-personnage/#empoisonne) refait le [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) à la fin de chacun de ses tours et met un terme à l'empoisonnement si elle le réussit. Au lieu des dégâts de poison, le kobold peut infliger des dégâts du même type que celui actif avec le trait apothicaire.
