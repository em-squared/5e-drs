---
title: "Cambium"
type: "Fiélon"
size: "G"
alignment: "Neutre Mauvais"
challenge: "14"
hitDiceCount: 23
abilityScores:
  for: 21
  dex: 16
  con: 23
  int: 17
  sag: 16
  cha: 18
savingThrows:
  - "dex"
  - "con"
  - "int"
  - "sag"
  - "cha"
ac:
  armorType: "armure naturelle"
  value: 6
skills:
  - name: "arcanes"
  - name: "discretion"
  - name: "medecine"
  - name: "perception"
  - name: "perspicacite"
  - name: "supercherie"
movement:
  walk: 12
senses:
  darkvision: 18
conditionImmunities:
  - "empoisonne"
  - "epuise"
damageTypeImmunities:
  - "poison"
languages:
  - "commun"
  - "draconique"
  - "infernal"
dungeonTypes:
  - Donjon maçonné
  - Ruines extérieures
source: "Livre des monstres"
source_page: 52
---
## Capacités
_**Incantation innée**_. La caractéristique d'incantation innée d'un cambium est le Charisme (DD du [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) contre les sorts 17, +9 pour toucher avec les attaques de sort). Il peut lancer les sorts suivants de manière innée, sans composantes matérielles :
* **En permanence** : [_lévitation_](/grimoire/levitation/)
* **À volonté** : [_changement de plan_](/grimoire/changement-de-plan/), [_déguisement_](/grimoire/deguisement/), [_détection des pensées_](/grimoire/detection-des-pensees/), [_épargner les mourants_](/grimoire/epargner-les-mourants/), [_immobiliser un humanoïde_](/grimoire/immobiliser-un-humanoide/)
* **3/jour** : [_guérison_](/grimoire/guerison/), [_protection contre le poison_](/grimoire/protection-contre-le-poison/), _rayon empoisonné_ 18 (4d8), [_soin des blessures_](/grimoire/soin-des-blessures/) 21 (4d8 + 3)
* **1/jour** : [_doigt de mort_](/grimoire/doigt-de-mort/)

## Actions
_**Attaques multiples**_. Un cambium porte quatre attaques de _doigts-aiguilles_.

_**Doigts-aiguilles**_. _Attaque d'arme au corps à corps_ : +10 pour toucher, allonge 3 m, une cible.  
_Touché_ : 21 (3d10 + 5) dégâts perforants. En outre, la cible doit faire un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 19 ; sur un échec, le cambium lui inflige soit une _réduction de caractéristiques_, soit un _dérèglement humoral_. La cible ne peut faire ce [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) qu'une fois par tour, même si elle reçoit plus d'une attaque de doigts-aiguilles.

_**Réduction de caractéristique (3/jour)**_. Si la cible de l'attaque de _doigts-aiguilles_ d'un Cambium échoue à son [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution, elle subit une réduction de 1d4 points de caractéristique (choisie par le cambium) jusqu'à ce qu'elle ait terminé un repos long. Si cet effet réduit la valeur d'une de ses caractéristiques à 0, la créature sombre dans l'inconscience jusqu'à ce qu'elle ait regagné au moins 1 point.

_**Dérèglement humoral (3/jour)**_. Si la cible de l'attaque de doigts-aiguilles d'un cambium échoue à son [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution, elle subit l'un des effets suivants :  
* **Flux sanguin**. La cible ne peut pas être soignée, naturellement ou par magie, avant d'avoir terminé un repos long.  
* **Flux bilieux**. La cible se trouve dans l'état confus (comme si elle se trouvait sous l'effet du sort [_confusion_](/grimoire/confusion/)) pendant 3d6 rounds. La cible peut refaire le [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) à la fin de chacun de ses tours pour tenter de mettre fin à cet effet de manière anticipée.  
* **Flux mélancolique**. La cible est [_neutralisée_](/gerer-la-sante-du-personnage/#neutralise) pendant 1d4 rounds et ralentie (comme si elle se trouvait sous l'effet du sort lenteur) pendant 3d6 rounds. La cible peut refaire le [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) à la fin de chacun de ses tours pour tenter de mettre fin à cet effet de manière anticipée.  
* **Flux flegmatique**. Si la cible réussit un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 18, elle annule cet effet. Si elle échoue, elle gagne un niveau d'épuisement qui dure pendant 3d6 rounds.
