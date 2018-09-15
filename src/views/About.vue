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
                    .row
                        .col.col-2
                            .row
                                .col.col-2
                                    img(src='/static/images/team/01.png')
                                .col.col-2
                                    h3 Alyona Tkachenko
                                    span CEO

                                    p
                                        | 7+ years of experience in corporate
                                        | segment, with focus on eCom/digital.
                                        | Works on popularizing of STEM among
                                        | women. Marketing and business
                                        | development expertise

                                    ul.list
                                        li: a(href='https://www.facebook.com/tkachenko.alyona', target='_blank'): i(class='fab fa-facebook')
                                        li: a(href='https://www.linkedin.com/in/alyonatkachenko/', target='_blank'): i(class='fab fa-linkedin')
                        .col.col-2
                            .row
                                .col.col-2
                                    img(src='/static/images/team/02.png')
                                .col.col-2
                                    h3 Kairat Akhmetov
                                    span CTO

                                    p
                                        | MIPT graduate, 15+ years in ICT
                                        | industry, started first company 12 years
                                        | ago, now leading KZ smart-city company,
                                        | 100+ staff. Telecom, hardware and
                                        | software expertise

                                    ul.list
                                        li: a(href='https://www.facebook.com/kayrat.ahmetov', target='_blank'): i(class='fab fa-facebook')
                                        li: a(href='https://www.linkedin.com/in/kairatakhmetov/', target='_blank'): i(class='fab fa-linkedin')
                    .row
                        .col.col-2
                            .row
                                .col.col-2
                                    img(src='/static/images/team/03.png')
                                .col.col-2
                                    h3 Nazym Skakova
                                    span Strategic Partnership Lead

                                    p
                                        | Degree in IT, additional certification at
                                        | Malaysia Multimedia University. Manages
                                        | corporate (some are Forbes 500) clients
                                        | within multiple CIS countries

                                    ul.list
                                        li: a(href='https://www.facebook.com/nazym.skakova', target='_blank'): i(class='fab fa-facebook')
                                        li: a(href='https://www.linkedin.com/in/nazym-skakova-9115a3ab/', target='_blank'): i(class='fab fa-linkedin')
                        .col.col-2
                            .row
                                .col.col-2
                                    img(src='/static/images/team/04.png')
                                .col.col-2
                                    h3 Aituar Atabekov
                                    span Technical director

                                    p
                                        | Interested in hardware from 6 years old.
                                        | FInalist of international math/robotics
                                        | competition in Sweden. Degree in
                                        | IT & Certificate at Korean UNIST with the
                                        | focus on architecture and hardware

                                    ul.list
                                        li: a(href='https://www.facebook.com/aituarr', target='_blank'): i(class='fab fa-facebook')
                                        li: a(href='https://www.linkedin.com/in/aituar-atabekov-b346508b/', target='_blank'): i(class='fab fa-linkedin')
                    .row
                        .col.col-2
                            .row
                                .col.col-2
                                    img(src='/static/images/team/05.png')
                                .col.col-2
                                    h3 Yernur Kenzhebayev
                                    span Hardware engineer

                                    p
                                        | Finalist of international computer project
                                        | competition.Interested in IoT and
                                        | Hardware from 17 years old. Information
                                        | Technology Degree.
                        .col.col-2
                            .row
                                .col.col-2
                                    img(src='/static/images/team/06.png')
                                .col.col-2
                                    h3 Dana Malayeva
                                    span PR & Communication

                                    p
                                        | Degree in IT, winner of a number of
                                        | international projects on robotics and
                                        | space research. Projects coordination
                                        | at Forbes Kazakhstan experience

                                    ul.list
                                        li: a(href='https://www.facebook.com/dana.malayeva', target='_blank'): i(class='fab fa-facebook')
                                        li: a(href='https://www.linkedin.com/in/dana-malayeva-1ba7b9113/', target='_blank'): i(class='fab fa-linkedin')
                    .row
                        .col.col-2
                            .row
                                .col.col-2
                                    img(src='/static/images/team/07.png')
                                .col.col-2
                                    h3 Diana Kozhakhmet
                                    span Customer experience manager

                                    p
                                        | Degree in Literature and Linguistics,
                                        | additional certificate from University of
                                        | Malaya (Malaysia)

                                    ul.list
                                        li: a(href='https://www.facebook.com/di.kozhakhmet', target='_blank'): i(class='fab fa-facebook')
                                        li: a(href='https://www.linkedin.com/in/ACoAACd5T9UBTIrGEGJ6jVZDRQ17cL_JW3aKRGI/', target='_blank'): i(class='fab fa-linkedin')
        .row
            Subscribe
</template>

<script>
    import Subscribe from '@/components/Subscribe.vue'

    export default {
        name: 'About',

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
