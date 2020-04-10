export function displayItemMeta (item, short = false) {
  let result = item.type
  if (item.subtype) {
    result += ' (' + item.subtype + ')'
  }
  result += ', ' + item.rarity
  if (item.attunement) {
    if (short) {
      result += ' (harmonisation requise)'
    } else {
      result += ' (' + item.attunement + ')'
    }
  }
  return result
}
