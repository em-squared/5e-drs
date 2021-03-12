---
title: "Sphinx, Androsphinx"
type: "Créature monstrueuse"
size: "G"
alignment: "Loyal Neutre"
challenge: "17"
hitDiceCount: 19
abilityScores:
  for: 22
  dex: 10
  con: 20
  int: 16
  sag: 18
  cha: 23
savingThrows:
  - "dex"
  - "con"
  - "int"
  - "sag"
ac:
  armorType: "armure naturelle"
  value: 7
skills:
  - name: "arcanes"
  - name: "perception"
  - name: "religion"
    isExpert: true
movement:
  walk: 12
  fly: 18
senses:
  truesight: 36
conditionImmunities:
  - "charme"
  - "terrorise"
damageTypeImmunities:
  - "psychique"
  - "c-p-t-non-magique"
languages:
  - "commun"
  - "sphinx"
environments:
  - Désert chaud
dungeonTypes:
  - Donjon maçonné
  - Ruines extérieures
source: "Créatures & Oppositions"
source_page: 261
---
## Capacités
_**Armes magiques**_. Les attaques d'arme du sphinx sont magiques.

_**Incantation**_. Le sphinx est un lanceur de sorts de niveau 12. Sa caractéristique d'incantation est la Sagesse (DD du [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) contre les sorts 18, +10 pour toucher avec les attaques de sort). Aucune composante matérielle n'est nécessaire pour lancer ses sorts. Voici les sorts de clerc préparés par le sphinx :
* _**Tours de magie (à volonté)**_ : [_épargner les mourants_](/grimoire/epargner-les-mourants/), [_flamme sacrée_](/grimoire/flamme-sacree/), [_thaumaturgie_](/grimoire/thaumaturgie/)
* _**1er niveau (4 emplacements)**_ : [_détection de la magie_](/grimoire/detection-de-la-magie/), [_détection du mal et du bien_](/grimoire/detection-du-mal-et-du-bien/), [_injonction_](/grimoire/injonction/)
* _**2e niveau (3 emplacements)**_ : [_restauration inférieure_](/grimoire/restauration-inferieure/), [_zone de vérité_](/grimoire/zone-de-verite/)
* _**3e niveau (3 emplacements)**_ : [_dissipation de la magie_](/grimoire/dissipation-de-la-magie/), [_langues_](/grimoire/langues/)
* _**4e niveau (3 emplacements)**_ : [_bannissement_](/grimoire/bannissement/), [_liberté de mouvement_](/grimoire/liberte-de-mouvement/)
* _**5e niveau (2 emplacements)**_ : [_colonne de flamme_](/grimoire/colonne-de-flamme/), [_restauration supérieure_](/grimoire/restauration-superieure/)
* _**6e niveau (1 emplacement)**_ : [_festin des héros_](/grimoire/festin-des-heros/)

_**Insondable**_. Le sphinx est immunisé contre les effets susceptibles de percevoir ses émotions ou de lire ses pensées, ainsi qu'aux sorts de divination qu'il refuse. Les tests de Sagesse (Perspicacité) effectués pour déterminer les intentions ou la sincérité du sphinx subissent un [_désavantage_](/utiliser-les-caracteristiques/#avantage-et-desavantage).

## Actions
_**Attaques multiples**_. Le sphinx effectue deux attaques de griffe.

_**Griffe**_. _Attaque d'arme au corps à corps_ : +12 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 17 (2d10+6) dégâts tranchants.

_**Rugissement (3/jour)**_. Le sphinx pousse un rugissement magique. Chaque fois qu'il rugit avant de terminer une période de repos long, le volume sonore du rugissement est plus important et l'effet est différent, comme expliqué plus bas. Les créatures situées à 150 mètres ou moins du sphinx et qui peuvent entendre le rugissement doivent chacune effectuer un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde).

_**Premier rugissement**_. Les créatures qui ratent un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Sagesse DD 18 sont [_terrorisées_](/gerer-la-sante-du-personnage/#terrorise) pendant 1 minute. Une créature [_terrorisée_](/gerer-la-sante-du-personnage/#terrorise) peut retenter le [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) à la fin de chacun de ses tours et mettre fin à l'effet dont elle est victime en cas de réussite.

_**Deuxième rugissement**_. Les créatures qui ratent un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Sagesse DD 18 sont [_assourdies_](/gerer-la-sante-du-personnage/#assourdi) et [_terrorisées_](/gerer-la-sante-du-personnage/#terrorise) pendant 1 minute. Une créature [_terrorisée_](/gerer-la-sante-du-personnage/#terrorise) est [_paralysée_](/gerer-la-sante-du-personnage/#paralyse) et peut retenter le [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) à la fin de chacun de ses tours et mettre fin à l'effet dont elle est victime en cas de réussite.

_**Troisième rugissement**_. Les créatures effectuent chacune un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 18. En cas de [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) raté, une créature subit 44 (8d10) dégâts de tonnerre et tombe [_à terre_](/gerer-la-sante-du-personnage/#a-terre). En cas de [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) réussi, la créature subit la moitié seulement des dégâts et ne tombe pas [_à terre_](/gerer-la-sante-du-personnage/#a-terre).

## Actions légendaires
Le sphinx peut effectuer 3 actions légendaires qu'il choisit parmi celles décrites ici. Une seule action légendaire peut être choisie à la fois, et uniquement à la fin du tour d'une autre créature. Le sphinx récupère au début de son tour l'utilisation des actions légendaires déjà effectuées.

_**Attaque de griffe**_. Le sphinx effectue une attaque de griffe.

_**Lancer un sort (coûte 3 actions)**_. Le sphinx lance un sort choisi parmi ceux de sa liste de sorts préparés, en utilisant un emplacement de sort comme à l'accoutumée.

_**Téléportation (coûte 2 actions)**_ . Le sphinx se téléporte par magie, avec tous ses objets équipés ou transportés, vers un emplacement inoccupé situé dans son champ de vision à une distance maximale de 36 mètres.
