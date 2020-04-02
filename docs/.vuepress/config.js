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
            // Meta title for spell list page
            title: 'Grimoire',
            // Target directory
            dirname: '_spells',
            // Path of the `entry page` (or `list page`)
            path: '/grimoire/',
            layout: 'SpellsLayout',
            itemLayout: 'SpellLayout',
            itemPermalink: '/grimoire/:slug',
            pagination: {
              lengthPerPage: 1000,
              sorter: (prev, next) => {
                return prev.path - next.path
              },
            },
          },
        ],
      }
    ],
    ['check-md'],
  ],
  markdown: {
    anchor: {
      permalinkBefore: false,
      permalinkSymbol: '<i class="v-icon notranslate mdi mdi-link-variant"></i>'
    },
    extendMarkdown: md => {
      md.use(require('markdown-it-div'))
    }
  },
  themeConfig: {
    primaryColor: '#563f5a',
    accentColor: '#9b1c47',
    searchPlaceholder: 'Recherche',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'À propos', link: '/a-propos/' }
    ],
    sidebarDepth: 1,
    sidebar: [
      {
        title: 'Pour les joueurs',
        expanded: true,
        children: [
          {
            title: "Création du personnage",
            path: '/creation-du-personnage/'
          },
          {
            title: 'Au-delà du niveau 1',
            path: '/au-dela-du-niveau-1/'
          },
          {
            title: 'Races',
            path: '/races/',
            children: [
              {
                title: 'Demi-elfe',
                path: '/races/demi-elfe/'
              },
              {
                title: 'Demi-orc',
                path: '/races/demi-orc/'
              },
              {
                title: 'Elfe',
                path: '/races/elfe/'
              },
              {
                title: 'Gnome',
                path: '/races/gnome/'
              },
              {
                title: 'Halfelin',
                path: '/races/halfelin/'
              },
              {
                title: 'Humain',
                path: '/races/humain/'
              },
              {
                title: 'Nain',
                path: '/races/nain/'
              },
              {
                title: 'Aasimar',
                path: '/races/aasimar/'
              },
              {
                title: 'Demi-ogre',
                path: '/races/demi-ogre/'
              },
              {
                title: 'Félys',
                path: '/races/felys/'
              },
              {
                title: 'Homme serpent',
                path: '/races/homme-serpent/'
              },
              {
                title: 'Sangdragon',
                path: '/races/sangdragon/'
              },
              {
                title: 'Tieffelin',
                path: '/races/tieffelin/'
              }
            ]
          },
          {
            title: 'Options de personnalisation',
            path: '/options-de-personnalisation/'
          },
          {
            title: 'Utiliser les caractéristiques',
            path: '/utiliser-les-caracteristiques/'
          },
          {
            title: "Partir à l'aventure",
            path: '/partir-a-l-aventure/'
          },
          {
            title: "Combattre",
            path: '/combattre/'
          },
          {
            title: "Gérer la santé du personnage",
            path: '/gerer-la-sante-du-personnage/'
          },
          {
            title: "Lancer des sorts",
            path: '/lancer-des-sorts/'
          },
          {
            title: 'Grimoire',
            path: '/grimoire/'
          }
        ]
      },
      {
        title: 'Pour les meneurs',
        children: [
          {
            title: "Les trésorrs",
            path: '/les-tresors/'
          },
          {
            title: "Objects magiques",
            path: '/objets-magiques/'
          },
          {
            title: "Objets magiques intelligents",
            path: '/objets-magiques-intelligents/'
          },
          {
            title: "Les pièges",
            path: '/pieges/'
          },
          {
            title: "Les maladies",
            path: '/maladies/'
          },
          {
            title: "La folie",
            path: '/folie/'
          },
          {
            title: "Les objets",
            path: '/objets-opposition/'
          },
          {
            title: "Les poisons",
            path: '/poisons/'
          }
        ]
      }
    ]
  }
}
