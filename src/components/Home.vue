<template>
    <div id="view_container">
        <section class="landing first">
            <div class="graphic">
            </div>
            <div class="boxes" data-easy-reveal>
                <vue-particles></vue-particles>
                <div class="box-front">
                    <div class="alphanode">
                        <h1>Alpha<span class="green">node</span><sup></sup></h1>
                        <h3>2019</h3>
                    </div>
                </div>
                <div class="text">
                    <h1>What is new?</h1>
                    <p>For the 5th anniversary of Alpha<span class="green">node</span>, we have decided to add some new events to our list - <b>RoboCTRL</b> and <b>ScriptRoyale</b>. <br><br>Details will be available soon!</p>
                </div>
            </div>
            <div class="scroll-icon">
                <div class="wheel"></div>
            </div>
        </section>
        <section class="about">
            <h1>About <span class="green">Node</span></h1>
            <p>Node, the technology club of Delhi Public School, Sector 45, Gurgaon, is reputed for its commitment to honing digital skills among young enthusiasts. At Node, we believe that our future is what governs our today; and our passion is what drives us to our tomorrow.<br><br>Today, Node has 100+ computer enthusiasts, from classes VI - XII, each excelling in specific fields like programming, machine learning, digital imaging, motion graphics, photography, video editing, app development, web development, quiz and robotics.<br><br>Alphanode, the annual tech symposium conducted by Node in the month of July, is widely considered to be among the most prestigious events in the Delhi - NCR tech circuit.</p>
        </section>
        <section class="growth">
            <h1>Growth of Alpha<span class="green">node</span></h1>
            <p>Alpha<span class="green">node</span> started in 2015 with 6 events and ~100 participants, and has been consistent in its growth since then. Alpha<span class="green">node</span> 2019 is expects to attract 600+ students from 25+ schools competing in 14 creative events. With student written bots competing against each other in a game of modified checkers, autonomous robots and online cryptic hunts, Alpha<span class="green">node</span> 2019 will be one of the most unique tech symposiums in Delhi-NCR.</p>
            <!--<div class="stats">
                <div class="stat events"><span>{{ stats.events }}</span>
                    <p>No. of Events</p>
                </div>
                <div class="stat schools"><span>{{ stats.schools }}</span>
                    <p>No. of Schools</p>
                </div>
                <div class="stat participants"><span>{{ stats.participants }}</span>
                    <p>No. of participants</p>
                </div>
            </div>
            <h2>[ Stats from Alpha<span class="green">node</span> 2018 ]</h2>-->
            
        </section>
        <!-- <router-link to="/members" @click.native="showNav = false" class="team-btn">Meet our team</router-link> -->
    </div>
</template>
<script>
export default {
    name: 'home',
    data: function() {
        return {
            stats: {
                events: 10,
                schools: 17,
                participants: 400
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this.onloadAnims();
        }, 0);

        $(document).scroll(function() {
            $('.scroll-icon').css({ opacity: 0 });
        });

        this.onscrollAnims();
        window.addEventListener('scroll', this.onscrollAnims);
    },
    methods: {
        onloadAnims: function() {
            if (window.innerWidth >= 1025) {
                //desktop only animations
                $('.boxes > .box-front').css({ transform: 'translate(-25%, 0)', opacity: 1 });
                $('.boxes').css({ transform: 'translate(0,0)', opacity: 1 });
                $('.text').css({ opacity: 1 });
            } else {
                //mobile view animations
            }
            //common animations
            $('.scroll-icon').css({ opacity: 0.4 });
        },
        onscrollAnims: function() {
            if ($(window).scrollTop() >= $('section.growth').offset().top - window.innerHeight * 0.75) {
                $('section.growth').css({ opacity: 1, transform: 'translate(0,0)' });
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../sass/home';
</style>