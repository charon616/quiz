<template lang="pug">
.main-container
    .tile 
        .title.inst {{ name }}

    .columns.is-multiline.choice.control
        .column.is-half(v-for="(item, index) in questions[target].caption" :key="item.id") 
            input(type="radio" :id="item" name="imgs" v-model="answer" :value="item")
            label.radio(:for="item")
                img.pic(:src="urls[index]")

    button.button.is-link.is-fullwidth.is-rounded.submit#submit(type="submit" @click="moveToNext" :disabled="processing") Next →

    //- .timer
    //-     p.timer__txt 00:00
    //-     progress.progress.is-small(value="15" max="100") 15%


</template>

<script>
import jsonfile from "~/assets/quiz.json";

export default {
  data () {
    return {
        name: "Choice img which you think outstand.",
        questions: jsonfile.questions,
        answer: "",
        processing: true,
        target: 0
    }
  },
  watch: {
    answer: function(val){
        if(val != ""){
        this.processing = false
        }
    }
  },
  computed: {
    urls: function(){
        let temp = [];
        for(let i = 0; i < this.questions[this.target].file.length; i++){
            temp.push(require("~/assets/img/" + this.questions[this.target].file[i] + ".jpg"))
        }
        return temp
    }
  },
  methods: {
    moveToNext: function(){
        this.name = this.answer;
        if(this.target == this.questions.length - 1){
            this.$router.push('/end');
        }else{
            this.target++;
            this.processing = true
        }
    },
    isSelected: function () {
      return this.selected
    }
  },
  mounted(){
    this.$nextTick(() => {
    })
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
