<template>
  <div class="my-monsters">
    <div class="d-flex align-center mb-4 d-print-none">
      <Breadcrumb class="mr-auto" />
      <v-btn color="primary" class="mr-4" depressed link to="/creation-de-monstre-pnj/"><v-icon left>mdi-plus</v-icon> Créer un monstre</v-btn>
      <v-btn color="primary" depressed link to="/bestiaire/">Bestiaire</v-btn>
    </div>

    <h1>Mon bestiaire</h1>

    <div class="my-4 d-flex flex-wrap d-print-none">
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed @click="print"><v-icon>mdi-printer</v-icon> Imprimer</v-btn>
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed @click="download"><v-icon>mdi-file-download</v-icon> Sauvegarder</v-btn>
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed :loading="isUploading" @click="onUploadClick">
        <v-icon left>mdi-file-upload</v-icon> Charger
      </v-btn>
      <input ref="uploader" class="d-none" type="file" @change="upload">
      <v-btn outlined color="error" class="mb-1" depressed @click="$store.commit('myMonsters/resetMonsters')"><v-icon>mdi-delete</v-icon> Effacer le bestiaire</v-btn>
    </div>

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
      isUploading: false
    }
  },

  methods: {
    download () {
      saveAs(new Blob([JSON.stringify(this.$store.state.myMonsters.monsters)], {
          type: "text/plain;charset=utf-8"
      }), "bestiaire.json")
    },

    upload (e) {
      let file = e.target.files[0]
      let reader = new FileReader()
      let self = this

      reader.onload = function() {
        let result = JSON.parse(reader.result)
        let isValid = true
        if (result.length >= 1) {
          for (var s of result) {
            if (s.pid !== 'monster') {
              isValid = false
            }
          }
        }
        if (isValid) {
          self.$store.commit('myMonsters/setMonsters', result)
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
