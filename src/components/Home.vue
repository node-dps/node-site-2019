<template>
    <section class="landing first">
        <div class="boxes" id="particles-js">
            <vue-particles></vue-particles>
            <div class="box-front">
                <div class="alphanode">
                    <h1>Alpha<span>node</span><sup></sup></h1>
                    <h3>2019</h3>
                </div>
            </div>

            <div class="text">
                <h1>What is new?</h1>
                <p>For the 5th anniversary of alpha<span>node</span>, we have decided to add some new events to our list - <b>RoboCTRL</b> and <b>ScriptRoyale</b>. <br><br>Details will be available soon!</p>
            </div>
        </div>

        <div class="scroll-icon">
            <div class="wheel"></div>
        </div>
    </section>
</template>

<script>
import $ from 'jquery'
export default {
name: 'home',
mounted() {
    setTimeout(() => {
        this.onloadAnims();
    }, 0);

    $(document).scroll(function(){
        $('.scroll-icon').css({opacity: 0});
    });
},
methods: {
    onloadAnims: function() {
        $('.boxes').css({transform: 'translate(0,0)', opacity: 1});
        $('.boxes > .box-front').css({transform: 'translate(-25%,0)', opacity: 1});
        $('.text').css({opacity: 1});
        $('.scroll-icon').css({opacity: 0.4});
    }
}
}
</script>

<style lang="scss" scoped>
@import '../sass/home';
</style>
