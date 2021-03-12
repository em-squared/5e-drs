---
title: "Béli"
type: "Fée"
size: "P"
alignment: "Neutre Mauvais"
challenge: "2"
hitDiceCount: 10
abilityScores:
  for: 11
  dex: 16
  con: 12
  int: 8
  sag: 11
  cha: 14
savingThrows:
  - "dex"
ac:
  armorType: "armure naturelle"
  value: 2
skills:
  - name: "discretion"
  - name: "perception"
    isExpert: true
movement:
  walk: 9
  fly: 9
senses:
  darkvision: 18
damageTypeVulnerabilities:
  - "feu"
damageTypeImmunities:
  - "froid"
languages:
  - "commun"
  - "géant"
  - "nain"
environments:
  - Arctique / Subarctique
  - Montagnes
source: "Livre des monstres"
source_page: 38
---
## Capacités
_**Chasseur arctique**_. Un béli est [_avantagé_](/utiliser-les-caracteristiques/#avantage-et-desavantage) aux tests de Dextérité (Discrétion) et de Sagesse (Perception) réalisés dans des environnements naturels glacés.

_**Régénération par le froid**_. Tant que la température se situe en-dessous de zéro, un béli récupère 3 points de vie au début de son tour. Si ce béli subit des dégâts de feu, l'effet de ce trait est inactif au début de son tour suivant. Un béli ne meurt que s'il débute son tour avec 0 point de vie et ne se régénère pas.

_**Repli aérien**_. Un béli ne provoque pas d'attaque d'opportunité quand il vole hors de portée d'un ennemi.

_**Incantation innée**_. La caractéristique d'incantation innée d'un béli est le Charisme (DD du [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) contre les sorts 12, +4 pour toucher avec les attaques de sort). Il peut lancer les sorts suivants de manière innée, sans utiliser de composante matérielle :
* **À volonté** : [_invisibilité_](/grimoire/invisibilite/)
* **3/jour** : [_contact glacial_](/grimoire/contact-glacial/)

## Actions
_**Dague de glace**_. _Attaque d'arme au corps à corps_ : +5 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 5 (1d4 + 3) dégâts perforants plus 2 (1d4) dégâts de froid.

_**Arc court glacé**_. _Attaque d'arme à distance_ : +5 pour toucher, portée 24/96 m, une cible.  
_Touché_ : 5 (1d4 + 3) dégâts perforants plus 2 (1d4) dégâts de froid, et la cible doit réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 13 ou gagner 2 niveaux d'épuisement à cause du contact glacé de la flèche. Si elle réussit son [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde), la cible devient également immunisée aux prochains effets d'épuisement des flèches des bélis pendant 24 heures (cependant, tous les niveaux d'épuisement qu'elle a déjà gagnés persistent). Un personnage qui gagne un sixième niveau d'épuisement ne meurt pas automatiquement, mais tombe à 0 point de vie et fait normalement ses [jets de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) contre la mort. Les niveaux d'épuisement persistent jusqu'à ce que la créature soit complétement remise des dégâts de froid.
