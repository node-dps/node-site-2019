<template>
    <div id="page_container">
        <nav v-if="showNav" class="navbar" v-bind:class="navColor">
            <div class="cross" v-on:click="expandNav = !expandNav" v-bind:class="{'show': expandNav}">
                <span class="one"></span>
                <span class="two"></span>
                <span class="three"></span>
            </div>
            <div class="icons" v-bind:class="{'show': expandNav}">
                <router-link to="/" @click.native="expandNav = false"><img src="./assets/icons/nodelogo.png" class="logo"></router-link>
            </div>
            <div class="links" v-bind:class="{'show': expandNav}">
                <router-link v-for="item in navbar" :key="item.$index" :to="item.href" @click.native="expandNav = false" class="nav-item">{{ item.name }}</router-link>
            </div>
        </nav>
        <router-view
            v-on:emit-footer-color="processFooterColor"
            v-on:emit-nav-color="processNavColor"
            v-on:emit-no-nav="removeNav"
            v-on:emit-no-footer="removeFooter"
        ></router-view>
        <footer v-if="showFooter" v-bind:class="footerColor">
            <p class="made-with-love">Made with <img src="./assets/icons/heart.svg" class="heart"> by <span class="green">Node</span></p>
            <div class="content">
                <div class="information">
                    <p class="intro">Network of Digital Enthusiasts<br><br>Delhi Public School<br>Site No. 1, Urban Estate<br>Sector-45, Gurgaon</p>
                    <div class="contact-details">
                        <p class="contact"><a href="mailto:node.dps.ggn@gmail.com">node.dps.ggn@gmail.com</a></p>
                        <div class="links">
                            <a class="link" href="https://www.behance.net/nodedps" target="_blank">
                                <img class="icon" v-if="footerColor == 'dark'" src="./assets/icons/behance-light.png">
                                <img class="icon" v-else src="./assets/icons/behance.png">
                                <p class="name">Behance</p>
                            </a>
                            <a class="link" href="https://twitter.com/decode_node" target="_blank">
                                <img class="icon" v-if="footerColor == 'dark'" src="./assets/icons/twitter-light.png">
                                <img class="icon" v-else src="./assets/icons/twitter.png">
                                <p class="name">Twitter</p>
                            </a>
                            <a class="link" href="https://www.facebook.com/node.dps/" target="_blank">
                                <img class="icon" v-if="footerColor == 'dark'" src="./assets/icons/facebook-light.png">
                                <img class="icon" v-else src="./assets/icons/facebook.png">
                                <p class="name">Facebook</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="gmap"></div>
            </div>
        </footer>
    </div>
</template>
<script>
import gmaps from './js/gmaps.js';

export default {
    name: "app",
    data: function() {
        return {
            showNav: true,
            showFooter: true,
            expandNav: false,
            scrollPos: 0,
            navColor: 'light',
            footerColor: 'dark',
            navbar: [{
                    name: "Alphanode",
                    href: "alphanode"
                },
                {
                    name: "Team",
                    href: "team"
                },
                {
                    name: "Alumni",
                    href: "alumni"
                },
                {
                    name: "Achievements",
                    href: "achievements"
                }
            ]
        };
    },
    created() {
        //no jQuery available at this point
        setTimeout(() => {
            document.querySelector('.navbar').style.transform = 'translate(-50%, 0)';
        }, 0);
        window.addEventListener('scroll', this.navbarScrollHandler);
    },
    async mounted(){
        try {
            const google = await gmaps();

            let mapProp= {
                center:new google.maps.LatLng(28.442048,77.064731),
                zoom:18,
            };

            const map = new google.maps.Map(document.getElementById('gmap'), mapProp);

        } catch (error) {
            console.error(error);
        }
    },
    destroyed() {
        window.removeEventListener('scroll', this.navbarScrollHandler);
    },
    methods: {
        processFooterColor: function(color){
            this.footerColor = color;
        },
        processNavColor: function(color){
            this.navColor = color;
        },
        removeFooter: function(val){
            this.showFooter = !val;
        },
        removeNav: function(val){
            this.showNav = !val;
        },
        navbarScrollHandler: function() {
            if(!this.expandNav && window.scrollY > 54){
                if (window.scrollY > this.scrollPos) {
                    document.querySelector('.navbar').style.transform = 'translate(-50%, -72px)';
                } else {
                    document.querySelector('.navbar').style.transform = 'translate(-50%, 0)';
                }
            }
            this.scrollPos = window.scrollY;
        }
    }
};
</script>
<style lang="scss">
@import './sass/navbar';
@import './sass/footer';
</style>