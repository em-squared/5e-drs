---
title: "Lindwurm"
type: "Dragon"
size: "G"
alignment: "Neutre Mauvais"
challenge: "5"
hitDiceCount: 16
abilityScores:
  for: 18
  dex: 20
  con: 16
  int: 6
  sag: 12
  cha: 8
savingThrows:
  - "for"
  - "dex"
  - "con"
ac:
  armorType: null
skills:
  - name: "acrobaties"
  - name: "athletisme"
    invalid: true
    value: 8
  - name: "discretion"
    invalid: true
    value: 9
  - name: "perception"
movement:
  walk: 12
  swim: 6
senses:
  darkvision: 18
  custom: "perception des vibrations sur la glace 36 m"
conditionImmunities:
  - "a-terre"
  - "inconscient"
  - "paralyse"
damageTypeVulnerabilities:
  - "feu"
damageTypeImmunities:
  - "froid"
languages:
  - "-"
environments:
  - Arctique / Subarctique
  - Littoral
source: "Livre des monstres"
source_page: 272
---
## Capacités
_**Fièvre du lindwurm**_. Si une créature est infectée par cette maladie suite à une morsure de lindwurm, elle gagne un niveau d'épuisement une heure après la contamination. Elle doit faire un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 14 après chaque long repos. Sur un échec, elle gagne un niveau d'épuisement et ne récupère pas de dé de vie grâce au repos. Si elle réussit, elle se débarrasse d'un niveau d'épuisement et récupère des dés de vie normalement grâce au long repos. Si elle arrive à supprimer tous ses niveaux d'épuisement en réussissant des [jets de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde), elle guérit de sa maladie.

_**Patineur agile**_. Un lindwurm ne subit pas de malus lié au terrain difficile sur la glace. Il est immunisé contre les effets du sort graisse.

_**Ventre de serpent**_. Si le lindwurm est allongé le ventre contre la glace, il perçoit l'approche d'une créature grâce aux vibrations qu'elle provoque, ce qui lui donne la perception des vibrations.

## Actions
_**Attaques multiples**_. Le lindwurm fait une attaque de _morsure_, une attaque de _griffes_ et une attaque de _comprimer_.

_**Morsure**_. _Attaque d'arme au corps à corps_ : +7 pour toucher, allonge 3 m, une cible.  
_Touché_ : 13 (2d8 + 4) dégâts perforants et la cible doit réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 14, sans quoi elle contracte la _fièvre du lindwurm_.

_**Griffes**_. _Attaque d'arme au corps à corps_ : +7 pour toucher, allonge 3 m, une cible.  
_Touché_ : 17 (3d8 + 4) dégâts tranchants.

_**Comprimer**_. _Attaque d'arme au corps à corps_ : +7 pour toucher, allonge 3 m, une cible.  
_Touché_ : 13 (2d8 + 4) dégâts contondants et la cible est [_empoignée_](/gerer-la-sante-du-personnage/#empoigne) (évasion DD 14). La cible est [_entravée_](/gerer-la-sante-du-personnage/#entrave) et le lindwurm incapable d'en comprimer une autre tant que l'empoignade se poursuit.
