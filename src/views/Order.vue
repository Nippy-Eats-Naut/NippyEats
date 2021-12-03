<template>
    <div class="container mt-5">
        <div>
            <p class="fw-bold fs-4">My Orders</p>
        </div>
        <div class="d-flex justify-content-center mb-5">
            <button class="btn text-center w-100 py-3 rounded-0" @click="SwitchTab('Ongoing')" :class="tab == 'Ongoing'? 'bg-dark text-white':'border border-1 border-dark text-dark'">
                Ongoing Order
            </button>
            <button class="btn text-center w-100 py-3 rounded-0"  @click="SwitchTab('Previous')" :class="tab == 'Previous'? 'bg-dark text-white':'border border-1 border-dark text-dark'">
                Previous Order
            </button>
        </div>
        <div>
            <OngoingOrder :data="data" v-show="tab=='Ongoing'"/>
            <PreviousOrders :data="data" v-show="tab=='Previous'" />
        </div>
    </div>
</template>
<script>
import PreviousOrders from "../components/PreviousOrders.vue"
import OngoingOrder from "../components/OngoingOrder.vue";
import authHeader from '../services/auth-header';
export default {
    name: "Order",
    data() {
        return {
            tab: "Ongoing",
            Ongoing: [],
            Previous: [],
            data: []
        };
    },
    methods: {
        SwitchTab(name) {
            this.tab = name;
        }
    },
    components: { PreviousOrders, OngoingOrder },
    beforeMount(){
        var config = {
            method: 'get',
            url: `https://api.nippyeats.com/v1/foodies/orders`,
            headers: authHeader(),
        };

        this.axios(config)
        .then(response => {
            this.data = response.data.data.data
            this.Ongoing = response.data.data.data.ongoing
            this.Previous = response.data.data.data.previous
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
</script>