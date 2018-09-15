<template lang="pug">
    .views__description
        .row
            .container
                h1 Meet Nommi
                p
                    | Nommi is the world’s first mobile router that is both useful at home and abroad!
                    | Our combination of LTE hotspot, virtual sim technology and dual Wi-Fi allows a
                    | seamless connectivity experience around the world.

                a(href='https://www.youtube.com/watch?v=7238pufo8jk', target='_blank') watch the film
        .row.about
            .row.data
                .container
                    .col.col-2
                        .row
                    .col.col-2
                        h2 Data
                        span Nommi offers high quality global connection for all travel lovers

                        p
                            | While travelling Nommi allows you to focus on the ‘travel’ part.
                            | Nommi acts as a wireless hotspot for all your devices in over 150 countries. #[br]
                            | This means wherever you are traveling, you can stop stressing about buying, activating SIM cards.
                            | Just download our app on the App store or Google Play and choose data package suitable for you.
            .row.vpn
                .container
                    .col.col-2
                        h2 VPN
                        span Prevent unauthorized access to your personal data

                        p
                            | VPN extends a private network across a public network, and enables users to send
                            | and receive data across shared or public networks as if their computing devices were
                            | directly connected to the private network. #[br]
                            | Nommi is configured to automatically encrypt all your data through secure servers when
                            | you connect to public Wi-Fi networks. VPN brings extra security for your connection.
                    .col.col-2
                        .row
            .row.dual
                .container
                    .col.col-2
                        .row
                    .col.col-2
                        h2 DUAL Wi-Fi
                        span Nommi gives you unlimited access to it's worldwide Wi-Fi database

                        p
                            | Nommi’s unique dual Wi-Fi feature saves your cellular data by seamlessly connecting your
                            | device to public Wi-Fi networks. #[br]
                            | Nommi’s dual Wi-Fi feature is scans available Wi-Fi networks and it finds a quality Wi-Fi
                            | network, then it will check to see if our password database contains a password for it.
                            | If a password matches, Nommi will try to connect, testing the speed of the network
                            | without interrupting your current cellular connection.
            .row.qi
                .container
                    .col.col-2
                        h2 QI
                        span Place and charge

                        p
                            | QI is a wireless charging technology used to wirelessly
                            | power electronic devices such as smartphones,ect. #[br]
                            | Charge your phone using our Qi charger by simply placing
                            | your device directly onto the Nommi Power charging pad.
                    .col.col-2
                        .row
            .row.separate
                .container
                    .col.col-2
                        .row
                    .col.col-2
                        h2 Separate guest Wi-Fi
                        span Keep your personal network private but still share Nommi with friends

                        p
                            | Take your friends on a trip and do not worry about connecting
                            | to the Internet because professional Wi-Fi routers like Nommi
                            | will provide two networks connections. #[br]
                            | The primary is your own private Wi-Fi network, secured by a strong
                            | password ,to which you connect your own devices. The secondary is a
                            | guest Wi-Fi network made specifically for your friends that allows them
                            | to connect without password, but only asked for permissions. Via the app,
                            | you’ll also be able to see who is currently connected and how much data they’ve used.
            .row.extender
                .container
                    .col.col-2
                        h2 Range extender
                        span
                            | Your long distance relationship solved -
                            | Nommi provides a wider reach for low signal areas

                        p
                            | It’s fairly common to have low Wi-Fi signal depending on where
                            | your home router is located. #[br]
                            | Nommi will automatically extend to the fastest available nearby
                            | network, doubling your Wi-Fi signal range. With Nommi, you’ll
                            | never miss out on a strong Wi-Fi connection speed.
                    .col.col-2
                        .row
        .row
            Subscribe
</template>

<script>
    import Subscribe from '@/components/Subscribe.vue'

    export default {
        name: 'Description',

        components: {
            Subscribe
        }
    }
</script>

<style lang="sass">
    .views__description
        > .row
            &.about
                > .row
                    width: 100%
                    display: table

                    .col-2
                        width: 50%
                        color: #2d2d2d
                        padding: 80px 0
                        position: relative
                        display: table-cell

                        > .row
                            top: 0
                            left: 0
                            position: absolute
                            margin: 80px 40px 0
                            width: calc(100% - 80px)
                            background-size: contain
                            height: calc(100% - 80px)
                            background-repeat: no-repeat
                            background-position: center bottom

                        p
                            opacity: .6
                            font-size: 16px
                            line-height: 20px

                            br
                                content: ''
                                display: block
                                margin-bottom: 20px

                        h2
                            font-size: 24px
                            margin-bottom: 10px
                            text-transform: uppercase
                        span
                            display: block
                            font-size: 16px

                            &::after
                                content: ''
                                clear: both
                                width: 60px
                                height: 5px
                                display: block
                                margin-top: 20px
                                margin-bottom: 20px
                                background-color: #619ce4

                    &.data
                        .col-2 > .row
                            background-image: url('/static/images/visuals/data.about.png')
                    &.vpn
                        .col-2 > .row
                            background-image: url('/static/images/visuals/vpn.about.png')
                    &.dual
                        .col-2 > .row
                            background-image: url('/static/images/visuals/dual.about.png')
                    &.qi
                        .col-2 > .row
                            background-image: url('/static/images/visuals/qi.about.png')
                    &.separate
                        .col-2 > .row
                            background-image: url('/static/images/visuals/separate.about.png')
                    &.extender
                        .col-2 > .row
                            background-image: url('/static/images/visuals/extender.about.png')

                    &:nth-child(odd)
                        background-color: #dfdfdf

            &:first-child
                color: #FFF
                height: 400px
                padding: 80px 0
                position: relative
                text-align: center
                background-size: cover
                background-color: #4c4c4c
                border-top: 1px solid rgba(255, 255, 255, .05)

                a
                    color: #FFF
                    font-size: 18px
                    padding-top: 34px
                    background-size: auto 24px
                    background-repeat: no-repeat
                    background-position: top center
                    background-image: url('/static/images/icons/play.icons.png')

                    &:hover
                        opacity: .8

                    &::after
                        content: ''
                        clear: both
                        width: 60px
                        height: 5px
                        display: block
                        margin: 20px auto 0
                        background-color: #619ce4
                p
                    opacity: .6
                    font-size: 18px
                    font-weight: 500
                    line-height: 32px
                    margin-bottom: 160px
                h1
                    font-size: 32px
                    margin-bottom: 40px
                    text-transform: uppercase

                .container
                    z-index: 1
                    position: relative

                &::after
                    top: 0
                    left: 0
                    z-index: 0
                    content: ''
                    width: 100%
                    height: 100%
                    position: absolute
                    background-color: rgba(0, 0, 0, .25)

            &:last-child
                border-top: 1px solid #dcdcdc
</style>
