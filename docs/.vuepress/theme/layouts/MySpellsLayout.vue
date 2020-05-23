<template>
  <div class="my-spells">
    <div class="d-flex flex-wrap align-center d-print-none">
      <Breadcrumb class="mr-auto mb-4" />
      <div class="d-flex flex-wrap align-center">
        <v-btn color="primary" class="mr-4 mb-4" depressed link to="/creation-de-sort/"><v-icon left>mdi-plus</v-icon> Créer un sort</v-btn>
        <v-btn color="primary" class="mb-4" depressed link to="/grimoire/">Grimoire</v-btn>
      </div>
    </div>

    <h1>Mon grimoire</h1>

    <div class="my-4 d-flex flex-wrap d-print-none">
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed @click="print" :disabled="$store.state.mySpells.spells.length <= 0"><v-icon>mdi-printer</v-icon> Imprimer</v-btn>
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed @click="download" :disabled="$store.state.mySpells.spells.length <= 0"><v-icon>mdi-file-download</v-icon> Sauvegarder</v-btn>
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed :loading="isUploading" @click="onUploadClick">
        <v-icon left>mdi-file-upload</v-icon> Charger
      </v-btn>
      <input ref="uploader" class="d-none" type="file" @change="upload">
      <v-btn outlined color="error" class="mb-1" depressed @click.stop="confirmDeleteDialog = true" :disabled="$store.state.mySpells.spells.length <= 0"><v-icon>mdi-delete</v-icon> Effacer le grimoire</v-btn>
    </div>

    <v-dialog v-model="confirmDeleteDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Supprimer le grimoire</v-card-title>

        <v-card-text>
          Cette action supprimera tous les sorts ajoutés à votre grimoire, y compris les sorts que vous avez créés. Souhaitez vous les supprimer ?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn depressed @click="confirmDeleteDialog = false">
            Annuler
          </v-btn>

          <v-btn color="error darken-1" depressed @click="confirmDeletion">
            Supprimer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-alert v-model="alertOpen" :type="alertType" dismissible transition="fade-transition">
      {{ alertText }}
    </v-alert>

    <MySpells />
  </div>
</template>

<script>
import Breadcrumb from '@theme/components/Breadcrumb'
import MySpells from '@theme/components/MySpells'
import { saveAs } from 'file-saver'

export default {
  name: 'MySpellsLayout',

  components: {
    Breadcrumb,
    MySpells
  },

  data () {
    return {
      isUploading: false,
      confirmDeleteDialog: false,
      alertOpen: false,
      alertText: null,
      alertType: "info"
    }
  },

  methods: {
    download () {
      saveAs(new Blob([JSON.stringify(this.$store.state.mySpells)], {
          type: "text/plain;charset=utf-8"
      }), "grimoire.json")
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
        let isValid = true
        if (result.spells && result.spells.length >= 1) {
          for (var s of result.spells) {
            if (s.pid !== 'spell') {
              isValid = false
            }
          }
        } else {
          isValid = false
        }
        if (isValid) {
          self.$store.commit('mySpells/setSpells', result.spells)
          if (result.spellSlots) {
            self.$store.commit('mySpells/setSpellSlots', result.spellSlots)
          }
          if (result.notPrintedSpells) {
            self.$store.commit('mySpells/setNotPrintedSpells', result.notPrintedSpells)
          }
          self.$store.commit('setSnackbarText', self.$store.state.mySpells.spells.length + " sorts inscrits dans votre grimoire")
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

    confirmDeletion () {
      this.$store.commit('mySpells/resetSpells')
      this.confirmDeleteDialog = false
      this.$store.commit('setSnackbarText', "Votre grimoire a été effacé")
      this.$store.commit('setIsOpenSnackbar', true)
    }
  },

  mounted () {
    this.$store.commit('setHasRightDrawer', false)
    this.$store.commit('setRightDrawer', this.$vuetify.breakpoint.lgAndUp)
    this.$store.commit('setInRightDrawer', null)
  }
}
</script>

<style>
</style>
