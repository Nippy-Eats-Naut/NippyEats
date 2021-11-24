<template>
    <div class="container mb-5">
        <div class="my-5">
            <p class="fs-4 text-center fw-bold">Keep In Touch With Us</p>
            <p class="text-secondary text-center">Answers about NippyEats</p>
        </div>
        <div class="accordion border-0" id="faqsaccordion" :class="desktop ? 'px--16': ''">
            <div class="accordion-item mb-3" v-for="faq, index in faqs" :key="index">
                <h2 class="accordion-header" :id="'heading'+index">
                    <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+index" aria-expanded="true" :aria-controls="'collapse'+index">
                        {{faq.title}}
                    </button>
                </h2>
                <div :id="'collapse'+index" class="accordion-collapse collapse" :aria-labelledby="'headingOne'+index" data-bs-parent="#faqsaccordion">
                    <div class="accordion-body text-secondary">
                        <p>{{faq.body}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FAQs',
    data(){
        return{
            faqs: [
                {
                    title: 'What do we do',
                    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum et est quo quae vero soluta ullam ipsam repudiandae consequuntur? Suscipit tenetur, repudiandae temporibus quasi ea modi laborum consequatur voluptate vitae.'
                },
                {
                    title: 'What locations do we cover?',
                    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum et est quo quae vero soluta ullam ipsam repudiandae consequuntur? Suscipit tenetur, repudiandae temporibus quasi ea modi laborum consequatur voluptate vitae.'
                },
                {
                    title: 'What do we do',
                    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum et est quo quae vero soluta ullam ipsam repudiandae consequuntur? Suscipit tenetur, repudiandae temporibus quasi ea modi laborum consequatur voluptate vitae.'
                },
                {
                    title: 'What do we do',
                    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum et est quo quae vero soluta ullam ipsam repudiandae consequuntur? Suscipit tenetur, repudiandae temporibus quasi ea modi laborum consequatur voluptate vitae.'
                },
                {
                    title: 'What do we do',
                    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum et est quo quae vero soluta ullam ipsam repudiandae consequuntur? Suscipit tenetur, repudiandae temporibus quasi ea modi laborum consequatur voluptate vitae.'
                },
            ]
        }
    },  
    inject: ["mq"],
    computed: {
        desktop(){
            return this.mq.current !== 'xs' && this.mq.current !== 'sm'
        }
    },
}
</script>