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

Bienvenue sur la nouvelle version du site Document de Référence Système pour _**Héros & Dragons**_ !

## Nouvelle version pour H&D DRS
Vous avez été de plus en plus nombreux à témoigner votre intérêt pour le site H&D DRS depuis sa mise en ligne publique en juillet 2019.

La nouvelle version du site va chambouler de nombreuses choses tout en restant relativement proche de la version précédente.

### Refonte fondamentale

Même si ça ne se verra pas au premier coup d’œil, le site a subit une refonte dans toute son architecture. Le socle technique a complètement été modifié. On peut dire que le site a été refait à partir de zéro.

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
_**Em-squared**_
§§§

</v-col>

<v-col cols="12" md="6">

## Ressources utiles
<v-btn color="#9b1c47" dark depressed class="mb-4" href="https://www.black-book-editions.fr/file.php?id=178" link target="\_blank"><v-icon left>mdi-drama-masks</v-icon> Feuille de personnage PDF</v-btn>
<v-btn color="#9b1c47" dark depressed class="mb-4" href="https://www.black-book-editions.fr/forums.php?board_id=115" link target="\_blank"><v-icon left>mdi-forum</v-icon> Forum Héros & Dragons</v-btn>
<v-btn color="#9b1c47" dark depressed class="mb-4" href="https://discord.gg/mp6ECCs" link target="\_blank"><v-icon left>mdi-discord</v-icon> Discord H&D DRS</v-btn>
<v-btn color="#9b1c47" dark depressed class="mb-4" href="https://github.com/em-squared/heros-et-dragons-drs" link target="\_blank"><v-icon left>mdi-github</v-icon> Source Github</v-btn>

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
</v-col>
</v-row>
