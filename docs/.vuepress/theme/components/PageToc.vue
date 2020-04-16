<template>
  <div class="page-toc mt-4">
    <p class="subtitle-2 pl-6 pr-6">Table des matières</p>
    <ul>
      <li :class="[ itemPadding(h), 'mb-1' ]" v-for="h in headers">
        <a :href="anchor(h)">{{ h.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PageToc',

  data () {
    return {

    }
  },

  computed: {
    headers () {
      return this.$page.headers
    }
  },

  methods: {
    anchor (h) {
      return '#' + h.slug
    },
    itemPadding (h) {
      return 'pl-' + (h.level - 2) * 4
    }
  },

  mounted () {

  }
}
</script>

<style lang="scss">
@import '../styles/colors';

.page-toc {
  ul {
    list-style: none;
    padding-right: 24px;

    li {
      a {
        color: $color-gray;
        text-decoration: none;

        &:hover {
          color: $color-dragon;
        }
      }
    }
  }
}

.theme--dark {
  .page-toc {
    ul {
      li {
        a {
          color: lighten($color-gray, 20);

          &:hover {
            color: lighten($color-dragon, 15);
          }
        }
      }
    }
  }
}
</style>
