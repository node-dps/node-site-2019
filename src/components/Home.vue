<template>
    <div id="view_container">
        <section class="landing first">
            <div class="graphic">
                
            </div>
            <div class="boxes">
                <vue-particles></vue-particles>
                <div class="box-front">
                    <div class="alphanode">
                        <h1>Alpha<span class="green">node</span><sup></sup></h1>
                        <h3>2019</h3>
                    </div>
                </div>
    
                <div class="text">
                    <h1>What is new?</h1>
                    <p>For the 5th anniversary of alpha<span class="green">node</span>, we have decided to add some new events to our list - <b>RoboCTRL</b> and <b>ScriptRoyale</b>. <br><br>Details will be available soon!</p>
                </div>
            </div>
    
            <div class="scroll-icon">
                <div class="wheel"></div>
            </div>
        </section>
    
        <section class="about">
            <h1>What is node?</h1>
            <p>Node, the technology club of Delhi Public School, Sector 45, Gurgaon, is reputed for its commitment to honing digital skills among young enthusiasts.<br><br>Today, node has 100+ members, from classes VI - XII, each excelling in specific fields like programming, machine learning, digital imaging, motion graphics, photography, video editing, app development, web development, quiz and robotics.<br><br>Alphanode is the annual tech symposium conducted by node, and is widely considered to be among the most prestigious events in the Delhi - NCR tech circuit.</p>
        </section>
    </div>
</template>

<script>
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
        if(window.innerWidth >= 1025){
            $('.boxes > .box-front').css({transform: 'translate(-25%, 0)', opacity: 1});
        }else{
            $('.boxes > .box-front').css({transform: 'translate(0, 0)', opacity: 1});
        }
        $('.text').css({opacity: 1});
        $('.scroll-icon').css({opacity: 0.4});
    }
}
}
</script>

<style lang="scss" scoped>
@import '../sass/home';
</style>
