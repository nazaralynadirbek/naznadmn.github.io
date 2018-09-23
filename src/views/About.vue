<template lang="pug">
    .views__about
        .row.history
            .container
                h1 History of the product

                p
                    | We both [Alyona and Kairat] love traveling. As soon as you exit the airport doors, you smell new scents,
                    | feel the temperature, and hear street sounds. You see what people look like,
                    | how they dress and know you’re about to have a new life experience. All the feels aside,
                    | we also like to stay hyper connected with easy access to our email and social media.
                    | It’s the first thing we check in the morning and the last thing we scroll through before bed.
                    | When the plane lands, we want to be connected instantly
        .row.team
            .container
                .row
                    h2 Our team Members
                .row
                    .row(v-for='membersRow in members')
                        .col.col-2(v-for='membersCell in membersRow')
                            .row
                                .col.col-2
                                    img(:src='membersCell.preview')
                                .col.col-2
                                    h3 {{ membersCell.name }}
                                    span {{ membersCell.position }}

                                    p {{ membersCell.description }}

                                    ul.list
                                        li(v-for='social in membersCell.social')
                                            a(:href='social.url', target='_blank'): i(:class='social.class')
        .row
            Subscribe
</template>

<script>
    import Subscribe from '@/components/Subscribe.vue'

    // Data
    import Members from '../../static/json/members.json';

    export default {
        name: 'About',

        data() {
            return {
                members: Members.members
            }
        },

        components: {
            Subscribe
        }
    }
</script>

<style lang="sass">
    .views__about
        > .row
            text-align: center

            &.history
                padding: 40px 0
                background-color: #f0f0f0

                p
                    color: #676464
                    font-size: 18px
                    line-height: 24px
                h1
                    font-size: 28px
                    font-weight: 400
                    margin-bottom: 20px

            &.team
                padding: 40px 0

                p
                    opacity: .6
                    font-size: 14px
                    line-height: 18px
                ul
                    font-size: 0
                    margin-top: 10px

                    li
                        font-size: 18px
                        margin-right: 10px
                        display: inline-block

                        a
                            color: rgba(0, 0, 0, .5)

                            &:hover
                                color: #000

                        &:last-child
                            margin: 0

                h2
                    font-size: 28px
                    font-weight: 400

                    &::after
                        content: ''
                        clear: both
                        width: 60px
                        height: 5px
                        display: block
                        margin: 20px auto 0
                        background-color: #698dca

                h3
                    font-size: 18px
                    text-transform: capitalize
                img
                    width: 100%
                span
                    color: #9c9a9a
                    display: block
                    padding: 5px 0 10px

                .row
                    margin-bottom: 40px

                    &:last-child
                        margin: 0
                        text-align: left

                        > .row
                            margin-bottom: 40px

                            &:last-child
                                margin: 0

            &:last-child
                border-top: 1px solid #dcdcdc

            .col-2
                &:nth-child(2n)
                    margin: 0
</style>
