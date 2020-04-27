<template>
  <div class="create-spell">
    <div class="d-flex flex-wrap align-center d-print-none">
      <Breadcrumb class="mr-auto mb-4" />
      <div class="d-flex flex-wrap align-center">
        <v-btn color="primary" class="mr-4 mb-4" depressed link to="/mon-grimoire/">Mon Grimoire</v-btn>
        <v-btn color="primary" class="mb-4" depressed link to="/grimoire/">Grimoire</v-btn>
      </div>
    </div>

    <h1 class="d-print-none">Création de sort</h1>

    <div class="my-4 d-flex flex-wrap d-print-none">
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed @click="print"><v-icon>mdi-printer</v-icon> Imprimer</v-btn>
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed @click="download"><v-icon>mdi-file-download</v-icon> Sauvegarder</v-btn>
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed :loading="isUploading" @click="onUploadClick">
        <v-icon left>mdi-file-upload</v-icon> Charger
      </v-btn>
      <input ref="uploader" class="d-none" type="file" @change="upload">
      <v-btn :outlined="!isSpellInSpellBook" color="accent" class="mr-1 mb-1" depressed @click="toggleSpellInSpellBook"><v-icon>mdi-book</v-icon> {{ displayToggleSpellButton }}</v-btn>
      <v-btn :disabled="!isSpellInSpellBook" outlined color="accent" class="mr-1 mb-1" depressed @click="updateSpellInSpellBook"><v-icon>mdi-update</v-icon> MàJ dans le grimoire</v-btn>
      <v-btn outlined color="error" class="mb-1" depressed @click="reset"><v-icon>mdi-eraser</v-icon> Réinitialiser</v-btn>
    </div>

    <v-row>
      <v-col class="d-print-none" :cols="12" :md="6">

        <v-row>
          <v-col :cols="12" :lg="3">
            <v-text-field label="Nom" placeholder="Projectile magique" outlined dense v-model="spell.title"></v-text-field>
          </v-col>
          <v-col :cols="12" :sm="4" :lg="3">
            <v-select :items="schools" label="École" outlined dense v-model="spell.frontmatter.school"></v-select>
          </v-col>
          <v-col :cols="12" :sm="4" :lg="3">
            <v-select :items="levels" item-text="label" item-value="value" label="Niveau" outlined dense v-model="spell.frontmatter.level"></v-select>
          </v-col>
          <v-col v:cols="12" :sm="4" :lg="3">
            <v-switch class="my-0" v-model="spell.frontmatter.ritual" label="Rituel" dense></v-switch>
          </v-col>
        </v-row>

        <v-row>
          <v-col :cols="12" :sm="6" :lg="3">
            <v-text-field label="Temps d'incantation" placeholder="1 action" outlined dense v-model="spell.frontmatter.casting_time"></v-text-field>
          </v-col>
          <v-col :cols="12" :sm="6" :lg="3">
            <v-text-field label="Portée" placeholder="36 m" outlined dense v-model="spell.frontmatter.range"></v-text-field>
          </v-col>
          <v-col :cols="12" :sm="6" :lg="3">
            <v-text-field label="Durée" placeholder="instantanée" outlined dense v-model="spell.frontmatter.duration"></v-text-field>
          </v-col>
          <v-col :cols="12" :sm="6" :lg="3">
            <v-switch class="my-0" v-model="spell.frontmatter.concentration" label="Concentration" dense></v-switch>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-switch class="my-0" v-model="spell.frontmatter.components.verbal" label="Verbale" dense></v-switch>
          </v-col>
          <v-col>
            <v-switch class="my-0" v-model="spell.frontmatter.components.somatic" label="Somatique" dense></v-switch>
          </v-col>
          <v-col>
            <v-switch class="my-0" v-model="spell.frontmatter.components.material" label="Matérielle" dense></v-switch>
          </v-col>
          <v-col v-if="spell.frontmatter.components.material">
            <v-text-field label="Composantes matérielles" outlined dense v-model="spell.frontmatter.components.materials"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-select :items="classes" multiple clearable label="Disponible pour les classes de :" outlined dense v-model="spell.frontmatter.classes"></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field label="Classes personnalisées" placeholder="Forgesort" outlined dense v-model="spell.frontmatter.customClasses"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field outlined label="Résumé" v-model="spell.frontmatter.description"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-textarea outlined label="Description" v-model="spell.content"></v-textarea>
          </v-col>
        </v-row>

      </v-col>

      <v-col :cols="12" :md="6">
        <Spell :spell="spell" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Breadcrumb from '@theme/components/Breadcrumb'
