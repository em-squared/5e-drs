<template>
  <main class="page content">
    <div class="theme-default-content">
      <div v-if="spells.length > 0">
        <div class="d-print-none mb-12">

          <v-dialog v-model="spellCard" max-width="660">
            <v-card v-if="selectedSpell">
              <v-card-title class="headline">
                {{selectedSpell.title}}
                <v-spacer></v-spacer>
                <v-btn icon @click="spellCard = false"><v-icon>mdi-close</v-icon></v-btn>
              </v-card-title>

              <v-card-text>
                <Spell :spell="selectedSpell" :isList="true" :hideTitle="true" />
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-data-table
            class="data-table"
            :headers="headers"
            :items="spells"
            item-key="key"
            :sort-by="sortBy"
            :sort-desc="sortDesc"
            group-by="frontmatter.level"
            must-sort
            :items-per-page="-1"
            hide-default-footer
          >

            <template v-slot:group.header="{ group, headers, isOpen, toggle }">
              <td class="group-header" :colspan="headers.length">
                <div class="d-block d-md-flex align-center">
                  <div class="mr-md-12">
                    <v-btn dark small depressed icon @click.stop="toggle"><v-icon v-if="isOpen">mdi-minus</v-icon><v-icon v-else>mdi-plus</v-icon></v-btn>
                    <span class="subtitle-2"><strong>{{ displayLevel(group) }}</strong></span>
                  </div>
                  <div class="mx-md-12">
                    <div v-if="group > 0" style="width: 125px;">
                      <v-text-field dark label="Emplacements" type="number" min="0" v-model="spellSlots[group]" @input="onInputSpellSlots"></v-text-field>
                    </div>
                  </div>
                  <div class="ml-md-12">
                    <div class="d-flex" v-if="spellSlots[group] > 0">
                      <div v-for="(slot, idx) in Number(spellSlots[group])" :key="idx">
                        <v-checkbox dark></v-checkbox>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </template>

            <template v-slot:item.title="{ item }">
              <span class="cursor-pointer subtitle-2" @click.stop="openSpellDetails(item)">{{ item.title }}</span>
            </template>

            <template v-slot:item.frontmatter.level="{ item }">
              <span v-if="item.frontmatter.level == 0">Tour de magie</span>
              <span v-else>{{ item.frontmatter.level }}</span>
            </template>

            <template v-slot:item.frontmatter.concentration="{ item }">
              <span v-if="item.frontmatter.concentration">concentration</span>
            </template>

            <template v-slot:item.frontmatter.ritual="{ item }">
              <span v-if="item.frontmatter.ritual">rituel</span>
            </template>

            <template v-slot:item.frontmatter.components="{ item }">
              <template v-if="item.frontmatter.components">
                <template v-if="item.frontmatter.components.verbal">V</template><template v-if="item.frontmatter.components.verbal && (item.frontmatter.components.somatic || item.frontmatter.components.material)">,</template>
                <template v-if="item.frontmatter.components.somatic">S</template><template v-if="item.frontmatter.components.somatic && item.frontmatter.components.material">,</template>
                <template v-if="item.frontmatter.components.material">M</template>
              </template>
            </template>

            <template v-slot:item.actions="{ item }">
              <v-btn class="d-print-none mr-2" small depressed icon @click.stop="openSpellDetails(item)"><v-icon>mdi-eye</v-icon></v-btn>
              <v-btn class="d-print-none mr-2" small depressed link icon :to="{ path: '/creation-de-sort/', query: { key: item.key } }"><v-icon>mdi-pencil</v-icon></v-btn>
              <v-btn color="error" class="d-print-none" small depressed icon @click="$store.commit('mySpells/removeSpell', item)"><v-icon>mdi-delete</v-icon></v-btn>
            </template>

          </v-data-table>
        </div>
        <div class="d-none d-print-block">
          <template v-for="(n, level) in 9" v-if="hasSpellOfLevel(level)">
            <h2 v-if="level == 0">Tours de magie</h2>
            <h2 v-else>Sorts de niveau {{ level }}</h2>
            <div class="column-count-2">
              <div v-for="spell in spells">
                <template v-if="spell.frontmatter.level == level">
                  <h3 class="d-flex align-center title">
                    <div class="mr-4">{{ spell.title }}</div>
                    <v-btn class="d-print-none mr-2" small depressed link :to="{ path: '/creation-de-sort/', query: { key: spell.key } }"><v-icon left>mdi-pencil</v-icon> Modifier</v-btn>
                    <v-btn color="error" class="d-print-none" small depressed @click="$store.commit('mySpells/removeSpell', spell)"><v-icon left>mdi-delete</v-icon> Supprimer</v-btn>
                  </h3>
                  <Spell :spell="spell" :isList="true" :hideTitle="true" />
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
      <template v-else>
        Vous n'avez écrit aucun sort dans votre grimoire.
      </template>
    </div>

  </main>
</template>

<script>
import Spell from '@theme/components/Spell'
import SpellCard from '@theme/components/SpellCard'

export default {
  name: 'MySpells',

  components: {
    Spell,
    SpellCard
  },

  data () {
    return {
      sortBy: 'frontmatter.level',
      sortDesc: false,
      headers: [
        { text: "Nom", align: 'start', sortable: false, value: 'title' },
        { text: "Niveau", align: 'center', sortable: false, value: 'frontmatter.level' },
        { text: "École", align: 'start', sortable: false, value: 'frontmatter.school' },
        { text: "Temps d'incantation", align: 'start', sortable: false, value: 'frontmatter.casting_time' },
        { text: "Durée", align: 'start', sortable: false, value: 'frontmatter.duration' },
        { text: "Concentration", align: 'center', sortable: false, value: 'frontmatter.concentration' },
        { text: "Rituel", align: 'center', sortable: false, value: 'frontmatter.ritual' },
        { text: "Composantes", align: 'center', sortable: false, value: 'frontmatter.components' },
        { text: "", align: 'center', sortable: false, value: 'actions' },
      ],
      spellCard: false,
      selectedSpell: null
    }
  },

  computed: {
    spells () {
      return this.$store.state.mySpells.spells
    },
    spellSlots: {
      get () {
        return this.$store.state.mySpells.spellSlots
      },
      set (value) {
        this.$store.commit('mySpells/setSpells', value)
      }
    }
  },

  methods: {
    displayLevel (level) {
      if (level == 0 || level == "0") {
        return 'Tours de magie'
      } else {
        return 'Sorts de niveau ' + level
      }
    },
    onInputSpellSlots () {
      this.$store.commit('mySpells/setSpellSlots', this.spellSlots)
    },
    openSpellDetails (spell) {
      this.selectedSpell = spell
      this.spellCard = true
    },
    hasSpellOfLevel (level) {
      for (let spell of this.spells) {
        if (spell.frontmatter.level == level) {
          return true
        }
      }
      return false
    }
  },
}
</script>

<style lang="scss">
@import "../styles/colors";
.group-header {
  background-color: $color-dragon;
  color: #fff;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
