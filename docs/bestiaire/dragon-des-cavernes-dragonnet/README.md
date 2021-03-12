---
title: "Dragon des cavernes, dragonnet"
type: "Dragon"
size: "M"
alignment: "Neutre Mauvais"
challenge: "2"
hitDiceCount: 10
abilityScores:
  for: 19
  dex: 12
  con: 17
  int: 8
  sag: 10
  cha: 12
savingThrows:
  - "dex"
  - "con"
  - "cha"
ac:
  armorType: "armure naturelle"
  value: 5
skills:
  - name: "discretion"
    isExpert: true
  - name: "perception"
movement:
  walk: 9
  burrow: 6
  fly: 6
senses:
  blindsight: 36
conditionImmunities:
  - "empoisonne"
damageTypeImmunities:
  - "acide"
  - "poison"
  - "tonnerre"
languages:
  - "draconique"
dungeonTypes:
  - Caverne aménagée
  - Caverne naturelle
source: "Livre des monstres"
source_page: 135
---
## Capacités
_**Fouisseur**_. Un dragon des cavernes est capable de creuser à travers la pierre solide en se déplaçant de la moitié de sa vitesse de fouissement. Il laisse derrière lui un tunnel de 1,50 mètre de large sur 1,50 mètre de haut.

_**Incantation innée**_. La caractéristique d'incantation innée du dragon est le Charisme. Il peut lancer les sorts suivants de manière innée, sans composantes matérielles :
* **3/jour** : [_ténèbres_](/grimoire/tenebres/)

## Actions
_**Morsure**_. _Attaque d'arme au corps à corps_ : +6 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 11 (2d6 + 4) dégâts perforants plus 3 (1d6) dégâts de poison.

_**Souffle empoisonné (Recharge 5-6)**_. Le dragon crache un gaz noir empoisonné sur un cône de 4,50 mètres. Chaque créature qui se trouve dans la zone d'effet doit faire un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 13. Sur un échec, une créature subit 14 (4d6) dégâts de poison et se trouve dans l'état [_empoisonné_](/gerer-la-sante-du-personnage/#empoisonne). L'état [_empoisonné_](/gerer-la-sante-du-personnage/#empoisonne) dure jusqu'à ce que la cible termine un repos court ou long, ou le dissipe à l'aide de [_restauration inférieure_](/grimoire/restauration-inferieure/). Si la créature réussit son [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde), elle subit la moitié des dégâts et n'est pas [_empoisonnée_](/gerer-la-sante-du-personnage/#empoisonne).
