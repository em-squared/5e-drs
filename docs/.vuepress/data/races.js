export const races = [
  {
    key: 'demi-elfe',
    label: 'Demi-elfe',
    abilityBonuses: [
      { ability: 'cha', value: 2 }
    ],
    freeAbilityBonuses: { qty: 2, value: 1 }
  },
  {
    key: 'demi-orc',
    label: 'Demi-orc',
    abilityBonuses: [
      { ability: 'for', value: 2 },
      { ability: 'con', value: 1 }
    ],
  },
  {
    key: 'elfe',
    label: "Elfe",
    abilityBonuses: [
      { ability: 'dex', value: 2 }
    ],
    variants: [
      {
        key: 'elfe-d-aether',
        label: "Elfe d'aether",
        abilityBonuses: [
          { ability: 'dex', value: 2 },
          { ability: 'int', value: 1 }
        ]
      },
      {
        key: 'elfe-de-fer',
        label: "Elfe de fer",
        abilityBonuses: [
          { ability: 'dex', value: 2 },
          { ability: 'cha', value: 1 }
        ]
      },
      {
        key: 'elfe-des-sylves',
        label: "Elfe des sylves",
        abilityBonuses: [
          { ability: 'dex', value: 2 },
          { ability: 'sag', value: 1 }
        ]
      }
    ]
  },
  {
    key: 'gnome',
    label: "Gnome",
    abilityBonuses: [
      { ability: 'int', value: 2 }
    ],
    variants: [
      {
        key: 'gnome-des-roches',
        label: "Gnome des roches",
        abilityBonuses: [
          { ability: 'int', value: 2 },
          { ability: 'con', value: 1 }
        ]
      },
      {
        key: 'gnome-des-fees',
        label: "Gnome des fées",
        abilityBonuses: [
          { ability: 'int', value: 2 },
          { ability: 'dex', value: 1 }
        ]
      },
      {
        key: 'gnome-des-lacs',
        label: "Gnome des lacs",
        abilityBonuses: [
          { ability: 'int', value: 2 },
          { ability: 'sag', value: 1 }
        ]
      }
    ]
  },
  {
    key: 'halfelin',
    label: "Halfelin",
    abilityBonuses: [
      { ability: 'dex', value: 2 }
    ],
    variants: [
      {
        key: 'halfelin-pied-leger',
        label: "Halfelin pied-léger",
        abilityBonuses: [
          { ability: 'dex', value: 2 },
          { ability: 'cha', value: 1 }
        ]
      },
      {
        key: 'halfelin-grand-sabot',
        label: "Halfelin grand-sabot",
        abilityBonuses: [
          { ability: 'dex', value: 2 },
          { ability: 'con', value: 1 }
        ]
      }
    ]
  },
  {
    key: 'humain',
    label: "Humain",
    abilityBonuses: [
      { ability: 'for', value: 1 },
      { ability: 'dex', value: 1 },
      { ability: 'con', value: 1 },
      { ability: 'int', value: 1 },
      { ability: 'sag', value: 1 },
      { ability: 'cha', value: 1 }
    ],
    variants: [
      {
        key: 'humain',
        label: "Humain",
        abilityBonuses: [
          { ability: 'for', value: 1 },
          { ability: 'dex', value: 1 },
          { ability: 'con', value: 1 },
          { ability: 'int', value: 1 },
          { ability: 'sag', value: 1 },
          { ability: 'cha', value: 1 }
        ]
      },
      {
        key: 'humain-variante-don',
        label: "Humain (variante don)",
        freeAbilityBonuses: { qty: 3, value: 1 }
      },
      {
        key: 'humain-variante-maitrises',
        label: "Humain (variante maîtrises)",
        freeAbilityBonuses: { qty: 4, value: 1 }
      }
    ]
  },
  {
    key: 'nain',
    label: "Nain",
    abilityBonuses: [
      { ability: 'con', value: 2 }
    ],
    variants: [
      {
        key: 'nain-des-tertres',
        label: "Nain des tertres",
        abilityBonuses: [
          { ability: 'con', value: 2 },
          { ability: 'sag', value: 1 }
        ]
      },
      {
        key: 'nain-des-pierres',
        label: "Nain des pierres",
        abilityBonuses: [
          { ability: 'con', value: 2 },
          { ability: 'int', value: 1 }
        ]
      },
      {
        key: 'nain-des-laves',
        label: "Nain des laves",
        abilityBonuses: [
          { ability: 'con', value: 2 },
          { ability: 'for', value: 1 }
        ]
      }
    ]
  },
  {
    key: 'aasimar',
    label: "Aasimar",
    abilityBonuses: [
      { ability: 'cha', value: 2 },
      { ability: 'sag', value: 1 }
    ]
  },
  {
    key: 'demi-ogre',
    label: "Demi-ogre",
    abilityBonuses: [
      { ability: 'for', value: 2 },
      { ability: 'con', value: 2 }
    ],
    variants: [
      {
        key: 'demi-ogre-standard',
        label: "Demi-ogre",
        abilityBonuses: [
          { ability: 'for', value: 2 },
          { ability: 'con', value: 2 }
        ]
      },
      {
        key: 'demi-ogre-sorcereux',
        label: "Demi-ogre sorcereux",
        abilityBonuses: [
          { ability: 'con', value: 1 },
          { ability: 'sag', value: 1 },
          { ability: 'cha', value: 2 },
        ]
      }
    ]
  },
  {
    key: 'felys',
    label: "Félys",
    abilityBonuses: [
      { ability: 'dex', value: 2 },
      { ability: 'sag', value: 1 }
    ]
  },
  {
    key: 'homme-serpent',
    label: "Homme-serpent",
    abilityBonuses: [
      { ability: 'sag', value: 2 },
      { ability: 'cha', value: 1 }
    ]
  },
  {
    key: 'sangdragon',
    label: "Sangdragon",
    abilityBonuses: [
      { ability: 'for', value: 2 },
      { ability: 'cha', value: 1 }
    ]
  },
  {
    key: 'tieffelin',
    label: "Tieffelin",
    abilityBonuses: [
      { ability: 'cha', value: 2 },
      { ability: 'int', value: 1 }
    ]
  }
]
