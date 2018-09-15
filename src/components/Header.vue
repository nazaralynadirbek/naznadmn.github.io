<template lang="pug">
    .components__header
        .row
            .container
                .row
                    .col.col-3
                        router-link(to='/')
                            img(src='/static/images/basic/logotype.header.png')
                    .col.col-3
                        ul.list
                            li
                                router-link(to='/description') How it works?
                            li
                                router-link(to='/partnership') Partnership
                            li
                                router-link(to='/about') About us
                    .col.col-3
                        a(href='https://www.indiegogo.com/projects/nommi-4g-hotspot-with-unlimited-wi-fi-worldwide', target='_blank')
                            i(class='fas fa-shopping-bag')
                            |Buy it now
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="sass">
    .components__header
        > .row
            height: 44px
            background-color: #2d2d2d

            .container
                > .row
                    .col-3
                        margin: 0
                        height: 44px
                        text-align: center
                        width: calc(100% / 3)

                        ul
                            font-size: 0

                            li
                                color: #fff
                                margin-right: 30px
                                display: inline-block

                                a
                                    color: inherit
                                    display: block
                                    font-size: 14px
                                    line-height: 44px

                                    &.active
                                        color: rgba(255, 255, 255, .6)
                                        box-shadow: inset 0px -2px #619ce4
                                        -moz-box-shadow: inset 0px -2px #619ce4
                                        -webkit-box-shadow: inset 0px -2px #619ce4

                                &:last-child
                                    margin: 0

                        &:first-child
                            text-align: left

                            a
                                height: 44px
                                display: block
                                padding: 10px 0
                                box-sizing: border-box

                                img
                                    height: 24px

                        &:last-child
                            text-align: right

                            a
                                color: #619ce4
                                font-size: 14px
                                font-weight: 400
                                line-height: 44px

                                i
                                    margin-right: 10px
</style>
