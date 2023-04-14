---
title: Druide
---
§§§ .class-logo
![Druide](/druide.svg)
§§§

§§§ .text-center .text-lg-h4 .text-h5 .mb-4
# DRUIDE
§§§

## Évolution du druide
§§§ .table-container
|Niveau|Bonus de maîtrise|Aptitudes|Tours de magie connus|Emplacements de sorts par niveau de sort|||||||||
|^^|^^|^^|^^|1<sup>er</sup>|2<sup>e</sup>|3<sup>e</sup>|4<sup>e</sup>|5<sup>e</sup>|6<sup>e</sup>|7<sup>e</sup>|8<sup>e</sup>|9<sup>e</sup>|
|:-:|:-:|:-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|**1**|+2|[Druidique](#druidique), [Incantations](#incantations)|2|2|-|-|-|-|-|-|-|-|
|**2**|+2|[Forme sauvage](#forme-sauvage), [Cercle druidique](#cercle-druidique)|2|3|-|-|-|-|-|-|-|-|
|**3**|+2|-|2|4|2|-|-|-|-|-|-|-|
|**4**|+2|[Forme sauvage améliorée](#forme-sauvage), [Amélioration de caractéristiques](#amelioration-de-caracteristiques)|3|4|3|-|-|-|-|-|-|-|
|**5**|+3|-|3|4|3|2|-|-|-|-|-|-|
|**6**|+3|[Aptitude de cercle druidique](#cercle-druidique)|3|4|3|3|-|-|-|-|-|-|
|**7**|+3|-|3|4|3|3|1|-|-|-|-|-|
|**8**|+3|[Forme sauvage améliorée](#forme-sauvage), [Amélioration de caractéristiques](#amelioration-de-caracteristiques)|3|4|3|3|2|-|-|-|-|-|
|**9**|+4|-|3|4|3|3|3|1|-|-|-|-|
|**10**|+4|[Aptitude de cercle druidique](#cercle-druidique)|4|4|3|3|3|2|-|-|-|-|
|**11**|+4|-|4|4|3|3|3|2|1|-|-|-|
|**12**|+4|[Amélioration de caractéristiques](#amelioration-de-caracteristiques)|4|4|3|3|3|2|1|-|-|-|
|**13**|+5|-|4|4|3|3|3|2|1|1|-|-|
|**14**|+5|[Aptitude de cercle druidique](#cercle-druidique)|4|4|3|3|3|2|1|1|-|-|
|**15**|+5|-|4|4|3|3|3|2|1|1|1|-|
|**16**|+5|[Amélioration de caractéristiques](#amelioration-de-caracteristiques)|4|4|3|3|3|2|1|1|1|-|
|**17**|+6|-|4|4|3|3|3|2|1|1|1|1|
|**18**|+6|[Jeunesse éternelle](#jeunesse-eternelle), [Incantation animale](#incantation-animale)|4|4|3|3|3|3|1|1|1|1|
|**19**|+6|[Amélioration de caractéristiques](#amelioration-de-caracteristiques)|4|4|3|3|3|3|2|1|1|1|
|**20**|+6|[Archidruide](#archidruide)|4|4|3|3|3|3|2|2|1|1|
§§§

## Aptitudes de classe
En tant que druide, vous bénéficiez des aptitudes de classe suivantes.

### Points de vie
**Dés de vie** : 1d8 par niveau de druide  
**Points de vie au niveau 1** : 8 + votre modificateur de Constitution  
**Points de vie aux niveaux supérieurs** : 1d8 (ou 5) + votre niveau de Constitution par niveau de druide après le premier niveau

### Maîtrises
**Armures** : armures légères, armures intermédiaires, boucliers (les druides n'utilisent pas d'armure ou de bouclier faits en métal)  
**Armes** : gourdins, dagues, fléchettes, javelines, massues, bâtons, cimeterres, serpes, frondes, lances  
**Outils** : matériel d'herboriste  
**Jets de sauvegarde** : Intelligence, Sagesse  
**Compétences** : choisissez deux compétences parmi les suivantes : Arcanes, Dressage, Médecine, Nature, Perception, Perspicacité, Religion et Survie

### Équipement
Vous commencez avec l'équipement suivant, en plus de l'équipement accordé par votre historique :
* _(a)_ un bouclier de bois ou _(b)_ n'importe quelle arme courante.
* _(a)_ un cimeterre ou _(b)_ n'importe quelle arme de corps-à-corps courante.
* une armure de cuir, un paquetage d'explorateur et un focaliseur druidique

### Druidique
Vous connaissez le druidique, la langue secrète des druides. Vous pouvez parler cette langue et l'utiliser pour laisser des messages cachés. Vous, ainsi que toutes les autres personnes qui parlent le druidique, repérez immédiatement de tels messages. D'autres créatures peuvent aussi repérer la présence d'un message en réussissant un test de Sagesse (Perception) DD 15, mais elles doivent faire appel à la magie si elles veulent le déchiffrer.

### Incantations
Vos pouvoirs découlant de l'essence divine de la nature elle-même, vous êtes en mesure de lancer des sorts qui vous permettent de manipuler cette essence selon votre volonté.

### Tours de magie
Au niveau 1, vous connaissez deux tours de magie de votre choix, que vous choisissez dans la liste de <router-link :to="{ path: '/grimoire/', query: { classes: 'Druide' }}">sorts de druide</router-link>
. Vous pouvez apprendre d'autres tours de magie de druide à certains niveaux, comme vous pouvez le voir dans le tableau d'[évolution du druide](#evolution-du-druide), dans la colonne tours de magie connus.

### Préparer et lancer des sorts
Le tableau d'[évolution du druide](#evolution-du-druide) vous indique combien d'emplacements de sorts vous pouvez utiliser au niveau 1 et aux niveaux supérieurs. Pour lancer un sort de druide, vous devez utiliser un emplacement d'un niveau équivalent ou supérieur à ce sort. Vous regagnez accès à tous ces emplacements après un repos long.

Choisissez des sorts que vous pouvez lancer dans la liste de <router-link :to="{ path: '/grimoire/', query: { classes: 'Druide' }}">sorts de druide</router-link> afin de les préparer. Vous pouvez choisir un nombre de sorts de druide égal à votre modificateur de Sagesse + votre niveau de druide (avec un minimum d'un sort). Vous devez choisir des sorts que vous pouvez lancer, c'est-à-dire pour lesquels vous possédez au moins un emplacement de niveau équivalent.

Par exemple, si vous êtes un druide de niveau 3, vous avez quatre emplacements de sorts de niveau 1 et deux emplacements de sorts de niveau 2. Avec une valeur de Sagesse de 16, votre liste de sorts peut compter six sorts de niveau 1 ou 2 que vous pouvez combiner comme vous le souhaitez. Si vous préparez le sort de niveau 1 [_soin des blessures_](/grimoire/soin-des-blessures/), vous pouvez le lancer en utilisant un emplacement de sorts de niveau 1 ou 2. Lancer le sort ne l'efface pas de votre liste de sorts préparés.

Vous pouvez changer votre liste de sorts préparés à la fin d'un repos long, mais préparer une nouvelle liste de sorts de druide vous demande de passer du temps à prier et à méditer : au moins 1 minute par niveau de sort pour chaque sort qui se trouve sur votre liste.

### Caractéristique d'incantation
La caractéristique d'incantation qui vous permet de lancer les sorts de druide est la Sagesse, car votre magie découle de votre dévotion et de votre lien avec la nature. Vous utilisez votre Sagesse dès qu'un sort de druide vous demande d'utiliser votre caractéristique d'incantation pour être lancé. En plus de cela, vous pouvez utiliser votre modificateur de Sagesse quand vous calculez le [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) d'un sort de druide que vous avez lancé ou quand vous faites une attaque avec un sort.

**DD d'un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) = 8 + votre bonus de maîtrise + votre modificateur de Sagesse**

**Modificateur de sort de combat = votre bonus de maîtrise + votre modificateur de Sagesse**

### Incantation rituelle
Vous pouvez lancer un sort de druide que vous connaissez et que vous avez préparé sous la forme d'un rituel dans la mesure où il possède le sous-type rituel.

### Focaliseur d'incantation
Vous pouvez utiliser un focaliseur druidique (voir le chapitre [Équipement - Équipement d'aventurier](/equipement-d-aventurier/)) comme focaliseur d'incantation pour vos sorts de druide.

### Forme sauvage
À partir du niveau 2, vous pouvez utiliser une action pour vous métamorphoser en un animal que vous avez déjà vu. Vous pouvez utiliser cette aptitude deux fois. Vous devez ensuite finir un repos court ou un repos long pour récupérer les deux utilisations de cette aptitude.

Votre niveau de druide détermine en quel animal vous pouvez vous transformer (voir le tableau des formes sauvages ci-après). Au niveau 2, par exemple, vous pouvez vous transformer en n'importe quel animal qui a un indice de dangerosité égal ou inférieur à 1/4 et qui n'a pas de vitesse de vol ou de nage.

§§§ .table-container
| Niv. | ID | Limitations | Exemple |
|:-:|:-:|:-|:-|
| **2** | 1/4 | Pas de vitesse de vol ou de nage | [Loup](/bestiaire/loup/) |
| **4** | 1/2 | Pas de vitesse de vol | [Crocodile](/bestiaire/crocodile/) |
| **8** | 1 | - | [Aigle géant](/bestiaire/aigle-geant/) |
§§§

Vous pouvez conserver votre forme sauvage pendant un nombre d'heures équivalent à la moitié de votre niveau de druide (arrondi à l'entier inférieur). Vous reprenez alors forme humaine, sauf si vous utilisez une nouvelle fois cette aptitude. Vous pouvez reprendre forme humaine de manière anticipée en utilisant une action bonus lors de votre tour. Vous retrouvez immédiatement forme humaine si vous perdez conscience, si vous êtes réduit à 0 point de vie ou si vous mourrez.

Pendant que vous êtes transformé, les règles suivantes s'appliquent :
* Votre profil technique est remplacé par celui de l'animal dont vous avez pris la forme, mais vous conservez votre alignement, votre personnalité et vos valeurs d'Intelligence, de Sagesse et de Charisme. Vous conservez aussi toutes vos compétences et vos maîtrises de [jets de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde), en plus de celles de la créature dont vous avez pris la forme. Si la créature et vous disposez d'un bonus pour la même compétence, vous conservez le plus élevé des deux. Par contre, si elle possède des actions légendaires ou des actions d'antre (voir [Créatures & Oppositions](/comprendre-le-profil-technique-des-monstres/)), comme certains puissants monstres, vous ne pouvez pas les utiliser.
* Quand vous vous transformez, vous adoptez aussi les dés de vie et les points de vie de la créature. Quand vous reprenez votre forme normale, vous retrouvez le nombre de points de vie que vous aviez avant de vous transformer. Néanmoins, si vous retrouvez votre forme normale après avoir été réduit à 0 point de vie, tous les dégâts supplémentaires qui ont pu vous être infligés sont transférés à votre forme normale. Par exemple, si vous subissez 10 dégâts sous votre forme sauvage alors qu'il ne vous reste qu'1 point de vie, vous reprenez votre forme normale et subissez 9 dégâts sous cette forme. Tant que ces dégâts supplémentaires ne réduisent pas vos points de vie à 0, vous restez conscient.
* Vous ne pouvez pas lancer de sorts. Vos capacités à parler et à faire n'importe quelle action qui nécessite l'usage des mains sont limitées par les capacités de votre forme sauvage. Vous transformer ne brise cependant pas votre concentration sur un sort que vous avez déjà lancé et ne vous empêche pas d'accomplir des actions qui font partie d'un sort, comme dans le cas d'[appel de la foudre](/grimoire/appel-de-la-foudre/), si vous l'avez déjà lancé.
* Vous conservez les bénéfices de toute aptitude propre à votre classe, à votre race ou de toute autre source. Vous pouvez les utiliser dans la mesure où votre forme sauvage vous le permet. Néanmoins, vous ne pouvez utiliser vos sens spéciaux, comme la vision dans le noir, que si votre nouvelle forme possède elle aussi ce sens.
* Vous choisissez quelle partie de votre équipement tombe sur le sol sur l'emplacement que vous occupez et quelle partie fusionne avec votre nouvelle forme ou est portée par celle-ci. L'équipement que vous portez sur vous fonctionne normalement, mais le MJ doit décider si une pièce particulière d'équipement peut être portée de manière pratique par l'animal dont vous prenez la forme (en fonction de la forme et de la taille de la créature). Votre équipement lui-même ne se transforme pas pour s'adapter à votre nouvelle forme et toute pièce d'équipement qui ne peut pas être portée par cette créature tombe sur le sol ou fusionne avec vous au moment de votre transformation. L'équipement qui fusionne avec vous sous votre forme sauvage n'a aucun effet jusqu'à ce que vous retrouviez votre forme normale.

### Cercle druidique
Quand vous atteignez le niveau 2, vous décidez d'adopter les valeurs d'un [cercle druidique](#cercles-druidiques) : le [cercle de la terre](#cercle-de-la-terre), le [cercle des saisons](#cercle-des-saisons), le [cercle des fées](#cercle-des-fees), le [cercle des profondeurs](#cercle-des-profondeurs), le [cercle de la vie](#cercle-de-la-vie), le [cercle des châtiments](#cercle-des-chatiments), le [cercle sans nom](#cercle-sans-nom) ou le [cercle de la Verdoyance](#cercle-de-la-verdoyance). En fonction de votre choix, vous avez accès à différentes aptitudes aux niveaux 2, 6, 10 et 14.

### Amélioration de caractéristiques
Quand vous atteignez les niveaux 4, 8, 12, 16 et 19, vous pouvez augmenter de 2 la valeur d'une caractéristique de votre choix ou augmenter de 1 la valeur de deux caractéristiques de votre choix. Cette aptitude ne vous permet pas de dépasser 20 dans une valeur de caractéristique.

### Jeunesse éternelle
À partir du niveau 18, la magie primitive que vous maniez vous permet de vieillir plus lentement. Pour chaque décennie qui passe, votre corps ne vieillit que d'un an.

### Incantation animale
À partir du niveau 18, vous pouvez lancer la plupart de vos sorts de druide quelle que soit la forme que vous prenez grâce à l'aptitude forme sauvage. Vous pouvez accomplir les composantes verbales et somatiques d'un sort de druide pendant que vous avez une forme sauvage, mais vous ne pouvez pas utiliser de composantes matérielles.

### Archidruide
Au niveau 20, vous pouvez utiliser votre forme sauvage autant de fois que vous le voulez.

De plus, vous pouvez ignorer les composantes verbales et somatiques de vos sorts de druide ainsi que les composantes matérielles qui n'ont pas de coût et ne sont pas consommées par le sort. Ce bénéfice est valable à la fois sous votre forme normale et sous votre forme sauvage.

## Cercles druidiques
### Cercle de la terre
#### Tour de magie bonus
Quand vous choisissez ce cercle au niveau 2, vous pouvez apprendre un tour de magie de druide supplémentaire de votre choix.

#### Récupération naturelle
À partir du niveau 2, vous pouvez regagner une partie de votre énergie magique en méditant et en communiant avec la nature. Pendant un repos court, vous pouvez choisir de récupérer certains emplacements de sorts. Ces emplacements de sorts doivent avoir un niveau combiné inférieur ou égal à la moitié de votre niveau de druide (arrondi à l'entier supérieur), mais vous ne pouvez pas récupérer des emplacements d'un niveau supérieur ou égal au niveau 6. Vous ne pouvez pas utiliser cette aptitude de nouveau tant que vous n'avez pas terminé un repos long.

Par exemple, si vous êtes un druide de niveau 4, vous pouvez récupérer un équivalent de deux niveaux d'emplacements de sorts, donc soit un emplacement de niveau 2, soit deux emplacements de niveau 1.

#### Sorts de cercle
Votre connexion mystique avec la terre vous donne la capacité de lancer certains sorts. Aux niveaux 3, 5, 7 et 9, vous avez accès à des sorts de cercles liés au type de terrain sur lequel vous êtes devenu druide. Choisissez ce terrain ([arctique](#arctique), [littoral](#littoral), [désert](#desert), [forêt](#foret), [plaine](#plaine), [montagne](#montagne) ou [marais](#marais)) et consultez la liste de sort qui y est liée.

Une fois que vous avez appris un sort de cercle, il est toujours considéré comme préparé et il n'est pas comptabilisé dans le nombre de sorts que vous pouvez préparer chaque jour. Si vous apprenez un sort qui n'apparaît pas dans la liste de <router-link :to="{ path: '/grimoire/', query: { classes: 'Druide' }}">sorts de druide</router-link>, considérez-le quand même comme un sort de druide.

§§§ .table-container
##### Arctique
| Niv. de druide | Sorts de cercle |
|:-:|:-|
| **3** | [_immobiliser un humanoïde_](/grimoire/immobiliser-un-humanoide/), [_croissance d'épines_](/grimoire/croissance-d-epines/) |
| **5** | [_tempête de neige_](/grimoire/tempete-de-neige/), [_lenteur_](/grimoire/lenteur/) |
| **7** | [_liberté de mouvement_](/grimoire/liberte-de-mouvement/), [_tempête de grêle_](/grimoire/tempete-de-grele/) |
| **9** | [_communion avec la nature_](/grimoire/communion-avec-la-nature/), [_cône de froid_](/grimoire/cone-de-froid/) |
§§§

§§§ .table-container
##### Littoral
| Niv. de druide | Sorts de cercle |
|:-:|:-|
| **3** | [_image miroir_](/grimoire/image-miroir/), [_pas brumeux_](/grimoire/pas-brumeux/) |
| **5** | [_respiration aquatique_](/grimoire/respiration-aquatique/), [_marche sur l'eau_](/grimoire/marche-sur-l-eau/) |
| **7** | [_contrôle de l'eau_](/grimoire/controle-de-l-eau/), [_liberté de mouvement_](/grimoire/liberte-de-mouvement/) |
| **9** | [_invoquer un élémentaire_](/grimoire/invoquer-un-elementaire/), [_scrutation_](/grimoire/scrutation/) |
§§§

§§§ .table-container
##### Désert
| Niv. de druide | Sorts de cercle |
|:-:|:-|
| **3** | [_flou_](/grimoire/flou/), [_silence_](/grimoire/silence/) |
| **5** | [_création de nourriture et d'eau_](/grimoire/creation-de-nourriture-et-d-eau/), [_protection contre les énergies_](/grimoire/protection-contre-les-energies/) |
| **7** | [_flétrissement_](/grimoire/fletrissement/), [_terrain hallucinatoire_](/grimoire/terrain-hallucinatoire/) |
| **9** | [_fléau d'insectes_](/grimoire/fleau-d-insectes/), [_mur de pierre_](/grimoire/mur-de-pierre/) |
§§§

§§§ .table-container
##### Forêt
| Niv. de druide | Sorts de cercle |
|:-:|:-|
| **3** | [_peau d'écorce_](/grimoire/peau-d-ecorce/), [_pattes d'araignée_](/grimoire/pattes-d-araignee/) |
| **5** | [_appel de la foudre_](/grimoire/appel-de-la-foudre/), [_croissance végétale_](/grimoire/croissance-vegetale/) |
| **7** | [_divination_](/grimoire/divination/), [_liberté de mouvement_](/grimoire/liberte-de-mouvement/) |
| **9** | [_communion avec la nature_](/grimoire/communion-avec-la-nature/), [_passage par les arbres_](/grimoire/passage-par-les-arbres/) |
§§§

§§§ .table-container
##### Plaine
| Niv. de druide | Sorts de cercle |
|:-:|:-|
| **3** | [_invisibilité_](/grimoire/invisibilite/), [_passage sans trace_](/grimoire/passage-sans-trace/) |
| **5** | [_lumière du jour_](/grimoire/lumiere-du-jour/), [_hâte_](/grimoire/hate/) |
| **7** | [_divination_](/grimoire/divination/), [_liberté de mouvement_](/grimoire/liberte-de-mouvement/) |
| **9** | [_rêve_](/grimoire/reve/), [_fléau d'insectes_](/grimoire/fleau-d-insectes/) |
§§§

§§§ .table-container
##### Montagne
| Niv. de druide | Sorts de cercle |
|:-:|:-|
| **3** | [_pattes d'araignée_](/grimoire/pattes-d-araignee/), [_croissance d'épines_](/grimoire/croissance-d-epines/) |
| **5** | [_éclair_](/grimoire/eclair/), [_fusion dans la pierre_](/grimoire/fusion-dans-la-pierre/) |
| **7** | [_façonnage de la pierre_](/grimoire/faconnage-de-la-pierre/), [_peau de pierre_](/grimoire/peau-de-pierre/) |
| **9** | [_passe-muraille_](/grimoire/passe-muraille/), [_mur de pierre_](/grimoire/mur-de-pierre/) |
§§§

§§§ .table-container
##### Marais
| Niv. de druide | Sorts de cercle |
|:-:|:-|
| **3** | [_flèche acide_](/grimoire/fleche-acide/), [_ténèbres_](/grimoire/tenebres/) |
| **5** | [_marche sur l'eau_](/grimoire/marche-sur-l-eau/), [_nuage puant_](/grimoire/nuage-puant/) |
| **7** | [_liberté de mouvement_](/grimoire/liberte-de-mouvement/), [_localiser une créature_](/grimoire/localiser-une-creature/) |
| **9** | [_fléau d'insectes_](/grimoire/fleau-d-insectes/), [_scrutation_](/grimoire/scrutation/) |
§§§

#### Traversée des terrains
À partir du niveau 6, traverser des terrains difficiles ne vous coûte pas de mouvement supplémentaire. Vous pouvez aussi traverser la végétation non magique sans qu'elle vous ralentisse ou vous inflige des dégâts si elle est dotée d'épines ou présente un quelconque risque de ce type.

En plus de cela, vous bénéficiez d'un [_avantage_](/utiliser-les-caracteristiques/#avantage-et-desavantage) sur les [jets de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) contre les plantes créées par magie ou manipulées pour gêner les déplacements, comme celles créées par le sort [_enchevêtrement_](/grimoire/enchevetrement/).

#### Enfant de la nature
Quand vous atteignez le niveau 10, vous ne pouvez pas être [_charmé_](/gerer-la-sante-du-personnage/#charme) ou [_terrorisé_](/gerer-la-sante-du-personnage/#terrorise) par les élémentaires ou les fées, et vous êtes immunisé contre les poisons et les maladies.

#### Sanctuaire de la nature
Quand vous atteignez le niveau 14, les créatures du monde naturel sentent votre connexion avec la nature et hésitent à vous attaquer. Quand un animal ou une plante vous attaque, cette créature doit faire un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Sagesse contre votre DD de sauvegarde de sorts de druide. Si la créature échoue, elle doit choisir une autre cible, sinon son attaque échoue automatiquement. Si elle réussit, la créature est immunisée à cet effet pendant 24 heures.

La créature est consciente de cet effet avant de vous attaquer.

### Cercle des saisons
#### Vigueur du printemps
Au niveau 2, lorsque vous choisissez ce cercle, la vitalité et la jeunesse du printemps parcourent vos veines. Lorsque vous terminez un repos long, vous réduisez votre niveau d'épuisement de deux niveaux au lieu d'un seul.

De plus, lorsque vous utilisez votre aptitude de forme sauvage, vous gagnez un nombre de points de vie temporaire égal au double de votre niveau de druide. Vous ne conservez pas ces points de vie lorsque vous reprenez votre forme normale.

Malgré son nom, vous bénéficiez de cette aptitude quelle que soit la saison.

#### Tour de magie bonus
Également au niveau 2, selon la saison, vous pouvez lancer un tour de magie supplémentaire qui dépend de celle-ci :
* **Printemps** : [_épargner les mourants_](/grimoire/epargner-les-mourants/)
* **Été** : [_trait de feu_](/grimoire/trait-de-feu/)
* **Automne** : [_résistance_](/grimoire/resistance/)
* **Hiver** : [_rayon de givre_](/grimoire/rayon-de-givre/)

#### Sorts de saison
Votre connexion mystique avec les saisons vous permet de lancer certains sorts en rapport avec la saison actuelle. Du niveau 2 au niveau 9, vous obtenez accès à des sorts particuliers selon la saison. La liste de sorts à laquelle vous avez accès change durant une cérémonie d'1 heure que vous devez effectuer aux solstices ou aux équinoxes. Tant que vous n'effectuez pas cette cérémonie, vous ne gagnez pas accès aux sorts de la nouvelle saison, mais vous perdez malgré tout l'accès à ceux de la saison passée. Vous en obtenez l'accès dès que la cérémonie est réalisée. Ces sorts sont toujours préparés et ils ne comptent pas dans le nombre maximum de sorts que vous pouvez préparer. Si vous apprenez un sort qui n'apparaît pas dans la liste de sorts de druide, considérez-le quand même comme un sort de druide.

§§§ .table-container
##### Printemps
| Niv. de druide | Sorts de saison |
|:-:|:-|
| **2** | [_baies nourricières_](/grimoire/baies-nourricieres/) |
| **3** | [_aide_](/grimoire/aide/) |
| **4** | [_amélioration de caractéristique_](/grimoire/amelioration-de-caracteristique/) |
| **5** | [_revigorer_](/grimoire/revigorer/) |
| **6** | [_croissance végétale_](/grimoire/croissance-vegetale/) |
| **7** | [_protection contre la mort_](/grimoire/protection-contre-la-mort/) |
| **8** | [_liane chasseresse_](/grimoire/liane-chasseresse/) |
| **9** | [_réincarnation_](/grimoire/reincarnation/) |
§§§

§§§ .table-container
##### Été
| Niv. de druide | Sorts de saison |
|:-:|:-|
| **2** | [_lueurs féériques_](/grimoire/lueurs-feeriques/) |
| **3** | [_rayon ardent_](/grimoire/rayon-ardent/) |
| **4** | [_chauffer le métal_](/grimoire/chauffer-le-metal/) |
| **5** | [_vol_](/grimoire/vol/) |
| **6** | [_lumière du jour_](/grimoire/lumiere-du-jour/) |
| **7** | [_bouclier de feu_](/grimoire/bouclier-de-feu/) |
| **8** | [_mur de feu_](/grimoire/mur-de-feu/) |
| **9** | [_fléau d'insectes_](/grimoire/fleau-d-insectes/) |
§§§

§§§ .table-container
##### Automne
| Niv. de druide | Sorts de saison |
|:-:|:-|
| **2** | [_léger comme une plume_](/grimoire/leger-comme-une-plume/) |
| **3** | [_rayon de lune_](/grimoire/rayon-de-lune/) |
| **4** | [_peau d'écorce_](/grimoire/peau-d-ecorce/) |
| **5** | [_lenteur_](/grimoire/lenteur/) |
| **6** | [_mur de vent_](/grimoire/mur-de-vent/) |
| **7** | [_métamorphose_](/grimoire/metamorphose/) |
| **8** | [_peau de pierre_](/grimoire/peau-de-pierre/) |
| **9** | [_passage par les arbres_](/grimoire/passage-par-les-arbres/) |
§§§

§§§ .table-container
##### Hiver
| Niv. de druide | Sorts de saison |
|:-:|:-|
| **2** | [_nappe de brouillard_](/grimoire/nappe-de-brouillard/) |
| **3** | [_rayon affaiblissant_](/grimoire/rayon-affaiblissant/) |
| **4** | [_vision dans le noir_](/grimoire/vision-dans-le-noir/) |
| **5** | [_communication avec les morts_](/grimoire/communication-avec-les-morts/) |
| **6** | [_tempête de neige_](/grimoire/tempete-de-neige/) |
| **7** | [_tempête de grêle_](/grimoire/tempete-de-grele/) |
| **8** | [_flétrissement_](/grimoire/fletrissement/) |
| **9** | [_coquille antivie_](/grimoire/coquille-antivie/) |
§§§

#### Migration d'été
L'été est la période des voyages et des grandes migrations pour les animaux. Au niveau 6, vous augmentez votre vitesse de déplacement de 3 mètres. Malgré son nom, vous bénéficiez de cette aptitude quelle que soit la saison.

#### Refuge d'automne
Après un été confortable, vous vous préparez déjà aux rigueurs à venir en renforçant votre corps et en le préparant au plus dur. Au niveau 10, vous devenez compétent pour les [jets de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution. Malgré son nom, vous bénéficiez de cette aptitude quelle que soit la saison.

#### Prédateur de l'hiver
L'hiver, la lutte pour la survie est âpre et vous devez vous adapter pour résister aux puissants prédateurs qui parcourent les étendues gelées. À partir du niveau 14, vous pouvez vous transformer en un terrible prédateur lorsque vous utilisez votre aptitude de forme sauvage. Vous pouvez prendre la forme d'une bête dont l'indice de dangerosité peut aller jusqu'à 2. De plus, lorsque vous êtes sous forme sauvage, vous obtenez la résistance au feu et au froid. Malgré son nom, vous bénéficiez de cette aptitude quelle que soit la saison.

#### Jeunesse éternelle
Au niveau 18, lorsque vous faites l'acquisition de cette aptitude, votre âge apparent se met à varier en fonction des saisons. Durant la cérémonie de l'équinoxe du printemps, vous rajeunissez jusqu'à ce que votre apparence soit celle d'un adolescent d'une quinzaine d'années pour un humain ou l'équivalent pour une autre race (votre équipement s'adapte par magie à votre nouvelle taille). Chaque jour, vous vieillissez imperceptiblement. Au moment du solstice d'été, vous êtes en pleine force de l'âge (environ trente ans pour un humain) et l'équinoxe vous trouve sur la pente déclinante de la vie (environ cinquante ans). Lorsque vient le solstice d'hiver, la vieillesse vous a rattrapé et vous paraissez avoir environ soixante-dix ans tout en étant toujours aussi vigoureux. Le dernier jour de l'hiver, vous êtes racorni et prêt à vous éteindre mais, dès la cérémonie de l'équinoxe terminée, vous retrouvez la jeunesse du printemps. Vous ne vieillissez réellement que d'un an pour vingt années qui passent.

De plus, vous bénéficiez d'un [_avantage_](/utiliser-les-caracteristiques/#avantage-et-desavantage) à tous vos tests sur une caractéristique qui dépend de votre âge apparent et de la saison :
* **Printemps** : Dextérité
* **Été** : Force
* **Automne** : Sagesse
* **Hiver** : Intelligence

Cette aptitude remplace et annule l'aptitude du même nom obtenue par les druides des autres cercles.

### Cercle des fées
#### Ami des fées
Au niveau 2, lorsque vous choisissez le cercle des fées, vous apprenez le langage sylvain (langue exotique). De plus, vous bénéficiez d'un [_avantage_](/utiliser-les-caracteristiques/#avantage-et-desavantage) à tous les tests de Charisme que vous effectuez pour interagir avec des créatures de la catégorie des fées.

#### Magie des fées
Également au niveau 2, vous apprenez les tours de magie [_illusion mineure_](/grimoire/illusion-mineure/) et [_lumières dansantes_](/grimoire/lumieres-dansantes/). De plus, vous pouvez dépenser une utilisation de votre forme sauvage pour lancer un sort féerique sans dépenser d'emplacement de sort.

#### Sorts féeriques
Vous avez appris la magie secrète du peuple des fées. Du niveau 2 au niveau 9, vous obtenez accès aux sorts suivants. Ces sorts sont toujours préparés et ils ne comptent pas dans le nombre maximum de sorts que vous pouvez préparer. Si vous apprenez un sort qui n'apparaît pas dans la liste de <router-link :to="{ path: '/grimoire/', query: { classes: 'Druide' }}">sorts de druide</router-link>, considérez-le quand même comme un sort de druide.

§§§ .table-container
| Niv. de druide | Sorts féériques |
|:-:|:-|
| **2** | [_appel de familier_](/grimoire/appel-de-familier/) |
| **3** | [_invisibilité_](/grimoire/invisibilite/) |
| **4** | [_pas brumeux_](/grimoire/pas-brumeux/) |
| **5** | [_motif hypnotique_](/grimoire/motif-hypnotique/) |
| **6** | [_nuage puant_](/grimoire/nuage-puant/) |
| **7** | [_porte dimensionnelle_](/grimoire/porte-dimensionnelle/) |
| **8** | [_terrain hallucinatoire_](/grimoire/terrain-hallucinatoire/) |
| **9** | [_tromperie_](/grimoire/tromperie/) |
§§§

#### Disparition instinctive
Vous savez passer dans le monde invisible en un instant. À partir du niveau 6, vous pouvez lancer le sort [_invisibilité_](/grimoire/invisibilite/) en utilisant une action bonus au lieu d'une action, et une réaction vous suffit à partir du niveau 10. Vous pouvez utiliser cette réaction dès qu'un adversaire prend une action dans votre champ de vision. À partir du niveau 10, vous pouvez lancer le sort [_porte dimensionnelle_](/grimoire/porte-dimensionnelle/) en utilisant une action bonus, et une réaction suffit à partir du niveau 14. De plus, vous pouvez lancer ces sorts, toujours en action bonus ou en réaction, même lorsque vous êtes en forme sauvage (éventuellement en utilisant votre aptitude de magie des fées).

#### Voir l'invisible
Toujours au niveau 6, votre habitude des tours de magie des fées vous permet de lancer le sort [_voir l'invisible_](/grimoire/voir-l-invisible/) en dépensant une action bonus et sans utiliser d'emplacement de sort, même en forme sauvage. Vous devez terminer un repos court avant de pouvoir utiliser à nouveau cette aptitude.

#### Forme féerique
Certains tertres et palais féeriques par-delà le voile n'ont pas des dimensions qui permettent aux grandes gens d'y accéder. À partir du niveau 10, vous pouvez dépenser une utilisation de votre forme sauvage pour prendre la forme d'un esprit-follet du même genre que vous. Vous ne gagnez pas à cette occasion son action de lire le cœur, mais vous obtenez toutes les autres aptitudes.

Lorsque vous êtes sous la forme d'un esprit-follet, vous pouvez lancer vos sorts normalement et vous conservez vos propres points de vie. Toutefois, notez à part les points de vie perdus sous cette forme. Lorsque vous reprenez votre forme originale, vous récupérez la moitié des points de vie perdus sous la forme d'esprit-follet. Si vous tombez à 0 point de vie, vous reprenez votre forme normale avec la moitié de vos points de vie au moment de la transformation, moins les dégâts subis au-delà de 0 point de vie.

#### Sorcellerie féerique
Vous maîtrisez à présent la plus puissante magie des fées. À partir du niveau 14, vous devenez capable de lancer les sorts [_mauvais œil_](/grimoire/mauvais-oeil/) et [_vision suprême_](/grimoire/vision-supreme/) chacun une fois par jour en plus de vos sorts habituels. Vous devez terminer un repos long avant de pouvoir de nouveau lancer chacun d'eux.

Également au niveau 14, vous devenez capable de prendre la forme d'un arbre éveillé en sacrifiant deux utilisations de votre aptitude de forme sauvage.

### Cercle des profondeurs
#### Enfant des ténèbres
Au niveau 2, lorsque vous choisissez le cercle des profondeurs, vous apprenez le commun des profondeurs (langue exotique) et vous devenez capable de lancer le tour de magie [_lumière_](/grimoire/lumiere/).

De plus, vous obtenez la vision dans le noir. Dans un rayon de 18 mètres, vous pouvez voir dans une zone de lumière faible comme s'il s'agissait d'une lumière vive et dans l'obscurité comme s'il s'agissait d'une lumière faible. Par contre, vous ne distinguez pas les couleurs dans l'obscurité, seulement des nuances de gris. Si vous disposez déjà de ce trait, vous doublez sa portée. Enfin, le druide conserve ce trait même s'il adopte une forme sauvage qui n'y a pas normalement accès.

#### Forme monstrueuse
Le druide du cercle des profondeurs reconnaît les créatures étranges comme des enfants de la nature au même titre que les animaux. À partir du niveau 2, vous pouvez sacrifier deux formes sauvages pour vous transformer en créature monstrueuse, l'ID et les créatures auxquelles vous avez accès sont précisés dans le tableau ci-dessous.

De plus, vous doublez votre niveau de druide pour déterminer les formes sauvages de bêtes auxquelles vous pouvez accéder (indice de dangerosité et mode de déplacement). À partir du niveau 8, vous gagnez la capacité de vous transformer en une bête dont l'indice de dangerosité est égal à votre niveau de druide divisé par quatre (arrondi à l'inférieur).

§§§ .table-container
| Niveau 2 | Niveau 4 | Niveau 8 | Niveau 12 | Niveau 18 |
|:-:|:-:|:-:|:-:|:-:|
| [Oxydeur](/bestiaire/oxydeur/) (ID 1/2) | [Chien du trépas](/bestiaire/chien-du-trepas/) (ID 1) | [Ankheg](/bestiaire/ankheg/) (ID 2) | [Basilic](/bestiaire/basilic/) (ID 3) | [Bulette](/bestiaire/bulette/) (ID 5) |
| [Worg](/bestiaire/worg/) (ID 1/2) | [Cockatrice](/bestiaire/cockatrice/) (ID 1/2) | [Ettercap](/bestiaire/ettercap/) (ID 2) | [Hibours](/bestiaire/hibours/) (ID 3) | [Enlaceur](/bestiaire/enlaceur/) (ID 5) |
|  | [Harpie](/bestiaire/harpie/) (ID 1) | [Grick](/bestiaire/grick/) (ID 2) | [Loup arctique](/bestiaire/loup-arctique/) (ID 3) | [Gorgone](/bestiaire/gorgone/) (ID 5) |
|  | [Larve des roches](/bestiaire/larve-des-roches/) (ID 1) | [Merrow](/bestiaire/merrow/) (ID 2)* | [Manticore](/bestiaire/manticore/) (ID 3) | [Terreur des roches](/bestiaire/terreur-des-roches/) (ID 5) |
|  | [Mante obscure](/bestiaire/mante-obscure/) (ID 1/2) | [Mimique](/bestiaire/mimique/) (ID 2) | [Minotaure](/bestiaire/minotaure/) (ID 3)* |  |
§§§

\*_Le druide n'obtient aucun équipement lorsqu'il prend cette forme, s'il veut réaliser une attaque avec une arme, il doit se la procurer d'une façon ou d'une autre._

#### Pouvoir des profondeurs
À partir du niveau 6, vous devenez capable de parler lorsque vous êtes sous forme sauvage, mais vous ne pouvez toujours pas lancer de sort. De plus, lorsque vous utilisez votre forme sauvage pour vous transformer en bête, vous gagnez le pouvoir [_pattes d'araignée_](/grimoire/pattes-d-araignee/) pour toute la durée de la transformation. Ce pouvoir vous demande de maintenir votre concentration, toutefois cette concentration ne peut pas être brisée contre votre gré (blessure, provocation, etc.). Si vous décidez volontairement de cesser de vous concentrer, vous devez dépenser une nouvelle forme sauvage pour obtenir de nouveau [_pattes d'araignée_](/grimoire/pattes-d-araignee/).

#### Magie des profondeurs
Lorsque vous atteignez le niveau 10, vous pouvez utiliser forme sauvage une fois de plus par repos, si vous avez effectué ce repos sous terre. De plus, lorsque vous êtes sous forme sauvage, vous pouvez utiliser une action bonus pour dépenser un emplacement de sort et ajouter 1d6 par niveau du sort aux dégâts d'une attaque que vous venez de porter. Les dégâts de l'attaque sont considérés comme magiques et du même type que l'attaque initiale.

#### Déplacement souterrain
À partir du niveau 14, vous pouvez vous déplacer à travers la pierre ou la terre d'un sol ou d'une paroi, s'ils sont naturels, à la moitié de votre vitesse normale, que ce soit sous votre forme normale ou sous forme sauvage. Vous devez terminer votre déplacement à l'air libre. Si ce n'est pas le cas, vous subissez 2d6 dégâts par tour, seulement la moitié si vous réussissez un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 15.

### <span class="icon-hexagon"></span> Cercle de la vie
§§§ .source .font-italic
Source : Gazette Role'n Play #3
§§§
#### Pacifiste
Au niveau 2, vous décidez d'adopter une nouvelle attitude et de ne plus volontairement attaquer vos adversaires, car la violence ne résout rien. Vous n'ajoutez plus votre bonus de maîtrises à vos [jets d'attaque](/combattre/#jets-d-attaque), qu'ils soient magiques ou non. De plus lorsque vous faites le résultat maximal d'un dé de dégâts vous devez lancer de nouveau ce dé et utiliser le nouveau résultat.
En échange, vous avez appris comment dissuader vos ennemis de vous attaquer. Vous pouvez lancer le sort [sanctuaire](/grimoire/sanctuaire/) sur vous-même sans dépenser d'emplacement de sort. Lorsque vous le lancez de la sorte, vous doublez votre bonus de maîtrise afin de déterminer la difficulté du [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Sagesse nécessaire à y résister. Vous devez effectuer un repos long avant de pouvoir utiliser de nouveau cette capacité. Le sort [sanctuaire](/grimoire/sanctuaire/) n'est cependant pas considéré comme faisant partie de votre liste de sorts et vous ne pouvez pas le lancer en utilisant un emplacement de sort.
Au niveau 10, vous pouvez utiliser cette capacité sur un allié situé dans un rayon de 9 mètres.
Au niveau 14, vous pouvez utiliser cette capacité une fois entre deux repos courts.

#### Guérisseur émérite
Toujours au niveau 2, vous obtenez la maîtrise de la compétence Médecine. Si vous l'avez déjà, vous doublez votre bonus de maîtrise quand vous l'utilisez.
Vous pouvez dépenser une de vos métamorphoses afin de lancer le sort [_soin des blessures_](/grimoire/soin-des-blessures/). Il est considéré comme étant lancé avec un emplacement d'un niveau égal à la moitié de votre bonus de maîtrise, arrondi à l'inférieur.
Enfin, quand vous lancez un sort de soins, vous ajoutez votre bonus de maîtrise au nombre de points de vie que vous rendez.

#### Sorts de Vie
Vous avez appris à canaliser la magie afin de régénérer les esprits, les corps et les plantes. Du niveau 2 au niveau 9, vous obtenez accès aux sorts suivants. Ces sorts sont toujours préparés et ils ne comptent pas dans le nombre maximal de sorts que vous pouvez préparer. Si vous apprenez un sort qui n'apparaît pas dans la liste de <router-link :to="{ path: '/grimoire/', query: { classes: 'Druide' }}">sorts de druide</router-link>, considérez-le quand même comme un sort de druide.

§§§ .table-container
| Niv. de druide | Sorts de vie |
|:-:|:-|
| **2** | [_soin des blessures_](/grimoire/soin-des-blessures/), [_mot de guérison_](/grimoire/mot-de-guerison/) |
| **3** | [_immobiliser un humanoïde_](/grimoire/immobiliser-un-humanoide/) |
| **4** | [_prière de soins_](/grimoire/priere-de-soins/)  |
| **5** | [_croissance végétale_](/grimoire/croissance-vegetale/), [_lever une malédiction_](/grimoire/lever-une-malediction/) |
| **6** | [_esprits gardiens_](/grimoire/esprits-gardiens/) |
| **7** | [_liberté de mouvement_](/grimoire/liberte-de-mouvement/) |
| **8** | [_protection contre la mort_](/grimoire/protection-contre-la-mort/) |
| **9** | [_restauration supérieure_](/grimoire/restauration-superieure/), [_immobiliser un monstre_](/grimoire/immobiliser-un-monstre/) |
§§§

#### Aide précieuse
Au niveau 6, lorsque que vous lancez un sort sur un allié et que ce dernier possède une durée supérieure à « instantanée », vous doublez sa durée. Si le sort requiert de maintenir votre concentration, vous devez toujours la maintenir pendant toute la durée du sort.

#### Réaction rapide
Au niveau 10, vous êtes toujours prompt à aider vos alliés. Quand l'un de vos alliés subit des dommages, vous pouvez utiliser votre [réaction](/lancer-des-sorts/#reaction) afin de lancer [_soin des blessures_](/grimoire/soin-des-blessures/) ou [_mot de guérison_](/grimoire/mot-de-guerison/). Si votre allié devait tomber à 0 PV, il serait alors considéré comme ayant un nombre de PV égal au résultat de votre sort de soins et ne tombe pas inconscient. Vous devez cependant utiliser un emplacement de sort. Vous pouvez, à la place, utiliser votre capacité guérisseur émérite et dépenser une métamorphose afin de lancer [_soin des blessures_](/grimoire/soin-des-blessures/).

#### Esprit apaisé
Au niveau 14, vous êtes immunisé aux états [charmé](/gerer-la-sante-du-personnage/#charme) et [terrorisé](/gerer-la-sante-du-personnage/#terrorise).

#### Esprit de vie
Au niveau 18, en plus que vos aptidudes de druide, vous pouvez canaliser la puissance vitale de la nature à travers votre corps. En utilisant votre action, vous commencez à vous nourrir de l'énergie tellurique autour de vous. Au début de chacun de vos tours, et durant une minute, vous regagnez un nombre de points de vie égal à la moitié de votre bonus de maîtrise. Si vous tombez inconscient, l'effet continue. Si vous étiez à 0 PV, vous êtes automatiquement stabilisé au début de votre tour suivant et vous redevenez conscient en plus de regagner des points de vie. Vous devez effectuer un repos long avant de pouvoir utiliser de nouveau cette capacité.

### <span class="icon-hexagon"></span> Cercle des Châtiments
§§§ .source .font-italic
Source : Gazette Role'n Play #4
§§§
#### Guérisseur de pacotille
Au niveau 2, vous décidez de vous concentrer davantage sur les dégâts infligés par vos sorts que sur le soutien à vos alliés. Lorsque vous lancez les dés afin de déterminer le nombre de points de vie rendus par un sort de guérison rendant des PV (comme [_soin des blessures_](/grimoire/soin-des-blessures/), [_mot de guérison_](/grimoire/mot-de-guerison/) ou [_soin des blessures de groupe_](/grimoire/soin-des-blessures-de-groupe/) par exemple), vous ne pouvez pas ajouter votre bonus de caractéristique au nombre de points de vie rendus si le sort le permet. Vous devez en outre relancer les dés ayant obtenu le maximum (8 sur 1d8 par exemple) puis utiliser le nouveau résultat. De plus, tout sort rendant un nombre fixe de points de vie ne rend que la moitié du nombre prévu. Enfin, cette règle s'applique même aux sorts obtenus via des dons, des objets magiques ou un multiclassage.

#### Puissance vengeresse
Toujours au niveau 2, lorsque vous lancez un tour de magie infligeant des dégâts, vous pouvez ajouter votre bonus de maîtrise aux dégâts infligés par le sort.
De plus, vous obtenez le tour de magie [_gourdin magique_](/grimoire/gourdin-magique/) s'il ne fait pas partie de votre liste de sorts. Vous pouvez aussi ajouter votre bonus de maîtrise aux dégâts infligés par un gourdin ou un bâton enchanté par ce tour de magie.

#### Sorts du Châtiment
Vous avez appris à canaliser la magie afin de châtier les ennemis du monde naturel. Du niveau 2 au niveau 9, vous obtenez accès aux sorts suivants. Ces sorts sont toujours préparés et ils ne comptent pas dans le nombre maximal de sorts que vous pouvez préparer. Si vous apprenez un sort qui n'apparaît pas dans la liste de <router-link :to="{ path: '/grimoire/', query: { classes: 'Druide' }}">sorts de druide</router-link>, considérez-le quand même comme un sort de druide.

§§§ .table-container
| Niv. de druide | Sorts de Châtiments |
|:-:|:-|
| **2** | [_bouclier_](/grimoire/bouclier/) |
| **3** | [_rayon ardent_](/grimoire/rayon-ardent/) |
| **4** | [_rayon de lune_](/grimoire/rayon-de-lune/)  |
| **5** | [_boule de feu_](/grimoire/boule-de-feu/) |
| **6** | [_caresse du vampire_](/grimoire/caresse-du-vampire/) |
| **7** | [_flétrissement_](/grimoire/fletrissement/) |
| **8** | [_bouclier de feu_](/grimoire/bouclier-de-feu/) |
| **9** | [_fléau d'insectes_](/grimoire/fleau-d-insectes/) |
§§§

#### Résistance naturelle
Au niveau 6, votre corps s'est accoutumé aux substances empoisonnées émises par certaines créatures et plantes. Vous êtes immunisé aux dégâts de poison et à l'état [_empoisonné_](/gerer-la-sante-du-personnage/#empoisonne). De plus, vous obtenez la maîtrise des [jets de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution.

#### Réaction violente
Au niveau 10, vous pouvez utiliser un tour de magie au lieu d'une attaque de corps à corps lorsque vous obtenez une attaque d'opportunité.
De plus, vous obtenez une attaque d'opportunité sur un ennemi quand ce dernier vous attaque avec une attaque d'arme ou de sort à distance et qu'il manque son attaque.

#### Puissance de la nature
Au niveau 14, vous pouvez utiliser une utilisation de votre forme sauvage afin de lancer le sort [_invoquer une fée_](/grimoire/invoquer-une-fee/) ou [_invoquer un élémentaire_](/grimoire/invoquer-un-elementaire/) à son niveau normal, et ce même si vous n'avez pas préparé ces sorts. Au niveau 20, vous ne pouvez le faire que trois fois entre deux repos courts ou longs.
De plus vous avez désormais l'avantage à vos [jets de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) pour garder votre [_concentration_](/lancer-des-sorts/#concentration).

### <span class="icon-gondolfiere"></span> Cercle sans nom
§§§ .source .font-italic
Source : Pangée - l'Âge du changement
§§§

#### Magie des morts
Au niveau 2, vous apprenez les tours de magie [_contact glacial_](/grimoire/contact-glacial/) et [_épargner les mourants_](/grimoire/epargner-les-mourants/). De plus, vous pouvez dépenser une utilisation de votre forme sauvage pour lancer un sort de cercle (cf. ci-après) sans dépenser d'emplacement de sort. Enfin, vous bénéficiez d'un [_avantage_](/utiliser-les-caracteristiques/#avantage-et-desavantage) à tous les tests de Charisme que vous effectuez pour interagir avec des créatures de la catégorie des morts-vivants.

À partir du niveau 20, vous pouvez utiliser une de vos utilisations de forme sauvage afin de lancer un sort de cercle trois fois, au maximum, entre deux repos courts ou longs.

#### Sorts de cercle
Votre connexion mystique avec les esprits des morts vous donne la capacité de lancer certains sorts. Du niveau 2 au niveau 9, vous obtenez accès aux sorts suivants. Ces sorts sont toujours préparés et ils ne comptent pas dans le nombre maximum de sorts que vous pouvez préparer. Si vous apprenez un sort qui n'apparaît pas dans la liste de sorts de druide, considérez-le quand même comme un sort de druide.

|Niveau de druide|Sort de cercle|
|:-:|:-|
|**2**|[_protection contre le mal et le bien_](/grimoire/protection-contre-le-mal-et-le-bien/)|
|**3**|[_doux repos_](/grimoire/doux-repos/)|
|**4**|[_flamme éternelle_](/grimoire/flamme-eternelle/)|
|**5**|[_communication avec les morts_](/grimoire/communication-avec-les-morts/)|
|**6**|[_catalepsie_](/grimoire/catalepsie/)|
|**7**|[_protection contre la mort_](/grimoire/protection-contre-la-mort/)|
|**8**|[_bannissement_](/grimoire/bannissement/)|
|**9**|[_sanctification_](/grimoire/sanctification/)|

#### Forme d'ombre
À partir du niveau 6, vous pouvez dépenser une utilisation de forme sauvage pour vous transformer en [ombre](/bestiaire/ombre/). Lorsque vous êtes sous forme d'ombre, vous pouvez communiquer par télépathie avec tous les morts-vivants dans un rayon de 36 mètres. Vous ne pouvez ni parler ni communiquer avec les êtres vivants.

#### Repose en paix
À partir du niveau 10, tous les morts-vivants subissent un [_désavantage_](/utiliser-les-caracteristiques/#avantage-et-desavantage) lorsqu'ils vous attaquent. De plus, vous pouvez lancer le sort [_invisibilité_](/grimoire/invisibilite/) une fois entre deux repos courts, mais il n'affecte que les morts-vivants. Les autres créatures vous voient normalement.

#### Forme d'esprit
À partir du niveau 14, vous pouvez dépenser une utilisation de forme sauvage pour vous transformer en [feu follet](/bestiaire/feu-follet/). Lorsque vous êtes sous forme d'esprit, vous pouvez communiquer par télépathie avec tous les morts-vivants dans un rayon de 36 mètres. Vous ne pouvez ni parler ni communiquer avec les êtres vivants.

### Cercle de la Verdoyance
§§§ .source .font-italic
Source : Tome of Heroes - Kobold Press
§§§

Les druides du cercle de la Verdoyance se consacrent aux plantes et aux choses vertes du monde, reconnaissant le rôle des plantes dans la création de la vie. Par une communion constante avec la vie végétale, ils pensent se rapprocher de ce qu'ils appellent "la Verdoyance", un fil cosmique qui relie toutes les plantes. Les druides de ce cercle croient qu'ils acquièrent leurs capacités en puisant dans la Verdoyance, et ils utilisent cette connexion pour invoquer un esprit.

#### Sorts de cercle
Lorsque vous rejoignez ce cercle au niveau 2, vous formez un lien avec un esprit végétal, une créature de la Verdoyance. Votre lien avec cet esprit vous donne accès à certains sorts lorsque vous atteignez certains niveaux dans cette classe, comme indiqué dans le tableau ci-dessous.

Une fois que vous avez accès à l'un de ces sorts, il est toujours préparé et il ne compte pas dans le nombre de sorts que vous pouvez préparer chaque jour. Si vous avez accès à un sort qui ne figure pas dans la liste des sorts de druide, considérez-le quand même comme un sort de druide.

|Niveau de druide|Sort de cercle|
|:-:|:-|
|**2**|[_baies nourricières_](/grimoire/baies-nourricieres/), [_enchevêtrement_](/grimoire/enchevetrement/)|
|**3**|[_croissance d'épines_](/grimoire/croissance-d-epines/), [_peau d'écorce_](/grimoire/peau-d-ecorce/)|
|**5**|[_communication avec les plantes_](/grimoire/communication-avec-les-plantes/), [_tapis de lianes_](/grimoire/tapis-de-lianes/)|
|**7**|[_rêvevin_](/grimoire/revevin/), [_terrain hallucinatoire_](/grimoire/terrain-hallucinatoire/)|
|**9**|[_floraison enchantée_](/grimoire/floraison-enchantee/), [_passage par les arbres_](/grimoire/passage-par-les-arbres/)|

#### Invocation d'esprit verdoyant
À partir du niveau 2, vous pouvez invoquer un esprit de la Verdoyance, une manifestation de la vie végétale primordiale. Par une action, vous pouvez dépenser une utilisation de votre capacité _Forme sauvage_ pour invoquer l'esprit verdoyant au lieu de prendre une forme bestiale.

L'esprit apparaît dans un espace inoccupé de votre choix que vous pouvez voir dans un rayon de 9&nbsp;mètres autour de vous. Lorsque l'esprit apparaît, la zone dans un rayon de 3&nbsp;mètres autour de lui devient enchevêtrée de lianes et d'autres plantes, devenant un terrain difficile jusqu'au début de votre prochain tour.

L'esprit est amical envers vous et vos compagnons et obéit à vos ordres. Pour les caractéristiques techniques référez vous au profil technique de l'[Esprit verdoyant](/bestiaire/esprit-verdoyant/), qui utilise votre bonus de maîtrise (BM) à plusieurs endroits.

Vous déterminez l'apparence de l'esprit. Certains esprits prennent la forme d'une figure humanoïde faite de branches noueuses et de feuilles, tandis que d'autres ressemblent à des créatures au corps feuillu et à la tête faite de calebasses ou de fruits. D'autres encore ressemblent à des bêtes, mais entièrement composées de végétaux.

En combat, l'esprit partage votre score d'initiative, mais il prend son tour immédiatement après le vôtre. L'esprit verdoyant peut se déplacer et utiliser ses réactions seul, mais si vous ne lui donnez aucun ordre, il utilise l'action _Esquiver_ par défaut. Vous pouvez utiliser votre action bonus pour lui ordonner d'entreprendre l'action _Attaquer_, _Se précipiter_, _Se désengager_, _Aider_, _Se cacher_, _Chercher_ ou une action listée dans son profil technique. Si vous êtes [_neutralisé_](/gerer-la-sante-du-personnage/#neutralise), l'esprit peut entreprendre n'importe quelle action de son choix, pas seulement _Esquiver_.

L'esprit persiste pendant 1&nbsp;heure, jusqu'à ce qu'il soit réduit à 0 point de vie, jusqu'à ce que vous utilisiez cette capacité pour l'invoquer à nouveau, ou jusqu'à ce que vous mouriez. Lorsqu'il se manifeste, l'esprit porte 10 fruits imprégnés de magie. Chaque fruit fonctionne comme une baie créée par le sort [_baies nourricières_](/grimoire/baies-nourricieres/).

#### Don de la Verdoyance
Au niveau 6, le lien avec votre esprit verdoyant améliore vos sorts de restauration et vous donne le pouvoir de lancer des sorts supplémentaires. Une fois avant la fin de la durée de l'esprit, vous pouvez lancer l'un des sorts suivants sans dépenser d'emplacement de sort ou de composante matérielle : [_communication avec les plantes_](/grimoire/communication-avec-les-plantes/), [_croissance végétale_](/grimoire/croissance-vegetale/), [_localiser des animaux ou des plantes_](/grimoire/localiser-des-animaux-ou-des-plantes/) ou [_passage sans trace_](/grimoire/passage-sans-trace/) (uniquement dans les environnements où la vie végétale est abondante). Vous ne pouvez plus lancer l'un de ces sorts de cette façon jusqu'à la prochaine fois que vous invoquez votre esprit verdoyant.

Chaque fois que vous lancez un sort qui redonne des points de vie pendant que votre esprit verdoyant est invoqué, lancez un d8 et ajoutez le résultat au total des points de vie restaurés.

De plus, lorsque vous lancez un sort avec une portée autre que personnelle, le sort peut provenir de vous ou de votre esprit verdoyant.

#### Interférance verdoyante
À partir du niveau 10, quand une créature que vous pouvez voir à moins de 9&nbsp;mètres de vous ou de votre esprit verdoyant est attaquée, vous pouvez utiliser votre réaction pour faire jaillir des lianes et de la végétation du sol et les agripper à l'attaquant, ce qui lui donne un _désavantage_ aux jets d'attaque jusqu'au début de votre prochain tour.

Vous pouvez utiliser cette caractéristique un nombre de fois égal à votre bonus de maîtrise. Vous récupérez toutes vos utilisations à la fin d'un long repos.

#### Symbiose spirituelle
Au niveau 14, quand votre esprit verdoyant se trouve à moins de 9&nbsp;mètres de vous, vous pouvez utiliser une action pour vous unir avec lui, laissant sa matière végétale pousser autour de vous. Tant que vous êtes ainsi unis, vous bénéficiez des avantages suivants :
* Vous gagnez un nombre de points de vie temporaires égal à celui de votre esprit vert.
* Vous gagnez une vitesse d'escalade de 9&nbsp;mètres.
* Vous avez l'_avantage_ sur les jets de sauvegarde de Constitution.
* Le sol à moins de 3&nbsp;mètres de vous est un terrain difficile pour les créatures qui vous sont hostiles.
* Vous pouvez utiliser une action bonus à chacun de vos tours pour effectuer une attaque de vrille contre une créature que vous pouvez voir et qui se trouve à moins de 3&nbsp;mètres de vous. Effectuez une attaque de sort au corps-à-corps. Si vous touchez, la cible subit des dégâts contondants égaux à 2d8 + votre modificateur de Sagesse.

Cette capacité dure jusqu'à ce que les points de vie temporaires que vous avez gagnés soient réduits à 0, jusqu'à ce que la durée de l'esprit prenne fin, ou jusqu'à ce que vous utilisiez une action pour vous séparer de lui. Si vous vous séparez, l'esprit verdoyant a autant de points de vie qu'il vous restait de points de vie temporaires. Si cet effet prend fin parce que vos points de vie temporaires sont réduits à 0, l'esprit verdoyant disparaît jusqu'à ce que vous l'invoquiez à nouveau.
