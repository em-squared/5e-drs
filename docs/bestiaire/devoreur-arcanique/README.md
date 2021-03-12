---
title: "Dévoreur arcanique"
type: "Aberration"
size: "G"
alignment: "Neutre Mauvais"
challenge: "13"
hitDiceCount: 25
abilityScores:
  for: 12
  dex: 14
  con: 16
  int: 15
  sag: 14
  cha: 18
ac:
  armorType: "custom"
  value: "15"
skills:
  - name: "perception"
    invalid: true
    value: 4
movement:
  walk: 1,50
  fly: 9
senses:
  blindsight: 18
  customBlindSight: "18 m (aveugle au-delà)"
  customPassivePerception: 14
conditionImmunities:
  - "aveugle"
  - "a-terre"
languages:
  - "profond"
  - "commun des profondeurs"
telepathy: 36
dungeonTypes:
  - Caverne aménagée
  - Donjon maçonné
source: "Créatures & Oppositions"
source_page: 59
---
## Capacités
_**Absorption de la magie par contact**_. Les armes magiques qui touchent Le dévoreur arcanique lui infligent normalement des dégâts, mais leurs propriétés magiques se retrouvent temporairement réprimés pendant 1d4 rounds. L'objet n'est alors plus considéré comme magique jusqu'à la fin de la durée.

_**Faille défensive**_. Lorsque le dévoreur arcanique utilise son attaque ou son incantation innée, elle réprime ses pouvoirs de _zone d'absorption de la magie_ et de _résistance à la magie_ jusqu'au début de son tour suivant.

_**Perception de la magie**_. Le dévoreur arcanique détecte automatiquement la magie dans un rayon de 36 mètres. Cela lui permet de localiser instantanément les auras magiques et de connaître leur intensité, mais pas les écoles de magie. Ce pouvoir lui permet également de détecter les créatures usant de sorts ou de pouvoirs magiques.

_**Incantation innée**_. Le dévoreur arcanique peut lancer le sort suivant de manière innée sans aucune composante matérielle :
* _**À volonté**_ : [_excavation_](/grimoire/excavation/)

_**Résistance à la magie**_. Le dévoreur arcanique bénéficie d'un [_avantage_](/utiliser-les-caracteristiques/#avantage-et-desavantage) aux [jets de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) contre les sorts et effets magiques.

_**Tentacules extensibles**_. Le dévoreur arcanique dispose de deux tentacules extensibles. Chaque tentacule a une CA de 20 et 10 PV. La perte d'un tentacule n'affecte pas le dévoreur arcanique (les dégâts ne s'appliquent pas à son total de points de vie). Le tentacule repousse instantanément et est remplacé lors de son prochain tour. L'extrémité des tentacules est recouverte de petits poils adhésifs qui lui permettent d'agripper les objets touchés.

_**Zone d'absorption de la magie**_. Le dévoreur arcanique « _aspire_ » la magie dans un rayon de 9 mètres autour de lui. En premier lieu, il absorbe les sorts actifs dans la zone. Tous les sorts actifs de niveau 3 ou moins prennent instantanément fin. Pour les sorts actifs de niveau 4 ou plus, le dévoreur arcanique effectue un jet de Charisme contre un DD 10 + niveau du sort. Si le jet est réussi, le sort prend fin. Si aucun sort n'est actif dans la zone, chaque créature pouvant lancer des sorts (ou pouvoirs magique) situé dans la zone doit réussir un jet de sa caractéristique pour lancer ses sorts (ou pouvoirs magiques) contre un DD 16. En cas d'échec, la cible perd un emplacement de sort du plus haut niveau disponible. S'il s'agit de pouvoirs magiques, un échec signifie que la cible ne pourra plus utiliser son pouvoir le plus puissant avant un repos court. Si ce pouvoir magique est utilisable à volonté, il ne fonctionnera pas plus d'une minute. L'aberration ne choisit pas le sort ou le pouvoir absorbé, ce choix se fait aléatoirement.

## Actions
_**Attaques multiples**_. Le dévoreur arcanique effectue deux attaques avec ses tentacules.

_**Tentacule absorbeur de magie**_. _Attaque au corps à corps_ : +12 au toucher, allonge 4,50 m, une cible.  
_Touché_ : un objet magique de la cible est agrippé (évasion DD 17). Si l'objet affecté reste agrippé un tour complet, le dévoreur arcanique absorbe sa magie. Il affecte en premier lieu les boucliers et pièces d'armures, puis les objets tenus en main, enfin les vêtements et objets sur le corps. Les objets magiques aux propriétés permanentes sont réprimées pendant 1 minute. L'objet n'est alors plus considéré comme magique jusqu'à la fin de la durée. Les objets magiques utilisant des charges perdent 1 charge par tour de façon permanente, et les parchemins et potions perdent un sort ou effet magique par tour de façon permanente.

_**Rayons prismatiques (recharge 5-6)**_. Le dévoreur arcanique attaque parfois en libérant une partie de l'énergie magique qu'il a absorbé sous formes de _rayons prismatiques_.  
Chaque créature se trouvant dans un cône de 18 mètres doit effectuer un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Dextérité (DD 16). Pour chaque cible, lancez 1d8 pour déterminer la couleur du rayon qui l'affecte.  
_**1. Rouge**_. La cible subit 10d6 dégâts de feu en cas d'échec à son [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde), ou la moitié de ces dégâts en cas de réussite.  
_**2. Orange**_. La cible subit 10d6 dégâts d'acide en cas d'échec à son [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde), ou la moitié de ces dégâts en cas de réussite.  
_**3. Jaune**_. La cible subit 10d6 dégâts de foudre en cas d'échec à son [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde), ou la moitié de ces dégâts en cas de réussite.  
_**4. Vert**_. La cible subit 10d6 dégâts de poison en cas d'échec à son [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde), ou la moitié de ces dégâts en cas de réussite.  
_**5. Bleu**_. La cible subit 10d6 dégâts de froid en cas d'échec à son [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde), ou la moitié de ces dégâts en cas de réussite.  
_**6. Indigo**_. En cas d'échec au [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde), la cible est [_entravée_](/gerer-la-sante-du-personnage/#entrave). Elle doit alors effectuer un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution à la fin de chacun de ses tours. Si elle réussit trois fois son [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde), le sort prend fin. Si elle échoue trois fois son [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde), elle est changée en pierre de manière permanente et soumise à l'état spécial «[_pétrifié_](/gerer-la-sante-du-personnage/#petrifie)». Les succès ou échecs n'ont pas besoin d'être consécutifs ; gardez une trace de vos échecs et de vos réussites à chaque tour jusqu'à ce que vous en ayez 3 dans une catégorie.  
_**7. Violet**_. En cas d'échec, la cible est [_aveuglée_](/gerer-la-sante-du-personnage/#aveugle). Elle doit alors effectuer un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Sagesse au début de votre prochain tour. Si ce nouveau [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) est réussi, l'aveuglement prend fin. Si elle échoue ce nouveau [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde), la créature est transportée dans un autre plan d'existence que le MJ choisit et n'est plus [_aveuglée_](/gerer-la-sante-du-personnage/#aveugle) (typiquement, une créature qui ne se situe pas sur son plan d'origine y est renvoyée, tandis que les autres créatures sont généralement transportées dans le plan Astral ou le plan Éthéré).  
_**8. Spécial**_. La cible est frappée par deux rayons. Relancez deux fois le dé et rejouez tous les 8.
