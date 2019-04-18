<template>
    <div id="view_container">
        <section class="landing first">
            <div class="alphanode">
                <h1 class="main">Alpha<span class="green">node</span></h1>
                <h3 class="year">2019</h3>
            </div>
            <a href="" class="register-result">Register</a>
            <vue-particles></vue-particles>
        </section>

        <section class="info">
            <h1 class="heading">Some Title</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure accusantium ipsa quo illo! Beatae aliquam eaque velit alias. Dolorum, a ipsa doloribus mollitia voluptatibus vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo nesciunt doloribus libero dolorem? A, quaerat enim? Vero, qui! Delectus ut cupiditate ipsum qui eos blanditiis!</p>
        </section>

        <section class="events">
            <h1 class="heading">Events</h1>
            <div class="event-container">
                <div class="event">
                    <h1 class="name">CodecPro</h1>
                    <p class="brief">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptatibus voluptate placeat quas, consequatur excepturi adipisci non quidem? Repellendus, maxime.</p>
                    <p class="specs">Teams per School: 1</p>
                    <p class="specs">Members per Team: 4</p>
                    <a href="" class="prompt">Prompt</a>
                </div>
                <div class="event">
                    <h1 class="name">CodecPro</h1>
                    <p class="brief">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptatibus voluptate placeat quas, consequatur excepturi adipisci non quidem? Repellendus, maxime.</p>
                    <p class="specs">Teams per School: 1</p>
                    <p class="specs">Members per Team: 4</p>
                    <a href="" class="prompt">Prompt</a>
                </div>
                <div class="event">
                    <h1 class="name">CodecPro</h1>
                    <p class="brief">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptatibus voluptate placeat quas, consequatur excepturi adipisci non quidem? Repellendus, maxime.</p>
                    <p class="specs">Teams per School: 1</p>
                    <p class="specs">Members per Team: 4</p>
                    <a href="" class="prompt">Prompt</a>
                </div>
                <div class="event">
                    <h1 class="name">CodecPro</h1>
                    <p class="brief">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptatibus voluptate placeat quas, consequatur excepturi adipisci non quidem? Repellendus, maxime.</p>
                    <p class="specs">Teams per School: 1</p>
                    <p class="specs">Members per Team: 4</p>
                    <a href="" class="prompt">Prompt</a>
                </div>
            </div>
        </section>

        <section class="sponsors">
            <h1 class="heading">Sponsors</h1>
            <div class="logo-container">
                <a href="" class="logo" title="">
                    <img src="../assets/icons/nodelogo.png">
                </a>
                <a href="" class="logo" title="">
                    <img src="../assets/icons/nodelogo.png">
                </a>
                <a href="" class="logo" title="">
                    <img src="../assets/icons/nodelogo.png">
                </a>
                <a href="" class="logo" title="">
                    <img src="../assets/icons/nodelogo.png">
                </a>
                <a href="" class="logo" title="">
                    <img src="../assets/icons/nodelogo.png">
                </a>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'alphanode',
    data: function(){
        return{
            navColor: 'transparent-light',
            footerColor: 'dark'
        }
    },
    mounted() {
        this.$emit('emit-nav-color', this.navColor);
        this.$emit('emit-footer-color', this.footerColor);

        window.addEventListener('scroll', this.onscrollHandler);
    },
    methods:{
        onscrollHandler: function(){
            if(window.scrollY != 0){
                this.navColor = 'light';
                this.$emit('emit-nav-color', this.navColor);
            }else{
                this.navColor = 'transparent-light';
                this.$emit('emit-nav-color', this.navColor);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../sass/alphanode';
</style>