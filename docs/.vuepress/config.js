module.exports = {
  title: 'Héros & Dragons DRS',
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
    [
      'sitemap', {
        hostname: 'https://heros-et-dragons.fr'
      },
    ]
  ],
  markdown: {
    anchor: {
      permalinkBefore: false,
      permalinkSymbol: '<i class="v-icon notranslate mdi mdi-link-variant"></i>'
    },
    extendMarkdown: md => {
      md.use(require('markdown-it-div'))
      md.use(require('markdown-it-multimd-table'), {
        multiline:  true,
        rowspan:    true,
        headerless: false,
      })
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
                title: 'Les races',
                path: '/races/'
              },
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
            title: "Personnalité & Historique",
            children: [
              {
                title: "Personnalité & Historique",
                path: '/personnalite-et-historique/'
              },
              {
                title: "Brigand",
                path: '/personnalite-et-historique/brigand/'
              },
              {
                title: "Crapule",
                path: '/personnalite-et-historique/crapule/'
              },
              {
                title: "Dévot",
                path: '/personnalite-et-historique/devot/'
              },
              {
                title: "Érudit",
                path: '/personnalite-et-historique/erudit/'
              },
              {
                title: "Explorateur",
                path: '/personnalite-et-historique/explorateur/'
              },
              {
                title: "Homme de loi",
                path: '/personnalite-et-historique/homme-de-loi/'
              },
              {
                title: "Itinérant",
                path: '/personnalite-et-historique/itinerant/'
              },
              {
                title: "Manouvrier",
                path: '/personnalite-et-historique/manouvrier/'
              },
              {
                title: "Membre de guilde",
                path: '/personnalite-et-historique/membre-de-guilde/'
              },
              {
                title: "Militaire",
                path: '/personnalite-et-historique/militaire/'
              },
              {
                title: "Miséreux",
                path: '/personnalite-et-historique/misereux/'
              },
              {
                title: "Primitif",
                path: '/personnalite-et-historique/primitif/'
              },
              {
                title: "Sang-bleu",
                path: '/personnalite-et-historique/sang-bleu/'
              },
              {
                title: "Serviteur",
                path: '/personnalite-et-historique/serviteur/'
              },
              {
                title: "Solitaire",
                path: '/personnalite-et-historique/solitaire/'
              },
              {
                title: "Villageois",
                path: '/personnalite-et-historique/villageois/'
              }
            ]
          },
          {
            title: "Classes",
            children: [
              {
                title: "Les classes",
                path: '/classes/'
              },
              {
                title: "Barbare",
                path: '/classes/barbare/'
              },
              {
                title: "Barde",
                path: '/classes/barde/'
              },
              {
                title: "Clerc",
                path: '/classes/clerc/'
              },
              {
                title: "Druide",
                path: '/classes/druide/'
              },
              {
                title: "Ensorceleur",
                path: '/classes/ensorceleur/'
              },
              {
                title: "Guerrier",
                path: '/classes/guerrier/'
              },
              {
                title: "Magicien",
                path: '/classes/magicien/'
              },
              {
                title: "Moine",
                path: '/classes/moine/'
              },
              {
                title: "Paladin",
                path: '/classes/paladin/'
              },
              {
                title: "Rôdeur",
                path: '/classes/rodeur/'
              },
              {
                title: "Roublard",
                path: '/classes/roublard/'
              },
              {
                title: "Sorcier",
                path: '/classes/sorcier/'
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
