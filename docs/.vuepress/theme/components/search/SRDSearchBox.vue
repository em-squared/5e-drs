<template>
  <v-autocomplete
    v-model="select"
    :loading="loading"
    :items="entries"
    :search-input.sync="search"
    cache-items
    class="mx-4"
    flat
    clearable
    hide-no-data
    hide-details
    item-text="title"
    item-value="path"
    :label="placeholder"
    append-icon="mdi-magnify"
    solo-inverted
    return-object
    :filter="searchFilter"
  >

    <template v-slot:item="data">
      <template>
        <v-list-item-content>
          <v-list-item-title v-html="data.item.title"></v-list-item-title>
          <v-list-item-subtitle v-if="data.item.subtitle" v-html="data.item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </template>

  </v-autocomplete>
</template>

<script>
import matchQuery from './match-query'
import slugify from 'slugify'
import { displaySchoolLevel } from '@theme/util/spellHelpers'
import { displayItemMeta } from '@theme/util/magicItemHelpers'
import { displayMonsterTypeSizeAlignment } from '@theme/util/monsterHelpers'

/* global SEARCH_MAX_SUGGESTIONS, SEARCH_PATHS, SEARCH_HOTKEYS */
export default {
  name: 'SRDSearchBox',

  data () {
    return {
      loading: false,
      focused: false,
      focusIndex: 0,
      placeholder: undefined,
      search: null,
      select: null,
      items: []
    }
  },

  watch: {
    search (query) {
      if (query && query.length > 1) {
        this.suggestions(query)
      }
    },

    select (selected) {
      this.go(selected)
    }
  },

  computed: {
    entries () {
      return this.items.map(item => {
        return {
          title: item.title,
          subtitle: item.subtitle,
          path: item.path
        }
      })
    }
  },

  mounted () {
    this.placeholder = this.$site.themeConfig.searchPlaceholder || ''
  },

  methods: {
    searchFilter (item, queryText, itemText) {
      if (slugify(itemText, {lower: true, strict: true}).includes(slugify(queryText, {lower: true, strict: true}))) {
        return true
      }
      return false
    },


    suggestions (query) {
      this.loading = true
      query = query.trim().toLowerCase()
      if (!query) {
        this.items = []
        return
      }

      const { pages } = this.$site
      const max = this.$site.themeConfig.searchMaxSuggestions || 10
      const localePath = this.$localePath
      const res = []
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) break
        const p = pages[i]
        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue
        }

        // filter out results that do not match searchable paths
        if (!this.isSearchable(p)) {
          continue
        }

        if (matchQuery(query, p)) {
          if (p.pid && p.pid == 'spell') {
            res.push(Object.assign({}, p, {
              subtitle: displaySchoolLevel(p.frontmatter),
              title: p.title,
              path: p.path
            }))
          } else if (p.pid && p.pid == 'magicitem') {
            res.push(Object.assign({}, p, {
              subtitle: displayItemMeta(p.frontmatter, true),
              title: p.title,
              path: p.path
            }))
          } else if (p.pid && p.pid == 'monster') {
            res.push(Object.assign({}, p, {
              subtitle: displayMonsterTypeSizeAlignment(p.frontmatter, true, false),
              title: p.title,
              path: p.path
            }))
          } else {
            res.push(p)
          }
        } else if (p.headers && p.pid != 'monster') { // Only parse relevent headers. Monster headers are not
          for (let j = 0; j < p.headers.length; j++) {
            if (res.length >= max) break
            const h = p.headers[j]
            if (h.title && matchQuery(query, p, h.title)) {
              res.push(Object.assign({}, p, {
                subtitle: p.title,
                title: h.title,
                path: p.path + '#' + h.slug,
                header: h
              }))
            }
          }
        }
      }
      this.items = res
      this.loading = false
    },

    getPageLocalePath (page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
          return localePath
        }
      }
      return '/'
    },

    isSearchable (page) {
      let searchPaths = this.$site.themeConfig.searchPaths || null

      // all paths searchables
      if (searchPaths === null) { return true }

      searchPaths = Array.isArray(searchPaths) ? searchPaths : new Array(searchPaths)

      return searchPaths.filter(path => {
        return page.path.match(path)
      }).length > 0
    },

    go (selected) {
      if (selected) {
        this.$router.push(selected.path)
      }
    }
  }
}
</script>

<style>
</style>
