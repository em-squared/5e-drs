<template>
  <div class="my-magic-items">
    <div class="d-flex align-center mb-4 d-print-none">
      <Breadcrumb class="mr-auto" />
      <v-btn color="primary" class="mr-4" depressed link to="/creation-d-objet-magique/"><v-icon left>mdi-plus</v-icon> Créer un objet magique</v-btn>
      <v-btn color="primary" depressed link to="/liste-objets-magiques/">Liste des objets magiques</v-btn>
    </div>

    <h1>Mes objets magiques</h1>

    <div class="my-4 d-flex flex-wrap d-print-none">
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed @click="print" :disabled="$store.state.myMagicItems.magicItems.length <= 0"><v-icon>mdi-printer</v-icon> Imprimer</v-btn>
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed @click="download" :disabled="$store.state.myMagicItems.magicItems.length <= 0"><v-icon>mdi-file-download</v-icon> Sauvegarder</v-btn>
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed :loading="isUploading" @click="onUploadClick">
        <v-icon left>mdi-file-upload</v-icon> Charger
      </v-btn>
      <input ref="uploader" class="d-none" type="file" @change="upload">
      <v-btn outlined color="error" class="mb-1" depressed @click.stop="confirmDeleteDialog = true" :disabled="$store.state.myMagicItems.magicItems.length <= 0"><v-icon>mdi-delete</v-icon> Effacer les objets magiques</v-btn>
    </div>

    <v-dialog v-model="confirmDeleteDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Supprimer les objets magiques</v-card-title>

        <v-card-text>
          Cette action supprimera tous les objets magiques ajoutés à votre bibliothèque, y compris les objets magiques que vous avez créés. Souhaitez vous les supprimer ?
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

    <MyMagicItems />
  </div>
</template>

<script>
import Breadcrumb from '@theme/components/Breadcrumb'
import MyMagicItems from '@theme/components/MyMagicItems'
import { saveAs } from 'file-saver'

export default {
  name: 'MyMagicItemsLayout',

  components: {
    Breadcrumb,
    MyMagicItems
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
      saveAs(new Blob([JSON.stringify(this.$store.state.myMagicItems)], {
          type: "text/plain;charset=utf-8"
      }), "objets-magiques.json")
    },

    upload (e) {
      let file = e.target.files[0]
      console.log(file)
      if (!file) {
        return
      }
      let reader = new FileReader()
      let self = this

      reader.onload = function() {
        let result = JSON.parse(reader.result)
        let isValid = true
        if (result.magicItems && result.magicItems.length >= 1) {
          for (var s of result.magicItems) {
            if (s.pid !== 'magicitem') {
              isValid = false
            }
          }
        } else {
          isValid = false
        }
        if (isValid) {
          self.$store.commit('myMagicItems/setMagicItems', result.magicItems)
          if (result.notPrintedMagicItems) {
            self.$store.commit('myMagicItems/setNotPrintedMagicItems', result.notPrintedMagicItems)
          }
          self.$store.commit('setSnackbarText', self.$store.state.myMagicItems.magicItems.length + " objets magiques inscrits dans votre bibliothèque")
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
      this.$store.commit('myMagicItems/resetMagicItems')
      this.confirmDeleteDialog = false
      this.$store.commit('setSnackbarText', "Votre bibliothèque d'objets magiques a été effacée")
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
