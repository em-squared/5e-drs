<template>
<div class="homebrew">
  <div class="text-center" v-if="brew === null">
    
  </div>

  <div class="spell" v-else-if="brew.pid && brew.pid == 'spell'">
    <div class="d-flex flex-wrap align-center d-print-none">
      <v-spacer />
      <div class="d-flex flex-wrap align-center">
        <v-btn outlined class="mr-4 mb-4" depressed @click="share"><v-icon left>mdi-share-variant</v-icon> Partager</v-btn>
        <v-btn color="primary" class="mr-4 mb-4" depressed link to="/creation-de-sort/"><v-icon left>mdi-plus</v-icon> Créer un sort</v-btn>
        <v-btn :outlined="!isSpellInSpellBook" color="accent" class="mr-4 mb-4" depressed @click="toggleSpellInSpellBook"><v-icon>mdi-book</v-icon> {{ displayToggleSpellButton }}</v-btn>
        <MySpellsButton />
      </div>
    </div>
    <Spell :spell="brew" />
  </div>

  <div class="monster" v-else-if="brew.pid && brew.pid == 'monster'">
    <div class="d-flex flex-wrap align-center d-print-none">
      <v-spacer />
      <div class="d-flex flex-wrap align-center">
        <v-btn outlined class="mr-4 mb-4" depressed @click="share"><v-icon left>mdi-share-variant</v-icon> Partager</v-btn>
        <v-btn :outlined="!$store.state.l5r" color="primary" class="mr-4 mb-4" depressed @click="$store.commit('setL5r', !$store.state.l5r)"><span class="orn">8</span> Règles cinq royaumes</v-btn>
        <v-btn color="primary" class="mr-4 mb-4" depressed link to="/creation-de-monstre-pnj/"><v-icon left>mdi-plus</v-icon> Créer un monstre/PNJ</v-btn>
        <v-btn :outlined="!isMonsterInBestiary" color="accent" class="mr-4 mb-4" depressed @click="toggleMonsterInBestiary"><v-icon>mdi-book</v-icon> {{ displayToggleMonsterButton }}</v-btn>
        <MyMonstersButton />
      </div>
    </div>
    <Monster :monster="brew" />
  </div>

  <div class="magic-item" v-else-if="brew.pid && brew.pid == 'magicitem'">
    <div class="d-flex flex-wrap align-center d-print-none">
      <v-spacer />
      <div class="d-flex flex-wrap align-center">
        <v-btn outlined class="mr-4 mb-4" depressed @click="share"><v-icon left>mdi-share-variant</v-icon> Partager</v-btn>
        <v-btn color="primary" class="mr-4 mb-4" depressed link to="/creation-d-objet-magique/"><v-icon left>mdi-plus</v-icon> Créer un objet magique</v-btn>
        <v-btn :outlined="!isMagicItemInTreasureChest" color="accent" class="mr-4 mb-4" depressed @click="toggleMagicItemInTreasureChest"><v-icon>mdi-book</v-icon> {{ displayToggleMagicItemButton }}</v-btn>
        <MyMagicItemsButton />
      </div>
    </div>
    <MagicItem :magicItem="brew" />
  </div>

</div>
</template>

<script>
import { decode } from '@theme/util/homebrew'
import { isResourceInLibrary } from '@theme/util'
import Spell from '@theme/components/Spell'
import Monster from '@theme/components/Monster'
import MagicItem from '@theme/components/MagicItem'
import MySpellsButton from '@theme/global-components/MySpellsButton'
import MyMonstersButton from '@theme/global-components/MyMonstersButton'
import MyMagicItemsButton from '@theme/global-components/MyMagicItemsButton'

export default {
  components: {
    Spell,
    Monster,
    MagicItem,
    MySpellsButton,
    MyMonstersButton,
    MyMagicItemsButton
  },

  data () {
    return {
      brew: null
    }
  },

  mounted () {
    let brew64 = this.$route.query.h
    if (brew64) {
      this.brew = decode(brew64)
    }
  },

  computed: {
    isSpellInSpellBook () {
      return isResourceInLibrary(this.brew, this.$store.state.mySpells.spells)
    },

    displayToggleSpellButton () {
      if (this.isSpellInSpellBook) {
        return 'Supprimer de mon grimoire'
      }
      return 'Ajouter à mon grimoire'
    },

    isMonsterInBestiary () {
      return isResourceInLibrary(this.brew, this.$store.state.myMonsters.monsters)
    },

    displayToggleMonsterButton () {
      if (this.isMonsterInBestiary) {
        return 'Supprimer de mon bestiaire'
      }
      return 'Ajouter à mon bestiaire'
    },

    isMagicItemInTreasureChest () {
      return isResourceInLibrary(this.brew, this.$store.state.myMagicItems.magicItems)
    },

    displayToggleMagicItemButton () {
      if (this.isMagicItemInTreasureChest) {
        return 'Supprimer de mes objets magiques'
      }
      return 'Ajouter à mes objets magiques'
    }
  },

  methods: {
    share () {
      this.$store.commit('setShareURI', this.$route.query.h)
      this.$store.commit('setIsOpenShareHomebrewDialog', true)
    },

    toggleSpellInSpellBook () {
      if (this.isSpellInSpellBook) {
        this.$store.commit('mySpells/removeSpell', this.brew)
        this.$store.commit('setSnackbarText', "Le sort " + this.brew.title + " a été supprimé de votre grimoire")
        this.$store.commit('setIsOpenSnackbar', true)
      } else {
        this.$store.commit('mySpells/addSpell', this.brew)
        this.$store.commit('setSnackbarText', "Le sort " + this.brew.title + " a été ajouté à votre grimoire")
        this.$store.commit('setIsOpenSnackbar', true)
      }
    },

    toggleMonsterInBestiary () {
      if (this.isMonsterInBestiary) {
        this.$store.commit('myMonsters/removeMonster', this.brew)
        this.$store.commit('setSnackbarText', "Le monstre " + this.brew.title + " a été supprimé de votre bestiaire")
        this.$store.commit('setIsOpenSnackbar', true)
      } else {
        this.$store.commit('myMonsters/addMonster', this.brew)
        this.$store.commit('setSnackbarText', "Le monstre " + this.brew.title + " a été ajouté à votre bestiaire")
        this.$store.commit('setIsOpenSnackbar', true)
      }
    },

    toggleMagicItemInTreasureChest () {
      if (this.isMagicItemInTreasureChest) {
        this.$store.commit('myMagicItems/removeMagicItem', this.brew)
        this.$store.commit('setSnackbarText', "L'objet magique " + this.brew.title + " a été supprimé de votre bibliothèque")
        this.$store.commit('setIsOpenSnackbar', true)
      } else {
        this.$store.commit('myMagicItems/addMagicItem', this.brew)
        this.$store.commit('setSnackbarText', "L'objet magique " + this.brew.title + " a été ajouté à votre bibliothèque")
        this.$store.commit('setIsOpenSnackbar', true)
      }
    }
  },
}
</script>

<style lang="scss">
</style>
