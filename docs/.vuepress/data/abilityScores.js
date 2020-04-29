export const ABILITYSCORECOSTS = {
  6: { cost: -2 },
  7: { cost: -1 },
  8: { cost: 0 },
  9: { cost: 1 },
  10: { cost: 2 },
  11: { cost: 3 },
  12: { cost: 4 },
  13: { cost: 5 },
  14: { cost: 7 },
  15: { cost: 9 },
  16: { cost: 12 },
}

export const ABILITYSCORES = [
  { text: 'Force', value: 'for' },
  { text: 'Dextérité', value: 'dex' },
  { text: 'Constitution', value: 'con' },
  { text: 'Intelligence', value: 'int' },
  { text: 'Sagesse', value: 'sag' },
  { text: 'Charisme', value: 'cha' },
]

export const POWERTIERS = [
  { text: 'Courageux', min: 6, max: 15, pointBuy: 19, standardArray: [14,12,12,10,10,8] },
  { text: 'Héroïque', min: 8, max: 15, pointBuy: 27, standardArray: [15,14,13,12,10,8] },
  { text: 'Légendaire', min: 8, max: 16, pointBuy: 36, standardArray: [16,15,13,12,12,10] }
]
