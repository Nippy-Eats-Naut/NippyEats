import { createStore } from 'vuex'
import { auth } from "./auth.module";

let basket = localStorage.getItem('basket');
let currentPlace = localStorage.getItem('currentPlace');
let deliveryMode = localStorage.getItem('deliveryMode');

const store = createStore({
    modules: {auth},
    state(){
        return {
            message: null,
            success: null,
            basket: basket ? JSON.parse(basket) : [],
            provider: null,
            overlay: false,
            deliveryMode: deliveryMode ? JSON.parse(deliveryMode).deliveryMode : null,
            _deliveryMode: deliveryMode ? JSON.parse(deliveryMode)._deliveryMode : 'delivery',
            address: currentPlace ? JSON.parse(currentPlace).address : null,
            currentPlace: currentPlace ? JSON.parse(currentPlace) : null,
        }
    },

    mutations: {
        store_location(state, payload) {
            const currentPlace = {
                longitude: payload.lng,
                latitude: payload.lat,
                address: payload.addr
            }
            state.currentPlace = currentPlace
            localStorage.setItem('currentPlace', JSON.stringify(currentPlace));
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
        add_menu(state, payload){
            let found = state.basket.find(item => item.id == payload.menu.id);

            if (found) {
                found.quantity = payload.quantity;
            } else {
                payload.menu.quantity = payload.quantity
                payload.menu.deliveryMode = state._deliveryMode
                payload.menu.provider = state.provider.name
                payload.menu.longitude = state.provider.longitude
                payload.menu.latitude = state.provider.latitude
                state.basket.push(payload.menu)
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
            var _deliveryMode

            if (type == 'Delivery'){
                _deliveryMode = 'delivery'
            }
            else if (type == 'Dine in'){
                _deliveryMode = 'dine_in'
            }
            else{
                _deliveryMode = 'pick_up'
            }

            state._deliveryMode = _deliveryMode
            state.deliveryMode = type

            const deliveryMode ={
                deliveryMode: state.deliveryMode,
                _deliveryMode: state._deliveryMode
            }
            localStorage.setItem('deliveryMode', JSON.stringify(deliveryMode));
        }
    },

    getters:{
        currentPlace: state=> {
            return state.currentPlace;
        },
        // latitude: state=> {
        //     return state.currentPlace.latitude;
        // },
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
        },
    }

})

export default store
