import { createStore } from 'vuex'
import { auth } from "./auth.module";

let basket = localStorage.getItem('basket');
let address = localStorage.getItem('address');

const store = createStore({
    modules: {auth},
    state(){
        return {
            longitude: '',
            latitude: '',
            message: null,
            success: null,
            basket: basket ? JSON.parse(basket) : [],
            provider: null,
            overlay: false,
            deliveryMode: null,
            address: address ? address : null,
        }
    },

    mutations: {
        store_location(state, payload) {
            state.latitude = payload.lat
            state.longitude = payload.long
            state.address = payload.addr
            localStorage.setItem('address', payload.addr);
        },
        add_alerts(state, payload){
            state.message = payload.msg
            state.success = payload.succ

            this.commit('clear_alerts');
        },
        clear_alerts(state){
            setTimeout(() => {
                state.message = null;
                state.success = null;
            }, 10000)
        },

        // add_menu(state, payload){
        //     let provider = state.basket.find(item =>item.providerId == payload.menu.providerId);
            

        //     if(provider) {
        //         let menu = provider.menus.find(item => item.menuId == payload.menu.id);

        //         if(menu){
        //             menu.quantity = payload.quantity
        //         }
        //         else{
        //             provider.menus.push({
        //                 menuId: payload.menu.id,
        //                 name: payload.menu.title,
        //                 price: payload.menu.price,
        //                 img: payload.menu.img,
        //                 quantity: payload.quantity,
        //                 currency: payload.menu.currency,
        //                 providerName: state.provider              
        //             })
        //         }
        //     }
        //     else{
        //         state.basket.push({
        //             providerId: payload.menu.providerId,
        //             deliveryMode: state.deliveryMode,
        //             menus: [
        //                 {
        //                     menuId: payload.menu.id,
        //                     name: payload.menu.title,
        //                     price: payload.menu.price,
        //                     img: payload.menu.img,
        //                     quantity: payload.quantity,
        //                     currency: payload.menu.currency,
        //                     providerName: state.provider
        //                 }
        //             ]
        //         })
        //     }
        //     this.commit('SAVE_menu');
        // },

        // check_quantity(state, payload){
        //     let foundProvider = state.basket.find(item => item.providerId == payload.menu.providerId);

        //     if (foundProvider){
        //         let found = foundProvider.menus.find(item => item.menuId == payload.menu.id);
    
        //         found.quantity = payload.quantity;
        //         return found.quantity
        //     }else {
        //         return payload.quantity
        //     }
        // },
        add_menu(state, payload){
            let found = state.basket.find(item => item.id == payload.menu.id);

            if (found) {
                found.quantity = payload.quantity;
            } else {
                // payload.menu.quantity = payload.quantity
                // payload.menu.deliveryMode = state.deliveryMode
                // payload.menu.provider = state.provider
                var menu = payload.menu
                state.basket.push({
                    menu,
                    quantity: payload.quantity,
                    deliveryMode: state.deliveryMode,
                    provider: state.provider

                })
                // this.commit('check_provider', payload.menu)
            }      
            this.commit('SAVE_menu');
        },
        SAVE_menu(state){
            localStorage.setItem('basket', JSON.stringify(state.basket));
        },
        REMOVE_menu(state, menu) {
            let index = state.basket.indexOf(menu);
        
            state.basket.splice(index, 1);
    
            this.commit('SAVE_menu');
        },
        fetch_provider(state, provider){
            state.provider = provider
        },
        activate_overlay(state,overlay){
            state.overlay = overlay
        },
        deliveryMode(state, type){
            state.deliveryMode = type
        }
    },

    getters:{
        longitude: state=> {
            return state.longitude;
        },
        latitude: state=> {
            return state.latitude;
        },
        address: state=> {
            return state.address;
        },
        message: state => {
            return state.message;
        },
        success: state => {
            return state.success;
        },
        basket: state => {
            return state.basket;
        },
        provider: state => {
            return state.provider
        },
        overlay: state => {
            return state.overlay
        },
        deliveryMode: state => {
            return state.deliveryMode
        }
    }

})

export default store
