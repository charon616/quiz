<template lang="pug">
.main-container
    .tile 
        .title.inst Questionnaire


    .field
        label.label Country
        .control
            .select
                select
                    option Option
                    option Option
                    option Option
                    option Option
            
    .field
        label.label Gender
        .control
            .select
                select
                    option Male
                    option Female
                    option Other
    .field
        label.label Age
        .control
            .select
                select
                    option 10-19
                    option 20-29
                    option 30-39
                    option 40-49
                    option 50-59
                    option 60-

    .field
        label.label Message
        .control
            textarea.textarea(placeholder="e.g. Hello world")

    .field
        label.label Message
        .control
        label.radio 
            input(type="radio" name="answer")
            | Yes
        label.radio 
            input(type="radio" name="answer")
            | No 

    .buttons
        .button.is-fullwidth.is-link.is-rounded.submit(type="submit" @click="$router.push('/end')") Next →

    form(name="contact" method="POST" netlify)
        p
            label Your Name: 
                input(type="text" name="name")
        p
            label Your Email: 
                input(type="email" name="email")
        p
            label Your Role: 
                select(name="role[]" multiple)
                    option(value="leader") Leade
                    option(value="follower") Follower
        p
            label Message: 
                textarea(name="message")
        button(type="submit") Send
    //- .timer
    //-     p.timer__txt 00:00
    //-     progress.progress.is-small(value="15" max="100") 15%


</template>

<script>

export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>





</style>
