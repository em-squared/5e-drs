---
title: "Mèche vivante"
type: "Créature artificielle"
size: "P"
alignment: "non-alignée"
challenge: "0.25"
hitDiceCount: 8
abilityScores:
  for: 10
  dex: 10
  con: 10
  int: 5
  sag: 5
  cha: 5
ac:
  armorType: "armure naturelle"
  value: 3
movement:
  walk: 6
senses:
  custom: "vision 6 m (aveugle au-delà du rayon de sa propre lumière)"
  customPassivePerception: 10
conditionImmunities:
  - "assourdi"
  - "aveugle"
  - "charme"
  - "empoisonne"
  - "epuise"
  - "inconscient"
  - "paralyse"
  - "petrifie"
  - "terrorise"
damageTypeVulnerabilities:
  - "feu"
damageTypeImmunities:
  - "poison"
  - "psychique"
languages:
  - "partage un lien télépathique avec celui qui a allumé sa mèche."
dungeonTypes:
  - Ruines souterraines
source: "Livre des monstres"
source_page: 297
---
## Capacités
_**Contrôlé**_. Une mèche vivante ne peut pas se déplacer, attaquer ou accomplir une action tant qu'elle n'est pas allumée. Elle obéit uniquement aux ordres télépathiques de l'individu qui l'a allumée.

_**Lumière**_. Une mèche vivante allumée émet autant de lumière qu'une torche.

_**Fondue**_. Tant qu'elle est allumée, la mèche vivante perd 1 point de vie toutes les 24 heures.

## Actions
_**Coup**_. _Attaque d'arme au corps à corps_ : +2 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 3 (1d6) dégâts contondants.

_**Se consumer**_. La mèche vivante peut recevoir l'ordre de brûler rapidement la mèche qui lui reste, créant une boule de feu dévastatrice. Toutes les créatures dans un rayon de 6 m autour de la mèche vivante subissent 7 (2d6) dégâts de feu, ou la moitié si elles réussissent un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Dextérité DD 13. Le feu contourne les angles et embrase les objets inflammables présents dans la zone s'ils ne sont ni portés ni transportés. La mèche est alors réduite à une simple flaque de cire.
