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
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: "app",
    data: function() {
        return {
            showNav: false,
            scrollPos: 0,
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
</style>