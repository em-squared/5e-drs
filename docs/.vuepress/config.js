module.exports = {
  title: 'Héros & Dragons',
  description: 'Document de Référence Système pour le jeu de rôle Héros & Dragons',
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'spell',
            // Target directory
            dirname: '_spells',
            // Path of the `entry page` (or `list page`)
            path: '/grimoire/',
            layout: 'SpellsLayout',
            itemLayout: 'SpellLayout',
            itemPermalink: '/grimoire/:slug',
          },
        ],
      }
    ]
  ],
  themeConfig: {
    searchPlaceholder: 'Recherche',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'À propos', link: '/a-propos/' }
    ],
    sidebarDepth: 1,
    sidebar: [
      {
        title: 'Pour les joueurs',
        children: [
          '/creation-du-personnage/',
          '/au-dela-du-niveau-1/',
          {
            title: 'Races',
            path: '/races/',
            children: [
              '/races/demi-elfe/',
              '/races/demi-orc/',
              '/races/elfe/',
              '/races/gnome/',
              '/races/halfelin/',
              '/races/humain/',
              '/races/nain/',
              '/races/aasimar/',
              '/races/demi-ogre/',
              '/races/felys/',
              '/races/homme-serpent/',
              '/races/sangdragon/',
              '/races/tieffelin/'
            ]
          },
          '/options-de-personnalisation/',
          '/utiliser-les-caracteristiques/',
          '/partir-a-laventure/',
          '/combattre/',
          '/gerer-la-sante-du-personnage/',
          '/lancer-des-sorts/',
          {
            title: 'Grimoire',
            path: '/grimoire/'
          }
        ]
      },
      {
        title: 'Pour les meneurs',
        children: [
          '/les-tresors/',
          '/objets-magiques/',
          '/objets-magiques-intelligents/',
          '/pieges/',
          '/maladies/',
          '/folie/',
          '/objets-opposition/',
          '/poisons/'
        ]
      }
    ]
  }
}
