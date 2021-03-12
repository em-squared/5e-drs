---
title: "Goule darakhule"
type: "Mort-vivant"
size: "M"
alignment: "Neutre Mauvais"
challenge: "3"
hitDiceCount: 12
abilityScores:
  for: 16
  dex: 17
  con: 14
  int: 14
  sag: 12
  cha: 12
ac:
  armorType: "armure d'écailles"
  hasShield: true
skills:
  - name: "discretion"
  - name: "supercherie"
movement:
  walk: 9
senses:
  darkvision: 18
conditionImmunities:
  - "charme"
  - "empoisonne"
  - "epuise"
damageTypeResistances:
  - "necrotique"
damageTypeImmunities:
  - "poison"
languages:
  - "commun"
  - "darakhul"
environments:
  - Ruines souterraines
source: "Livre des monstres"
source_page: 217
---
## Capacités
_**Maître du déguisement**_. Un darakhul qui revêt un déguisement préparé est [_avantagé_](/utiliser-les-caracteristiques/#avantage-et-desavantage) sur les [jets de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Charisme (Supercherie) afin de passer pour un vivant. Quand le darakhul utilise ce pouvoir, il perd sa puanteur.

_**Puanteur**_. Chaque créature commençant son tour dans un rayon de 1,50 mètre autour du darakhul doit réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 12, sans quoi elle est [_empoisonnée_](/gerer-la-sante-du-personnage/#empoisonne) jusqu'au début de son prochain tour. Un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) réussi immunise une créature contre la puanteur du darakhul pendant 24 heures. Un darakhul qui utilise ce pouvoir ne peut pas profiter de _maître du déguisement_.

_**Sensibilité à la lumière du soleil**_. Le darakhul est [_désavantagé_](/utiliser-les-caracteristiques/#avantage-et-desavantage) sur les tests de Sagesse (Perception) basés sur la vue et sur les jets d'attaque tant que lui ou l'objet qu'il tente de voir ou d'attaquer est exposé à la lumière directe du soleil.

_**Braver le renvoi**_. Le darakhul et toutes les goules dans un rayon de 9 mètres autour de lui sont [_avantagés_](/utiliser-les-caracteristiques/#avantage-et-desavantage) sur les [jets de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) contre le renvoi des morts-vivants.

## Actions
_**Attaques multiples**_. Le darakhul mord une fois, griffe une fois et fait une attaque de pic de guerre. S'il utilise un bouclier, il est limité à une attaque de griffes ou de pic de guerre, mais pas les deux.

_**Morsure**_. _Attaque d'arme au corps à corps_ : +5 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 12 (2d8 + 3) dégâts perforants. Si la cible est un humanoïde, elle doit réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 11, sans quoi elle contracte la [fièvre du darakhul](#fievre-du-darakhul).

_**Griffes**_. _Attaque d'arme au corps à corps_ : +5 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 10 (2d6 + 3) dégâts tranchants. Si la cible est une créature autre qu'un mort-vivant, elle doit réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 12, sans quoi elle est [_paralysée_](/gerer-la-sante-du-personnage/#paralyse) pendant 1 minute. Une cible [_paralysée_](/gerer-la-sante-du-personnage/#paralyse) refait le [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) à la fin de chacun de ses tours et met un terme à l'effet si elle le réussit. Si un humanoïde est [_paralysé_](/gerer-la-sante-du-personnage/#paralyse) pendant 2 rounds ou plus (s'il rate au moins 2 [jets de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde)), consécutifs ou non, il contracte la [fièvre du darakhul](#fievre-du-darakhul).

_**Pic de guerre**_. _Attaque d'arme au corps à corps_ : +5 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 7 (1d8 + 3) dégâts perforants.

§§§ .hero
## Fièvre du Darakhul
Cette maladie très rare se transmet principalement par les morsures. Elle se manifeste en 24 heures en affaiblissant rapidement sa victime qui doit faire un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 17 après chaque long repos. À chaque échec, elle subit 14 (4d6) dégâts nécrotiques et son maximum de points de vie est réduit du même montant. La victime ne peut pas se débarrasser de cette réduction tant qu'elle n'a pas guéri de la fièvre du darakhul. Une fois rétablie, elle doit bénéficier de [_restauration supérieure_](/grimoire/restauration-superieure/) ou d'une magie similaire. La victime guérit de la maladie si elle réussit ses [jets de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) deux jours de suite. [_Restauration supérieure_](/grimoire/restauration-superieure/) soigne la maladie tandis que [_restauration inférieure_](/grimoire/restauration-inferieure/) _avantage_ la victime sur le [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) quotidien de Constitution.

La maladie se répand surtout chez les humains, mais comme elle peut affecter les ogres, elle doit pouvoir toucher les autres géants.

Si une créature atteinte de la fièvre du darakhul meurt, lancez 1d20, ajoutez le modificateur de Constitution actuel du personnage et consultez la table des ajustements pour savoir en quel mort-vivant elle se change.
### Table des ajustements
|**Jet**|**Résultat**|
|:-:|:-|
|**1-9**|Rien, la victime est juste morte|
|**10-16**|Goule|
|**17-20**|Blême|
|**21+**|Darakhul|
§§§
