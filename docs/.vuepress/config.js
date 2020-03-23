module.exports = {
  title: 'Héros & Dragons',
  description: 'Document de Référence Système pour le jeu de rôle Héros & Dragons',
  themeConfig: {
    searchPlaceholder: 'Recherche',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'À propos', link: '/a-propos/' }
    ],
    sidebar: [
      {
        title: 'Pour les joueurs',
        children: [
          {
            title: 'Création du personnage',
            path: '/creation-du-personnage/',
            children: [
              '/creation-du-personnage/au-dela-du-niveau-1/'
            ]
          }
        ]
      }
    ]
  }
}
