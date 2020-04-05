<template>
  <v-breadcrumbs :items="bread">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item :to="item.to" :exact="true" :disabled="item.disabled">
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
  export default {
    name: "Breadcrumb",

    computed: {
      bread() {
        const parts = this.$page.path.split("/");
        if (!parts[parts.length - 1].length) { parts.pop() }
        let link = ""
        const crumbs = []
        for (let i = 0; i < parts.length; i++) {
          let disabled = false
          if (i == parts.length - 1) {
            disabled = true
          }
          link += parts[i]
          const page = this.$site.pages.find((el) => el.path === link || el.path === link + "/")
          link += "/"
          if (page != null) {
            if (page.path == '/grimoire/') {
              crumbs.push({to: page.path, disabled: disabled, text: 'Grimoire'})
            } else if (page.path == '/classes/') {
              crumbs.push({to: page.path, disabled: disabled, text: 'Classes'})
            } else {
              crumbs.push({to: page.path, disabled: disabled, text: page.frontmatter.breadcrumb || page.title})
            }
          }
        }
        return crumbs;
      },
    },
  };
</script>

<style lang="scss">
@import '../styles/colors';

.v-breadcrumbs {
  // background-color: lighten($color-gray, 50);
}

.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled {
  // color: rgba(0,0,0,.87);
}
</style>
