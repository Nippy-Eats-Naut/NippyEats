import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            longitude: '',
            latitude: '',
            message: null,
            success: null
        }
    },

    mutations: {
        store_location(state, payload) {
            state.latitude = payload.lat
            state.longitude = payload.long
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
    },

    getters:{
        longitude: state=> {
            return state.longitude;
        },
        latitude: state=> {
            return state.latitude;
        },
        message: state => {
            return state.message;
        },
        success: state => {
            return state.success;
        },
        
    }

})

export default store
