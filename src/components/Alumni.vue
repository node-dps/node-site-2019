<template>
    <div id="view_container">
        <section class="landing first">
            <h1 class="title">Alumni</h1>
            <vue-particles></vue-particles>
        </section>
        <section class="members">
            <div class="ppl">
                <div class="row">
                    <div class="member alumni">
                        <div class="dp"><img src="../assets/members/rahul-batra.png"></div>
                        <h1 class="name">Rahul Batra</h1>
                        <p class="info">Freelance web designer / visual artist. Currently intending to major in economics/statistics.</p>
                        <div class="container">
                            <div class="links">
                                <!-- <p class="heading">Links</p> -->
                                <a href="https://rahulbatra.in" class="link" target="_blank"><img src="../assets/icons/website.png"></a>
                                <a href="https://github.com/RahulBatra065" class="link" target="_blank"><img src="../assets/icons/github.png"></a>
                                <a href="https://www.behance.net/rahulbatra1" class="link" target="_blank"><img src="../assets/icons/behance.png"></a>
                            </div>
                        </div>
                    </div>
                    <div class="member alumni">
                        <div class="dp"><img src="../assets/members/rahul-batra.png"></div>
                        <h1 class="name">Rahul Batra</h1>
                        <p class="info">Freelance web designer / visual artist. Currently intending to major in economics/statistics.</p>
                        <div class="container">
                            <div class="links">
                                <!-- <p class="heading">Links</p> -->
                                <a href="https://rahulbatra.in" class="link" target="_blank"><img src="../assets/icons/website.png"></a>
                                <a href="https://github.com/RahulBatra065" class="link" target="_blank"><img src="../assets/icons/github.png"></a>
                                <a href="https://www.behance.net/rahulbatra1" class="link" target="_blank"><img src="../assets/icons/behance.png"></a>
                            </div>
                        </div>
                    </div>
                    <div class="member alumni">
                        <div class="dp"><img src="../assets/members/rahul-batra.png"></div>
                        <h1 class="name">Rahul Batra</h1>
                        <p class="info">Freelance web designer / visual artist. Currently intending to major in economics/statistics.</p>
                        <div class="container">
                            <div class="links">
                                <!-- <p class="heading">Links</p> -->
                                <a href="https://rahulbatra.in" class="link" target="_blank"><img src="../assets/icons/website.png"></a>
                                <a href="https://github.com/RahulBatra065" class="link" target="_blank"><img src="../assets/icons/github.png"></a>
                                <a href="https://www.behance.net/rahulbatra1" class="link" target="_blank"><img src="../assets/icons/behance.png"></a>
                            </div>
                        </div>
                    </div>
                    <div class="member alumni">
                        <div class="dp"><img src="../assets/members/rahul-batra.png"></div>
                        <h1 class="name">Rahul Batra</h1>
                        <p class="info">Freelance web designer / visual artist. Currently intending to major in economics/statistics.</p>
                        <div class="container">
                            <div class="links">
                                <!-- <p class="heading">Links</p> -->
                                <a href="https://rahulbatra.in" class="link" target="_blank"><img src="../assets/icons/website.png"></a>
                                <a href="https://github.com/RahulBatra065" class="link" target="_blank"><img src="../assets/icons/github.png"></a>
                                <a href="https://www.behance.net/rahulbatra1" class="link" target="_blank"><img src="../assets/icons/behance.png"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'alumni',
    mounted(){
        window.addEventListener('scroll', this.onscrollAnims);
    },
    destroyed() {
        window.removeEventListener('scroll', this.onscrollAnims);
    },
    methods: {
        onscrollAnims: function(){
            if(window.innerWidth >= 1025){
                let scrolledFrac = $(window).scrollTop() / $(window).height();
                let opacityFunction = Math.min(1, 1.2 - 1.5 * scrolledFrac);
                let parallaxFunction = (scrolledFrac * $(window).height() / 2);
                
                $('.title').css({
                    opacity: opacityFunction,
                    top: 'calc(50% + ' + parallaxFunction + 'px)'
                });
                
                let currentColor = $('.members').css('background-color');
                let colorCode = currentColor.split('(')[1].split(')')[0].split(',');
                let newColor = 'rgba(' + colorCode[0] + ',' + colorCode[1] + ',' + colorCode[2] + ', ' + opacityFunction + ')';

                $('.members, .landing.first').css({
                    backgroundColor: newColor
                });
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../sass/alumni';
</style>