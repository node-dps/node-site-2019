<template>
    <div id="form_container">
        <no-ssr><vue-particles></vue-particles></no-ssr>
        <form action="" method="post" class="login">
            <h1> Registration Details </h1>
            
            <table>
                <tr>
                    <td class="small other"><nuxt-link to="/alphanode/dashboard">In-charges</nuxt-link></td>
                    <td class="small chosen">Online Events</td>
                    <td class="small other"><nuxt-link to="/alphanode/dashboard-3">Onsite Events</nuxt-link></td>
                </tr>
            </table><br>
            
            <h2> ScriptRoyale </h2>
            <fieldset>
                <table>
                    <tr>
                        <td class="left">
                            <input type="text" name="scriptroyale-1-name" placeholder="Name">
                             <div class="line"></div>
                        </td>
                        <td class="right">
                            <input type="number" min="9" max="12" name="scriptroyale-1-class" placeholder="Class">
                            <div class="line"></div>
                        </td>
                    </tr>
                    <tr>
                        <td class="left">
                            <input type="text" name="scriptroyale-2-name" placeholder="Name">
                             <div class="line"></div>
                        </td>
                        <td class="right">
                            <input type="number" min="9" max="12" name="scriptroyale-2-class" placeholder="Class">
                            <div class="line"></div>
                        </td>
                    </tr>
                </table>
            </fieldset>

            <h2> InFocus </h2>
            <fieldset>
                <table>
                    <tr>
                        <td class="left">
                            <input type="text" name="infocus-1-name" placeholder="Name">
                             <div class="line"></div>
                        </td>
                        <td class="right">
                            <input type="number" min="9" max="12" name="infocus-1-class" placeholder="Class">
                            <div class="line"></div>
                        </td>
                    </tr>
                    <tr>
                        <td class="left">
                            <input type="text" name="infocus-2-name" placeholder="Name">
                             <div class="line"></div>
                        </td>
                        <td class="right">
                            <input type="number" min="9" max="12" name="infocus-2-class" placeholder="Class">
                            <div class="line"></div>
                        </td>
                    </tr>
                </table>
            </fieldset>

            <h2> mSway </h2>
            <fieldset>
                <table>
                    <tr>
                        <td class="left">
                            <input type="text" name="msway-1-name" placeholder="Name">
                             <div class="line"></div>
                        </td>
                        <td class="right">
                            <input type="number" min="9" max="9" name="msway-1-class" placeholder="Class">
                            <div class="line"></div>
                        </td>
                    </tr>
                    <tr>
                        <td class="left">
                            <input type="text" name="msway-2-name" placeholder="Name">
                             <div class="line"></div>
                        </td>
                        <td class="right">
                            <input type="number" min="9" max="9" name="msway-2-class" placeholder="Class">
                            <div class="line"></div>
                        </td>
                    </tr>
                </table>
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
