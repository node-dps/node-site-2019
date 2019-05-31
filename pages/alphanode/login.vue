<template>
    <div id="form_container">
        <no-ssr><vue-particles></vue-particles></no-ssr>
        <form action="" method="post" class="login">
            <!--<nuxt-link to="/alphanode"><button class="back">&larr;</button></nuxt-link><div class="alpha">Alphanode 2019</div>-->
            <table>
                <tr>
                    <td class="chosen">Login</td>
                    <td class="other"><nuxt-link to="/alphanode/register">Register</nuxt-link></td>
                </tr>
            </table><br>
            <fieldset>
                <input type="text" name="school-name" placeholder="Username">
                <div class="line"></div>
            </fieldset>
            <fieldset>
                <input type="password" name="school-email" placeholder="Password">
                <div class="line"></div>
            </fieldset>
            <br>
            <!--<nuxt-link to="/alphanode/login" class="aside">Already registered?</nuxt-link>-->
            <button type="submit">Submit</button>
        </form>
        <nuxt-link to="/alphanode"><button class="go-back">&larr;</button></nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'alpha-login',
    head(){
        return {
            title: 'Login | Alphanode',
            meta: [{
                hid: 'Alphanode Login',
                name: 'Alphanode Login',
                content: 'Login to Participate in Alphanode'
            }]
        }
    },
}
</script>


<style lang="scss" scoped>
@import 'assets/sass/form';
</style>
