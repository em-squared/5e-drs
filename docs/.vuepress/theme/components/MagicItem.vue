<template>
  <main class="page content">

    <div class="theme-default-content">
      <template v-if="!hideTitle">
        <h1 v-if="!isList">{{ magicItem.title }}</h1>
        <h2 v-else>{{ magicItem.title }}</h2>
      </template>
      <div class="magic-item-details title">
        {{displayItemMeta()}}
      </div>
    </div>

    <Content v-if="!magicItem.custom" :pageKey="magicItem.key" class="mt-4" />
    <div v-else v-html="md.render(magicItem.content)" class="mt-4"></div>

    <!-- <p v-if="$page.frontmatter.source" class="source">Source : <em>{{ $page.frontmatter.source }}</em></p> -->
    <p v-if="magicItem.author" class="source">Auteur : <em>{{ magicItem.author }}</em></p>

  </main>
</template>

<script>
import {displayItemMeta} from '@theme/util/magicItemHelpers'
import MarkdownIt from 'markdown-it'
import { handleTooltips } from '@theme/util'

export default {
  name: 'MagicItem',

  data () {
    return {
      md: new MarkdownIt()
    }
  },

  props: ['magicItem', 'isList', 'hideTitle'],

  methods : {
    displayItemMeta () {
      return displayItemMeta(this.magicItem.frontmatter)
    }
  },

  mounted () {
    let self = this
    setTimeout(function () {
      handleTooltips({pages:self.$site.pages})
    }, 100);
    this.$router.afterEach(() => {
      setTimeout(function () {
        handleTooltips({pages:self.$site.pages})
      }, 100)
    })
  }
}
</script>

<style lang="scss">
</style>
