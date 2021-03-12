---
title: "Berstuc"
type: "Fiélon"
subtype: "Démon"
size: "G"
alignment: "Chaotique Mauvais"
challenge: "11"
hitDiceCount: 15
abilityScores:
  for: 22
  dex: 10
  con: 20
  int: 12
  sag: 14
  cha: 19
savingThrows:
  - "for"
  - "sag"
  - "cha"
ac:
  armorType: "armure naturelle"
  value: 8
skills:
  - name: "custom"
    value: "Discrétion +4 (+8 en terrain boisé)"
  - name: "nature"
    invalid: true
    value: 10
  - name: "supercherie"
  - name: "survie"
movement:
  walk: 12
  burrow: 6
senses:
  darkvision: 36
conditionImmunities:
  - "empoisonne"
damageTypeResistances:
  - "acide"
  - "feu"
  - "c-p-t-non-magique"
damageTypeImmunities:
  - "foudre"
  - "poison"
languages:
  - "abyssal"
  - "commun"
telepathy: 36
source: "Livre des monstres"
source_page: 77
---
## Capacités
_**Présence trompeuse**_. Un berstuc est identifié comme une fée par tous les sorts ou effets magiques qui détectent les créatures surnaturelles. Les bêtes et les plantes se sentent bien autour d'un berstuc et ne l'attaqueront pas, sauf si elles en reçoivent l'ordre ou ont été provoquées.

_**Résistance à la magie**_. Un berstuc est [_avantagé_](/utiliser-les-caracteristiques/#avantage-et-desavantage) lors de ses [jets de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) contre les sorts et autres effets magiques.

_**Chemin tortueux**_. Un berstuc ne laisse pas de traces de son passage à travers un terrain naturel et ne peut donc pas être traqué à l'aide de tests de compétences ou d'autres moyens naturels. Les créatures qui voyagent avec lui sont incapables de rebrousser chemin pour revenir à leur point de départ et sont complètement perdues au bout de 1 heure de trajet. Les créatures qui ont été égarées par un berstuc sont [_désavantagées_](/utiliser-les-caracteristiques/#avantage-et-desavantage) lors de toutes leurs tentatives de repérer où elles se trouvent ou de retrouver leur chemin pendant 24 heures.

## Action
_**Attaques multiples**_. Un berstuc porte trois attaques de _coup_ et utilise une fois son pouvoir _absorber_.

_**Coup**_. _Attaque d'arme au corps à corps_ : +10 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 14 (2d8 + 5) dégâts contondants et la cible est [_empoignée_](/gerer-la-sante-du-personnage/#empoigne) (évasion DD 16).

_**Absorber**_. Un berstuc attire une créature de taille Moyenne ou inférieure qu'il a [_empoignée_](/gerer-la-sante-du-personnage/#empoigne) dans son corps. Une créature absorbée ne se trouve plus dans l'état [_empoigné_](/gerer-la-sante-du-personnage/#empoigne), mais elle est [_aveuglée_](/gerer-la-sante-du-personnage/#aveugle) et [_entravée_](/gerer-la-sante-du-personnage/#entrave), bénéficie d'un abri total contre les attaques et autres effets provenant de l'extérieur du berstuc, et elle subit 14 (2d8 + 5) dégâts perforants plus 27 (5d10) dégâts de poison au début de chacun des tours du berstuc. Un berstuc ne peut contenir ainsi qu'une seule créature à la fois.

Si une créature qu'il a absorbée inflige 20 points de dégâts ou plus à un berstuc lors du même tour, ce dernier doit réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 17 ou rejeter la créature absorbée, qui tombe [_à terre_](/gerer-la-sante-du-personnage/#a-terre) dans un emplacement situé à 1,50 mètre autour du démon. Si le berstuc meurt, une créature absorbée n'est plus [_entravée_](/gerer-la-sante-du-personnage/#entrave) et elle peut s'extraire de son cadavre en dépensant 1,50 mètre de déplacement. Elle ressort [_à terre_](/gerer-la-sante-du-personnage/#a-terre).
