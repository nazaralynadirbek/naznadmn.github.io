<template lang="pug">
    .views__home
        transition-group(class='row slides', name='fade', mode='in-out', tag='div')
            .row(
                v-for='slide in slides',
                :key='slide.src',
                v-if='slide.active',
                :style='{ backgroundImage: \'url(\' + slide.src + \')\' }',
                :class='slide.class')

                .container
                    .row
                        p(v-html='slide.description') {{ slide.description }}
                    .row
                        .col.col-2(@click='onLeft')
                            i(class='fas fa-angle-left')
                        .col.col-2(@click='onRight')
                            i(class='fas fa-angle-right')

        .row.media
            .container
                ul.list
                    li: a(href='https://techstartups.com/2017/12/11/nommi-the-worlds-first-mobile-router-with-4g-hotspot-and-unlimited-wi-fi-worldwide/', target='_blank'): img(src='/static/images/media/01.png')
                    li: a(href='http://backerclub.co/project.php?id=12032', target='_blank'): img(src='/static/images/media/02.png')
                    li: a(href='https://e27.co/startup/nommi', target='_blank'): img(src='/static/images/media/03.png')
                    li: a(href='https://www.techtudo.com.br/noticias/2017/12/roteador-portatil-nommi-promete-wi-fi-ilimitado-em-qualquer-lugar.ghtml', target='_blank'): img(src='/static/images/media/04.png')
                    li: a(href='https://the-steppe.com/news/razvitie/2017-09-05/kak-zapuskat-kraudfanding-na-kickstarter', target='_blank'): img(src='/static/images/media/05.png')
                    li: a(href='https://forbes.kz/process/technologies/kazahstanskiy_startap_sobral_s_miru_po_nitke_92_tyis/', target='_blank'): img(src='/static/images/media/06.png')
        .row.features
            .container
                .row
                    h1 Meet Nommi
                    p 4G Hotspot with Unlimited Wi-Fi Worldwide
                .row
                    .col.col-2
                        ul.list
                            li
                                p Virtual sim
                                span Removes the need to buy a local SIM in every country you visit or expensive data roaming
                            li
                                p Minimalist design
                                span Created to take up minimal space in your already packed suitcase
                            li
                                p Dual Wi-Fi
                                span Gives you access to global Wi-Fi database
                    .col.col-2
                        ul.list
                            li
                                p Wi-Fi Extender
                                span Doubles your home Wi-Fi network coverage
                            li
                                p VPN
                                span Connects you to public Wi-Fi networks with automatic encryption of data
                            li
                                p Wireless charging
                                span Place and charge your phone with QI charger
        .row.models
            .row
                .container
                    .col.col-2
                        //-
                    .col.col-2
                        h2 Nommi Slim
                        p
                            | A unique product with compact design and weight,
                            | that do not feel in hand, and allow to fit him anywhere,
                            | for example: in a folder with documents and take up minimal
                            | space in your already packed suitcase. #[br]
                            | We've made it with all your considerations in mind, to be lighter and comfortable.

                        a(href='https://www.indiegogo.com/projects/nommi-4g-hotspot-with-unlimited-wi-fi-worldwide#/', target='_blank')
                            | Get it
                            i(class='fas fa-angle-right')
            .row
                .container
                    .col.col-2
                        h2 Nommi Power
                        p
                            | In Power version we have implemented a powerful power bank for your convenience.
                            | You do not have to take two devices with you or did it happen that there was not an outlet nearby? #[br]
                            | This will be the best tool for permanent travel, Wi-Fi router and power bank in one device.
                            | A powerbank and Qi wireless charger, removing low battery problem. It is our biggest gift for you.

                        a(href='https://www.indiegogo.com/projects/nommi-4g-hotspot-with-unlimited-wi-fi-worldwide#/', target='_blank')
                            | Get it
                            i(class='fas fa-angle-right')
                    .col.col-2
                        //-
        .row
            Subscribe()
</template>

