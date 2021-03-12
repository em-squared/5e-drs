---
title: "Kobold, Chef"
type: "Humanoïde"
subtype: "kobold"
size: "P"
alignment: "Loyal Mauvais"
challenge: "4"
hitDiceCount: 15
abilityScores:
  for: 10
  dex: 17
  con: 14
  int: 11
  sag: 13
  cha: 14
savingThrows:
  - "dex"
  - "cha"
ac:
  armorType: "armure de cuir clouté"
  hasShield: true
skills:
  - name: "discretion"
  - name: "intimidation"
    isExpert: true
movement:
  walk: 9
senses:
  darkvision: 18
conditionImmunities:
  - "charme"
  - "terrorise"
languages:
  - "commun"
  - "draconique"
dungeonTypes:
  - Caverne aménagée
source: "Livre des monstres"
source_page: 256
---
## Capacités
_**Tactique de meute**_. Le chef kobold est [_avantagé_](/utiliser-les-caracteristiques/#avantage-et-desavantage) sur les jets d'attaque contre une créature si au moins l'un de ses alliés se trouve dans un rayon de 1,50 mètre autour d'elle et n'est pas [_neutralisé_](/gerer-la-sante-du-personnage/#neutralise).

_**Sensibilité à la lumière du soleil**_. Le chef kobold est [_désavantagé_](/utiliser-les-caracteristiques/#avantage-et-desavantage) sur les jets d'attaque et de Sagesse (Perception) basés sur la vue s'il est exposé à la lumière du soleil.

## Actions
_**Attaques multiples**_. Le kobold fait deux attaques.

_**Épée courte**_. _Attaque d'arme au corps à corps_ : +5 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 6 (1d6 + 3) dégâts perforants plus 10 (3d6) dégâts de poison. La cible doit réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 12, sans quoi elle est [_empoisonnée_](/gerer-la-sante-du-personnage/#empoisonne) pendant 1 minute. Une cible [_empoisonnée_](/gerer-la-sante-du-personnage/#empoisonne) refait le [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) à la fin de chacun de ses tours et met un terme à l'empoisonnement si elle le réussit.

_**Arc court**_. _Attaque d'arme à distance_ : +5 pour toucher, portée 24/96 m, une cible.  
_Touché_ : 6 (1d6 + 3) dégâts perforants plus 10 (3d6) dégâts de poison. La cible doit réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 12, sans quoi elle est [_empoisonnée_](/gerer-la-sante-du-personnage/#empoisonne) pendant 1 minute. Une cible [_empoisonnée_](/gerer-la-sante-du-personnage/#empoisonne) refait le [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) à la fin de chacun de ses tours et met un terme à l'empoisonnement si elle le réussit.

_**Présence inspirante (recharge après un court ou un long repos)**_. Le chef choisit jusqu'à six kobolds alliés qui se trouvent dans son champ de vision et un rayon de 9 mètres. Pendant la minute qui suit, ils sont immunisés contre les états [_charmé_](/gerer-la-sante-du-personnage/#charme) et [_terrorisé_](/gerer-la-sante-du-personnage/#terrorise) et ajoutent le bonus de Charisme du chef à leurs jets d'attaque.

## Réactions
_**Bouclier tire-pointes (5/repos)**_. Quand le chef kobold est touché par une attaque de corps à corps portée dans un rayon de 1,50 mètre, il peut tirer l'une des pointes de son bouclier sur l'assaillant. Ce dernier subit 3 (1d6) dégâts perforants plus 3 (1d6) dégâts de poison.
