<template>
  <main class="page content">
    <div class="theme-default-content">
      <template v-if="monsters.length > 0">

        <div class="d-print-none mb-12">

          <v-data-table
            class="data-table"
            :headers="headers"
            :items="monsters"
            item-key="key"
            :sort-by="sortBy"
            :sort-desc="sortDesc"
            must-sort
            :items-per-page="-1"
            hide-default-footer
            show-expand
            @click:row="onClickRow"
          >

            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length" class="pa-4">
                <Monster class="column-count-2" :monster="getMonster(item)" />
              </td>
            </template>

            <template v-slot:item.title="{ item }">
              <span class="subtitle-2">{{ item.title }}</span>
            </template>

            <template v-slot:item.frontmatter.challenge="{ item }">
              <span>{{ displayChallenge(item.frontmatter.challenge) }}</span>
            </template>

            <template v-slot:item.frontmatter.environments="{ item }">
              <span v-if="item.frontmatter.environments">{{ displayList(item.frontmatter.environments) }}</span>
            </template>

            <template v-slot:item.frontmatter.dungeonTypes="{ item }">
              <span v-if="item.frontmatter.dungeonTypes">{{ displayList(item.frontmatter.dungeonTypes) }}</span>
            </template>

            <template v-slot:item.actions="{ item }">
              <div class="text-no-wrap">
                <v-btn class="d-print-none" v-if="item.custom" small depressed icon @click="share(item)"><v-icon>mdi-share-variant</v-icon></v-btn>
                <v-btn class="d-print-none mr-2" small depressed icon @click.stop="toggleHidePrint(item)">
                  <v-icon v-if="isHiddenPrint(item)">mdi-printer-off</v-icon>
                  <v-icon v-else>mdi-printer</v-icon>
                </v-btn>
                <v-btn v-if="item.custom" class="d-print-none mr-2" small depressed link icon :to="{ path: '/creation-de-monstre-pnj/', query: { key: item.key } }"><v-icon>mdi-pencil</v-icon></v-btn>
                <v-btn color="error" class="d-print-none" small depressed icon @click="removeMonster(item)"><v-icon>mdi-delete</v-icon></v-btn>
              </div>
            </template>

          </v-data-table>
        </div>

        <div class="d-none d-print-block column-count-2">
          <div v-for="monster in monsters">
            <div v-if="!isHiddenPrint(monster)">
              <h1 class="d-flex align-center">
                <div class="mr-4">{{ monster.title }}</div>
                <v-btn class="d-print-none mr-2" small depressed link :to="{ path: '/creation-de-monstre-pnj/', query: { key: monster.key } }"><v-icon left>mdi-pencil</v-icon> Modifier</v-btn>
                <v-btn color="error" class="d-print-none" small depressed @click="removeMonster(monster)"><v-icon left>mdi-delete</v-icon> Supprimer</v-btn>
              </h1>
              <Monster :monster="getMonster(monster)" :isList="true" :hideTitle="true" />
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        Vous n'avez recensé aucun monstre dans votre bestiaire.
      </template>
    </div>

  </main>
</template>

<script>
import Monster from '@theme/components/Monster'
import { displayChallenge } from '@theme/util/monsterHelpers'

export default {
  name: 'MyMonsters',

  components: {
    Monster
  },

  data () {
    return {
      sortBy: 'title',
      sortDesc: false,
      headers: [
        { text: "Nom", align: 'start', sortable: true, value: 'title' },
        { text: "ID", align: 'center', sortable: true, value: 'frontmatter.challenge' },
        { text: "Type", align: 'start', sortable: false, value: 'frontmatter.type' },
        { text: "Taille", align: 'center', sortable: false, value: 'frontmatter.size' },
        { text: "Sous-type", align: 'start', sortable: false, value: 'frontmatter.subtype' },
        { text: "Environnements", align: 'start', sortable: false, value: 'frontmatter.environments' },
        { text: "Type de donjons", align: 'start', sortable: false, value: 'frontmatter.dungeonTypes' },
        { text: "", align: 'center', sortable: false, value: 'actions' },
      ]
    }
  },

  computed: {
    monsters () {
      return this.$store.state.myMonsters.monsters
    }
  },

  methods: {
    displayList (list) { return list.join(', ') },
    displayChallenge (challenge) { return displayChallenge(challenge) },
    toggleHidePrint (monster) {
      if (this.isHiddenPrint(monster)) {
        this.$store.commit('myMonsters/removeNotPrintedMonster', monster)
      } else {
        this.$store.commit('myMonsters/addNotPrintedMonster', monster)
      }
    },
    isHiddenPrint (monster) {
      if (this.$store.state.myMonsters.notPrintedMonsters) {
        let idx = this.$store.state.myMonsters.notPrintedMonsters.findIndex(item => item.key == monster.key)
        if (idx >= 0) {
          return true
        }
      }
      return false
    },
    onClickRow (row, item) {
      item.expand(!item.isExpanded)
    },
    removeMonster (monster) {
      this.$store.commit('myMonsters/removeMonster', monster)
      this.$store.commit('setSnackbarText', "Le monstre " + monster.title + " a été supprimé de votre bestiaire")
      this.$store.commit('setIsOpenSnackbar', true)
    },
    share (item) {
      this.$store.commit('setShareURI', encode(item))
      this.$store.commit('setIsOpenShareHomebrewDialog', true)
    },
    getMonster (item) {
      if (!item.custom && item.path) {
        let monster = this.$site.pages.find((el) => el.path === item.path || el.path === item.path + "/")
        return monster
      }
      return item
    }
  }
}
</script>

<style lang="scss">
</style>
