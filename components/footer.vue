<template>
    <footer v-bind:class="color">
        <p class="made-with-love">Made with <img src="~/assets/images/icons/heart.svg" class="heart"> by <span class="green">Node</span></p>
        <div class="content">
            <p class="intro">Network of Digital Enthusiasts<br><br>Delhi Public School<br>Site No. 1, Urban Estate<br>Sector-45, Gurgaon</p>
            <div class="contact-details">
                <p class="contact"><a href="mailto:node.dps.ggn@gmail.com">node.dps.ggn@gmail.com</a></p>
                <div class="links">
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
                    <a class="link" href="https://www.facebook.com/node.dps/" target="_blank">
                        <img class="icon" v-if="color == 'dark'" src="~/assets/images/icons/facebook-light.png">
                        <img class="icon" v-else src="~/assets/images/icons/facebook.png">
                        <p class="name">Facebook</p>
                    </a>
                </div>
            </div>
            <div id="gmap"></div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footerComponent',
    props: ['color'],
    head(){
        return {
            script:[{
                src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDINKi18UHFQH1UXWTFlIvnVW_XiJe_xAc&callback=myMap'
            }]
        }
    },
    created(){
        function myMap() {
		const mapProp= {
			center:new google.maps.LatLng(28.442048,77.064731),
			zoom:18,
		};
		const map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
		}
    }
}
</script>

<style <style lang="scss" scoped>
@import "assets/sass/footer";
</style>
