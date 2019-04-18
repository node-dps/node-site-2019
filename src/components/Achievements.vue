<template>
    <div id="view_container">
        <section class="first">
            <h1>ACHIEVEMENTS</h1>
        </section>
    </div>
</template>
<script>
export default {
    name: 'achievements',
    data: function(){
        return{
            navColor: 'light',
            footerColor: 'dark'
        }
    },
    mounted() {
        this.$emit('emit-nav-color', this.navColor);
        this.$emit('emit-footer-color', this.footerColor);
    }
}
</script>
<style lang="scss" scoped>
@import '../sass/achievements';
</style>