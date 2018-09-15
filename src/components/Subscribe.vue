<template lang="pug">
    .components__subscribe
        .row
            .container
                .row
                    h2 Let's stay in touch
                    span Get updates on specials and more
                .row
                    .col.col-2
                        input(placeholder='example@example.com')
                    .col.col-2
                        button(type='button') Subscribe now
</template>

<script>
    export default {
        name: 'Subscribe'
    }
</script>

<style lang="sass">
    .components__subscribe
        > .row
            padding: 80px 0
            text-align: center

            .row
                &:first-child
                    margin-bottom: 40px

                    h2
                        font-size: 28px
                        font-weight: 400
                        margin-bottom: 5px
                    span
                        &::after
                            content: ''
                            clear: both
                            width: 60px
                            height: 5px
                            display: block
                            margin: 20px auto 0
                            background-color: #619ce4

                &:last-child
                    margin: 0 auto
                    max-width: 600px
                    border: 1px solid #dcdcdc

                    input,
                    button
                        margin: 0
                        padding: 0
                        width: 100%
                        height: 100%
                        border: none
                        box-sizing: border-box

                    input
                        outline: none
                        color: #2d2d2d
                        font-size: 14px
                        padding: 5px 15px
                        border-right: 1px solid #dcdcdc
                    button
                        color: #FFF
                        font-size: 12px
                        font-weight: 600
                        letter-spacing: 1.2px
                        text-transform: uppercase
                        background-color: #619ce4

                    .col-2
                        margin: 0
                        width: 160px
                        height: 44px

                        &:first-child
                            width: calc(100% - 160px)
</style>
