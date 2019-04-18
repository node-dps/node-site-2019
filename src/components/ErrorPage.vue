<template>
    <div id="view_container">
        <section class="error first">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <img src="../assets/icons/kabootar.png">
            <!--<p>The page you are looking for does not exist.<br>
            <a href="\">Go back</a> or contact our admin at <a href="mailto:node.dps.ggn@gmail.com">node.dps.ggn@gmail.com</a></p>-->
            <p>The Great Kabootar hath many centuries ago prophesied: <q>Thou shall never be able to conquer this link.</q></p>
            <div class="buttons">
                <a href="\">Return to safety</a>
                <a href="mailto:node.dps.ggn@gmail.com?subject=Need a carrier pigeon&body=Please send help.">Hire a carrier pigeon</a>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'errorPage',
    data: function(){
        return{
            noNav: true,
            noFooter: true
        }
    },
    mounted() {
        this.$emit('emit-no-nav', this.noNav);
        this.$emit('emit-no-footer', this.noFooter);
    }
}
</script>
<style lang="sass" scoped>
@import '../sass/error_page';
</style>
