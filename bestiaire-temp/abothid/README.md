---
title: "Abothid"
type: "Aberration"
size: "M"
alignment: "Loyal Mauvais"
challenge: "7"
hitDiceCount: 16
abilityScores:
  for: 16
  dex: 14
  con: 15
  int: 18
  sag: 13
  cha: 14
savingThrows:
  - "int"
  - "sag"
  - "cha"
ac:
  armorType: "armure naturelle"
  value: 3
skills:
  - name: "intimidation"
    invalid: true
    value: 7
  - name: "perception"
    invalid: true
    value: 6
  - name: "perspicacite"
    invalid: true
    value: 6
movement:
  walk: 9
senses:
  darkvision: 18
  customPassivePerception: 16
damageTypeVulnerabilities:
  - "feu"
damageTypeResistances:
  - "acide"
  - "froid"
damageTypeImmunities:
  - "poison"
languages:
  - "Commun des profondeurs"
  - "profond"
  - "langue raciale de la créature d'origine"
telepathy: 18
environments:
  - Mer / Océan
dungeonTypes:
  - Ruines sous-marines
source: "Créatures & Oppositions"
source_page: 23
---
## Capacités
_**Nuage empoisonné**_. L'abothid est constamment entouré d'un nuage de gaz toxique pour les non-abothids. Toute créature située à 1,50 mètres ou moins doit réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution (DD 14) sous peine de suffoquer et être [_étourdie_](/gerer-la-sante-du-personnage/#etourdi) pendant 1 minute.

## Actions
_**Attaques multiples**_. L'abothid effectue deux attaques de tentacules. S'il empoigne une créature, l'abothid peut également utiliser une fois le dard de sa langue.

_**Tentacule**_ . _Attaque d'arme au corps à corps_ : +8 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 11 (2d8+3) dégâts contondants (constriction). Si la cible est une créature de taille M ou plus petite, elle est [_empoignée_](/gerer-la-sante-du-personnage/#empoigne) (évasion DD 14). L'abothid a deux tentacules dont chacun peut empoigner une cible.

_**Dard de langue**_. _Attaque d'arme au corps à corps_ (basée sur la Dextérité) : +7 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 6 (1d6+2) dégâts perçants. Si la cible est une créature humanoïde, elle doit réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution (DD 14) sous peine d'être infectée par une maladie : l'injection d'un minuscule œuf d'abothid.  
Un humanoïde ne peut mener qu'un seul œuf d'abothid à son terme. L'éclosion de l'œuf se fait après 24 heures et donne naissance à une larve qui remonte jusqu'au cerveau en un nombre d'heures égal à 1d12 + valeur de Constitution de la cible infectée. Durant cette période, la victime est [_empoisonnée_](/gerer-la-sante-du-personnage/#empoisonne) et ne peut plus regagner de points de vie. Une fois que la larve a atteint le cerveau, la cible infectée voit son maximum de points de vie se réduire de 10 (3d6) points par 24 heures. Si la larve réduit le maximum des points de vie de la cible à 0, cela signifie que sa transformation en abothid est achevée. Seul un sort de [_souhait_](/grimoire/souhait/) peut inverser la transformation.

_**Asservissement (1/jour)**_. L'abothid cible une créature dans son champ de vision située à 18 mètres ou moins. La cible doit réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Sagesse (DD 14) sous peine d'être [_charmée_](/gerer-la-sante-du-personnage/#charme) magiquement par l'abothid pour une durée de 1 heure. La cible [_charmée_](/gerer-la-sante-du-personnage/#charme) est sous le contrôle de l'abothid et ne peut entreprendre aucune action mis à part se défendre au mieux de ses capacités. L'abothid peut utiliser sa télépathie pour donner des ordres à la cible.  
Chaque fois que la cible [_charmée_](/gerer-la-sante-du-personnage/#charme) subit des dégâts, elle peut retenter le [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde). En cas de réussite, l'effet prend fin. L'effet peut prendre fin avant si l'abothid est détruit, s'il s'éloigne de plus de 1,5 kilomètre de la cible, s'il se trouve sur un plan d'existence différent de celui de la cible ou, enfin, s'il effectue une action bonus pour mettre fin à cet effet.

_**Absorption psychique**_. L'abothid peut se nourrir du psychisme d'une cible asservie située à 18 mètres ou moins pour récupérer des points de vie. Il occasionne ainsi 10 (3d6) points de dégâts psychiques à sa cible et récupère un nombre de points de vie équivalent. Cette aptitude utilise toutes les actions de l'abothid à ce tour.
