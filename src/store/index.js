import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            longitude: '',
            latitude: ''
        }
    },

    mutations: {
        store_location(state, payload) {
            state.latitude = payload.lat
            state.longitude = payload.long
        },
    },

    getters:{
        longitude: state=> {
            return state.longitude;
        },
        latitude: state=> {
            return state.latitude;
        },
    }

})

export default store