import Spell from '@theme/components/Spell'
import { saveAs } from 'file-saver'
import { CLASSES } from '../../data/classes'
import { SPELLSCHOOLS, SPELLLEVELS } from '../../data/spells'
import { getUrlParameter } from '@theme/util/filterHelpers'

export default {
  name: 'CreateSpellLayout',

  components: {
    Breadcrumb,
    Spell
  },

  computed: {
    isSpellInSpellBook () {
      let isInSpellBook = false
      for (let s of this.$store.state.mySpells.spells) {
        if (s.key == this.spell.key) {
          isInSpellBook = true
        }
      }
      return isInSpellBook
    },

    displayToggleSpellButton () {
      if (this.isSpellInSpellBook) {
        return 'Supprimer de mon grimoire'
      }
      return 'Ajouter à mon grimoire'
    }
  },

  data () {
    return {
      isUploading: false,
      schools: SPELLSCHOOLS,
      levels: SPELLLEVELS,
      classes: CLASSES,
      spell: {
        custom: true,
        pid: 'spell',
        key: null,
        title: '',
        content: '',
        frontmatter: {
          description: '',
          classes: '',
          customClasses: '',
          school: '',
          level: '',
          ritual: false,
          casting_time: '',
          range: '',
          duration: '',
          concentration: false,
          components: {
            verbal: false,
            somatic: false,
            material: false,
            materials: null
          }
        }
      }
    }
  },

  methods: {
    download () {
      saveAs(new Blob([JSON.stringify(this.spell)], {
          type: "text/plain;charset=utf-8"
      }), "sort.json")
    },

    upload (e) {
      let file = e.target.files[0]
      let reader = new FileReader()
      let self = this

      reader.onload = function() {
        let result = JSON.parse(reader.result)
        if (result.pid == 'spell') {
          self.spell = result
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
    },

    toggleSpellInSpellBook () {
      if (this.isSpellInSpellBook) {
        this.$store.commit('mySpells/removeSpell', this.spell)
      } else {
        this.$store.commit('mySpells/addSpell', this.spell)
      }
    },

    updateSpellInSpellBook () {
      if (this.isSpellInSpellBook) {
        this.$store.commit('mySpells/updateSpell', this.spell)
      }
    },

    reset () {
      this.spell = {
        custom: true,
        pid: 'spell',
        key: Math.random().toString(36).substr(2, 9),
        title: '',
        content: '',
        frontmatter: {
          description: '',
          classes: '',
          customClasses: '',
          school: '',
          level: '',
          ritual: false,
          casting_time: '',
          range: '',
          duration: '',
          concentration: false,
          components: {
            verbal: false,
            somatic: false,
            material: false,
            materials: null
          }
        }
      }
    }
  },

  mounted () {
    this.$store.commit('setHasRightDrawer', false)
    this.$store.commit('setRightDrawer', this.$vuetify.breakpoint.lgAndUp)
    this.$store.commit('setInRightDrawer', null)

    let spellKey = getUrlParameter(window.location.href, "key")

    if (spellKey) {
      for (let spell of this.$store.state.mySpells.spells) {
        if (spell.key == spellKey) {
          this.spell = spell
          if (!this.spell.custom) {
            this.spell.content = spell.rawContent
            this.spell.custom = true
          }
        }
      }
    } else {
      this.spell.key = Math.random().toString(36).substr(2, 9)
    }
  }
}
</script>

<style>
</style>
