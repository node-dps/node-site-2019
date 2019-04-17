<template>
    <div id="view_container">
        <section class="first">
            <h1>ALPHANODE</h1>
        </section>
    </div>
</template>
<script>
export default {
    name: 'alphanode',
    data: function(){
        return{
            footerColor: 'light'
        }
    },
    mounted() {
        this.$emit('emit-footer-color', this.footerColor);
    }
}
</script>
<style lang="scss" scoped>
@import '../sass/alphanode';
</style>