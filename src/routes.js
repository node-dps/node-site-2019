import Home from './components/Home.vue'
import Alphanode from './components/Alphanode.vue'
import Team from './components/Team.vue'
import Alumni from './components/Alumni.vue'
import Achievements from './components/Achievements.vue'
import ErrorPage from './components/ErrorPage.vue'

export default [{
        path: '*',
        component: ErrorPage
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/alphanode',
        component: Alphanode
    },
    {
        path: '/team',
        component: Team
    },
    {
        path: '/alumni',
        component: Alumni
    },
    {
        path: '/achievements',
        component: Achievements
    },
]