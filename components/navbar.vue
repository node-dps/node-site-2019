<template>
    <nav class="navbar" v-bind:class="color">
      <div class="cross" v-on:click="expandNav = !expandNav" v-bind:class="{'show': expandNav}">
        <span class="one"></span>
        <span class="two"></span>
        <span class="three"></span>
      </div>
      <div class="icons" v-bind:class="{'show': expandNav}">
        <nuxt-link to="/" @click.native="expandNav = false">
          <img src="~/assets/images/icons/nodelogo.png" class="logo">
        </nuxt-link>
      </div>
      <div class="links" v-bind:class="{'show': expandNav}">
        <nuxt-link
          v-for="item in navbar"
          :key="item.$index"
          :to="item.href"
          @click.native="expandNav = false"
          class="nav-item"
        >{{ item.name }}</nuxt-link>
      </div>
    </nav>
</template>

<script>
import { navItems } from '~/static/data/navbar-items'

export default {
    name: 'navbarComponent',
    props: ['color'],
    data: function(){
        return {
            expandNav: false,
            navbar: navItems
        };
    },
    mounted(){
        $('.navbar').addClass('show');
        
        window.addEventListener('click', this.bodyLock);
        window.addEventListener('scroll', this.navbarScrollHandler);
    },
    destroyed() {
        window.removeEventListener('click', this.bodyLock);
        window.removeEventListener('scroll', this.navbarScrollHandler);
    },
    methods: {
        navbarScrollHandler: function() {
            if(!this.expandNav && window.scrollY > 54){
                if (window.scrollY > this.scrollPos) {
                    $('.navbar').css({
                        'transform': 'translate(-50%, -72px)'
                    });
                } else {
                    $('.navbar').css({
                        'transform': 'translate(-50%, 0)'
                    });
                }
            }
            this.scrollPos = window.scrollY;
        },
        bodyLock: function(){
            if(this.expandNav == true){
                document.documentElement.style.overflowY = 'hidden'
            }else{
                document.documentElement.style.overflowY = 'visible'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/sass/navbar';
</style>
