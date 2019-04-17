import Home from './components/Home.vue'
import Alphanode from './components/Alphanode.vue'
import Team from './components/Team.vue'
import Alumni from './components/Alumni.vue'
import Achievements from './components/Achievements.vue'
import ErrorPage from './components/ErrorPage.vue'

export default [
    {
        path: '*',
        name: 'error',
        component: ErrorPage
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/alphanode',
        name: 'alphanode',
        component: Alphanode
    },
    {
        path: '/team',
        name: 'team',
        component: Team
    },
    {
        path: '/alumni',
        name: 'alumni',
        component: Alumni
    },
    {
        path: '/achievements',
        name: 'achievements',
        component: Achievements
    },
]