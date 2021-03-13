export const hashRE = /#.*$/
export const extRE = /\.(md|html)$/
export const endingSlashRE = /\/$/
export const outboundRE = /^[a-z]+:/i

export function normalize (path) {
  return decodeURI(path)
    .replace(hashRE, '')
    .replace(extRE, '')
}

export function getHash (path) {
  const match = path.match(hashRE)
  if (match) {
    return match[0]
  }
}

export function isExternal (path) {
  return outboundRE.test(path)
}

export function isMailto (path) {
  return /^mailto:/.test(path)
}

export function isTel (path) {
  return /^tel:/.test(path)
}

export function ensureExt (path) {
  if (isExternal(path)) {
    return path
  }
  const hashMatch = path.match(hashRE)
  const hash = hashMatch ? hashMatch[0] : ''
  const normalized = normalize(path)

  if (endingSlashRE.test(normalized)) {
    return path
  }
  return normalized + '.html' + hash
}

export function isActive (route, path) {
  const routeHash = decodeURIComponent(route.hash)
  const linkHash = getHash(path)
  if (linkHash && routeHash !== linkHash) {
    return false
  }
  const routePath = normalize(route.path)
  const pagePath = normalize(path)
  return routePath === pagePath
}

export function resolvePage (pages, rawPath, base) {
  if (isExternal(rawPath)) {
    return {
      type: 'external',
      path: rawPath
    }
  }
  if (base) {
    rawPath = resolvePath(rawPath, base)
  }
  const path = normalize(rawPath)
  for (let i = 0; i < pages.length; i++) {
    if (normalize(pages[i].regularPath) === path) {
      return Object.assign({}, pages[i], {
        type: 'page',
        path: ensureExt(pages[i].path)
      })
    }
  }
  // console.error(`[vuepress] No matching page found for sidebar item "${rawPath}"`)
  return {}
}

function resolvePath (relative, base, append) {
  const firstChar = relative.charAt(0)
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  const stack = base.split('/')

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop()
  }

  // resolve relative path
  const segments = relative.replace(/^\//, '').split('/')
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]
    if (segment === '..') {
      stack.pop()
    } else if (segment !== '.') {
      stack.push(segment)
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('')
  }

  return stack.join('/')
}

/**
 * @param { Page } page
 * @param { string } regularPath
 * @param { SiteData } site
 * @param { string } localePath
 * @returns { SidebarGroup }
 */
export function resolveSidebarItems (page, regularPath, site, localePath) {
  const { pages, themeConfig } = site

  const localeConfig = localePath && themeConfig.locales
    ? themeConfig.locales[localePath] || themeConfig
    : themeConfig

  const pageSidebarConfig = page.frontmatter.sidebar || localeConfig.sidebar || themeConfig.sidebar
  if (pageSidebarConfig === 'auto') {
    return resolveHeaders(page)
  }

  const sidebarConfig = localeConfig.sidebar || themeConfig.sidebar
  if (!sidebarConfig) {
    return []
  } else {
    const { base, config } = resolveMatchingConfig(regularPath, sidebarConfig)
    return config
      ? config.map(item => resolveItem(item, pages, base))
      : []
  }
}

/**
 * @param { Page } page
 * @returns { SidebarGroup }
 */
function resolveHeaders (page) {
  const headers = groupHeaders(page.headers || [])
  return [{
    type: 'group',
    collapsable: false,
    title: page.title,
    path: null,
    children: headers.map(h => ({
      type: 'auto',
      title: h.title,
      basePath: page.path,
      path: page.path + '#' + h.slug,
      children: h.children || []
    }))
  }]
}

export function groupHeaders (headers) {
  // group h3s under h2
  headers = headers.map(h => Object.assign({}, h))
  let lastH2
  headers.forEach(h => {
    if (h.level === 2) {
      lastH2 = h
    } else if (lastH2) {
      (lastH2.children || (lastH2.children = [])).push(h)
    }
  })
  return headers.filter(h => h.level === 2)
}

export function resolveNavLinkItem (linkItem) {
  return Object.assign(linkItem, {
    type: linkItem.items && linkItem.items.length ? 'links' : 'link'
  })
}

/**
 * @param { Route } route
 * @param { Array<string|string[]> | Array<SidebarGroup> | [link: string]: SidebarConfig } config
 * @returns { base: string, config: SidebarConfig }
 */
export function resolveMatchingConfig (regularPath, config) {
  if (Array.isArray(config)) {
    return {
      base: '/',
      config: config
    }
  }
  for (const base in config) {
    if (ensureEndingSlash(regularPath).indexOf(encodeURI(base)) === 0) {
      return {
        base,
        config: config[base]
      }
    }
  }
  return {}
}

function ensureEndingSlash (path) {
  return /(\.html|\/)$/.test(path)
    ? path
    : path + '/'
}

function resolveItem (item, pages, base, groupDepth = 1) {
  if (typeof item === 'string') {
    return resolvePage(pages, item, base)
  } else if (Array.isArray(item)) {
    return Object.assign(resolvePage(pages, item[0], base), {
      title: item[1]
    })
  } else {
    const children = item.children || []
    if (children.length === 0 && item.path) {
      return Object.assign(resolvePage(pages, item.path, base), {
        title: item.title
      })
    }
    return {
      type: 'group',
      path: item.path,
      title: item.title,
      sidebarDepth: item.sidebarDepth,
      children: children.map(child => resolveItem(child, pages, base, groupDepth + 1)),
      collapsable: item.collapsable !== false
    }
  }
}

