---
title: "Dipsa"
type: "Vase"
size: "TP"
alignment: "non-alignée"
challenge: "0.25"
hitDiceCount: 6
abilityScores:
  for: 3
  dex: 17
  con: 14
  int: 1
  sag: 6
  cha: 1
ac:
  armorType: "custom"
  value: "15"
skills:
  - name: "custom"
    value: "Discrétion +7 (+9 en terrain marécageux)"
movement:
  walk: 6
  climb: 6
  swim: 6
senses:
  customBlindSight: 18 m (aveugle au-delà de cette distance)
conditionImmunities:
  - "a-terre"
  - "assourdi"
  - "aveugle"
  - "charme"
  - "epuise"
  - "terrorise"
damageTypeResistances:
  - "acide"
languages:
  - "—"
environments:
  - Mangrove / Marécage
source: "Livre des monstres"
source_page: 121
---
## Capacités
_**Informe**_. Une dipsa peut traverser un espace d'une largeur minimum de 2,50 centimètres sans avoir besoin de se faufiler.

_**Morsure discrète**_. La morsure d'une dipsa est à peine visible et la blessure est rapidement anesthésiée. Une créature qui a été mordue doit réussir un test de Sagesse (Perception) DD 15 pour se rendre compte qu'elle a été attaquée ou en constater les dégâts.

_**Translucide**_. Une dipsa peut choisir de faire l'action se cacher par une action bonus à chacun de ses tours.

## Actions
_**Morsure**_. _Attaque d'arme au corps à corps_ : +7 pour toucher, allonge 0 m, une créature dans l'emplacement de la dipsa.  
_Touché_ : 1 dégât perforant et la dipsa se fixe à la cible. Une créature à laquelle une dipsa est fixée subit 3 (1d6) dégâts d'acide par round et par dipsa. Elle doit également réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 12 ou voir son maximum de points de vie réduit du nombre de dégâts reçus. Si le maximum de points de vie de la créature atteint 0 suite à cet effet, elle meurt. La réduction du maximum de points de vie de la créature dure jusqu'à ce qu'elle soit ciblée par un sort de [_restauration inférieure_](/grimoire/restauration-inferieure/) ou une magie comparable.
