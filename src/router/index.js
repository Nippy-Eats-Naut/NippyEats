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
        component: CheckoutRegisteredUser
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
        component: Favourites
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
        component: HomePageAfterLogin
    },
    {
        path: '/invite-friends',
        name: 'InviteFriends',
        component: InviteFriends
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
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
        component: SignUp
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
        component: Wallet
    },
    {
        path: '/what-we-do',
        name: 'WhatWeDo',
        component: WhatWeDo
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router