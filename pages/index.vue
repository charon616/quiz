<template lang="pug">
.top
  section.hero.is-dark
    .hero-body
      .container
        h1.title 
          font-awesome-icon(icon = "home")
          | 管理用のページ

  .main-container
    nuxt-link.button.is-link.is-light.is-fullwidth.is-medium(to="inst") テストの指示
    nuxt-link.button.is-link.is-light.is-fullwidth.is-medium(to="page") テスト
    nuxt-link.button.is-link.is-light.is-fullwidth.is-medium(to="end") テスト終了
    nuxt-link.button.is-link.is-light.is-fullwidth.is-medium(to="questionnaire") 質問
    nuxt-link.button.is-link.is-light.is-fullwidth.is-medium(to="submit") ファイルのアップロード


    .table-container
      table.table
        tr 
          th menu
          th menu
          th menu
        tr
          td item
          td item
          td item
        tr
          td item
          td item
          td item

    .test
      p hey
      p {{ anyValues }}
      p {{ message }}
      p {{ cat }}
      button.btn.btn-primary(@click="setItem(cat)") Submit
  
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      cat: {
        name: 'ねこ',
        color: 'white',
        age: 5
      }
    }
  },
  computed: {
    ...mapState([
      'anyValues', 'message'
    ]),
    loaded() {
      return this.$store.state.localStorage.status && this.$store.state.sessionStorage.status
    }
  },
  methods: {
    ...mapMutations([
      'addValue', 'setItem'
    ])
  }
}
</script>

<style lang="stylus" scoped>

.is-link
  margin 16px 0

</style>
