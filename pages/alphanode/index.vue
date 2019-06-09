<template>
    <div id="view_container">
        <navbarComponent v-bind:color="navColor"/>
        <section class="landing first">
            <div class="alphanode">
                <h1 class="main">Alpha<span class="green">node</span></h1>
                <h3 class="year">2019</h3>
            </div>
            <nuxt-link to="/alphanode/register" class="register-result">Register</nuxt-link>
            <no-ssr><vue-particles></vue-particles></no-ssr>
        </section>
        <section class="info">
            <h1 class="heading">What is new?</h1>
            <p>In its 5th iteration since its inception, Alphanode 2019 is poised to be drastically bigger and better than it has ever been
                before. We have reimagined cryptic hunts with decodenode quests: a new story-based game mode that allows players to make
                decisions and follow different paths. We are also introducing four new, unique events:
            </p>
            <dl>
                <dt>RoboCTRL</dt>
                <dd>An autonomous robotics event with a fresh challenge, new robots and exciting battles every year.</dd>
                <dt>ScriptRoyale</dt>
                <dd>A first of its kind script vs script gaming event. May the best bot win!</dd>
                <dt>Chorus</dt>
                <dd>An audio mixing event that allows you to express your artistic talent.</dd>
                <dt>Config[x]</dt>
                <dd>A hardware event with a twist. And a purpose.</dd>
            </dl>
        </section>

        <section class="events">
            <!-- <h1 class="heading">Events</h1> -->
            <div class="event-container">
                <h1 class="heading">Onsite Events</h1>
                <div class="row onsite">
                    <div class="event">
                        <h1 class="name">Create[x]</h1>
                        <p class="brief">Hackathon</p>
                        <p class="tagline">Innovate to create.</p>
                        <p class="specs">Teams per School: 1</p>
                        <p class="specs">Members per Team: 3</p>
                        <p class="specs">Eligibility: IX to XII</p>
                        <a target="_blank" class="button">
                            Prompt
                            <div class="countdown" data-end-date="July 10, 2019"></div>
                        </a>
                    </div>
                    <div class="event">
                        <h1 class="name">RoboCTRL</h1>
                        <p class="brief">Autonomous Robotics</p>
                        <p class="tagline">May the bot be with you.</p>
                        <p class="specs">Teams per School: 1</p>
                        <p class="specs">Members per Team: 3</p>
                        <p class="specs">Eligibility: IX to XII</p>
                        <a target="_blank" class="button">
                            Prompt
                            <div class="countdown" data-end-date="July 10, 2019"></div>
                        </a>
                    </div>
                    <div class="event">
                        <h1 class="name">PhotoBuild</h1>
                        <p class="brief">Photography</p>
                        <p class="tagline">Capture life.</p>
                        <p class="specs">Teams per School: 1</p>
                        <p class="specs">Members per Team: 2</p>
                        <p class="specs">Eligibility: IX to XII</p>
                        <a target="_blank" class="button">
                            Prompt
                            <div class="countdown" data-end-date="July 10, 2019"></div>
                        </a>
                    </div>
                    <div class="event">
                        <h1 class="name">Analogous</h1>
                        <p class="brief">Gaming</p>
                        <p class="tagline">Press [X] to continue.</p>
                        <p class="specs">Teams per School: 1</p>
                        <p class="specs">Members per Team: 2</p>
                        <p class="specs">Eligibility: IX to XII</p>
                        <a target="_blank" class="button">
                            Rules
                            <div class="countdown" data-end-date="July 10, 2019"></div>
                        </a>
                    </div>
                    <div class="event">
                        <h1 class="name">Deprehendo</h1>
                        <p class="brief">Surprise</p>
                        <p class="tagline">Expect anything to everything.</p>
                        <p class="specs">Teams per School: 1</p>
                        <p class="specs">Members per Team: 2</p>
                        <p class="specs">Eligibility: IX to XII</p>
                        <a target="_blank" class="button">
                            Rules
                            <div class="countdown" data-end-date="July 10, 2019"></div>
                        </a>
                    </div>
                    <div class="event">
                        <h1 class="name">Intellect</h1>
                        <p class="brief">Senior Quiz</p>
                        <p class="tagline">Question to perfection.</p>
                        <p class="specs">Teams per School: 1</p>
                        <p class="specs">Members per Team: 2</p>
                        <p class="specs">Eligibility: IX to XII</p>
                        <a target="_blank" class="button">
                            Rules
                            <div class="countdown" data-end-date="July 10, 2019"></div>
                        </a>
                    </div>
                    <div class="event">
                        <h1 class="name">Geekathon</h1>
                        <p class="brief">Group Discussion</p>
                        <p class="tagline">Improve your argument to win.</p>
                        <p class="specs">Teams per School: 1</p>
                        <p class="specs">Members per Team: 1</p>
                        <p class="specs">Eligibility: IX to XII</p>
                        <a target="_blank" class="button">
                            Rules
                            <div class="countdown" data-end-date="July 10, 2019"></div>
                        </a>
                    </div>
                </div>

                <h1 class="heading">Online Events</h1>
                <div class="row online">
                    <div class="event">
                        <h1 class="name">decodenode</h1>
                        <p class="brief">Cryptic Hunt</p>
                        <p class="tagline">The quest to be the best.</p>
                        <p class="specs">Teams per School: ∞</p>
                        <p class="specs">Members per Team: 1</p>
                        <p class="specs">Eligibility: IX to XII</p>
                        <a target="_blank" class="button">
                            Link
                            <div class="countdown" data-end-date="July 10, 2019"></div>
                        </a>
                    </div>
                    <div class="event">
                        <h1 class="name">codenode</h1>
                        <p class="brief">Competitive Programming</p>
                        <p class="tagline">#include &lt;logic.h&gt;</p>
                        <p class="specs">Teams per School: ∞</p>
                        <p class="specs">Members per Team: 1</p>
                        <p class="specs">Eligibility: IX to XII</p>
                        <a target="_blank" class="button">
                            Link
                            <div class="countdown" data-end-date="July 10, 2019"></div>
                        </a>
                    </div>
                    <div class="event">
                        <h1 class="name">ScriptRoyale</h1>
                        <p class="brief">Challenge Programming</p>
                        <p class="tagline">Winner winner compile dinner.</p>
                        <p class="specs">Teams per School: 1</p>
                        <p class="specs">Members per Team: 2</p>
                        <p class="specs">Eligibility: IX to XII</p>
                        <a target="_blank" class="button">
                            Prompt
                            <div class="countdown" data-end-date="July 10, 2019"></div>
                        </a>
                    </div>
                    <div class="event">
                        <h1 class="name">Chorus</h1>
                        <p class="brief">Audio Mixing</p>
                        <p class="tagline">Muse to amuse.</p>
                        <p class="specs">Teams per School: ∞</p>
                        <p class="specs">Members per Team: 1</p>
                        <p class="specs">Eligibility: IX to XII</p>
                        <a target="_blank" class="button">
                            Prompt
                            <div class="countdown" data-end-date="July 10, 2019"></div>
                        </a>
                    </div>
                    <div class="event">
                        <h1 class="name">InFocus</h1>
                        <p class="brief">Moviemaking</p>
                        <p class="tagline">Spoiler alert!</p>
                        <p class="specs">Teams per School: 1</p>
                        <p class="specs">Members per Team: 2</p>
                        <p class="specs">Eligibility: IX to XII</p>
                        <a target="_blank" class="button">
                            Prompt
                            <div class="countdown" data-end-date="July 10, 2019"></div>
                        </a>
                    </div>
                    <div class="event">
                        <h1 class="name">Config[x]</h1>
                        <p class="brief">Hardware</p>
                        <p class="tagline">Enthusiasts assemble!</p>
                        <p class="specs">Teams per School: ∞</p>
                        <p class="specs">Members per Team: 1</p>
                        <p class="specs">Eligibility: IX to XII</p>
                        <a target="_blank" class="button">
                            Prompt
                            <div class="countdown" data-end-date="July 10, 2019"></div>
                        </a>
                    </div>
                    <div class="event">
                        <h1 class="name">mSway</h1>
                        <p class="brief">Online Powerpoint</p>
                        <p class="tagline">Presentation is key.</p>
                        <p class="specs">Teams per School: 1</p>
                        <p class="specs">Members per Team: 2</p>
                        <p class="specs">Eligibility: IX</p>
                        <a target="_blank" class="button">
                            Prompt
                            <div class="countdown" data-end-date="July 10, 2019"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="sponsors">
            <h1 class="heading">Sponsors</h1>
            <div class="logo-container">
                <a href="" class="logo" title="">
                    <img src="~/assets/images/icons/sponsor-blank.png">
                </a>
                <a href="" class="logo" title="">
                    <img src="~/assets/images/icons/sponsor-blank.png">
                </a>
                <a href="" class="logo" title="">
                    <img src="~/assets/images/icons/sponsor-blank.png">
                </a>
                <a href="" class="logo" title="">
                    <img src="~/assets/images/icons/sponsor-blank.png">
                </a>
                <a href="" class="logo" title="">
                    <img src="~/assets/images/icons/sponsor-blank.png">
                </a>
            </div>
        </section>

        <footerComponent v-bind:color="footerColor" />
    </div>
