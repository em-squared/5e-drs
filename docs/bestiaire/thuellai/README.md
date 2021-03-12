---
title: "Thuellai"
type: "Élémentaire"
size: "TG"
alignment: "Chaotique Neutre"
challenge: "10"
hitDiceCount: 13
abilityScores:
  for: 22
  dex: 24
  con: 20
  int: 10
  sag: 11
  cha: 14
savingThrows:
  - "int"
  - "sag"
  - "cha"
ac:
  armorType: null
skills:
  - name: "perception"
movement:
  walk: 0
  fly: 30
  hover: true
senses:
  darkvision: 18
conditionImmunities:
  - "a-terre"
  - "empoigne"
  - "empoisonne"
  - "epuise"
  - "entrave"
  - "inconscient"
  - "paralyse"
  - "petrifie"
damageTypeVulnerabilities:
  - "feu"
damageTypeResistances:
  - "foudre"
  - "tonnerre"
  - "c-p-t-non-magique"
damageTypeImmunities:
  - "poison"
languages:
  - "commun"
  - "nain"
  - "primordial"
environments:
  - Arctique / Subarctique
source: "Livre des monstres"
source_page: 380
---
## Capacités
_**Maîtrise de l'air**_. Les créatures aériennes sont [_désavantagées_](/utiliser-les-caracteristiques/#avantage-et-desavantage) lors de leurs jets d'attaque contre le thuellai.

_**Vision à travers la neige**_. Le thuellai voit parfaitement malgré un temps neigeux. Il ne subit pas de malus à la Sagesse (Perception) à cause de la neige, d'une tempête de neige ou de la cécité des neiges.

## Actions
_**Attaques multiples**_. Le thuellai porte deux attaques de _griffes_.

_**Griffe**_. _Attaque d'arme au corps à corps_ : +10 pour toucher, allonge 3 m, une cible.  
_Touché_ : 15 (2d8 + 6) dégâts tranchants plus 26 (4d12) dégâts de froid. Si la cible porte une armure métallique, elle doit réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 17, sans quoi elle reçoit un niveau d'épuisement.

_**Souffle glacé (Recharge 5-6)**_. Le thuellai souffle du froid dans un cône de 12 mètres. Les créatures prises dans la zone subissent 39 (6d12) dégâts de froid, la moitié seulement si elles réussissent un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 17.

_**Aura algide**_. Toutes les créatures dans un rayon de 3 mètres autour du thuellai subissent 7 (2d6) dégâts de froid au début du tour du thuellai. Les sorts et effets magiques protégeant contre le froid sont affectés par cette aura comme par une [_dissipation de la magie_](/grimoire/dissipation-de-la-magie/) (le bonus d'incantation effectif du thuellai est de +5) si, au début de son tour, le thuellai se trouve dans un rayon de 6 mètres autour de la cible. Les flammes non magiques qui se trouvent dans un rayon de 6 mètres autour du thuellai s'éteignent au début de son tour.

_**Hurlement du vent des fous (3/jour)**_. Le hurlement d'un thuellai peut faire temporairement perdre l'esprit et même pousser les créatures à attaquer leurs compagnons ou elles-mêmes. Chaque cible qui entend le hurlement du thuellai et se trouve dans un rayon de 30 mètres autour de lui doit réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Sagesse DD 14, sans quoi elle doit lancer 1d8 et consulter la table ci-dessous au début de son prochain tour. Une créature affectée répète le [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) à la fin de chacun de ses tours. Elle met fin à l'effet sur sa personne dès qu'elle en réussit un, mais à chaque échec, elle doit relancer le dé dans la table au début du tour suivant.

|D8|Résultat|
|:-:|:-|
|1|Agit normalement|
|2-4|Se contente de marmonnements incohérents|
|5-6|S'inflige 1d8 dégâts + modificateur de For avec l'objet tenu en main|
|7-8|Attaque la cible la plus proche, à déterminer au hasard s'il y en a plusieurs|

_**Blizzard (1/jour)**_. Le thuellai crée un blizzard glacé autour de lui. Une sphère de 15 mètres de rayon autour de la bête est emplie d'un brouillard glacé, de neige tourbillonnante et de cristaux de glace virevoltants. La visibilité est réduite et les créatures [_désavantagées_](/utiliser-les-caracteristiques/#avantage-et-desavantage) sur les tests de Sagesse (Perception) reposant sur la vue ou l'ouïe. Le sol de la zone devient un terrain difficile. L'effet dure 10 minutes et se déplace avec le thuellai.
