<template>
  <div class="create-monster">
    <div class="d-flex flex-wrap align-center d-print-none">
      <Breadcrumb class="mr-auto mb-4" />
      <div class="d-flex flex-wrap align-center">
        <v-btn :outlined="!$store.state.l5r" color="primary" class="mr-4 mb-4" depressed @click="$store.commit('setL5r', !$store.state.l5r)"><span class="orn">8</span> Règles cinq royaumes</v-btn>
        <MyMonstersButton class="mr-4" />
        <v-btn color="primary" class="mb-4" depressed link to="/bestiaire/">Bestiaire</v-btn>
      </div>
    </div>

    <h1 class="d-print-none">Création de monstre/PNJ</h1>

    <div class="my-4 d-flex flex-wrap d-print-none">
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed @click="print"><v-icon>mdi-printer</v-icon> Imprimer</v-btn>
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed @click="download"><v-icon>mdi-file-download</v-icon> Sauvegarder</v-btn>
      <v-btn outlined color="accent" class="mr-1 mb-1" depressed :loading="isUploading" @click="onUploadClick">
        <v-icon left>mdi-file-upload</v-icon> Charger
      </v-btn>
      <input ref="uploader" class="d-none" type="file" @change="upload">
      <v-btn :outlined="!isMonsterInBestiary" color="accent" class="mr-1 mb-1" depressed @click="toggleMonsterInBestiary"><v-icon>mdi-book</v-icon> {{ displayToggleMonsterButton }}</v-btn>
      <v-btn :disabled="!isMonsterInBestiary" outlined color="accent" class="mr-1 mb-1" depressed @click="updateMonsterInBestiary"><v-icon>mdi-update</v-icon> MàJ dans le bestiaire</v-btn>
      <v-btn outlined color="error" class="mr-1 mb-1" depressed @click="reset"><v-icon>mdi-eraser</v-icon> Réinitialiser</v-btn>
      <v-btn outlined class="mb-1" depressed @click="share"><v-icon left>mdi-share-variant</v-icon> Partager</v-btn>
    </div>

    <v-row>
      <v-col class="d-print-none" :cols="12" :md="6">

        <v-row>
          <v-col :cols="12" :sm="4">
            <v-text-field label="Nom" placeholder="Elfe noir" outlined dense v-model="monster.title"></v-text-field>
          </v-col>
          <v-col :cols="12" :sm="4">
            <v-select :items="sizes" item-text="label" item-value="abbr" label="Taille" outlined dense v-model="monster.frontmatter.size" @change="selectMonsterSize"></v-select>
          </v-col>
          <v-col :cols="12" :sm="4">
            <v-select :items="challenges" item-text="label" item-value="value" label="Dangerosité" persistent-hint :hint="challengeHint" outlined dense v-model="monster.frontmatter.challenge"></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-select :items="monsterTypes" label="Type" outlined dense v-model="monster.frontmatter.type"></v-select>
          </v-col>
          <v-col>
            <v-text-field label="Sous-type" outlined dense v-model="monster.frontmatter.subtype"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field label="Alignement" placeholder="Chaotique mauvais" outlined dense v-model="monster.frontmatter.alignment"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="d-flex justify-space-between">
            <v-switch :disabled="!monster.frontmatter.type" class="my-0 mr-4" v-model="monster.frontmatter.isSwarm" label="Nuée" dense @change="switchIsSwarm"></v-switch>
            <v-select :disabled="!monster.frontmatter.isSwarm" :items="sizes" item-text="label" item-value="abbr" label="Taille des créatures" outlined dense v-model="monster.frontmatter.swarmSize"></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="subtitle-2" :cols="12">
            Caractéristiques
          </v-col>
          <v-col class="d-flex align-center" :cols="4" :sm="2">
            <v-text-field label="Force" type="number" min="1" outlined dense v-model="monster.frontmatter.abilityScores.for"></v-text-field>
          </v-col>
          <v-col class="d-flex align-center" :cols="4" :sm="2">
            <v-text-field label="Dextérité" type="number" min="1" outlined dense v-model="monster.frontmatter.abilityScores.dex"></v-text-field>
          </v-col>
          <v-col class="d-flex align-center" :cols="4" :sm="2">
            <v-text-field label="Constitution" type="number" min="1" outlined dense v-model="monster.frontmatter.abilityScores.con"></v-text-field>
          </v-col>
          <v-col class="d-flex align-center" :cols="4" :sm="2">
            <v-text-field label="Intelligence" type="number" min="1" outlined dense v-model="monster.frontmatter.abilityScores.int"></v-text-field>
          </v-col>
          <v-col class="d-flex align-center" :cols="4" :sm="2">
            <v-text-field label="Sagesse" type="number" min="1" outlined dense v-model="monster.frontmatter.abilityScores.sag"></v-text-field>
          </v-col>
          <v-col class="d-flex align-center" :cols="4" :sm="2">
            <v-text-field label="Charisme" type="number" min="1" outlined dense v-model="monster.frontmatter.abilityScores.cha"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="subtitle-2" :cols="12">
            Défenses
          </v-col>
          <v-col class="d-flex align-center">
            <v-text-field label="Dés de vie" type="number" min="1" outlined dense v-model="monster.frontmatter.hitDiceCount"></v-text-field>
            <v-switch class="my-0 mx-1" v-model="customHitDieSize" label="Dé de vie personnalisé" dense @change="switchCustomHitDizeSize"></v-switch>
            <v-select :disabled="!customHitDieSize" :items="sizes" item-text="hitDie" item-value="hitDie" label="Taille du dé de vie" outlined dense v-model="monster.frontmatter.hitDieSize"></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="d-flex align-center">
            <v-select class="mr-1" :items="armorTypes" item-text="label" item-value="value" label="Type d'armure" outlined dense v-model="monster.frontmatter.ac.armorType" @change="selectArmorType"></v-select>
            <v-text-field v-if="monster.frontmatter.ac.armorType == 'armure naturelle'" label="Armure naturelle" type="number" min="0" outlined dense v-model="monster.frontmatter.ac.value"></v-text-field>
            <v-text-field v-if="monster.frontmatter.ac.armorType == 'custom'" label="Armure personnalisée" outlined dense v-model="monster.frontmatter.ac.value"></v-text-field>
            <v-switch class="my-0 ml-1" v-if="monster.frontmatter.ac.armorType != 'custom'" v-model="monster.frontmatter.ac.hasShield" label="Bouclier" dense></v-switch>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="subtitle-2" :cols="12">
            Maîtrises
          </v-col>
          <v-col class="d-flex align-center" :cols="12" :sm="3">
            <v-text-field label="Bonus de maîtrise" type="number" min="2" max="9" outlined dense v-model="monster.frontmatter.proficiencyBonus"></v-text-field>
          </v-col>
          <v-col class="d-flex align-center" :cols="12" :sm="3">
            <v-select multiple clearable :items="abilities" item-text="label" item-value="value" label="Jets de sauvegarde" outlined dense v-model="monster.frontmatter.savingThrows"></v-select>
          </v-col>
          <v-col class="d-flex align-center" :cols="12" :sm="3">
            <v-select multiple clearable return-object :items="skills" item-text="label" item-value="value" label="Compétences" outlined dense v-model="selectedSkillsProficient" @change="selectSkill"></v-select>
          </v-col>
          <v-col class="d-flex align-center" :cols="12" :sm="3">
            <v-select multiple clearable :items="selectedSkillsProficient" item-text="label" item-value="value" label="Compétences expert" outlined dense v-model="selectedSkillsExpert" @change="selectSkillExpert"></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="subtitle-2" :cols="12">
            Résistances et vulnérabilités
          </v-col>
          <v-col class="d-flex align-center" :cols="12" :md="3">
            <v-select class="mr-1" multiple clearable :items="conditions" label="Immunité états spéciaux" outlined dense v-model="monster.frontmatter.conditionImmunities"></v-select>
          </v-col>
          <v-col class="d-flex align-center" :cols="12" :md="3">
            <v-select class="mr-1" multiple clearable :items="damageTypes" label="Vulnérabilité au dégâts" outlined dense v-model="monster.frontmatter.damageTypeVulnerabilities"></v-select>
          </v-col>
          <v-col class="d-flex align-center" :cols="12" :md="3">
            <v-select class="mr-1" multiple clearable :items="damageTypes" label="Résistance au dégâts" outlined dense v-model="monster.frontmatter.damageTypeResistances"></v-select>
          </v-col>
          <v-col class="d-flex align-center" :cols="12" :md="3">
            <v-select class="mr-1" multiple clearable :items="damageTypes" label="Immunité au dégâts" outlined dense v-model="monster.frontmatter.damageTypeImmunities"></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="subtitle-2" :cols="12">
            Déplacements
          </v-col>
          <v-col class="d-flex align-center" :cols="6" :sm="4" :lg="2">
            <v-text-field class="mr-1" label="Au sol" type="number" min="0" outlined dense v-model="monster.frontmatter.movement.walk"></v-text-field>
          </v-col>
          <v-col class="d-flex align-center" :cols="6" :sm="4" :lg="2">
            <v-text-field class="mr-1" label="Escalade" type="number" min="0" outlined dense v-model="monster.frontmatter.movement.climb"></v-text-field>
          </v-col>
          <v-col class="d-flex align-center" :cols="6" :sm="4" :lg="2">
            <v-text-field class="mr-1" label="Fouissement" type="number" min="0" outlined dense v-model="monster.frontmatter.movement.burrow"></v-text-field>
          </v-col>
          <v-col class="d-flex align-center" :cols="6" :sm="4" :lg="2">
            <v-text-field class="mr-1" label="Nage" type="number" min="0" outlined dense v-model="monster.frontmatter.movement.swim"></v-text-field>
          </v-col>
          <v-col class="d-flex align-center" :cols="6" :sm="4" :lg="2">
            <v-text-field class="mr-1" label="Vol" type="number" min="0" outlined dense v-model="monster.frontmatter.movement.fly"></v-text-field>
          </v-col>
          <v-col class="d-flex align-center" :cols="6" :sm="4" :lg="2">
            <v-switch class="my-0" v-model="monster.frontmatter.movement.hover" label="Vol stationnaire" dense></v-switch>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="subtitle-2" :cols="12">
            Sens
          </v-col>
          <v-col class="d-flex align-center" :cols="6" :lg="3">
            <v-text-field class="mr-1" label="Perception des vibrations" type="number" min="0" outlined dense v-model="monster.frontmatter.senses.tremorsense"></v-text-field>
          </v-col>
          <v-col class="d-flex align-center" :cols="6" :lg="3">
            <v-text-field class="mr-1" label="Vision aveugle" type="number" min="0" outlined dense v-model="monster.frontmatter.senses.blindsight"></v-text-field>
          </v-col>
          <v-col class="d-flex align-center" :cols="6" :lg="3">
            <v-text-field class="mr-1" label="Vision dans le noir" type="number" min="0" outlined dense v-model="monster.frontmatter.senses.darkvision"></v-text-field>
          </v-col>
          <v-col class="d-flex align-center" :cols="6" :lg="3">
            <v-text-field class="mr-0" label="Vision parfaite" type="number" min="0" outlined dense v-model="monster.frontmatter.senses.truesight"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="subtitle-2" :cols="12">
            Langues et communication
          </v-col>
          <v-col class="d-flex align-center" :cols="12" :md="4">
            <v-select class="mr-1" multiple clearable :items="languages" label="Langues" outlined dense v-model="monster.frontmatter.languages"></v-select>
          </v-col>
          <v-col class="d-flex align-center" :cols="12" :md="4">
            <v-text-field class="mr-1" label="Langue personnalisée" outlined dense v-model="monster.frontmatter.customLanguage"></v-text-field>
          </v-col>
          <v-col class="d-flex align-center" :cols="12" :md="4">
            <v-text-field label="Télépathie" type="number" min="0" outlined dense v-model="monster.frontmatter.telepathy"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="subtitle-2" :cols="12">
            Capacités, Actions, Réactions et Actions légendaires
          </v-col>
          <v-col>
            <v-textarea outlined label="Capacités, Actions, Réactions, Actions légendaires" v-model="monster.content" hide-details></v-textarea>
            <MarkdownDoc />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field outlined label="Auteur" v-model="monster.author"></v-text-field>
          </v-col>
        </v-row>

      </v-col>

      <v-col :cols="12" :md="6">
        <Monster :monster="monster" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Breadcrumb from '@theme/components/Breadcrumb'
