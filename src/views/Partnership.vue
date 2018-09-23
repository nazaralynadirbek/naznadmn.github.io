<template lang="pug">
    .views__partnership
        .row
            .container
                .row
                    .col.col-2
                        //-
                    .col.col-2
                        .row
                            h1 Become a Partner
                            p Nommi is the world’s first mobile #[br] router that is both useful at home and abroad!
                        .row(:class='{ error: status === \'STATUS_ERROR\', success: status === \'STATUS_SUCCESS\', loading: status === \'STATUS_LOADING\' }')
                            .row
                                input(placeholder='Your Full Name', v-model='name', v-on:focus='onFocus')
                            .row
                                input(placeholder='Company Name', v-model='company', v-on:focus='onFocus')
                            .row
                                input(placeholder='Your E-Mail Address', v-model='email', v-on:focus='onFocus')
                            .row
                                button(type='button', v-on:click='onPartnership') Submit
        .row
            Subscribe
</template>

<script>
    import Subscribe from '@/components/Subscribe.vue'

    export default {
        name: 'Partnership',

        data() {
            return {
                name    : null,
                company : null,
                email   : null,

                status  : 'STATUS_DEFAULT'
            }
        },

        components: {
            Subscribe
        },

        methods: {
            onPartnership() {
                if (!this.name || !this.company || (!this.email || (this.email && !this.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)))) {
                    this.status = 'STATUS_ERROR';

                    window.blur();
                    
                    return;
                }

                // Send Email via EmailJS
                this.status = 'STATUS_LOADING';

                window.emailjs.send(
                    'gmail',
                    'new-partnership',
                    {
                        name    : this.name,
                        company : this.company,
                        email   : this.email
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
    .views__partnership
        > .row
            &:first-child
                color: #FFF
                height: 400px
                padding: 80px 0
                position: relative
                text-align: center
                background-repeat: no-repeat
                background-position: center center
                background-image: url('/static/images/visuals/partner.jpg')

                .container
                    height: 100%

                    > .row
                        width: 100%
                        height: 100%
                        display: table

                        .col-2
                            width: 50%
                            text-align: center
                            display: table-cell
                            vertical-align: middle

                            p
                                opacity: .6
                                font-size: 18px
                                font-weight: 500
                                line-height: 32px
                            h1
                                font-size: 28px
                                margin-bottom: 10px
                                text-transform: uppercase

                            > .row
                                margin-bottom: 40px

                                &.error
                                    button
                                        background-color: #ef6b6b
                                &.success
                                    button
                                        background-color: #95d2b0
                                &.loading
                                    button
                                        background-color: #d2d095   

                                > .row
                                    margin-bottom: 10px

                                    &:last-child
                                        margin: 0

                                input,
                                button
                                    height: 36px
                                    border: none
                                    outline: none
                                    font-size: 14px
                                    min-width: 240px
                                    padding: 5px 10px
                                    border-radius: 4px
                                    box-sizing: border-box
                                    color: rgba(255, 255, 255, .5)
                                    background-color: rgba(0, 0, 0, .25)
                                button
                                    color: #FFF
                                    font-size: 12px
                                    font-weight: 600
                                    letter-spacing: 1.2px
                                    text-transform: uppercase
                                    background-color: #619ce4

                                &:last-child
                                    margin: 0
</style>
