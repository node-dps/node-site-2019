<template>
    <div id="page_container">
        <nav class="navbar">
            <div class="cross" v-on:click="showNav = !showNav" v-bind:class="{'show': showNav}">
                <span class="one"></span>
                <span class="two"></span>
                <span class="three"></span>
            </div>
            <div class="icons">
                <router-link to="/" @click.native="showNav = false"><img src="./assets/icons/nodelogo.png" class="logo"></router-link>
            </div>
            <div class="links" v-bind:class="{'show': showNav}">
                <router-link v-for="item in navbar" :key="item.$index" :to="item.href" @click.native="showNav = false" class="nav-item">{{ item.name }}</router-link>
            </div>
        </nav>
        <router-view v-on:emit-footer-color="processFooterColor"></router-view>
        <footer v-bind:class="footerColor">
            <p>Made with <span class="green">&hearts;</span> by <span class="green">Node</span></p>
            <div class="links">
                <a class="link" href="" target="_blank" title="Behance">
                    <img class="icon" v-if="footerColor == 'dark'" src="./assets/icons/behance-light.png">
                    <img class="icon" v-else src="./assets/icons/behance.png">
                    <p class="name">Behance</p>
                </a>
                <a class="link" href="" target="_blank" title="Twitter">
                    <img class="icon" v-if="footerColor == 'dark'" src="./assets/icons/twitter-light.png">
                    <img class="icon" v-else src="./assets/icons/twitter.png">
                    <p class="name">Twitter</p>
                </a>
                <a class="link" href="" target="_blank" title="Facebook">
                    <img class="icon" v-if="footerColor == 'dark'" src="./assets/icons/facebook-light.png">
                    <img class="icon" v-else src="./assets/icons/facebook.png">
                    <p class="name">Facebook</p>
                </a>
                <a class="link" href="" target="_blank" title="Medium">
                    <img class="icon" v-if="footerColor == 'dark'" src="./assets/icons/medium-light.png">
                    <img class="icon" v-else src="./assets/icons/medium.png">
                    <p class="name">Medium</p>
                </a>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    name: "app",
    data: function() {
        return {
            showNav: false,
            scrollPos: 0,
            footerColor: 'null',
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
    destroyed() {
        window.removeEventListener('scroll', this.navbarScrollHandler);
    },
    methods: {
        processFooterColor: function(color){
            this.footerColor = color;
        },
        navbarScrollHandler: function() {
            if(!this.showNav && window.scrollY > 54){
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