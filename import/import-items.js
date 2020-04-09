const fs = require('fs')
const slugify = require('slugify')
slugify.extend({"'": '-'})
const items = require('./magic-items.json')

for (var i = 0; i < items.length; i++) {
  let filecontent = buildFileContent(items[i])
  let filename = slugify(items[i].header.title, {lower: true, strict: true})
  fs.writeFile("./_magicitems/" + filename + ".md", filecontent, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("Saved: " + filename +".md")
  })
}

function buildFileContent(item) {
  let c = ''
  // Frontmatter
  c += '---\n'
  c += 'title: "' + item.header.title + '"\n'
  c += 'type: "' + item.header.magicitem.type + '"\n'
  if (item.header.magicitem.subtype) {
    c += 'subtype: "' + item.header.magicitem.subtype + '"\n'
  } else {
    c += 'subtype: false\n'
  }
  c += 'rarity: "' + item.header.magicitem.rarity + '"\n'
  if (item.header.magicitem.attunement) {
    c += 'attunement: "' + item.header.magicitem.attunement + '"\n'
  } else {
    c += 'attunement: false\n'
  }
  c += 'source: "' + item.header.taxonomy.source[0] + '"\n'
  c += '---\n'
  // Content
  c += item.content
  return c
}
