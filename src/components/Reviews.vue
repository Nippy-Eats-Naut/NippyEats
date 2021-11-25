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
                        <button type="button" class="btn-close bg-dark text-white rounded-circle mt-3 mx-3" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3" v-for="n, index in 2" :key="index">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex">
                                    <div class="mr-3">
                                        <img src="" alt="">
                                    </div>
                                    <div>
                                        <p class="mb-1 fs-5 fw-bold">Sam Doe</p>
                                        <div class="d-flex">
                                            <div v-for="n, index in 5" :key="index">
                                                <i class="bi bi-star-fill text--orange"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p class=" fw-bold">24th Oct, 2021</p>
                                </div>
                            </div>
                            <div>
                                <p class="text-secondary">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                                    Velit officia consequat duis enim velit mollit.
                                     Exercitation veniam consequat sunt nostrud amet.
                                </p>
                            </div>
                            <hr>
                        </div>
                        <div>
                            <div class="text-center">
                                <p class="fs-5 fw-bold mb-1">Share your review</p>
                                <p class="mb-1">Let others know what you think</p>
                                <div class="d-flex justify-content-center mb-3">
                                    <div v-for="n, index in 5" :key="index">
                                        <i class="bi bi-star text-secondary"></i>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="mb-2">
                                    <input type="text" name="review" id="review" class="form-control"
                                    placeholder="What was your experience like?" v-model="comment">
                                </div>
                                <Alert :message="message" category="alert" :success="success"/>
                                <button type="button" class="btn bg--orange w-100 btn lg text-white" @click="shareReview">
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
export default {
    name: 'Reviews',
    components: { Alert },
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
            success: null
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