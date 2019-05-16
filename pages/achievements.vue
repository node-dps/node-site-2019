<template>
    <div id="view_container">
        <navbarComponent v-bind:color="navColor"/>

        <section class="landing first">
            <h1 class="title">Achievements</h1>
            <no-ssr><vue-particles></vue-particles></no-ssr>
        </section>
        <section class="list_container">
            <div class="list">
                <ul>
                    <div class="chunk">
                        <div class="year-container">
                            <h1 class="year">2018</h1>
                        </div>
                        <li class="list-entry">
                            <h2>iON</h2>
                            <aside>Symposium @ Indraprastha International School, Dwarka</aside>
                            <p>App Development, 3rd</p>
                            <p>IdeaTech, 2nd</p>
                        </li>
                        <li class="list-entry">
                            <h2>IT@Cutting Edge</h2>
                            <aside>Symposium @ Delhi Public School, Noida</aside>
                            <p>Competitive Programming, 2nd</p>
                            <p>Group Discussion, 3rd</p>
                        </li>
                        <li class="list-entry">
                            <h2>India Fest</h2>
                            <aside>Delhi Public School R.K. Puram</aside>
                            <p>Reality Through the Reel, Runners Up</p>
                        </li>
                        <li class="list-entry">
                            <h2>Ecollosseum</h2>
                            <aside>DAV Sector-49, Gurgaon</aside>
                            <p>Quiz, 1st</p>
                            <p>Gaming, 1st</p>
                            <p>Group Discussion, 1st</p>
                            <p>Audio Mixing, 1st</p>
                            <p>Game Development, Runners Up</p>
                            <p>Buzz Talk, Runners Up</p>
                        </li>
                        <li class="list-entry">
                            <h2>Learner’s Conclave</h2>
                            <aside>Lotus Valley International, Gurgaon</aside>
                            <p>Artificial Intelligence - The Future and Us, Runners Up</p>
                        </li>
                    </div>
                    <!-- <div class="chunk">
                        <div class="year-container">
                            <h1 class="year">2017</h1>
                        </div>
                        <li class="list-entry">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quidem repudiandae soluta?</li>
                        <li class="list-entry">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quidem repudiandae soluta?</li>
                        <li class="list-entry">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quidem repudiandae soluta?</li>
                        <li class="list-entry">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quidem repudiandae soluta?</li>
                    </div> -->
                </ul>
            </div>
        </section>
        
        <footerComponent v-bind:color="footerColor" />
    </div>
</template>
<script>
import navbarComponent from '~/components/navbar';
import footerComponent from '~/components/footer';

export default {
    name: 'achievements',
    head(){
        return {
            title: 'Node - Achievements',
            meta: [{
                hid: 'Achievements',
                name: 'Achievements',
                content: 'Achievements Of Node Club'
            }]
        }
    },
    components: {
        navbarComponent,
        footerComponent
    },
    data: function(){
        return{
            navColor: 'transparent-light',
            footerColor: 'dark'
        }
    },
    mounted() {
        this.onscrollAnims();
        window.addEventListener('scroll', this.onscrollHandler);
    },
    destroyed() {
        window.removeEventListener('scroll', this.onscrollHandler);
    },
    methods: {
        onscrollHandler: function(){
            if(window.scrollY != 0){
                this.navColor = 'light';
            }else{
                this.navColor = 'transparent-light';
            }

            this.onscrollAnims();
        },
        onscrollAnims: function(){
            //background-change function
            if(window.innerWidth >= 1025){
                let scrolledFrac = $(window).scrollTop() / $(window).height();
                let opacityFunction = Math.min(1, 1.2 - 1.5 * scrolledFrac);
                let parallaxFunction = (scrolledFrac * $(window).height() / 2);
                
                $('.title').css({
                    opacity: opacityFunction,
                    top: 'calc(50% + ' + parallaxFunction + 'px)'
                });
                
                let currentColor = $('.landing.first').css('background-color');
                let colorCode = currentColor.split('(')[1].split(')')[0].split(',');
                let newColor = 'rgba(' + colorCode[0] + ',' + colorCode[1] + ',' + colorCode[2] + ', ' + opacityFunction + ')';

                $('.list_container, .landing.first').css({
                    backgroundColor: newColor
                });
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import 'assets/sass/achievements';
</style>