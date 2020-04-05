<template>
  <main class="page content">

    <div class="theme-default-content">
      <h1>{{ $page.title }}</h1>
      <div class="spell-details">
        <div class="spell-school-level" v-html="displaySchoolLevel()"></div>
        <div class="spell-casting-time"><strong>Temps d'incantation</strong> : {{ $page.frontmatter.casting_time }}</div>
        <div class="spell-range"><strong>Portée</strong> : {{ $page.frontmatter.range }}</div>
        <div class="spell-components"><strong>Composantes</strong> :
          <template v-if="$page.frontmatter.components.verbal">V</template><template v-if="$page.frontmatter.components.somatic || $page.frontmatter.components.material">,</template>
          <template v-if="$page.frontmatter.components.somatic">S</template><template v-if="$page.frontmatter.components.material">,</template>
          <template v-if="$page.frontmatter.components.material">M</template>
          <template v-if="$page.frontmatter.components.materials">({{$page.frontmatter.components.materials}})</template>
        </div>
        <div class="spell-duration"><strong>Durée</strong> : <span v-if="$page.frontmatter.concentration">concentration, </span>{{ $page.frontmatter.duration }}</div>
        <div class="spell-classes"><strong>Classe</strong> : <span v-for="(c, idx) in $page.frontmatter.classes" :key="idx">{{c}}<template v-if="idx != $page.frontmatter.classes.length-1">, </template></span></div>
      </div>
    </div>

    <Content class="mt-4" />

    <p v-if="$page.frontmatter.source" class="source">Source : <em>{{ $page.frontmatter.source }}</em></p>

  </main>
</template>

<script>
import { displaySchoolLevel } from '@theme/util/spellHelpers'

export default {
  methods: {
    displaySchoolLevel () {
      return displaySchoolLevel(this.$page.frontmatter)
    }
  }
}
</script>

<style lang="scss">
</style>
