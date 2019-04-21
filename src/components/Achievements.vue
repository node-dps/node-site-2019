<template>
    <div id="view_container">
        <section class="landing first">
            <h1 class="title">Achievements</h1>
            <vue-particles></vue-particles>
        </section>
        <section class="list_container">
            <div class="list">
                <ul>
                    <div class="chunk">
                        <div class="year-container">
                            <h1 class="year">2018</h1>
                        </div>
                        <li class="list-entry">Lorem ipsum, dolor sit amet cong elit. Molestias doloem cumque esse.</li>
                        <li class="list-entry">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dolor soluta dolorem cumque esse.</li>
                        <li class="list-entry">Lorem ipsum, dolor sit ametelit. Molestias dolor soluta dolorem cumque esse.</li>
                        <li class="list-entry">Lorem ipsum, dolor t consectetur adipisicing elit. Molestias dolor soluta dolorem cumque esse.</li>
                    </div>
                    <div class="chunk">
                        <div class="year-container">
                            <h1 class="year">2017</h1>
                        </div>
                        <li class="list-entry">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quidem repudiandae soluta?</li>
                        <li class="list-entry">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quidem repudiandae soluta?</li>
                        <li class="list-entry">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quidem repudiandae soluta?</li>
                        <li class="list-entry">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quidem repudiandae soluta?</li>
                    </div>
                    <div class="chunk">
                        <div class="year-container">
                            <h1 class="year">2016</h1>
                        </div>
                        <li class="list-entry">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dolor soluta dolorem cumque esse.</li>
                        <li class="list-entry">Lorem ipsum, dolor sit amet cong elit. Molestias doloem cumque esse.</li>
                        <li class="list-entry">Lorem ipsum, dolor t consectetur adipisicing elit. Molestias dolor soluta dolorem cumque esse.</li>
                        <li class="list-entry">Lorem ipsum, dolor sit ametelit. Molestias dolor soluta dolorem cumque esse.</li>
                    </div>
                    <div class="chunk">
                        <div class="year-container">
                            <h1 class="year">2015</h1>
                        </div>
                        <li class="list-entry">Lorem ipsum, dolor t consectetur adipisicing elit. Molestias dolor soluta dolorem cumque esse.</li>
                        <li class="list-entry">Lorem ipsum, dolor sit ametelit. Molestias dolor soluta dolorem cumque esse.</li>
                        <li class="list-entry">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias dolor soluta dolorem cumque esse.</li>
                        <li class="list-entry">Lorem ipsum, dolor sit amet cong elit. Molestias doloem cumque esse.</li>
                    </div>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'achievements',
    data: function(){
        return{
            navColor: 'transparent-light',
            footerColor: 'dark'
        }
    },
    mounted() {
        this.$emit('emit-nav-color', this.navColor);
        this.$emit('emit-footer-color', this.footerColor);

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
                this.$emit('emit-nav-color', this.navColor);
            }else{
                this.navColor = 'transparent-light';
                this.$emit('emit-nav-color', this.navColor);
            }

            this.onscrollAnims();
        },
        onscrollAnims: function(){
            if(window.innerWidth >= 1025){
                let scrolledFrac = $(window).scrollTop() / $(window).height();
                let opacityFunction = Math.min(1, 1.2 - 1.5 * scrolledFrac);
                let parallaxFunction = (scrolledFrac * $(window).height() / 2);
                
                $('.title').css({
                    opacity: opacityFunction,
                    top: 'calc(50% + ' + parallaxFunction + 'px)'
                });
                
                let currentColor = $('.list_container').css('background-color');
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
@import '../sass/achievements';
</style>