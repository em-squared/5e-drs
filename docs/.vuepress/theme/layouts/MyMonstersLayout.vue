<template>
  <div class="my-monsters">
    <div class="d-flex align-center mb-4 d-print-none">
      <Breadcrumb class="mr-auto" />
      <v-btn :outlined="!$store.state.l5r" color="primary" class="mr-4" depressed @click="$store.commit('setL5r', !$store.state.l5r)"><span class="orn">8</span> Règles cinq royaumes</v-btn>
      <v-btn color="primary" class="mr-4" depressed link to="/creation-de-monstre-pnj/"><v-icon left>mdi-plus</v-icon> Créer un monstre</v-btn>
      <v-btn color="primary" depressed link to="/bestiaire/">Bestiaire</v-btn>
    </div>

    <h1>Mon bestiaire</h1>

    <div class="my-4 d-flex flex-wrap d-print-none">
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed @click="print" :disabled="$store.state.myMonsters.monsters.length <= 0"><v-icon>mdi-printer</v-icon> Imprimer</v-btn>
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed @click="download" :disabled="$store.state.myMonsters.monsters.length <= 0"><v-icon>mdi-file-download</v-icon> Sauvegarder</v-btn>
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed :loading="isUploading" @click="onUploadClick">
        <v-icon left>mdi-file-upload</v-icon> Charger
      </v-btn>
      <input ref="uploader" class="d-none" type="file" @change="upload">
      <v-btn outlined color="error" class="mb-1" depressed @click.stop="confirmDeleteDialog = true" :disabled="$store.state.myMonsters.monsters.length <= 0"><v-icon>mdi-delete</v-icon> Effacer le bestiaire</v-btn>
    </div>

    <v-dialog v-model="confirmDeleteDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Supprimer le bestiaire</v-card-title>

        <v-card-text>
          Cette action supprimera tous les monstres ajoutés à votre bestiaire, y compris les monstres que vous avez créés. Souhaitez vous les supprimer ?
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

    <MyMonsters />
  </div>
</template>

<script>
import Breadcrumb from '@theme/components/Breadcrumb'
import MyMonsters from '@theme/components/MyMonsters'
import { saveAs } from 'file-saver'

export default {
  name: 'MyMonstersLayout',

  components: {
    Breadcrumb,
    MyMonsters
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
      saveAs(new Blob([JSON.stringify(this.$store.state.myMonsters)], {
          type: "text/plain;charset=utf-8"
      }), "bestiaire.json")
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
        if (result.monsters && result.monsters.length >= 1) {
          for (var s of result.monsters) {
            if (s.pid !== 'monster') {
              isValid = false
            }
          }
        } else {
          isValid = false
        }
        if (isValid) {
          self.$store.commit('myMonsters/setMonsters', result.monsters)
          if (result.notPrintedMonsters) {
            self.$store.commit('myMonsters/setNotPrintedMonsters', result.notPrintedMonsters)
          }
          self.$store.commit('setSnackbarText', self.$store.state.myMonsters.monsters.length + " monstres inscrits dans votre bestiaire")
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
      this.$store.commit('myMonsters/resetMonsters')
      this.confirmDeleteDialog = false
      this.$store.commit('setSnackbarText', "Votre bestiaire a été effacé")
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
