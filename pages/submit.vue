<template lang="pug">
.main-container
    .tile 
        .title.inst SubmitForm

    .field
        .file.is-centered.is-boxed
            label.file-label
                input.file-input(type="file" name="resume")
                span.file-cta
                    span.file-icon
                        font-awesome-icon(icon = "upload")
                    span.file-label Centered file…
                span.file-name Screen Shot 2017-07-29 at 15.54.25.png

    .buttons
        .button.is-link.is-fullwidth.is-rounded.submit(type="submit") Next →

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
