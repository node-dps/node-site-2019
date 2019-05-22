<template>
    <div id="form_container">
        <no-ssr><vue-particles></vue-particles></no-ssr>
        <form action="" method="post" class="login">
            <h1>Register</h1>
            <fieldset>
                <input type="text" name="user" placeholder="Username">
                <div class="line"></div>
            </fieldset>
            <fieldset>
                <input type="text" name="school" placeholder="Name of School">
                <div class="line"></div>
            </fieldset>
            <fieldset>
                <input type="password" name="pwd" placeholder="Password">
                <div class="line"></div>
            </fieldset>
            <nuxt-link to="/alphanode/login" class="aside">Already registered?</nuxt-link>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'alpha-register',
    head(){
        return {
            title: 'Alphanode - Register',
            meta: [{
                hid: 'Alphanode Register',
                name: 'Alphanode Register',
                content: 'Register to Participate in Alphanode'
            }]
        }
    },
}
</script>

<style lang="scss" scoped>
@import 'assets/sass/form';
</style>
