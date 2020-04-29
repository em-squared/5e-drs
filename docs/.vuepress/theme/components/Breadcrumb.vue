<template>
  <div class="d-print-none">
    <v-breadcrumbs v-if="$route.path != '/'" :items="bread">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :to="item.to" :exact="true" :disabled="item.disabled">
          <template v-if="item.to == '/'">
            <img src="/dragon_rouge.svg" />
          </template>
          <template v-else>
            {{ item.text }}
          </template>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <v-row v-else justify="center"><img class="d-block home-logo" src="/dragon_rouge.svg" /></v-row>
  </div>
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
            } else if (page.path == '/bestiaire/') {
              crumbs.push({to: page.path, disabled: disabled, text: 'Bestiaire'})
            } else if (page.path == '/liste-objets-magiques/') {
              crumbs.push({to: page.path, disabled: disabled, text: 'Liste des objets magiques'})
            } else if (page.path == '/mon-grimoire/') {
              crumbs.push({to: page.path, disabled: disabled, text: 'Mon grimoire'})
            } else if (page.path == '/mon-bestiaire/') {
              crumbs.push({to: page.path, disabled: disabled, text: 'Mon bestiaire'})
            } else if (page.path == '/mes-objets-magiques/') {
              crumbs.push({to: page.path, disabled: disabled, text: 'Mes objets magiques'})
            } else if (page.path == '/creation-de-sort/') {
              crumbs.push({to: page.path, disabled: disabled, text: 'Création de sort'})
            } else if (page.path == '/creation-de-monstre-pnj/') {
              crumbs.push({to: page.path, disabled: disabled, text: 'Création de monstre ou PNJ'})
            } else if (page.path == '/calculateur-de-caracteristiques/') {
              crumbs.push({to: page.path, disabled: disabled, text: 'Calculateur de caractéristiques'})
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
