<template lang="pug">
.main-container
    .tile.is-parent
        .tile.is-child 
            .content
                .title.inst タイトル

                p  heyheyehye
                .field
                    label.label INPUT Your id
                    .control
                        input.input.is-info.is-medium(type="text" placeholder="number" v-model="userid")
            
    button.button.is-link.is-fullwidth.is-rounded.submit#submit(type="submit" @click="$router.push('/page')" :disabled="processing") Next →
</template>

<script>

export default {
  data () {
    return {
        userid: "",
        processing: true
    }
  },
  watch: {
    userid: function(val){
        if(val != ""){
            this.processing = false
        }
    }
  }
}
</script>

<style lang="stylus" scoped>

.pic 
    width 560px
    height auto
    border 2px solid rgba(0, 0, 0, 0)
    border-radius 2px
    cursor pointer

input[type=radio]
    display none
input:checked + label 
    .pic
        border 2px solid hsl(204, 86%, 53%)
        box-shadow 0 0 12px 0 hsl(204, 86%, 53%)

.timer
    margin 40px 0  0

    &__txt
        font-size 24px
        text-align right

    .progress
        margin-top 8px
        width 40%
        margin-left auto
    

</style>
