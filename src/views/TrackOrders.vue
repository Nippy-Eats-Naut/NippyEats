<template>
    <div>
        <div class="container">
            <div class="mb-2">
                <button class="btn text--orange">
                    <i class="bi bi-arrow-left"></i> Back
                </button>
            </div>
            <div class="mb-4">
                <p class="fs-4 fw-bold">Track Order</p>
            </div>
        </div>
        <div class="container d-flex justify-content-between align-items-center">
            <div>
                <p class="mb-1 fw-bold">Pap and Akara</p>
                <p class="mb-0 small">Jevinik Resturant</p>
            </div>
            <div>
                <p class="mb-0 small">Order Number <i class="bi bi-dot"></i> 123456</p>
            </div>
            <div>
                <p class="mb-0 small">Delivery Time <i class="bi bi-dot"></i> 30mins</p>
            </div>
        </div>
        <hr>

        <div class="container my-5">
            <div class="d-flex justify-content-between mb-5" v-for="track, index in tracks" :key="index">
                <div class="d-flex align-items-baseline">
                    <div :class="'me-4 p-1 h-25 rounded-circle '+ track.color">
                    </div>
                    <div class="d-flex">
                        <div class="me-3">
                            <i :class="track.icon +' '+ track.color +' '+'fs-3 text-white rounded-circle p-3'"></i>
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
            <button class="btn btn-lg w-100 text-white bg--orange">Confirm Delivery</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TrackOrders',
    data(){
        return{
            tracks: [
                {
                    title: 'Order Placed',
                    sub_title: 'We have received your order',
                    time: '10:15 am',
                    icon: 'bi bi-clipboard',
                    color: 'bg--orange',
                    text: 'text-dark'
                },
                {
                    title: 'Order Confirmed',
                    sub_title: 'Your order has been confirmed',
                    time: '10:17 am',
                    icon: 'bi bi-clipboard-check',
                    color: 'bg--orange',
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
    }
}
</script>