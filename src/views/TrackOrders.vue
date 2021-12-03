<template>
    <div>
        <div class="container">
            <div class="mb-4">
                <button class="btn text--orange">
                    <i class="bi bi-arrow-left"></i> Back
                </button>
            </div>
            <div class="mb-4">
                <p class="fs-4 fw-bold">Track Order</p>
            </div>
            <p class="mb-1 h6">Pap and Akara</p>
        </div>
        <div class="container d-flex justify-content-between align-items-center">
            <div>
                <p class="mb-0 small text-center">Jevinik Resturant</p>
            </div>
            <div>
                <p class="mb-0 small text-center">Order Number <i class="bi bi-dot"></i> 123456</p>
            </div>
            <div>
                <p class="mb-0 small text-center">Delivery Time <i class="bi bi-dot"></i> 30mins</p>
            </div>
        </div>
        <hr>

        <div class="container my-5">
            <div class="d-flex justify-content-between mb-5" v-for="track, index in tracks" :key="index">
                <div class="d-flex align-items-baseline">
                    <!-- <div :class="'me-4 p-1 h-25 rounded-pill '+ track.color"></div> -->
                    <div :class="'me-4 p-2 rounded-pill '+ track.color"></div>
                    <div class="d-flex">
                        <div class="me-3">
                            <i :class="track.icon +' '+ track.color +' '+'fs-3 text-white rounded-pill p-3'"></i>
                        </div>
                        <div>
                            <p :class="'mb-1 fw-bold '+ track.text">{{track.title}}</p>
                            <p :class="'mb-0 small '+ track.text">{{track.sub_title}}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="mb-0">{{track.time}}</p>
                </div>
            </div>
        </div>
        <div class="container d-flex mb-3">
            <button class="btn btn-lg w-100 text-white btn-dark me-3">Cancel Order</button>
            <button class="btn btn-lg w-100 text-white btn-primary ">Confirm Delivery</button>
        </div>
    </div>
</template>
<script>
//import authHeader from '../services/auth-header';
export default {
    name: 'TrackOrders',
    data(){
        return{
            order: {},
            tracks: [
                {
                    title: 'Order Placed',
                    sub_title: 'We have received your order',
                    time: '10:15 am',
                    icon: 'bi bi-clipboard',
                    color: 'bg--orange ',
                    text: 'text-dark'
                },
                {
                    title: 'Order Confirmed',
                    sub_title: 'Your order has been confirmed',
                    time: '10:17 am',
                    icon: 'bi bi-clipboard-check',
                    color: 'bg--orange ',
                    text: 'text-dark'
                },
                {
                    title: 'Order Processed',
                    sub_title: 'We have prepared your order',
                    time: '10:20 am',
                    icon: 'bi bi-cloud-fog',
                    color: 'bg-secondary',
                    text: 'text-secondary' 
                },
                {
                    title: 'Out for Delivery',
                    sub_title: 'Your order is out for delivery',
                    time: '10:25 am',
                    icon: 'bi bi-truck',
                    color: 'bg-secondary',
                    text:  'text-secondary'
                }
            ]
        }
    },
    /*beforeMount(){
        var config = {
            method: 'get',
            url: `https://api.nippyeats.com/v1/foodies/orders/${this.$route.params.id}`,
            headers: authHeader(),
        };

        this.axios(config)
        .then(response => {
            this.order = response.data.data
        })
        .catch(function (error) {
            console.log(error);
        });
    }*/
}
</script>