/*
** Returns index of resource in library
*/
export function getResourceIndexInLibrary (resource, library) {
  let idx = -1
  if (resource.custom) {
    idx = library.findIndex(item => item.key == resource.key)
  } else {
    idx = library.findIndex(item => item.path == resource.path)
  }
  return idx
}

/*
** Returns presence of resource in library
*/
export function isResourceInLibrary (resource, library) {
  let idx = getResourceIndexInLibrary(resource, library)
  if (idx >= 0) {
    return true
  }
  return false
}

/*
** Handles rule tooltips like conditions
*/
import { tooltips } from '../../data/ruleTooltips.js'
import {displaySchoolLevel} from '@theme/util/spellHelpers'
import MarkdownIt from 'markdown-it'
export function handleTooltips (params = {}) {
  if (!params.component) {
    params.component = document
  }
  // Gestion des tooltips
  let tooltip = document.getElementById('tooltip')
  let tooltipTitle = document.getElementById('tooltip-title')
  let tooltipContent = document.getElementById('tooltip-content')
  window.onmousemove = function (e) {
    var x = e.pageX + 20,
        y = e.pageY + 20;

    tooltip.style.top = y + 'px';
    tooltip.style.left = x + 'px';

    // Get calculated tooltip coordinates and size
    var tooltip_rect = tooltip.getBoundingClientRect();
    // Corrections if out of window
    if ((tooltip_rect.x + tooltip_rect.width) > window.innerWidth) // Out on the right
      x = x - tooltip_rect.width - 20;  // Simulate a "right: tipX" position
    if ((tooltip_rect.y + tooltip_rect.height) > window.innerHeight) // Out on the bottom
      y = y - tooltip_rect.height - 20; // Align on the bottom

    // Apply corrected position
    tooltip.style.top = y + 'px';
    tooltip.style.left = x + 'px';
  }
  // Arborescence des liens
  let links = params.component.querySelectorAll("a")
  for (var l of links) {
    let hash = l.hash.replace('#', '')
    if (hash != "" && tooltips[hash]) {
      l.addEventListener("mouseover", function( event ) {
        tooltipTitle.innerHTML = tooltips[hash].title
        tooltipTitle.classList.add('tooltip-condition')
        let tcontent = '<ul>'
        for (var d of tooltips[hash].description) {
          tcontent += '<li>' + d + '</li>'
        }
        tcontent += '</ul>'
        tcontent += '<div class="tooltip-overflow"></div>'
        tooltipContent.innerHTML = tcontent
        tooltip.style.display = 'block'
      }, false);

      l.addEventListener("mouseout", function( event ) {
        tooltip.style.display = 'none'
        tooltipTitle.classList.remove('tooltip-condition')
      }, false);
    } else if (l.pathname.startsWith('/grimoire/')) {
      // console.log(l.pathname)
      if (params.pages) {
        let spell = params.pages.find((el) => el.path === l.pathname)
        if (spell) {
          // console.log(spell)
          l.addEventListener("mouseover", function( event ) {
            let ttitle = '<div class="d-flex justify-space-between">'
            ttitle += '<div>' + spell.title + '</div>'
            ttitle += '<div class="spell-school-level subtitle-2">' + displaySchoolLevel(spell.frontmatter) + '</div>'
            ttitle += '</div>'
            tooltipTitle.innerHTML = ttitle
            tooltipTitle.classList.add('tooltip-spell')
            let tcontent = '<div>'

            tcontent += '<div class="spell-details">'
            tcontent += '<div class="d-flex justify-space-around">'
            tcontent += '<div class="px-4 flex-grow-0 spell-casting-time"><div class="subtitle-2">Temps d\'incantation</div><div>' + spell.frontmatter.casting_time + '</div></div>'
            tcontent += '<div class="px-4 flex-grow-0 spell-range"><div class="subtitle-2">Portée</div><div>' + spell.frontmatter.range + '</div></div>'
            tcontent += '<div class="px-4 flex-grow-0 spell-components"><div class="subtitle-2">Composantes</div><div>'
            let components = ''
            if (spell.frontmatter.components.verbal) {
              components += 'V'
              if (spell.frontmatter.components.somatic || spell.frontmatter.components.material) {
                components += ', '
              }
            }
            if (spell.frontmatter.components.somatic) {
              components += 'S'
              if (spell.frontmatter.components.material) {
                components += ', '
              }
            }
            if (spell.frontmatter.components.material) {
              components += 'M'
            }
            tcontent += '<span>' + components + '</span>'
            tcontent += '</div></div>'
            let duration = ''
            if (spell.frontmatter.concentration) {
              duration += 'concentration, '
            }
            duration += spell.frontmatter.duration
            tcontent += '<div class="px-4 flex-grow-0 spell-duration"><div class="subtitle-2">Durée</div><div>' + duration + '</div></div>'
            tcontent += '</div>'
            tcontent += '</div>'
            var md = new MarkdownIt()
            let content = md.render(spell.rawContent)
            content = content.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
            tcontent += '<div class="spell-description">' + content + '</div>'
            tcontent += '</div>'
            tcontent += '<div class="tooltip-overflow"></div>'
            tooltipContent.innerHTML = tcontent
            tooltip.style.display = 'block'
          }, false);

          l.addEventListener("mouseout", function( event ) {
            tooltip.style.display = 'none'
            tooltipTitle.classList.remove('tooltip-spell')
          }, false);
        }
      }
    }
  }
}
