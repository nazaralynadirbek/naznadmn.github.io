<template lang="pug">
    .components__subscribe
        .row
            .container
                .row
                    h2 Let's stay in touch
                    span Get updates on specials and more
                .row(:class='{ error: status === \'STATUS_ERROR\', success: status === \'STATUS_SUCCESS\', loading: status === \'STATUS_LOADING\' }')
                    .col.col-2
                        input(placeholder='example@example.com', v-model='email', v-on:focus='onFocus')
                    .col.col-2
                        button(type='button', v-on:click='onSubscribe') Subscribe now
</template>

<script>
    export default {
        name: 'Subscribe',

        data() {
            return {
                email  : null,

                status : 'STATUS_DEFAULT'
            }
        },

        methods: {
            onSubscribe() {
                if (!this.email || (this.email && !this.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))) {
                    this.status = 'STATUS_ERROR';

                    window.blur();
                    
                    return;
                }

                // Send Email via EmailJS
                this.status = 'STATUS_LOADING';

                window.emailjs.send(
                    'gmail',
                    'new-subscriber',
                    {
                        email: this.email
                    }
                ).then(() => {
                    this.status = 'STATUS_SUCCESS';
                }).catch(() => {
                    this.status = 'STATUS_ERROR';
                })
            },
            onFocus() {
                this.status = 'STATUS_DEFAULT';
            }
        }
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

                    &.error
                        border-color: #ef6b6b

                        button
                            background-color: #ef6b6b
                    &.success
                        border-color: #95d2b0

                        button
                            background-color: #95d2b0
                    &.loading
                        border-color: #d2d095

                        button
                            background-color: #d2d095   

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