</template>
<script>
import navbarComponent from '~/components/navbar';
import footerComponent from '~/components/footer';

export default {
    name: 'alphanode',
    head(){
        return {
            title: 'Alphanode',
            meta: [{
                hid: 'Alphanode',
                name: 'Alphanode',
                content: 'Alphanode, Annual Tech Symposium Conducted By Node'
            }]
        }
    },
    components: {
        navbarComponent,
        footerComponent
    },
    data: function(){
        return{
            navColor: 'transparent-light',
            footerColor: 'dark'
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onscrollHandler);

        //timer related code
        document.querySelectorAll('.countdown').forEach((el) => {
            const finalDate = new Date(el.getAttribute('data-end-date') + " 20:21:00").getTime();
            let now = new Date().getTime();

            if(finalDate - now > 0){
                this.timer(el, finalDate);
            }else{
                el.parentElement.classList.remove('lock');
                el.parentNode.removeChild(el);
            }
        });
    },
    destroyed(){
        window.removeEventListener('scroll', this.onscrollHandler);
    },
    methods:{
        onscrollHandler: function(){
            if(window.scrollY != 0){
                this.navColor = 'light';
            }else{
                this.navColor = 'transparent-light';
            }
        },
        timer: function(e, f){
            let x = setInterval(function() {
                let i = new Date().getTime();
                let diff = f - i;
                
                let days = Math.floor(diff / (1000 * 60 * 60 * 24));
                let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((diff % (1000 * 60)) / 1000);
                
                e.innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;

                //code for after the coutndown stops
                if (diff <= 0) {
                    clearInterval(x);
                    e.parentElement.classList.remove('lock');
                    e.parentNode.removeChild(e);
                }
            }, 1000);
        }
    }
}
</script>
<style lang="scss" scoped>
@import 'assets/sass/alphanode';
</style>
