<template>
    <div id="form_container">
        <no-ssr><vue-particles></vue-particles></no-ssr>
        <form action="" method="post" class="login">
            <h1>Login</h1>
            <fieldset>
                <input type="text" name="user" placeholder="Username">
                <div class="line"></div>
            </fieldset>
            <fieldset>
                <input type="password" name="pwd" placeholder="Password">
                <div class="line"></div>
            </fieldset>
            <nuxt-link to="/alphanode/register" class="aside">Not registered yet?</nuxt-link>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'alpha-login',
    head(){
        return {
            title: 'Alphanode - Login',
            meta: [{
                hid: 'Alphanode Login',
                name: 'Alphanode Login',
                content: 'Login to Manage Your Events'
            }]
        }
    },
}
</script>

<style lang="scss" scoped>
@import 'assets/sass/form';
</style>
