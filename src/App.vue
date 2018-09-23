<template lang="pug">
    .views__base
        Notifications

        Header

        .content
            transition(name='fade', mode='out-in')
                router-view

        Footer
</template>

<script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'

    import Notifications from '@/components/Notifications.vue'

    export default {
        name: 'App',

        components: {
            Header,
            Footer,

            Notifications
        }
    }
</script>

<style lang="sass">
    @import url('https://use.fontawesome.com/releases/v5.0.13/css/all.css')
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900')

    html, body, img, h1, h2, h3, h4, h5, h6, ul, li, a, p
        margin: 0
        padding: 0
        border: none

    html
        height: 100%

    body
        height: 100%
        color: #2d2d2d
        background-color: #FFF
        font-family: 'Lato', sans-serif

        -moz-osx-font-smoothing: grayscale
        -webkit-font-smoothing: antialiased

    button
        outline: none
        cursor: pointer

    li
        list-style: none

    a
        text-decoration: none

    .row
        display: block

    .col
        margin-right: 40px
        vertical-align: top
        display: inline-block

        &-2
            width: calc((100% - 40px) / 2)
        &-3
            width: calc((100% - 80px) / 3)
        &-4
            width: calc((100% - 120px) / 4)
        &-5
            width: calc((100% - 160px) / 5)
        &-6
            width: calc((100% - 200px) / 6)

        &:last-child
            margin: 0

    .container
        width: 1040px
        margin: 0 auto
        padding: 0 20px

    .views__base
        min-width: 1080px

    // Transition
    .fade
        &-enter,
        &-leave,
        &-leave-to
            opacity: 0

            &-active
                transition: opacity .3s
</style>
