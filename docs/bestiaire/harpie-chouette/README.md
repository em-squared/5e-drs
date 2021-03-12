---
title: "Harpie chouette"
type: "Créature monstrueuse"
size: "M"
alignment: "Neutre Mauvais"
challenge: "5"
hitDiceCount: 15
abilityScores:
  for: 12
  dex: 17
  con: 16
  int: 11
  sag: 14
  cha: 14
ac:
  armorType: "custom"
  value: "14"
skills:
  - name: "custom"
    value: "Discrétion +6 (+9 en volant)"
  - name: "representation"
    invalid: true
    value: 7
movement:
  walk: 6
  fly: 24
  hover: true
senses:
  blindsight: 18
damageTypeVulnerabilities:
  - "tonnerre"
languages:
  - "commun"
  - "abyssal"
  - "géant"
environments:
  - Désert chaud
  - Jungle
source: "Livre des monstres"
source_page: 234
---
## Capacités
_**Dissonance**_. La harpie chouette ne peut pas utiliser vision aveugle quand elle est [_assourdie_](/gerer-la-sante-du-personnage/#assourdi).

_**Incantation innée**_. La harpie chouette utilise le Charisme comme caractéristique d'incantation innée. Elle peut lancer les sorts suivants de manière innée, sans composantes matérielles :
* **3/jour** : [_ténèbres_](/grimoire/tenebres/)

## Actions
_**Attaques multiples**_. La harpie chouette fait deux attaques de _griffes_ et deux attaques de _serres_.

_**Griffes**_. _Attaque d'arme au corps à corps_ : +6 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 8 (2d4 + 3) dégâts tranchants.

_**Serres**_. _Attaque d'arme au corps à corps_ : +6 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 10 (2d6 + 3) dégâts tranchants.

_**Ténèbres flottantes**_. Une harpie chouette en vol stationnaire peut laisser tomber une fine poussière magique de ses ailes sur une créature située à 6 mètres ou moins, directement sous elle. Cette créature doit réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 15 ou tomber [_inconsciente_](/gerer-la-sante-du-personnage/#inconscient) et [_empoisonnée_](/gerer-la-sante-du-personnage/#empoisonne) pendant 10 minutes. Elle se réveille si elle subit des dégâts ou si une créature utilise son action pour la réveiller. Le réveil ne dissipe pas le poison.

_**Chant attirant**_. La harpie chouette entonne une mélodie magique. Tous les humanoïdes et les géants dans un rayon de 90 mètres qui entendent le chant doivent réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Sagesse DD 15 ou être [_charmées_](/gerer-la-sante-du-personnage/#charme) jusqu'à la fin de la chanson. La harpie doit utiliser une action bonus lors des tours suivants pour continuer de chanter. Elle peut arrêter à tout moment. Le chant se termine si la harpie est [_neutralisée_](/gerer-la-sante-du-personnage/#neutralise).

Tant que la cible est [_charmée_](/gerer-la-sante-du-personnage/#charme) par la harpie, elle est [_neutralisée_](/gerer-la-sante-du-personnage/#neutralise) et ignore le chant des autres harpies. Si elle s'éloigne à plus de 1,50 mètre de la harpie, elle doit se déplacer à sa vitesse maximale (en se précipitant si nécessaire) en empruntant l'itinéraire le plus court pour se rendre à 1,50 mètre ou moins de la harpie. Elle ne manœuvre pas de manière à éviter les attaques d'opportunité, mais peut refaire le [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) à chaque fois qu'elle subit des dégâts émanant d'une source autre que la harpie. Elle répète le [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) avant d'entrer sur un terrain dangereux (de la lave ou une fosse par exemple) si l'itinéraire le plus direct comporte une zone dangereuse. Elle le répète aussi à la fin de chacun de ses tours. Un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) réussi met un terme à l'effet sur la créature et l'immunise contre le chant de cette harpie pendant 24 heures.
