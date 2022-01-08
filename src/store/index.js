import { createStore } from 'vuex'
import { auth } from "./auth.module";

let basket = localStorage.getItem('basket');
let address = localStorage.getItem('address');
let deliveryMode = localStorage.getItem('deliveryMode');

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
            deliveryMode: deliveryMode ? JSON.parse(deliveryMode).deliveryMode : null,
            _deliveryMode: deliveryMode ? JSON.parse(deliveryMode)._deliveryMode : null,
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
        add_menu(state, payload){
            let found = state.basket.find(item => item.id == payload.menu.id);

            if (found) {
                found.quantity = payload.quantity;
            } else {
                payload.menu.quantity = payload.quantity
                payload.menu.deliveryMode = state._deliveryMode
                payload.menu.provider = state.provider
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
        },
    }

})

export default store
