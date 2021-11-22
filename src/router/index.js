import { createRouter, createWebHistory } from 'vue-router'
import Homepage from "../views/HomePage.vue";
import AboutUs from "../views/AboutUs.vue"
import Basket from "../views/Basket.vue"
import CheckoutGuest from "../views/CheckoutGuest.vue"
import CheckoutRegisteredUser from "../views/CheckoutRegisteredUser.vue"
import ContactUs from "../views/ContactUs.vue"
import DeliveryPartner from "../views/DeliveryPartner.vue"
import FAQs from "../views/FAQs.vue"
import Favourites from "../views/Favourites.vue"
import FoodCategory from "../views/FoodCategory.vue"
import FoodListing from "../views/FoodListing.vue"
import HomePageAfterLogin from "../views/HomePageAfterLogin.vue"
import InviteFriends from "../views/InviteFriends.vue"
import Login from "../views/Login.vue"
import Order from "../views/Order.vue"
import OrderSuccess from "../views/OrderSuccess.vue"
import Resturants from "../views/Resturants.vue"
import ResturantPage from "../views/ResturantPage.vue"
import SignUp from "../views/SignUp.vue"
import TermsAndConditions from "../views/TermsAndConditions.vue"
import TrackOrders from "../views/TrackOrders.vue"
import Wallet from "../views/Wallet.vue"
import WhatWeDo from "../views/WhatWeDo.vue"
import VerifySignUp from "../views/VerifySignUp.vue"


const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
    },
    {
        path: '/about-us',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/basket',
        name: 'Basket',
        component: Basket
    },
    {
        path: '/checkout/guest',
        name: 'CheckoutGuest',
        component: CheckoutGuest
    },
    {
        path: '/checkout/user',
        name: 'CheckoutRegisteredUser',
        component: CheckoutRegisteredUser,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: ContactUs
    },
    {
        path: '/become-a-delivery-partner',
        name: 'DeliveryPartner',
        component: DeliveryPartner
    },
    {
        path: '/faqs',
        name: 'FAQs',
        component: FAQs
    },
    {
        path: '/favourites',
        name: 'Favourites',
        component: Favourites,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/Category',
        name: 'FoodCategory',
        component: FoodCategory
    },
    {
        path: '/food-listing',
        name: 'FoodListing',
        component: FoodListing
    },
    {
        path: '/home',
        name: 'HomePageAfterLogin',
        component: HomePageAfterLogin,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/invite-friends',
        name: 'InviteFriends',
        component: InviteFriends,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            class: 'Auth'
        }
    },
    {
        path: '/order',
        name: 'Order',
        component: Order
    },
    {
        path: '/order-success',
        name: 'OrderSuccess',
        component: OrderSuccess
    },
    {
        path: '/resturants',
        name: 'Resturants',
        component: Resturants
    },
    {
        path: '/resturant',
        name: 'ResturantPage',
        component: ResturantPage
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
        meta: {
            class: 'Auth'
        }
    },
    {
        path: '/terms-conditions',
        name: 'TermsAndConditions',
        component: TermsAndConditions
    },
    {
        path: '/trackorders',
        name: 'TrackOrders',
        component: TrackOrders
    },
    {
        path: '/wallet',
        name: 'Wallet',
        component: Wallet,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/what-we-do',
        name: 'WhatWeDo',
        component: WhatWeDo
    },
    {
        path: '/verify-signup',
        name: 'VerifySignUp',
        component: VerifySignUp,
        meta: {
            class: 'Auth'
        }
    },
    
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)){
        if (localStorage.getItem('nippy.token') == null){
            next({
                path:'/login',
                query: { redirect: to.fullPath }
            })
        }
        else{
          next()
        }
    }
    else {
      next()
    }
})

export default router