<template>
  <div class="create-magic-item">
    <div class="d-flex flex-wrap align-center d-print-none">
      <Breadcrumb class="mr-auto mb-4" />
      <div class="d-flex flex-wrap align-center">
        <MyMagicItemsButton class="mr-4" />
        <v-btn color="primary" class="mb-4" depressed link to="/liste-objets-magiques/">Liste des objets magiques</v-btn>
      </div>
    </div>

    <h1 class="d-print-none">Création d'objet magique</h1>

    <div class="my-4 d-flex flex-wrap d-print-none">
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed @click="print"><v-icon>mdi-printer</v-icon> Imprimer</v-btn>
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed @click="download"><v-icon>mdi-file-download</v-icon> Sauvegarder</v-btn>
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed :loading="isUploading" @click="onUploadClick">
        <v-icon left>mdi-file-upload</v-icon> Charger
      </v-btn>
      <input ref="uploader" class="d-none" type="file" @change="upload">
      <v-btn :outlined="!isMagicItemInTreasureChest" color="accent" class="mr-1 mb-1" depressed @click="toggleMagicItemInTreasureChest"><v-icon>mdi-book</v-icon> {{ displayToggleMagicItemButton }}</v-btn>
      <v-btn :disabled="!isMagicItemInTreasureChest" outlined color="accent" class="mr-1 mb-1" depressed @click="updateMagicItemInTreasureChest"><v-icon>mdi-update</v-icon> MàJ dans le grimoire</v-btn>
      <v-btn outlined color="error" class="mr-1 mb-1" depressed @click="reset"><v-icon>mdi-eraser</v-icon> Réinitialiser</v-btn>
      <v-btn outlined class="mb-1" depressed @click="share"><v-icon left>mdi-share-variant</v-icon> Partager</v-btn>
    </div>

    <v-row>
      <v-col class="d-print-none" :cols="12" :md="6">

        <v-row>
          <v-col :cols="12" :sm="4">
            <v-text-field label="Nom" outlined dense v-model="magicItem.title"></v-text-field>
          </v-col>
          <v-col :cols="12" :sm="4">
            <v-select :items="types" label="Type" outlined dense v-model="magicItem.frontmatter.type"></v-select>
          </v-col>
          <v-col :cols="12" :sm="4">
            <v-select :items="rarities" label="Rareté" outlined dense v-model="magicItem.frontmatter.rarity"></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field label="Sous-type" outlined dense v-model="magicItem.frontmatter.subtype"></v-text-field>
          </v-col>
          <v-col>
            <v-switch class="my-0" v-model="magicItem.hasAttunement" label="Harmonisation" @change="switchAttunement" dense></v-switch>
          </v-col>
          <v-col v-if="magicItem.hasAttunement">
            <v-text-field label="Type d'armonisation" outlined dense v-model="magicItem.frontmatter.attunement"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-textarea outlined label="Description" v-model="magicItem.content" hide-details></v-textarea>
            <MarkdownDoc />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field outlined label="Auteur" v-model="magicItem.author"></v-text-field>
          </v-col>
        </v-row>

      </v-col>

      <v-col :col="6">
        <MagicItem :magicItem="magicItem" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Breadcrumb from '@theme/components/Breadcrumb'
import MagicItem from '@theme/components/MagicItem'
import MarkdownDoc from '@theme/components/MarkdownDoc'
import { saveAs } from 'file-saver'
import { MAGICITEMTYPES, RARITIES } from '../../data/magicItems'
import { getUrlParameter } from '@theme/util/filterHelpers'
import { encode } from '@theme/util/homebrew'
import slugify from 'slugify'
slugify.extend({"'": '-'})

