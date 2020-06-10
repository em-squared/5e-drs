<template>
  <div class="">
    <v-navigation-drawer class="main-drawer" v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" width="300" app>
      <v-list dense nav>
        <v-list-item class="hidden-md-and-up site-title" link :to="{path: '/'}">
          <v-list-item-avatar>
            <img :src="$vuetify.theme.dark ? '/dragon_blanc.svg' : '/dragon_pourpre.svg'">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ $site.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="hidden-md-and-up" />
        <template v-for="item in items">
          <v-list-group v-if="item.children" :key="item.title" :value="isExpanded(item)" color="accent">
            <template v-slot:activator>
              <v-list-item-icon v-if="item.icon">
                <span class="v-icon" v-if="item.customIcon" v-html="item.icon"></span>
                <template v-else>
                  <v-icon v-text="item.icon"></v-icon>
                </template>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </template>

            <template v-for="child in item.children">
              <v-list-group v-if="child.children" :key="child.title" sub-group :value="isExpanded(child)" color="accent">
                <template v-slot:activator>
                  <v-list-item-icon v-if="child.icon">
                    <v-icon v-text="child.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ child.title }}
                      <v-chip v-if="child.badge" class="ml-2" color="primary" x-small label v-html="displayBadge(child.badge)"></v-chip>
                    </v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item v-for="subchild in child.children" link :to="{path: subchild.path}" exact>
                  <v-list-item-icon v-if="subchild.icon">
                    <v-icon v-text="subchild.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ subchild.title }}
                      <v-chip v-if="subchild.badge" class="ml-2" color="primary" x-small label v-html="displayBadge(subchild.badge)"></v-chip>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <v-divider v-else-if="child.type == 'divider'" />
              <v-list-item v-else :key="child.title" link :to="{path: child.path}" exact>
                <v-list-item-icon v-if="child.icon">
                  <v-icon v-text="child.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ child.title }}
                    <v-chip v-if="child.badge" class="ml-2" color="primary" x-small label v-html="displayBadge(child.badge)"></v-chip>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-group>
          <v-divider v-else-if="item.type == 'divider'" />
          <v-list-item v-else :key="item.title" link :to="{path: item.path}" color="accent" exact>
            <v-list-item-icon v-if="item.icon">
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-list-group key="community" color="accent">
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                Communauté
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-if="$site.themeConfig.forum" link :href="$site.themeConfig.forum" target="_blank">
            <v-list-item-icon>
              <v-icon>mdi-forum</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                Forum
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="$site.themeConfig.discordHDNO" link :href="$site.themeConfig.discordHDNO" target="_blank">
            <v-list-item-icon>
              <v-icon>mdi-discord</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                Discord H&D Non Officiel
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="$site.themeConfig.discord" link :href="$site.themeConfig.discord" target="_blank">
            <v-list-item-icon>
              <v-icon>mdi-discord</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                Discord H&D DRS
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider/>
        </v-list-group>

        <v-list-item v-if="$site.themeConfig.repository" link :href="$site.themeConfig.repository" target="_blank">
          <v-list-item-icon>
            <v-icon>mdi-github</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              Sources GitHub
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="$site.themeConfig.kofi" @click.stop="toggleSupportDialog">
          <v-list-item-icon>
            <v-icon color="#BDB76B">mdi-glass-mug-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              Jeter un sou au développeur
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{path: '/a-propos/'}" color="accent">
          <v-list-item-icon>
            <v-icon>mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              À propos
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="hidden-md-and-up">
          <v-divider/>
          <div class="pa-2 d-flex">
            <v-spacer/>
            <v-btn @click.stop="setIsThemeDark" icon>
              <v-icon v-html="$vuetify.theme.dark ? 'mdi-brightness-4' : 'mdi-brightness-7'"></v-icon>
            </v-btn>
          </div>
        </div>
      </template>
    </v-navigation-drawer>

    <v-dialog v-model="isOpenAboutDialog" @click:outside="toggleAboutDialog" max-width="600">
      <v-card>
        <v-card-title class="headline">À propos de H&D DRS</v-card-title>

        <v-card-text>
          <p class="title-2">
            <strong>La personne derrière ce site</strong><br>
            Ce site a été développé par <strong>Maxime Moraine</strong> alias <strong>Em-squared</strong>.<br>
            Développeur web passionné de jeux de rôle, j'aime mettre l'un au service de l'autre.<br>
            Les sources de ce site sont disponibles sur <a :href="$site.themeConfig.repository" target="_blank">GitHub</a> sous Licence <a href="https://github.com/em-squared/heros-et-dragons-drs/blob/master/LICENSE" target="_blank">GPLv3</a>.
          </p>
          <p>Vous souhaitez participer aux frais d'hébergement ou m'encourager ?</p>
          <p class="text-center">
            <v-btn depressed dark color="#BDB76B" link :href="$site.themeConfig.kofi" target="_blank"><v-icon class="mr-2">mdi-glass-mug-variant</v-icon>Jeter un sou au développeur</v-btn>
          </p>
          <p><strong><em>Héros & Dragons</em></strong> est un jeu de rôle basé sur les mécaniques de l'<a href="/licence-ogl">OGL5</a> et développé par les talents de la rédaction de <em><a href="https://www.black-book-editions.fr/catalogue.php?id=40" target="_blank">Casus Belli</a></em>, le magazine de référence des jeux de rôle.</p>
          <p>Les textes de cette documentation appartiennent à <a href="https://www.black-book-editions.fr/catalogue.php?id=365" target="_blank">Black Book Éditions</a>.</p>
          <p>Casus Belli et Black Book Éditions sont des marques déposées par <a href="https://www.black-book-editions.fr/" target="_blank">Black Book Éditions</a>. Tous droits réservés.</p>
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" text @click="toggleAboutDialog">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="isOpenSupportDialog" @click:outside="toggleSupportDialog" max-width="600">
      <v-card>
        <v-card-title class="headline d-flex justify-space-between">
          <span>Jeter un sou<span class="d-none d-md-inline">&nbsp;au développeur</span></span>
          <v-btn color="primary" icon @click="toggleSupportDialog"><v-icon>mdi-close</v-icon></v-btn>
        </v-card-title>

        <v-card-text>
          <p><strong>Pourquoi donner ?</strong></p>
          <p>Soyons clairs : l'accès au site est <strong>gratuit</strong>. Pour <strong>tout le monde</strong>. Pour <strong>toujours</strong>. Et <strong>sans publicité</strong>. Aucun revenu n'est donc généré par son biais. En revanche, la mise en ligne d'un site web a un coût.</p>
          <p>L'objectif est donc de couvrir ce coût.</p>
          <p>Vous pouvez participer aux frais d'hébergement et permettre à tout le monde et à vous-même d'en profiter ou m'encourager au développement parce que vous pensez que mon travail le mérite.</p>
          <p>C'est <strong>vous</strong> qui décidez.</p>
          <p class="text-center">
            <v-btn depressed dark color="#BDB76B" link :href="$site.themeConfig.kofi" target="_blank"><v-icon class="mr-2">mdi-glass-mug-variant</v-icon>Jeter un sou<span class="d-none d-md-inline">&nbsp;au développeur</span></v-btn>
          </p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'NavDrawer',

  data () {
    return {
      items: []
    }
  },

  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (newValue) {
        this.$store.commit('setDrawer', newValue)
      }
    },
    isOpenAboutDialog () {
      return this.$store.state.isOpenAboutDialog
    },
    isOpenSupportDialog () {
      return this.$store.state.isOpenSupportDialog
    }
  },

  mounted () {
    this.items = this.$site.themeConfig.sidebar
  },

  methods: {
    isExpanded (item) {
      if (item.children) {
        for (var i = 0; i < item.children.length; i++) {
          if (item.children[i].path) {
            if (item.children[i].path == this.$route.path) {
              return true
            }
          }
          if (item.children[i].children) {
            for (var j = 0; j < item.children[i].children.length; j++) {
              if (item.children[i].children[j].path) {
                if (item.children[i].children[j].path == this.$route.path) {
                  return true
                }
              }
            }
          }
        }
      }
      // Grimoire
      if ((item.title == "Pour les joueurs") && (this.$route.path.includes('/grimoire/'))) {
        return true
      }
      // Bestiaire
      if ((item.title == "Pour les meneurs") && (this.$route.path.includes('/bestiaire/'))) {
        return true
      }
      // Liste des objets magiques
      if ((item.title == "Pour les meneurs") && (this.$route.path.includes('/liste-objets-magiques/'))) {
        return true
      }
      return false
    },
    toggleAboutDialog () {
      this.$store.commit('setIsOpenAboutDialog', !this.$store.state.isOpenAboutDialog)
    },
    toggleSupportDialog () {
      this.$store.commit('setIsOpenSupportDialog', !this.$store.state.isOpenSupportDialog)
    },
    setIsThemeDark () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.$store.commit('setIsThemeDark', this.$vuetify.theme.dark)
    },
    displayBadge (badge) {
      if (badge == 'mySpells') {
        return this.$store.state.mySpells.spells.length
      } else if (badge == 'myMonsters') {
        return this.$store.state.myMonsters.monsters.length
      } else if (badge == 'myMagicItems') {
        return this.$store.state.myMagicItems.magicItems.length
      }
    }
  }
}
</script>

<style lang="scss">
// Case of list
.v-application--is-ltr {
  .main-drawer {

    .v-list-group--sub-group {
      .v-list-item__icon:first-child {
        margin-right: 0px;
      }
    }

    .v-list--dense {
      .v-list-group--sub-group {
        .v-list-group__header {
          padding-left: 0px;
        }
      }
    }

    .v-list--nav {
      .v-list-item {
        padding-left: 24px;
      }
    }
  }
}
</style>
