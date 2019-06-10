<template>
    <footer v-bind:class="color">
        <p class="made-with-love">Made with <img src="~/assets/images/icons/heart.svg" class="heart"> by <span class="green">Node</span></p>
        <div class="content">
            <p class="intro">Network of Digital Enthusiasts<br><br>Delhi Public School<br>Site No. 1, Urban Estate<br>Sector-45, Gurgaon</p>
            <div class="contact-details">
                <p class="contact"><a href="mailto:node.dps.ggn@gmail.com">node.dps.ggn@gmail.com</a></p>
                <div class="links">
                    <a class="link" href="https://www.facebook.com/node.dps/" target="_blank">
                        <img class="icon" v-if="color == 'dark'" src="~/assets/images/icons/facebook-light.png">
                        <img class="icon" v-else src="~/assets/images/icons/facebook.png">
                        <p class="name">Facebook</p>
                    </a>
                    <a class="link" href="https://www.instagram.com/node.dps/" target="_blank">
                        <img class="icon" v-if="color == 'dark'" src="~/assets/images/icons/instagram-light.png">
                        <img class="icon" v-else src="~/assets/images/icons/instagram.png">
                        <p class="name">Instagram</p>
                    </a>
                    <a class="link" href="https://www.behance.net/nodedps" target="_blank">
                        <img class="icon" v-if="color == 'dark'" src="~/assets/images/icons/behance-light.png">
                        <img class="icon" v-else src="~/assets/images/icons/behance.png">
                        <p class="name">Behance</p>
                    </a>
                    <a class="link" href="https://twitter.com/decode_node" target="_blank">
                        <img class="icon" v-if="color == 'dark'" src="~/assets/images/icons/twitter-light.png">
                        <img class="icon" v-else src="~/assets/images/icons/twitter.png">
                        <p class="name">Twitter</p>
                    </a>
                </div>
            </div>
            <div id="gmap">
                <iframe width="100%" height="100%" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=dps%2C%20sec-45%2C%20gurgaon&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footerComponent',
    props: ['color']
}
</script>

<style <style lang="scss" scoped>
@import "assets/sass/footer";
</style>
