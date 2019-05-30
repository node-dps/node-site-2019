<template>
    <div id="view_container">
        <navbarComponent v-bind:color="navColor"/>

        <section class="landing first">
            <h1 class="title">Achievements</h1>
            <no-ssr><vue-particles></vue-particles></no-ssr>
        </section>
    
        <section class="events_container">
            <div class="table">
                <table class="events">
                    <tr class="head">
                        <th>Year</th>
                        <th>Symposium</th>
                        <th>Host</th>
                        <th class="center">Awards Won</th>
                        <!-- <th class="center">Details</th> -->
                    </tr>
                    <tr v-for="e in events" :key='e.$index'>
                        <td>{{ e.year }}</td>
                        <td>{{ e.name }}</td>
                        <td>{{ e.host }}</td>
                        <td class="center">{{ e.awards.length }}</td>
                        <!-- <td class="center arrow"><p><span>&#x276F;</span></p></td> -->
                    </tr>
                </table>
            </div>
        </section>
        
        <footerComponent v-bind:color="footerColor" />
    </div>
</template>
<script>
import navbarComponent from '~/components/navbar';
import footerComponent from '~/components/footer';

import { achievements } from '~/static/data/events'

export default {
    name: 'achievements',
    head(){
        return {
            title: 'Achievements | Node',
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
            footerColor: 'dark',
            events: achievements
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

                $('.events_container, .landing.first').css({
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