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
                    <h1><span class="green">Innovation Awaits</span></h1>
                    <p>Alphanode 2019 will harbor a multitude of innovative events, ranging from autonomous robotics to challenge programming, and fierce competition with over 500 participants from across Delhi - NCR.</p>
                </div>
            </div>
            <div class="scroll-icon">
                <div class="wheel"></div>
            </div>
        </section>
        <section class="about">
            <h1>About Node</h1>
            <p>Node, the technology club of Delhi Public School, Sector 45, Gurgaon, is reputed for its commitment to honing digital skills among young enthusiasts. At Node, we believe that our future is what governs our today, and our passion is what drives us to our tomorrow.<br><br>Today, Node has 100+ computer enthusiasts, from classes VI - XII, each excelling in specific fields like programming, machine learning, digital imaging, motion graphics, photography, video editing, app development, web development, quiz and robotics.<br><br>Alphanode, the annual tech symposium conducted by Node in the month of July, is widely considered to be among the most prestigious events in the Delhi - NCR tech circuit.</p>
        </section>
        <section class="growth">
            <h1>Growth of Alphanode</h1>
            <p>Alphanode has always strived to provide students a platform to learn and showcase new skills in the field of technology. It was started in 2015 with 6 events and ~100 participants, and has been consistent in its growth since then. Alphanode 2019 is expected to attract 600+ students from 25+ schools competing in 14 creative events.</p>
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