<template>
  <div>
    <Home v-if="$page.frontmatter.home" />

    <Page
      v-else
      :sidebar-items="sidebarItems"
    >
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Page>
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Page from '@theme/components/Page.vue'
import { resolveSidebarItems } from '../util'

export default {
  name: 'Layout',

  components: {
    Home,
    Page
  },

  computed: {

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

  }
}
</script>
