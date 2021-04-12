import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/Register.vue'
import store from '../store/index'
import AddBrewery from '../views/AddBrewery.vue'
import NewBeer from '../views/AddBeer.vue'
/*import beerList from '../views/DisplayBeer.vue' */
/*import SingleBeerInformation from '../views/SingleBeerInformation.vue' */
import DisplayBreweryInfo from '../views/DisplayBreweryInfo.vue'

Vue.use(Router)

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,   // Get the base server URL from the .env file
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/addBeer",
      name: "addBeer",
      component: NewBeer,
      meta: {
        requiresAuth: false
    }
    },
    {
    path: "/addBrewery",
    name: "addBrewery",
    component: AddBrewery,
    meta: {
      requiresAuth: false
    }
    },
    {
    path: "/breweries/:id",
    name: "breweryinfo",
    component: DisplayBreweryInfo,
    meta: {
      requiresAuth: false
    }
    },
    {
      path: '/product/:id/add-review', 
      name: 'add-review',              
      component: AddReview,
      meta: {
        requiresAuth: false
      }   
    },
    {
    path: "/reviews/:id",
    name: "reviewlist",
    component: ReivewList,

    }

  ]
})

router.beforeEach((to, from, next) => {
  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === '') {
    next("/login");
  } else {
    // Else let them go to their next destination
    next();
  }
});

export default router;
