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
                    <h1 class="name">Create[x]</h1>
                </div>
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
            footerColor: 'light'
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