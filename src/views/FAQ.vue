<template lang="pug">
    .views__faq
        .row
            .container
                h1 FAQ

                p
                    | Here is the most common questions we receive about letter writing are answered here. #[br]
                    | If your question isn't listed, please let us know at #[a(href='mailto: hello@nommi.net') hello@nommi.net] and we'll get you an answer.
        .row.questions
            .container
                .row(v-for='question in questions', :class='{ active: question.active }')
                    .row(@click='question.active = !question.active')
                        h3
                            template(v-if='question.active')
                                i(class='fas fa-angle-up')
                            template(v-else)
                                i(class='fas fa-angle-down')

                            | {{ question.title }}
                    .row
                        p(v-html='question.description') {{ question.description }}
        .row
            Subscribe
</template>

<script>
    import Subscribe from '@/components/Subscribe.vue'

    export default {
        name: 'FAQ',

        data() {
            return {
                questions: [{
                    title       : 'How does Nommi work?',
                    active      : true,
                    description : 'It acts as personal global internet hub (mifi) without the need to get a new local sim card when you travel. Also it saves your data plan allowance by routing your traffic over wifi networks. The Power version has 10000 battery to provide power bank with QI wireless charging.'
                }, {
                    title       : 'How does the Nommi Power wireless charging work?',
                    active      : false,
                    description : 'Charge your phone using built-in Qi charger by simply placing your device directly onto the Nommi charging pad. No need to plug your device into a wall charger or USB port. Compatible with all Qi-enabled devices. (iPhone 8 and X, Samsung S5-S8, Note 5-Note 8. Full list here: http://qi-wireless-charging.net/qi-enabled-phones/ )'
                }, {
                    title       : 'Where can I download the Nommi mobile app?',
                    active      : false,
                    description : 'You can download the Nommi mobile app from App Store or Google Play. The app will be fully available before Nommi\'s shipping date (September 2018).'
                }, {
                    title       : 'How many devices can we connect to Nommi?',
                    active      : false,
                    description : 'Up to 5 devices - for Slim Nommi and up to 8 devices for Power Nommi'
                }, {
                    title       : 'How long does it take to fully charge the device?',
                    active      : false,
                    description : 'Nommi Power - about 5 hours <br /> Nommi Slim - about 2 hours'
                }, {
                    title       : 'How far does the wifi range extender go?',
                    active      : false,
                    description : 'Generally speaking, Nommi doubles your current wifi range. It will catch another network at 30-50 meters if no concrete walls between and interference (other closed wifis around) is not too much. For example, if your current home wifi router is on the 1st floor, covers the 2nd floor nicely but doesn’t work on the 3rd floor at all, then put Nommi at 2nd floor, it will cover 3rd floor nicely.'
                }, {
                    title       : 'In which countries can Nommi be used?',
                    active      : false,
                    description : 'Nommi can be used in 150 countries. '
                }]
            }
        },

        components: {
            Subscribe
        }
    }
</script>

<style lang="sass">
    .views__faq
        > .row
            &.questions
                padding: 40px 0

                .container
                    > .row
                        margin-bottom: 20px
                        padding-bottom: 20px
                        border-bottom: 1px solid #dcdcdc

                        > .row
                            display: none

                            p
                                font-size: 16px
                                line-height: 24px

                            &:first-child
                                display: block
                                cursor: pointer

                                h3
                                    font-size: 18px
                                    font-weight: 500

                                    i
                                        color: #619ce4
                                        margin-right: 10px

                        &.active
                            > .row
                                display: block

                                &:first-child
                                    margin-bottom: 10px

                        &:last-child
                            margin: 0
                            padding: 0
                            border: none

            &:first-child
                padding: 40px 0
                background-color: #f0f0f0

                p
                    color: #676464
                    font-size: 18px
                    line-height: 24px

                    a
                        color: #619ce4
                        text-decoration: underline
                h1
                    font-size: 28px
                    font-weight: 400
                    margin-bottom: 20px
            &:last-child
                border-top: 1px solid #dcdcdc
</style>
