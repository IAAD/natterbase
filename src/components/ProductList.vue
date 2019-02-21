<template>
    <div class="top_explore">
        <div >
            <b-card-group >
                <b-card
                        img-src="https://picsum.photos/600/300/?image=370"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2 card_style"
                        v-for="item in items" v-bind:key="item.id"
                >
                    <p class="card_text">{{item.name}}</p>
                    <star-rating :rating=item.rating :star-size="20" :read-only="true" ></star-rating>
                    <p class="price_text"><span class="last_price">N{{item.old_price}}</span> <span class="fa-pull-right">N{{item.price}}</span></p>
                </b-card>

            </b-card-group>

        </div>

    </div>
</template>

<script>
    export default {
        name: "ProductList",
        props:['items']
    }
</script>

<style scoped>

</style>