<script>
    import Subscribe from '@/components/Subscribe.vue'

    export default {
        name: 'Home',

        data() {
            return {
                interval: null,

                //-
                slides: [{
                    active      : true,
                    src         : '/static/images/slides/02.jpg',
                    class       : 'top white',
                    description : 'Charge your phone <span>using QI wireless charger</span>'
                }, {
                    active      : false,
                    src         : '/static/images/slides/01.jpg',
                    class       : 'top',
                    description : 'Choose data <span>packages according <br /> to your needs</span>'
                }, {
                    active      : false,
                    src         : '/static/images/slides/03.jpg',
                    class       : 'right',
                    description : 'Stay online in 150+ <span>countries</span>'
                }, {
                    active      : false,
                    src         : '/static/images/slides/04.jpg',
                    class       : 'right',
                    description : 'Protect your information <span>through <br /> built-in VPN</span>'
                }, {
                    active      : false,
                    src         : '/static/images/slides/05.jpg',
                    class       : 'top',
                    description : 'Get access to million <span>public Wi-Fi</span>'
                }]
            }
        },

        components: {
            Subscribe
        },

        mounted() {
            this.onMounted()
        },

        beforeDestroy() {
            clearInterval(this.interval)
        },

        methods: {
            onSlide() {
                let slide;

                //-
                slide = this.slides[0];

                //-
                this.slides.shift();

                slide.active          = !slide.active;
                this.slides[0].active = !this.slides[0].active;

                //-
                this.slides.push(slide);
            },
            onMounted() {
                this.interval = setInterval(() => {
                    this.onSlide()
                }, 10000)
            },
            onLeft() {
                clearInterval(this.interval);

                //-
                let slide;

                //-
                slide = this.slides[this.slides.length - 1];

                //-
                this.slides.pop();

                slide.active          = !slide.active;
                this.slides[0].active = !this.slides[0].active;

                //-
                this.slides.unshift(slide);

                //-
                this.onMounted();
            },
            onRight() {
                clearInterval(this.interval);

                //-
                this.onSlide();

                //-
                this.onMounted();
            }
        }
    }
</script>

<style lang="sass">
    .views__home
        > .row
            &.slides
                height: 561px
                overflow: hidden
                position: relative

                > .row
                    top: 0
                    left: 0
                    width: 100%
                    height: 100%
                    padding: 80px 0
                    position: absolute
                    text-align: center
                    box-sizing: border-box
                    background-repeat: no-repeat
                    background-position: center bottom

                    p
                        top: 0
                        left: 50%
                        font-size: 18px
                        font-weight: 500
                        line-height: 28px
                        position: absolute
                        transform: translate(-50%, 0)

                        span
                            display: block
                            font-weight: 600
                            text-transform: uppercase

                    .container
                        height: 100%
                        position: relative

                        > .row
                            height: 100%
                            position: relative

                            &:first-child
                                margin: 0 100px
                                box-sizing: border-box
                                width: calc(100% - 200px)
                            &:last-child
                                top: 0
                                left: 0
                                width: 100%
                                position: absolute
                                line-height: 401px

                                .col-2
                                    width: 80px
                                    opacity: .5
                                    cursor: pointer
                                    font-size: 24px
                                    text-align: center
                                    margin-right: calc(100% - 160px)

                                    &:hover
                                        opacity: .25

                                    &:last-child
                                        margin: 0

                    &.right
                        p
                            top: 50%
                            right: 0
                            text-align: right
                            position: absolute
                            transform: translate(0, -50%)

                    &.white
                        color: #FFF

            &.media
                padding: 40px 0
                background-color: #fff
                box-shadow: 0 15px 25px rgba(0, 0, 0, .1)

                ul
                    font-size: 0
                    text-align: center

                    li
                        margin-right: 40px
                        display: inline-block
                        vertical-align: middle

                        a
                            display: block

                            img
                                width: 80%

                        &:last-child
                            margin: 0

            &.features
                text-align: center
                margin-bottom: 80px
                padding: 80px 0 160px 0
                background-size: 260px auto
                background-repeat: no-repeat
                background-position: center bottom
                background-image: url('/static/images/visuals/features.png')

                p
                    font-size: 16px
                h1
                    font-size: 24px
                    text-transform: uppercase

                .row
                    .col-2
                        text-align: left
                        margin-right: 460px
                        width: calc((100% - 460px) / 2)

                        ul
                            font-size: 0

                            li
                                margin-bottom: 40px

                                p
                                    font-size: 16px
                                    font-weight: 500
                                    margin-bottom: 10px
                                    text-transform: uppercase
                                span
                                    color: #767676
                                    font-size: 16px
                                    line-height: 20px

                                &:last-child
                                    margin: 0

                        &:last-child
                            margin: 0
                            text-align: right

                    &:first-child
                        margin-bottom: 40px

            &.models
                > .row
                    width: 100%
                    color: #b5b5b5
                    display: table
                    padding: 80px 0

                    .col-2
                        width: 50%
                        height: 400px
                        padding: 0 40px
                        text-align: center
                        display: table-cell
                        vertical-align: middle

                        a
                            color: #619ce4
                            font-size: 18px

                            i
                                margin-left: 10px
                        p
                            font-size: 16px
                            line-height: 20px
                            margin-bottom: 40px

                            br
                                content: ''
                                display: block
                                margin-bottom: 20px

                        h2
                            font-size: 24px
                            margin-bottom: 40px
                            text-transform: uppercase

                    &:first-child
                        background-color: #2b2c2c

                        .col-2
                            &:first-child
                                background-size: contain
                                background-repeat: no-repeat
                                background-position: left bottom
                                background-image: url('/static/images/visuals/slim.models.png')

                    &:last-child
                        color: #2d2d2d
                        background-size: auto 100%
                        background-repeat: no-repeat
                        background-position: center center
                        background-image: url('/static/images/visuals/power.models.png')
</style>
