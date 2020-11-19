---
title: H&D DRS
notEditable: true
toc: false
---
§§§ .text-center
# Document de Référence Système
§§§

<v-row>
<v-col cols="12" md="6">

Bienvenue sur le site Document de Référence Système pour _**Héros & Dragons**_ !

## Prêts pour le confinement, saison 2
Ça y est, nous sommes de nouveaux interdits de jeux de rôle autour d'une table. Mais nous pouvons toujours jouer en ligne. Voici quelques nouveautés dans H&D DRS pour l'occasion :

### Ajout des archétypes de classe des gazettes Role'n Play #2 et #3
Le guerrier et le druide disposent à présent de nouveaux archétypes de classe : le [guerrier Kal'Thori](/classes/guerrier/#kal-thori) avec ses techniques de combat au bouclier, et le [druide du cercle de la vie](/classes/druide/#cercle-de-la-vie) porteur de paix.

Merci à @Sebb pour ces ajouts.

### Ajout des profils techniques du Livre des monstres
Le [bestiaire](/bestiaire/) s'est vu ajouter plus de 400 créatures issues de l'excellent Livre des monstres pour un total de 751 créatures (oui, il a plus que doublé). Si vous avez toujours voulu libérer/délivrer la [Reine des Neiges](/bestiaire/reine-des-neiges/) (plot twist, c'est les héros qui vont avoir besoin d'aide), piéger vos joueurs avec la [mimique carte](/bestiaire/mimique-carte/) (ils ne vous feront plus jamais confiance), ou les attendrir avec la [larve stellaire de Cthulhu](/bestiaire/larve-stellaire-de-cthulhu/) (on parle bien d'attendrir la viande d'aventurier, hein), vous aurez de quoi faire. Ce sont de nombreuses créatures féeriques, dragons, fiélons et morts-vivants, entre autres, qui viennent peupler cette foire aux monstres.

Comme toujours, si vous trouvez des erreurs, n'hésitez pas à me les signaler ou proposer une correction directement sur le dépôt Github.

Prenez bien soin de vous,

§§§ .text-right
_**Em-squared**_,  
_le 4 novembre 2020_
§§§

## Ajout des règles spécifiques aux Cinq Royaumes
Voilà une chose qui m'est réclamée depuis un certain temps. Et bien c'est chose faite.

H&D DRS propose maintenant les règles spécifiques pour le fabuleux cadre de campagne de sang et d'acier de Julien Dutel : [Les cinq royaumes](/les-cinq-royaumes/).

Ça comprend les variantes des [humains](/les-cinq-royaumes/humain/) avec toutes les origines, les classes modifiées de [barde](/les-cinq-royaumes/barde/), [druide](/les-cinq-royaumes/druide/), [rôdeur](/les-cinq-royaumes/rodeur/) et la nouvelle classe de [savant](/les-cinq-royaumes/savant/), le chasseur de monstre idéal pour jouer un traqueur carmin (s'il survit au [rituel](/les-cinq-royaumes/les-rituels-magiques/) de [la confrontation](/les-cinq-royaumes/les-rituels-magiques/#la-confrontation)).

Dans cet univers sombre, la magie n'est pas anodine, et certainement pas sans conséquences. Les [règles des rituels magiques](/les-cinq-royaumes/les-rituels-magiques/) vous expliqueront comment faire appel à des forces qui vous dépassent.

En plus de ça, toutes les pages du [bestiaire](/bestiaire/) disposent à présent d'un bouton pour convertir les créatures dans leur version des cinq royaumes. Les points de vie (PV) sont remplacés par leur variante de points de combativité (PC) et points de vitalité (PVit) de façon transparente.

Ça se voit que j'aime beaucoup ce cadre de campagne ?

Bon jeu à tout le monde !

§§§ .text-right
_**Em-squared**_,  
_le 10 juin 2020_
§§§

## Nouvelle version pour H&D DRS
Vous avez été de plus en plus nombreux à témoigner votre intérêt pour le site H&D DRS depuis sa mise en ligne publique en juillet 2019.

La nouvelle version du site va chambouler de nombreuses choses tout en restant relativement proche de la version précédente.

### Refonte fondamentale

Même si ça ne se verra pas au premier coup d'œil, le site a subit une refonte dans toute son architecture. Le socle technique a complètement été modifié. On peut dire que le site a été refait à partir de zéro.

### Une interface plus réactive

La navigation a gagné en performance. Il y a plus de raccourcis, les pages disposent maintenant d'une table des matières permettant de passer d'une section à l'autre, la recherche permet d'accéder directement aux informations pertinentes et les filtres des sorts, monstres et objets magiques sont plus précis et performants.

### Plus de personnalisation

Les bibliothèques personnelles ont également été complètement revues. Votre grimoire personnel affiche maintenant vos sorts groupés par niveau de sort, vous pouvez définir des emplacements de sorts par niveau si vous souhaitez garder un suivi pour votre personnage.

Par ailleurs, sur chacune des bibliothèques, vous pouvez choisir ce que vous voulez imprimer ou pas.

### Open source

L'intégralité du code source est disponible sur Github sour licence GPLv3. Ça signifie d'une part que vous pouvez soumettre des corrections s'il y a des erreurs dans les contenus via les liens disponibles en pied de chaque page. Mais également que vous pourriez développer votre propre version, en respectant les conditions de la licence OGL pour les contenus et la licence GPLv3 pour la base de code.

### Pourquoi cette nouvelle version ?

En effet, la version précédente était fonctionnelle et plutôt correcte dans son ensemble. Aussi je suis conscient que certains préféreront l'ancienne version.

Néanmoins, cette refonte a été motivée par deux critères principaux : la maintenabilité et la réduction des dépendances techniques.

En effet l'ancienne version du site n'était maintenue (et maintenable) que par moi. Dans ces conditions, si je disparais, mon travail disparaît avec moi. J'ai donc décidé de revoir toute l'architecture pour qu'elle soit maintenable par un plus grand nombre de personnes. Voilà pourquoi tout le code source est accessible publiquement.

Dans le même temps, j'ai modifié le socle technique pour réduire au maximum les dépendances techniques. Sans rentrer dans les détails, il n'y a plus besoin d'aucun service pour faire fonctionner le site. Tout est 100% statique. Du html, du css, et du javascript. C'est tout. Ça veut dire que le site peut être hébergé par n'importe qui sans difficulté.

J'ai donc fait d'une pierre deux coups avec cette refonte. Et tout le monde y gagne.

### Une nouvelle version plus collaborative

Même si j'ai très largement préparé le terrain en amont, cette nouvelle version a bénéficié de la relecture et des suggestions de quelques bénévoles qui ont permis de corriger de nombreuses erreurs et d'améliorer beaucoup d'éléments d'interface. À celles et ceux qui m'ont apporté ce soutien je dis **merci**.

§§§ .text-right
_**Em-squared**_,  
_le 25 mai 2020_
§§§

</v-col>

<v-col cols="12" md="6">

## Bibliothèques
<MySpellsButton />
<MyMonstersButton />
<MyMagicItemsButton />

## Aides de jeu
<v-row>
  <v-col><v-btn color="#9b1c47" dark depressed block large to="/creation-de-sort/"><v-icon>mdi-creation</v-icon> Création de sort</v-btn></v-col>
  <v-col><v-btn color="#9b1c47" dark depressed block large to="/creation-de-monstre-pnj/"><v-icon>mdi-emoticon-devil</v-icon> Création de monstre/PNJ</v-btn></v-col>
</v-row>
<v-row>
  <v-col><v-btn color="#9b1c47" dark depressed block large to="/creation-d-objet-magique/"><v-icon>mdi-ring</v-icon> Création d'objet magique</v-btn></v-col>
  <v-col><v-btn color="#9b1c47" dark depressed block large to="/calculateur-de-caracteristiques/"><v-icon>mdi-calculator</v-icon> Calculateur de carac<span class="d-none d-md-inline">téristiques</span></v-btn></v-col>
</v-row>

## Liens utiles
&nbsp;
<v-icon>mdi-drama-masks</v-icon> [Feuille de personnage PDF](https://www.black-book-editions.fr/file.php?id=178), _par Black Book Éditions_.  
<v-icon>mdi-drama-masks</v-icon> [Feuille de personnage "Graphic Color"](https://www.black-book-editions.fr/forums.php?topic_id=12619&nbp=13&nop=0), _par DarKDinDoN et GhorGhor Blue_.  

### Communauté
&nbsp;
<v-icon>mdi-forum</v-icon> [Forum Héros & Dragons](https://www.black-book-editions.fr/forums.php?board_id=115)  
<v-icon>mdi-discord</v-icon> [Discord Héros & Dragons Non Officiel](https://discord.gg/24BfHYVz), pour discuter du jeu, de ses règles et organiser des parties.  

### Application Haches & Dés de @Nioux
&nbsp;
[Android](https://play.google.com/store/apps/details?id=com.nioux.aidedejeu) [iOS](https://apps.apple.com/us/app/haches-d%C3%A9s/id1446575505?l=fr&ls=1) [Microsoft](https://www.microsoft.com/fr-fr/p/aide-de-jeu/9nvns0j25ct7?activetab=pivot:overviewtab)

### À propos de ce site
&nbsp;
<v-icon>mdi-discord</v-icon> [Discord H&D DRS](https://discord.gg/mp6ECCs), pour discuter de ce site.  
<v-icon>mdi-github</v-icon> [Sources Github](https://github.com/em-squared/heros-et-dragons-drs), tout le code source en licence GPLv3.  
<v-icon>mdi-github</v-icon> [Soumettre une demande](https://github.com/em-squared/heros-et-dragons-drs/issues/new), pour signaler une erreur, un bug ou suggérer une amélioration. Tâchez d'être le plus exhaustif et précis possible. S'il y a une erreur, vous devez fournir le lien vers l'erreur et la source de la correction. S'il y a un bug, vous devez fournir une méthode de reproduction.

</v-col>
</v-row>
