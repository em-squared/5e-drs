export const tooltips = {
  'a-terre': {
    id: 'a-terre',
    basePath: '/gerer-la-sante-du-personnage/',
    title: 'À terre',
    description: [
      "Une créature <em>à terre</em> n'a plus l'option que de ramper pour se déplacer, à moins de se relever et de mettre ainsi un terme à son état.",
      "La créature subit un <em>désavantage</em> lors de ses attaques.",
      "Si un assaillant est à 1,50 mètre ou moins de la créature, il bénéficie d'un <em>avantage</em> lors de ses attaques contre la créature. Sinon, il subit un <em>désavantage</em>."
    ]
  },
  'assourdi': {
    id: 'assourdi',
    basePath: '/gerer-la-sante-du-personnage/',
    title: 'Assourdi',
    description: [
      "Une créature <em>assourdie</em> n'entend plus rien et rate automatiquement tous les tests de caractéristique faisant intervenir des capacités auditives.",
    ]
  },
  'aveugle': {
    id: 'aveugle',
    basePath: '/gerer-la-sante-du-personnage/',
    title: 'Aveuglé',
    description: [
      "Une créature <em>aveuglée</em> ne voit plus rien et rate automatiquement tout [test de caractéristique](/utiliser-les-caracteristiques/#tests-de-caracteristique) qui requiert la vue.",
      "Les jets d'attaque contre la créature bénéficient d'un <em>avantage</em>. Les attaques de la créature subissent un <em>désavantage</em>."
    ]
  },
  'charme': {
    id: 'charme',
    basePath: '/gerer-la-sante-du-personnage/',
    title: 'Charmé',
    description: [
      "Une créature <em>charmée</em> se trouve dans l'incapacité d'attaquer l'individu qui l'a charmée ou de le cibler avec une capacité ou un effet magique néfaste.",
      "L'individu qui a charmé la créature bénéficie d'un <em>avantage</em> pour toutes les interactions sociales avec celle-ci."
    ]
  },
  'empoigne': {
    id: 'empoigne',
    basePath: '/gerer-la-sante-du-personnage/',
    title: 'Empoigné',
    description: [
      "La vitesse d'une créature <em>empoignée</em> devient 0 et elle ne peut plus bénéficier de ses éventuels bonus de vitesse.",
      "Cet état se termine si l'empoigneur est <em>neutralisé</em> (voir cet état).",
      "L'état se termine également si un effet emporte la créature <em>empoignée</em> au-delà de l'allonge de l'empoigneur ou de l'effet d'empoignade, comme cela arrive si une créature est projetée au loin par le sort <em>vague tonnante</em>."
    ]
  },
  'empoisonne': {
    id: 'empoisonne',
    basePath: '/gerer-la-sante-du-personnage/',
    title: 'Empoisonné',
    description: [
      "Une créature <em>empoisonnée</em> souffre d'un <em>désavantage</em> lors de ses jets d'attaque et de ses tests de caractéristique."
    ]
  },
  'entrave': {
    id: 'entrave',
    basePath: '/gerer-la-sante-du-personnage/',
    title: 'Entravé',
    description: [
      "La vitesse de la créature <em>entravée</em> tombe à 0 et elle ne peut plus bénéficier de ses éventuels bonus de vitesse.",
      "Les attaques qui visent la créature bénéficient d'un <em>avantage</em>, tandis que les attaques de la créature subissent un <em>désavantage</em>.",
      "La créature souffre d'un <em>désavantage</em> lors de ses jets de sauvegarde de Dextérité."
    ]
  },
  'etourdi': {
    id: 'etourdi',
    basePath: '/gerer-la-sante-du-personnage/',
    title: 'Étourdi',
    description: [
      "Une créature <em>étourdie</em> est <em>neutralisée</em> (voir l'état), incapable de se déplacer et parle en balbutiant.",
      "La créature rate automatiquement tous ses jets de sauvegarde de Force et de Dextérité.",
      "Les jets d'attaque qui visent la créature se font avec un <em>avantage</em>."
    ]
  },
  'inconscient': {
    id: 'inconscient',
    basePath: '/gerer-la-sante-du-personnage/',
    title: 'Inconscient',
    description: [
      "Une créature <em>inconsciente</em> est <em>neutralisée</em> (voir l'état), incapable de se déplacer et de parler et n'a pas conscience de ce qui l'entoure.",
      "La créature lâche tout ce qu'elle tenait et tombe au sol.",
      "Si la créature reprend conscience, elle est <em>à terre</em>.",
      "La créature rate automatiquement tous ses jets de sauvegarde de Force et de Dextérité.",
      "Les attaques qui visent la créature bénéficient d'un <em>avantage</em>.",
      "Toute attaque qui touche la créature est obligatoirement un coup critique si l'assaillant se trouve dans un rayon de 1,50 mètre autour d'elle."
    ]
  },
  'invisible': {
    id: 'invisible',
    basePath: '/gerer-la-sante-du-personnage/',
    title: 'Invisible',
    description: [
      "Il est impossible de voir une créature <em>invisible</em> à moins de recourir à la magie ou à un sens spécial. Quand il s'agit de se cacher, la créature est considérée comme en situation de visibilité nulle. Il est possible de détecter l'endroit où se trouve la créature si elle émet des sons ou laisse des traces.",
      "Les attaques visant une créature invisible souffrent d'un <em>désavantage</em> tandis que les attaques de la créature bénéficient d'un <em>avantage</em>."
    ]
  },
  'neutralise': {
    id: 'neutralise',
    basePath: '/gerer-la-sante-du-personnage/',
    title: 'Neutralisé',
    description: [
      "Une créature <em>neutralisée</em> est incapable d'effectuer une action ou une réaction.",
    ]
  },
  'neutralise': {
    id: 'neutralise',
    basePath: '/gerer-la-sante-du-personnage/',
    title: 'Neutralisé',
    description: [
      "Une créature <em>paralysée</em> est <em>neutralisée</em> (voir l'état) et ne peut ni parler ni se déplacer.",
      "La créature rate automatiquement tous ses jets de sauvegarde de Force et de Dextérité.",
      "Les attaques visant la créature bénéficient d'un <em>avantage</em>.",
      "Toute attaque qui touche la créature est obligatoirement un coup critique si l'assaillant se trouve dans un rayon de 1,50 mètre autour d'elle."
    ]
  },
  'petrifie': {
    id: 'petrifie',
    basePath: '/gerer-la-sante-du-personnage/',
    title: 'Pétrifié',
    description: [
      "Une créature <em>pétrifiée</em> est transformée en substance solide inanimée (généralement en pierre), de même que tous les objets non-magiques qu'elle transporte. Le poids de la créature est multiplié par dix et elle ne vieillit plus.",
      "La créature est <em>neutralisée</em> (voir l'état), ne peut plus ni parler ni se déplacer et n'a pas conscience de ce qui se passe autour d'elle.",
      "Les attaques qui visent la créature bénéficient d'un <em>avantage</em>.",
      "La créature rate automatiquement tous ses jets de sauvegarde de Force et de Dextérité.",
      "La créature est résistante à tous les types de dégâts.",
      "La créature est immunisée contre le poison et les maladies, mais les poisons et maladies qui l'affectent déjà ne sont pas neutralisés, leurs effets sont juste suspendus."
    ]
  },
  'terrorise': {
    id: 'terrorise',
    basePath: '/gerer-la-sante-du-personnage/',
    title: 'Terrorisé',
    description: [
      "Une créature <em>terrorisée</em> subit un <em>désavantage</em> lors de ses tests de caractéristique et de ses jets d'attaque tant que la source de sa frayeur se trouve dans son champ de vision.",
      "La créature est incapable de se rapprocher de la source de sa frayeur de son plein gré."
    ]
  },
  'repousse': {
    id: 'repousse',
    basePath: '/gerer-la-sante-du-personnage/',
    title: 'Repoussé',
    description: [
      "Une créature <em>repoussée</em> ne peut pas volontairement s'approcher à moins de 9 mètres de la créature (ou toute autre source) à l'origine de l'effet.",
      "La créature ne peut plus utiliser de réaction.",
      "Ses seules actions disponibles sont <em>se précipiter</em> et toute action permettant d'échapper à un effet qui l'empêche de se déplacer.",
      "Si la créature n'a nulle part où s'enfuir, elle peut utiliser l'action <em>esquiver</em>."
    ]
  },
  'surpris': {
    id: 'surpris',
    basePath: '/gerer-la-sante-du-personnage/',
    title: 'Surpris',
    description: [
      "Une créature <em>surprise</em> est incapable de se déplacer.",
      "Une créature <em>surprise</em> ne peut entreprendre ni action ni réaction."
    ]
  },
}
