<template>
    <div id="form_container">
        <no-ssr><vue-particles></vue-particles></no-ssr>
        <form action="" method="post" class="login">
            <table>
                <tr>
                    <td class="other"><nuxt-link to="/alphanode/login">Login</nuxt-link></td>
                    <td class="chosen"> Register </td>
                </tr>
            </table><br>
            <fieldset>
                <input type="text" name="school-name" placeholder="Name of School">
                <div class="line"></div>
            </fieldset>
            <fieldset>
                <input type="text" name="school-email" placeholder="School's E-mail Address">
                <div class="line"></div>
            </fieldset>
            <fieldset>
                <input type="text" name="teacher-name" placeholder="Name of Teacher">
                <div class="line"></div>
            </fieldset>
            <fieldset>
                <input type="text" name="teacher-phone" placeholder="Teacher's Phone Number">
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
    name: 'alpha-register',
    head(){
        return {
            title: 'Register | Alphanode',
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