import Monster from '@theme/components/Monster'
import MarkdownDoc from '@theme/components/MarkdownDoc'
import { saveAs } from 'file-saver'
import { MONSTERTYPES, MONSTERSIZES, CHALLENGES, ABILITIES, SKILLS } from '../../data/monsters'
import { stats } from '../../data/stats'
import { ARMORTYPES } from '../../data/armorTypes'
import { CONDITIONS } from '../../data/conditions'
import { DAMAGETYPES } from '../../data/damageTypes'
import { LANGUAGES } from '../../data/languages'
import { getUrlParameter } from '@theme/util/filterHelpers'
import { isResourceInLibrary } from '@theme/util'
import { encode } from '@theme/util/homebrew'
import { getProficiencyBonus, displayBonus } from '@theme/util/monsterHelpers'
import slugify from 'slugify'
slugify.extend({"'": '-'})

export default {
  name: 'CreateMonsterLayout',

  components: {
    Breadcrumb,
    Monster,
    MarkdownDoc
  },

  computed: {
    isMonsterInBestiary () {
      return isResourceInLibrary(this.monster, this.$store.state.myMonsters.monsters)
    },

    displayToggleMonsterButton () {
      if (this.isMonsterInBestiary) {
        return 'Supprimer de mon bestiaire'
      }
      return 'Ajouter à mon bestiaire'
    },

    challengeHint () {
      if (this.monster.frontmatter.proficiencyBonus) {
        return 'Bonus de maîtrise personnalisé : ' + displayBonus(this.monster.frontmatter.proficiencyBonus)
      }
      return 'Bonus de maîtrise : ' + displayBonus(getProficiencyBonus(this.monster.frontmatter.challenge))
    },
  },

  data () {
    return {
      isUploading: false,
      monsterTypes: MONSTERTYPES,
      sizes: MONSTERSIZES,
      armorTypes: ARMORTYPES,
      abilities: ABILITIES,
      skills: SKILLS,
      skillObjects: stats.skills,
      conditions: CONDITIONS,
      damageTypes: DAMAGETYPES,
      challenges: CHALLENGES,
      languages: LANGUAGES,
      customHitDieSize: false,
      selectedSkillsProficient: [],
      selectedSkillsExpert: [],
      monster: {
        custom: true,
        pid: 'monster',
        key: null,
        author: '',
        title: '',
        content: `## Capacités\n_**Capacité**_. Description de la capacité.\n\n## Actions\n_**Action**_. Description de l'action.`,
        frontmatter: {
          type: '',
          subtype: '',
          size: '',
          challenge: '0',
          proficiencyBonus: null,
          alignment: '',
          isSwarm: false,
          swarmSize: '',
          hitDiceCount: 1,
          hitDieSize: '',
          abilityScores: {
            for: 10,
            dex: 10,
            con: 10,
            int: 10,
            sag: 10,
            cha: 10,
          },
          ac: {
            armorType: null,
            value: null, // Dans le cas du type d'armure "Armure naturelle"
            hasShield: false,
          },
          savingThrow: null,
          skills: null,
          movement: {
            walk: '',
            climb: '',
            burrow: '',
            swim: '',
            fly: '',
            hover: false,
          },
          senses: {
            tremorsense: '',
            blindsight: '',
            darkvision: '',
            truesight: '',
          },
          conditionImmunities: [],
          damageTypeVulnerabilities: [],
          damageTypeResistances: [],
          damageTypeImmunities: [],
          languages: [],
          customLanguage: '',
          telepathy: null
        }
      }
    }
  },

  methods: {
    download () {
      let filename = "monstre.json"
      if (this.monster.title !== '') {
        filename = slugify(this.monster.title, {lower: true, strict: true}) + '.json'
      }
      saveAs(new Blob([JSON.stringify(this.monster)], {
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
        if (result.pid == 'monster') {
          self.monster = result
          self.$store.commit('setSnackbarText', "Le monstre " + self.monster.title + " a été chargé")
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

    toggleMonsterInBestiary () {
      if (this.isMonsterInBestiary) {
        this.$store.commit('myMonsters/removeMonster', this.monster)
        this.$store.commit('setSnackbarText', "Le monstre " + this.monster.title + " a été supprimé de votre bestiaire")
        this.$store.commit('setIsOpenSnackbar', true)
      } else {
        this.$store.commit('myMonsters/addMonster', this.monster)
        this.$store.commit('setSnackbarText', "Le monstre " + this.monster.title + " a été ajouté à votre bestiaire")
        this.$store.commit('setIsOpenSnackbar', true)
      }
    },

    updateMonsterInBestiary () {
      if (this.isMonsterInBestiary) {
        this.$store.commit('myMonsters/updateMonster', this.monster)
        this.$store.commit('setSnackbarText', "Le monstre a été mis à jour dans votre bestiaire")
        this.$store.commit('setIsOpenSnackbar', true)
      }
    },

    reset () {
      this.monster = {
        custom: true,
        pid: 'monster',
        key: Math.random().toString(36).substr(2, 9),
        author: '',
        title: '',
        content: `## Capacités\n_**Capacité**_. Description de la capacité.\n\n## Actions\n_**Action**_. Description de l'action.`,
        frontmatter: {
          type: '',
          subtype: '',
          size: '',
          challenge: '0',
          alignment: '',
          isSwarm: false,
          swarmSize: '',
          hitDiceCount: 1,
          hitDieSize: '',
          abilityScores: {
            for: 10,
            dex: 10,
            con: 10,
            int: 10,
            sag: 10,
            cha: 10,
          },
          ac: {
            armorType: null,
            value: null, // Dans le cas du type d'armure "Armure naturelle"
            hasShield: false,
          },
          savingThrow: null,
          skills: null,
          movement: {
            walk: '',
            climb: '',
            burrow: '',
            swim: '',
            fly: '',
            hover: false,
          },
          senses: {
            tremorsense: '',
            blindsight: '',
            darkvision: '',
            truesight: '',
          },
          conditionImmunities: [],
          damageTypeVulnerabilities: [],
          damageTypeResistances: [],
          damageTypeImmunities: [],
          languages: [],
          customLanguage: '',
          telepathy: null
        }
      }
    },

    switchIsSwarm () {
      if (!this.monster.frontmatter.isSwarm) {
        this.monster.frontmatter.swarmSize = ''
      }
    },

    selectMonsterSize (selected) {

    },

    switchCustomHitDizeSize () {
      if (!this.customHitDieSize) {
        this.monster.frontmatter.hitDieSize = ''
      }
    },

    selectArmorType () {
      if (this.monster.frontmatter.ac.armorType == 'armure naturelle' || this.monster.frontmatter.ac.armorType == 'custom') {
        this.monster.frontmatter.ac.value = null
      }
    },

    selectSkill () {
      this.monster.frontmatter.skills = []
      this.selectedSkillsProficient.forEach((skill, idx) => {
        this.monster.frontmatter.skills.push({name: skill.value})
      })
      this.setSkillsExpert()
    },

    selectSkillExpert () {
      this.selectSkill()
      this.setSkillsExpert()
    },

    setSkillsExpert () {
      this.monster.frontmatter.skills.forEach((mskill, idx) => {
        this.monster.frontmatter.skills[idx].isExpert = this.selectedSkillsExpert.indexOf(mskill.name) >= 0
      })
    },

    share () {
      this.$store.commit('setShareURI', encode(this.monster))
      this.$store.commit('setIsOpenShareHomebrewDialog', true)
    }
  },

  mounted () {
    this.$store.commit('setHasRightDrawer', false)
    this.$store.commit('setRightDrawer', this.$vuetify.breakpoint.lgAndUp)
    this.$store.commit('setInRightDrawer', null)

    this.$page.title = "Création de monstre/PNJ"

    let monsterKey = getUrlParameter(window.location.href, "key")

    if (monsterKey) {
      for (let monster of this.$store.state.myMonsters.monsters) {
        if (monster.key == monsterKey) {
          this.monster = monster
          // this.monster = {
          //   custom: monster.custom,
          //   pid: 'monster',
          //   key: monster.key,
          //   title: monster.title,
          //   content: '',
          //   frontmatter: {
          //     type: monster.frontmatter.type ? monster.frontmatter.type : '',
          //     subtype: monster.frontmatter.subtype ? monster.frontmatter.subtype : '',
          //     size: monster.frontmatter.size ? monster.frontmatter.size : '',
          //     challenge: monster.frontmatter.challenge ? monster.frontmatter.challenge : '0',
          //     alignment: monster.frontmatter.alignment ? monster.frontmatter.alignment : '',
          //     isSwarm: monster.frontmatter.isSwarm,
          //     swarmSize: monster.frontmatter.swarmSize ? monster.frontmatter.swarmSize : '',
          //     hitDiceCount: monster.frontmatter.hitDiceCount,
          //     hitDieSize: monster.frontmatter.hitDieSize,
          //     abilityScores: {
          //       for: monster.frontmatter.abilityScores.for,
          //       dex: monster.frontmatter.abilityScores.dex,
          //       con: monster.frontmatter.abilityScores.con,
          //       int: monster.frontmatter.abilityScores.int,
          //       sag: monster.frontmatter.abilityScores.sag,
          //       cha: monster.frontmatter.abilityScores.cha,
          //     },
          //     ac: {
          //       armorType: monster.frontmatter.ac ? monster.frontmatter.ac.armorType : null,
          //       value: monster.frontmatter.ac ? monster.frontmatter.ac.value : null,
          //       hasShield: monster.frontmatter.ac ? monster.frontmatter.ac.hasShield : false,
          //     },
          //     savingThrow: monster.frontmatter.savingThrow ? monster.frontmatter.savingThrow : null,
          //     skills: monster.frontmatter.skills ? monster.frontmatter.skills : null,
          //     movement: {
          //       walk: monster.frontmatter.movement ? monster.frontmatter.movement.walk : null,
          //       climb: monster.frontmatter.movement ? monster.frontmatter.movement.climb : null,
          //       burrow: monster.frontmatter.movement ? monster.frontmatter.movement.burrow : null,
          //       swim: monster.frontmatter.movement ? monster.frontmatter.movement.swim : null,
          //       fly: monster.frontmatter.movement ? monster.frontmatter.movement.fly : null,
          //       hover: monster.frontmatter.movement ? monster.frontmatter.movement.hover : null,
          //     },
          //     senses: {
          //       tremorsense: monster.frontmatter.senses ? monster.frontmatter.senses.tremorsense : null,
          //       blindsight: monster.frontmatter.senses ? monster.frontmatter.senses.blindsight : null,
          //       darkvision: monster.frontmatter.senses ? monster.frontmatter.senses.darkvision : null,
          //       truesight: monster.frontmatter.senses ? monster.frontmatter.senses.truesight : null,
          //     },
          //     conditionImmunities: monster.frontmatter.conditionImmunities,
          //     damageTypeVulnerabilities: monster.frontmatter.damageTypeVulnerabilities,
          //     damageTypeResistances: monster.frontmatter.damageTypeResistances,
          //     damageTypeImmunities: monster.frontmatter.damageTypeImmunities,
          //     languages: monster.frontmatter.languages,
          //     customLanguage: monster.frontmatter.customLanguage,
          //     telepathy: monster.frontmatter.telepathy
          //   }
          // }
          if (!this.monster.custom) {
            this.monster.content = monster.rawContent
            this.monster.custom = true
          } else {
            this.monster.content = monster.content
          }
          if (this.monster.frontmatter.skills) {
            this.monster.frontmatter.skills.forEach((mskill, idx) => {
              SKILLS.forEach((skill, jdx) => {
                if (mskill.name == skill.value) {
                  this.selectedSkillsProficient.push(skill)
                  if (mskill.isExpert) {
                    this.selectedSkillsExpert.push(skill.value)
                  }
                }
              })
            })
          }
        }
      }
    } else {
      this.monster.key = Math.random().toString(36).substr(2, 9)
    }
  }
}
</script>

<style>
</style>
