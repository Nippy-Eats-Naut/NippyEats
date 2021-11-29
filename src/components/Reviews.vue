<template>
    <div>
        <div class="modal fade" id="Reviews" tabindex="-1" aria-labelledby="Reviews" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <div></div>
                        <div>
                            <p class="fs-4 fw-bold">Reviews</p>
                        </div>
                        <button type="button" class="btn-close bg-light rounded-circle mx-3" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div v-if="reviews.length==0" class="--empty h-100 w-100"> 
                            <p class="text-secondary">
                                <i class="bi bi-chat-left fs-3"></i>
                            </p>
                            <p class="text-secondary">Nothing here yet</p>
                        </div>
                        <div class="mb-3" v-for="rev, index in reviews" :key="index">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex">
                                    <div class="mr-3">
                                        <img src="" alt="">
                                    </div>
                                    <div>
                                        <p class="mb-1 fs-5 fw-bold">{{rev.fnamelname}}</p>
                                        <star-rating class="justify-content-center mr-1"
                                            :rating="rev.rating" :read-only="true" 
                                            :increment="0.5" :star-size="20">
                                        </star-rating>
                                    </div>
                                </div>
                                <div>
                                    <p class=" fw-bold">{{rev.date}}</p>
                                </div>
                            </div>
                            <div>
                                <p class="text-secondary">{{rev.comment}} </p>
                            </div>
                            <hr>
                        </div>
                        <div>
                            <div class="text-center">
                                <p class="fs-5 fw-bold mb-1">Share your review</p>
                                <p class="mb-1">Let others know what you think</p>
                                <star-rating  class="justify-content-center mb-3"
                                    v-model:rating="rating" 
                                    :increment="0.5" :star-size="30">
                                </star-rating>
                            </div>
                            <div>
                                <div class="mb-2">
                                    <input type="text" name="review" id="review" class="form-control"
                                    placeholder="What was your experience like?" v-model="data.comment">
                                </div>
                                <Alert :message="message" category="alert" :success="success"/>
                                <button type="button" class="btn btn-primary w-100 btn lg text-white" @click="shareReview">
                                    Share Review
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Alert from './Alert.vue';
import StarRating from 'vue-star-rating'
export default {
    name: 'Reviews',
    components: { Alert, StarRating },
    props:{
        reviews:{type: Array},
        menuId: {type: String},
        class: {type: String}
    },
    data(){
        return{
            data: {
                comment: '',
                commentableType: '',
                commentableId: ''
            },
            message: null,
            success: null,
            rating: null
        }
    },
    methods:{
        shareReview(){
            var config = {
                method: 'post',
               url: `https://api.nippyeats.com/v1/foodies/menus/${this.menuId}/comment`,
                headers: { 
                    'Authorization': `Bearer ${localStorage.getItem('nippy.token')}`, 
                    'Content-Type': 'application/json'
                },
                data : JSON.stringify(this.data)
            };

            this.axios(config)
            .then(response => {
                this.success = response.data.success
                this.message = response.data.message
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

}
</script>