import Vue from 'vue'
import Router from 'vue-router'

//--------Containers---------
// Page content
import Home from '@/containers/Home'

// Fallback page
import PageNotFound from '@/containers/PageNotFound'

//--------Components---------
// import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '**',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})