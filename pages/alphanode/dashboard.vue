<template>
    <div id="form_container">
        <no-ssr><vue-particles></vue-particles></no-ssr>
        <form action="" method="post" class="login">
            <h1> Registration Details </h1>
            
            <table>
                <tr>
                    <td class="small chosen">In-charges</td>
                    <td class="small other"><nuxt-link to="/alphanode/dashboard-2">Online Events</nuxt-link></td>
                    <td class="small other"><nuxt-link to="/alphanode/dashboard-3">Onsite Events</nuxt-link></td>
                </tr>
            </table><br>
            <h2> Teacher In-charge </h2>
            <fieldset>
                <input type="text" name="teacher-name" placeholder="Name">
                <div class="line"></div>
            </fieldset>
            <fieldset>
                <input type="email" name="teacher-email" placeholder="E-mail Address">
                <div class="line"></div>
            </fieldset>
            <fieldset>
                <input type="text" name="teacher-phone" placeholder="Phone Number">
                <div class="line"></div>
            </fieldset><br>
            <h2> Student In-charge </h2>
            <fieldset>
                <input type="text" name="student-name" placeholder="Name">
                <div class="line"></div>
            </fieldset>
            <fieldset>
                <input type="email" name="student-email" placeholder="E-mail Address">
                <div class="line"></div>
            </fieldset>
            <fieldset>
                <input type="text" name="student-phone" placeholder="Phone Number">
                <div class="line"></div>
            </fieldset>
            <button type="submit">Update</button>
        </form>
        <nuxt-link to="/alphanode"><button class="go-back">&larr;</button></nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'alpha-dashboard',
    head(){
        return {
            title: 'Dashboard | Alphanode',
            meta: [{
                hid: 'Alphanode Dashboard',
                name: 'Alphanode Dashboard',
                content: 'Dashboard for Participants in Alphanode'
            }]
        }
    },
}
</script>


<style lang="scss" scoped>
@import 'assets/sass/dashboard';
</style>
