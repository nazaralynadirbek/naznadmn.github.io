<template lang="pug">
    .components__footer
        .row
            .container
                .row
                    .col.col-4
                        span For Business

                        ul.list
                            li
                                router-link(to='/partnership') Partnership
                    .col.col-4
                        span About

                        ul.list
                            li
                                router-link(to='/about') Nommi
                            li
                                router-link(to='/faq') FAQ
                    .col.col-4
                        span Contact us

                        ul.list
                            li
                                a(href='mailto: hello@nommi.net') Email
                    .col.col-4
                        span Follow us

                        ul.list
                            li
                                a(href='https://www.facebook.com/mynommi1/', target='_blank') Facebook
                            li
                                a(href='https://twitter.com/mynommi', target='_blank') Twitter
                            li
                                a(href='https://www.instagram.com/mynommi/', target='_blank') Instagram
        .row
            .container
                .row
                    p © 2018 Nommi. All Rights Reserved
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style lang="sass">
    .components__footer
        > .row
            color: #2d2d2d

            &:first-child
                padding: 40px 0
                background-color: #dfdfdf
                box-shadow: inset 0 15px 25px rgba(0, 0, 0, .05)

                .col-4
                    ul
                        li
                            color: #2d2d2d
                            font-size: 14px
                            line-height: 22px

                            a
                                color: inherit
                    span
                        display: block
                        font-size: 14px
                        font-weight: 600
                        margin-bottom: 10px
                        text-transform: uppercase

            &:last-child
                height: 40px
                font-size: 14px
                line-height: 40px
                text-align: center
                background-color: #b0b0b0
</style>
