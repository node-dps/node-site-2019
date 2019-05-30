<template>
    <div id="view_container">
        <navbarComponent v-bind:color="navColor"/>

        <section class="landing first">
            <h1 class="title">Team</h1>
            <no-ssr><vue-particles></vue-particles></no-ssr>
        </section>
        <section class="members">
            <div class="ppl">
                <div class="importance">Presidents</div>
                <div class="row">
                    <div class="member">
                        <div class="dp"><img src="~/assets/images/members/ishan-manchanda.png"></div>
                        <h1 class="name">Ishan Manchanda</h1>
                        <h2 class="desig"><span style="text-transform: none; font-family: inherit">decodenode,</span> ScriptRoyale, CodecPro</h2>
                        <div class="container">
                            <div class="links">
                                <a href="https://github.com/IshanManchanda" class="link" target="_blank"><img src="~/assets/images/icons/github.png"></a>
                                <a href="https://www.linkedin.com/in/ishan-manchanda/" class="link" target="_blank"><img src="~/assets/images/icons/linkedin.png"></a>
                            </div>
                        </div>
                    </div>
                    <div class="member">
                        <div class="dp"><img src="~/assets/images/members/shubhro-gupta.png"></div>
                        <h1 class="name">Shubhro Gupta</h1>
                        <h2 class="desig">Create[x]</h2>
                        <div class="container">
                            <div class="links">
                                <a href="https://shubhro.in" class="link" target="_blank"><img src="~/assets/images/icons/website.png"></a>
                                <a href="https://github.com/shubhroGupta" class="link" target="_blank"><img src="~/assets/images/icons/github.png"></a>
                                <a href="https://behance.net/shubhroGupta" class="link" target="_blank"><img src="~/assets/images/icons/behance.png"></a>
                            </div>
                        </div>
                    </div>
                    <div class="member">
                        <div class="dp"><img src="~/assets/images/members/siris-gupta.png"></div>
                        <h1 class="name">Siris Gupta</h1>
                        <h2 class="desig">Analogous, Config[x]</h2>
                        <div class="container">
                            <div class="links">
                                <a href="https://www.instagram.com/sirisgupta" class="link" target="_blank"><img src="~/assets/images/icons/instagram.png"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="importance">Secretaries</div>
                <div class="row">
                    <div class="member">
                        <div class="dp"mg src="~/assets/images/members/blank.png"></div>
                        <h1 class="name">TBA</h1>
                        <h2 class="desig">TBA</h2>
                        <div class="container">
                            <div class="links">
                                <p class="oops">TBA</p>
                            </div>
                        </div>
                    </div>
                    <div class="member">
                        <div class="dp"mg src="~/assets/images/members/blank.png"></div>
                        <h1 class="name">TBA</h1>
                        <h2 class="desig">TBA</h2>
                        <div class="container">
                            <div class="links">
                                <p class="oops">TBA</p>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="importance">Core Team</div>
                <div class="row">
                    <div class="member">
                        <div class="dp"><img src="~/assets/images/members/prakhar-mittal.jpg"></div>
                        <h1 class="name">Prakhar Mittal</h1>
                        <h2 class="desig">RoboCTRL, Intellect, Deprehendo</h2>
                        <div class="container">
                            <div class="links">
                                <a href="https://mittalprakhar.github.io" class="link" target="_blank"><img src="~/assets/images/icons/website.png"></a>
                                <a href="https://www.linkedin.com/in/prakhar-mittal-682ab1171/" class="link" target="_blank"><img src="~/assets/images/icons/linkedin.png"></a>
                                <a href="https://www.youtube.com/channel/UCLJcSqdNpNGFMwSD7-Sd_jg" class="link" target="_blank"><img src="~/assets/images/icons/youtube.png"></a>
                            </div>
                        </div>
                    </div>
                    <div class="member">
                        <div class="dp"><img src="~/assets/images/members/pratyush-kumar.jpeg"></div>
                        <h1 class="name">Pratyush Kumar</h1>
                        <h2 class="desig">Create[x]</h2>
                        <div class="container">
                            <div class="links">
                                <a href="https://github.com/StrixRox" class="link" target="_blank"><img src="~/assets/images/icons/github.png"></a>
                                <a href="https://www.instagram.com/strix_rox/" class="link" target="_blank"><img src="~/assets/images/icons/instagram.png"></a>
                            </div>
                        </div>
                    </div>
                    <div class="member">
                        <div class="dp"><img src="~/assets/images/members/param-kapur.jpeg"></div>
                        <h1 class="name">Param Kapur</h1>
                        <h2 class="desig">Geekathon, CodecPro</h2>
                        <div class="container">
                            <div class="links">
                                <a href="https://github.com/paramkpr" class="link" target="_blank"><img src="~/assets/images/icons/github.png"></a>
                                <a href="https://www.instagram.com/param_kpr" class="link" target="_blank"><img src="~/assets/images/icons/instagram.png"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <!--<div class="row">
                    <div class="member">
                        <div class="dp"><img src="~/assets/images/members/jainil-ajmera.jpeg"></div>
                        <h1 class="name">Jainil Ajmera</h1>
                        <h2 class="desig"><span style="text-transform: none; font-family: inherit">decodenode</span>, Deprehendo</h2>
                        <div class="container">
                            <div class="links">
                                <a href="https://jainilajmera.github.io" class="link" target="_blank"><img src="~/assets/images/icons/website.png"></a>
                                <a href="https://bit.ly/jainilyoutube" class="link" target="_blank"><img src="~/assets/images/icons/youtube.png"></a>
                                <a href="https://www.instagram.com/jainilajmera/" class="link" target="_blank"><img src="~/assets/images/icons/instagram.png"></a>
                            </div>
                        </div>
                    </div>
                </div>-->
                <div class="importance">Members</div>
                <div class="row">
                    <div class="member">
                        <div class="dp"><img src="~/assets/images/members/jainil-ajmera.jpeg"></div>
                        <h1 class="name">Jainil Ajmera</h1>
                        <h2 class="desig"><span style="text-transform: none; font-family: inherit">decodenode</span>, Deprehendo</h2>
                        <div class="container">
                            <div class="links">
                                <a href="https://jainilajmera.github.io" class="link" target="_blank"><img src="~/assets/images/icons/website.png"></a>
                                <a href="https://bit.ly/jainilyoutube" class="link" target="_blank"><img src="~/assets/images/icons/youtube.png"></a>
                                <a href="https://www.instagram.com/jainilajmera/" class="link" target="_blank"><img src="~/assets/images/icons/instagram.png"></a>
                            </div>
                        </div>
                    </div>
                    <div class="member">
                        <div class="dp"><img src="~/assets/images/members/dev-malik.png"></div>
                        <h1 class="name">Dev Malik</h1>
                        <h2 class="desig">InFocus</h2>
                        <div class="container">
                            <div class="links">
                                <a href="https://www.instagram.com/devmalik09" class="link" target="_blank"><img src="~/assets/images/icons/instagram.png"></a>
                            </div>
                        </div>
                    </div>
                    <div class="member">
                        <div class="dp"><img src="~/assets/images/members/kavi-chopra.png"></div>
                        <h1 class="name">Kavi Chopra</h1>
                        <h2 class="desig">Photobuild</h2>
                        <div class="container">
                            <div class="links">
                                <a href="https://vsco.co/kavichopra" class="link" target="_blank"><img src="~/assets/images/icons/vsco.png"></a>
                                <a href="https://m.youtube.com/channel/UC9qXKi4O8PljLJSmXE1Xn7g" class="link" target="_blank"><img src="~/assets/images/icons/youtube.png"></a>
                                <a href="https://www.instagram.com/kavi._chopra" class="link" target="_blank"><img src="~/assets/images/icons/instagram.png"></a>
                            </div>
                        </div>
                    </div>
                    <div class="member">
                        <div class="dp"><img src="~/assets/images/members/arnav-gupta.jpeg"></div>
                        <h1 class="name">Arnav Gupta</h1>
                        <h2 class="desig">Analogous</h2>
                        <div class="container">
                            <div class="links">
                                <a href="http://linkedin.com/in/arnav-gupta-750991184" class="link" target="_blank"><img src="~/assets/images/icons/linkedin.png"></a>
                                <a href="https://vsco.co/chikkni" class="link" target="_blank"><img src="~/assets/images/icons/vsco.png"></a>
                                <a href="https://www.instagram.com/chikki.in" class="link" target="_blank"><img src="~/assets/images/icons/instagram.png"></a>
                            </div>
                        </div>
                    </div>
                    <div class="member">
                        <div class="dp"><img src="~/assets/images/members/jyotirmay-shelly.jpg"></div>
                        <h1 class="name">Jyotirmay Shelly</h1>
                        <h2 class="desig">Chorus</h2>
                        <div class="container">
                            <div class="links">
                                <a href="https://www.youtube.com/channel/UCbs9A1dU5IAz9p6mddV1H3A" class="link"><img src="~/assets/images/icons/youtube.png"></a>
                                <a href="https://soundcloud.com/jshelly1738" class="link"><img src="~/assets/images/icons/soundcloud.png"></a>
                                <a href="https://www.instagram.com/jyotirmay.shelly" class="link" target="_blank"><img src="~/assets/images/icons/instagram.png"></a>
                            </div>
                        </div>
                    </div>
                    <!--<div class="member">
                        <div class="dp"><img src="~/assets/images/members/garvdeep-singh.jpeg"></div>
                        <h1 class="name">Garvdeep Singh</h1>
                        <h2 class="desig">mSway</h2>
                        <div class="container">
                            <div class="links">
                                <a href="https://www.behance.net/garvdeep" class="link" target="_blank"><img src="~/assets/images/icons/behance.png"></a>
                                <a href="https://www.instagram.com/garvdeep.singh" class="link" target="_blank"><img src="~/assets/images/icons/instagram.png"></a>
                            </div>
                        </div>
                    </div>-->
                    <div class="member">
                        <div class="dp"><img src="~/assets/images/members/surabhi-mishra.jpeg"></div>
                        <h1 class="name">Surabhi Mishra</h1>
                        <h2 class="desig">Intellect</h2>
                        <div class="container">
                            <div class="links">
                                <a href="https://www.facebook.com/profile.php?id=100015879672377" class="link"><img src="~/assets/images/icons/facebook.png"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footerComponent v-bind:color="footerColor" />
    </div>
</template>
<script>
import navbarComponent from '~/components/navbar';
import footerComponent from '~/components/footer';

export default {
    name: 'team',
    head(){
        return {
            title: 'Team | Node',
            meta: [{
                hid: 'Team',
                name: 'Team',
                content: 'About Our Node Team'
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
    mounted(){
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
            }else{
                this.navColor = 'transparent-light';
            }

            this.onscrollAnims();
        },
        onscrollAnims: function(){
            //background-change function
            if(window.innerWidth >= 1025){
                let scrolledFrac = $(window).scrollTop() / $(window).height();
                let opacityFunction = Math.min(1, 1.2 - 1.5 * scrolledFrac);
                let parallaxFunction = (scrolledFrac * $(window).height() / 2);
                
                $('.title').css({
                    opacity: opacityFunction,
                    top: 'calc(50% + ' + parallaxFunction + 'px)'
                });
                
                let currentColor = $('.landing.first').css('background-color');
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
@import 'assets/sass/team';
</style>
