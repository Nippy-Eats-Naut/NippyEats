<template>
    <div class="container mt-4">
        <div class="mb-5">
            <ResturantCard :providers="providers"/>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item" :class="previous==null? 'disabled':''">
                    <a class="page-link"  @click="changePage(previous)" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" :class="current == n?'active':''" v-for="n, index in 3" :key="index"><a class="page-link" @click="changePage(n)">{{n}}</a></li>
                <li class="page-item" :class="next==null? 'disabled':''">
                    <a class="page-link" @click="changePage(next)" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
import ResturantCard from "../components/ResturantCard.vue";
export default {
    name: "AllResturants",
    data() {
        return {
            current: null,
            next: null,
            previous: null,
            providers: []
        };
    },
    methods: {
        changePage(n) {
            var config = {
                method: "get",
                url: `https://api.nippyeats.com/v1/foodies/providers?longitude&latitude&page=${n}`,
                headers: {}
            };
            this.axios(config)
                .then(response => {
                this.providers = response.data.data.data;
                this.current = response.data.data.paging.current;
                this.next = response.data.data.paging.next;
                this.previous = response.data.data.paging.previous;
            });
        }
    },
    beforeMount() {
        var config = {
            method: "get",
            url: "https://api.nippyeats.com/v1/foodies/providers?longitude&latitude&page=1",
            headers: {}
        };
        this.axios(config)
            .then(response => {
            this.providers = response.data.data.data;
            this.current = response.data.data.paging.current;
            this.next = response.data.data.paging.next;
            this.previous = response.data.data.paging.previous;
        })
            .catch(function (error) {
            console.log(error);
        });
    },
    components: { ResturantCard }
}
</script>
