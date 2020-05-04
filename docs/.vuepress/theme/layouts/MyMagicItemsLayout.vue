<template>
  <div class="my-magic-items">
    <div class="d-flex align-center mb-4 d-print-none">
      <Breadcrumb class="mr-auto" />
      <v-btn color="primary" class="mr-4" depressed link to="/creation-d-objet-magique/"><v-icon left>mdi-plus</v-icon> Créer un objet magique</v-btn>
      <v-btn color="primary" depressed link to="/liste-objets-magiques/">Liste des objets magiques</v-btn>
    </div>

    <h1>Mes objets magiques</h1>

    <div class="my-4 d-flex flex-wrap d-print-none">
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed @click="print"><v-icon>mdi-printer</v-icon> Imprimer</v-btn>
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed @click="download"><v-icon>mdi-file-download</v-icon> Sauvegarder</v-btn>
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed :loading="isUploading" @click="onUploadClick">
        <v-icon left>mdi-file-upload</v-icon> Charger
      </v-btn>
      <input ref="uploader" class="d-none" type="file" @change="upload">
      <v-btn outlined color="error" class="mb-1" depressed @click="$store.commit('myMagicItems/resetMagicItems')"><v-icon>mdi-delete</v-icon> Effacer les objets magiques</v-btn>
    </div>

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
      isUploading: false
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
      let reader = new FileReader()
      let self = this

      reader.onload = function() {
        let result = JSON.parse(reader.result)
        let isValid = true
        if (result.magicItems && result.magicItems.length >= 1) {
          for (var s of result.magicItems) {
            if (s.pid !== 'magicItem') {
              isValid = false
            }
          }
        }
        if (isValid) {
          self.$store.commit('myMagicItems/setMagicItems', result.magicItems)
          if (result.notPrintedMagicItems) {
            self.$store.commit('myMagicItems/setNotPrintedMagicItems', result.notPrintedMagicItems)
          }
        }
      }

      reader.readAsText(file)
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
