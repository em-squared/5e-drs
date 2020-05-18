<template>
  <v-autocomplete
    v-model="select"
    :loading="loading"
    :items="items"
    :search-input.sync="search"
    cache-items
    class="mx-4"
    flat
    clearable
    hide-no-data
    hide-details
    item-text="title"
    item-value="path"
    :label="$site.themeConfig.searchPlaceholder"
    append-icon="mdi-magnify"
    solo-inverted
  ></v-autocomplete>

</template>

<script>
import Flexsearch from "flexsearch";

export default {
  data () {
    return {
      index: null,
      loading: false,
      items: [],
      search: null,
      select: null,
      results: [{}]
    }
  },

  watch: {
    search (val) {
      val && val.length > 1 && val !== this.select && this.querySelections(val)
    },

    select (val) {
      if (val) {
        this.$router.push(val).catch(err => {})
      }
    }
  },

  mounted () {
    this.index = new Flexsearch({
      tokenize: "forward",
      doc: {
        id: "key",
        field: ["title", "headers"]
      }
    })
    const { pages } = this.$site
    // console.log(pages)
    this.index.add(pages)
  },

  methods: {
    querySelections (v) {
      this.loading = true

      this.index.search(
        v,
        {
          limit: 10,
          threshold: 2,
          encode: 'extra'
        },
        (result) => {
          // console.log(result)
          this.items = result
          this.loading = false
        })
    },
  },
}
</script>