export default {
  name: 'CreateMagicItemLayout',

  components: {
    Breadcrumb,
    MagicItem,
    MarkdownDoc
  },

  computed: {
    isMagicItemInTreasureChest () {
      let isInTreasureChest = false
      for (let s of this.$store.state.myMagicItems.magicItems) {
        if (s.key == this.magicItem.key) {
          isInTreasureChest = true
        }
      }
      return isInTreasureChest
    },

    displayToggleMagicItemButton () {
      if (this.isMagicItemInTreasureChest) {
        return 'Supprimer de mes objets magiques'
      }
      return 'Ajouter à mes objets magiques'
    },

    displayAttunement () {
      if (this.customAttunement !== "") {
        return this.customAttunement
      } else {
        return 'harmonisation requise'
      }
    }
  },

  data () {
    return {
      isUploading: false,
      types: MAGICITEMTYPES,
      rarities: RARITIES,
      customAttunement: '',
      magicItem: {
        custom: true,
        pid: 'magicitem',
        key: null,
        author: '',
        title: '',
        content: '',
        hasAttunement: false,
        frontmatter: {
          type: '',
          subtype: '',
          rarity: '',
          attunement: '',
        }
      }
    }
  },

  methods: {
    download () {
      let filename = "objet-magique.json"
      if (this.magicItem.title !== '') {
        filename = slugify(this.magicItem.title, {lower: true, strict: true}) + '.json'
      }
      saveAs(new Blob([JSON.stringify(this.magicItem)], {
          type: "text/plain;charset=utf-8"
      }), filename)
    },

    upload (e) {
      let file = e.target.files[0]
      if (!file) {
        return
      }
      let reader = new FileReader()
      let self = this

      reader.onload = function() {
        let result = JSON.parse(reader.result)
        if (result.pid == 'magicitem') {
          self.magicItem = result
          self.$store.commit('setSnackbarText', "L'objet magique " + self.magicItem.title + " a été chargé")
          self.$store.commit('setIsOpenSnackbar', true)
        } else {
          self.$store.commit('setSnackbarText', "Le fichier est invalide")
          self.$store.commit('setIsOpenSnackbar', true)
        }
      }

      reader.readAsText(file)
      this.$refs.uploader.value = ''
    },

    onUploadClick () {
      this.isUploading = true
      window.addEventListener('focus', () => {
        this.isUploading = false
      }, { once: true })

      this.$refs.uploader.click()
    },

    print () {
      window.print()
    },

    toggleMagicItemInTreasureChest () {
      if (this.isMagicItemInTreasureChest) {
        this.$store.commit('myMagicItems/removeMagicItem', this.magicItem)
        this.$store.commit('setSnackbarText', "L'objet magique " + this.magicItem.title + " a été supprimé de votre bibliothèque")
        this.$store.commit('setIsOpenSnackbar', true)
      } else {
        this.$store.commit('myMagicItems/addMagicItem', this.magicItem)
        this.$store.commit('setSnackbarText', "L'objet magique " + this.magicItem.title + " a été ajouté à votre bibliothèque")
        this.$store.commit('setIsOpenSnackbar', true)
      }
    },

    updateMagicItemInTreasureChest () {
      if (this.isMagicItemInTreasureChest) {
        this.$store.commit('myMagicItems/updateMagicItem', this.magicItem)
        this.$store.commit('setSnackbarText', "L'objet magique a été mis à jour dans votre bibliothèque")
        this.$store.commit('setIsOpenSnackbar', true)
      }
    },

    switchAttunement () {
      if (this.magicItem.hasAttunement) {
        this.magicItem.frontmatter.attunement = "harmonisation requise"
      } else {
        this.magicItem.frontmatter.attunement = ""
      }
    },

    reset () {
      this.customAttunement = '',
      this.magicItem = {
        custom: true,
        pid: 'magicItem',
        key: Math.random().toString(36).substr(2, 9),
        author: '',
        title: '',
        content: '',
        hasAttunement: false,
        frontmatter: {
          type: '',
          subtype: '',
          rarity: '',
          attunement: '',
        }
      }
    },

    share () {
      this.$store.commit('setShareURI', encode(this.magicItem))
      this.$store.commit('setIsOpenShareHomebrewDialog', true)
    }
  },

  mounted () {
    this.$store.commit('setHasRightDrawer', false)
    this.$store.commit('setRightDrawer', this.$vuetify.breakpoint.lgAndUp)
    this.$store.commit('setInRightDrawer', null)

    this.$page.title = "Création d'objet magique"

    let magicItemKey = getUrlParameter(window.location.href, "key")

    if (magicItemKey) {
      for (let magicItem of this.$store.state.myMagicItems.magicItems) {
        if (magicItem.key == magicItemKey) {
          this.magicItem = magicItem
          if (!this.magicItem.custom) {
            this.magicItem.content = magicItem.rawContent
            this.magicItem.custom = true
          }
        }
      }
    } else {
      this.magicItem.key = Math.random().toString(36).substr(2, 9)
    }
  }
}
</script>

<style>
</style>
