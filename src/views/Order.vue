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
            <OngoingOrder v-show="tab=='Ongoing'"/>
            <PreviousOrders v-show="tab=='Previous'" />
        </div>
    </div>
</template>
<script>
import PreviousOrders from "../components/PreviousOrders.vue"
import OngoingOrder from "../components/OngoingOrder.vue";
export default {
    name: "Order",
    data() {
        return {
            tab: "Ongoing"
        };
    },
    methods: {
        SwitchTab(name) {
            this.tab = name;
        }
    },
    components: { PreviousOrders, OngoingOrder }
}
</script>