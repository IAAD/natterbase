<template>
    <b-container fluid>
        <b-row>
            <div class="col-lg-3 col-md-3 col-sm-12">
                <b-list-group >
                    <b-list-group-item class="category_card bg-success"> CATEGORIES </b-list-group-item>
                    <div v-bind:key="category.id" v-for="category in categories">
                    <b-list-group-item >{{category.name}} <i class="fa-pull-right"> > </i></b-list-group-item>
                    </div>
                </b-list-group>
            </div>

            <div class="col-lg-9 col-md-9 col-sm-12">
                    <div>
                        <b-carousel
                                id="carousel1"
                                style="text-shadow: 1px 1px 2px #333;"
                                indicators
                                background="#ababab"
                                :interval="4000"
                                img-width="1024"
                                img-height="536"
                                v-model="slide"
                                @sliding-start="onSlideStart"
                                @sliding-end="onSlideEnd"
                        >


                            <!-- Slides with custom text -->
                            <b-carousel-slide img-src="https://picsum.photos/1024/536/?image=370">
                                <div class="slide_text">
                                <h1 class="slide_main_text">NEW COLLECTION</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable <br>
                                    content of a page when looking at its layout
                                    </p>

                                    <button class="btn btn-outline-warning fa-pull-left"> SHOP NOW</button>
                                </div>
                            </b-carousel-slide>

                            <!-- Slides with custom text -->
                            <b-carousel-slide img-src="https://picsum.photos/1024/536/?image=370">
                                <div class="slide_text">
                                    <h1 class="slide_main_text">NEW COLLECTION</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable <br>
                                        content of a page when looking at its layout
                                    </p>

                                    <button class="btn btn-outline-warning fa-pull-left"> SHOP NOW</button>
                                </div>
                            </b-carousel-slide>

                            <!-- Slides with custom text -->
                            <b-carousel-slide img-src="https://picsum.photos/1024/536/?image=370">
                                <div class="slide_text">
                                    <h1 class="slide_main_text">NEW COLLECTION</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable <br>
                                        content of a page when looking at its layout
                                    </p>

                                    <button class="btn btn-outline-warning fa-pull-left"> SHOP NOW</button>
                                </div>
                            </b-carousel-slide>

                            <!-- Slides with custom text -->
                            <b-carousel-slide img-src="https://picsum.photos/1024/536/?image=370">
                                <div class="slide_text">
                                    <h1 class="slide_main_text">NEW COLLECTION</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable <br>
                                        content of a page when looking at its layout
                                    </p>

                                    <button class="btn btn-outline-warning fa-pull-left"> SHOP NOW</button>
                                </div>
                            </b-carousel-slide>

                            <!-- Slides with custom text -->
                            <b-carousel-slide img-src="https://picsum.photos/1024/536/?image=370">
                                <div class="slide_text">
                                    <h1 class="slide_main_text">NEW COLLECTION</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable <br>
                                        content of a page when looking at its layout
                                    </p>

                                    <button class="btn btn-outline-warning fa-pull-left"> SHOP NOW</button>
                                </div>
                            </b-carousel-slide>






                        </b-carousel>

                    </div>
            </div>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "HeaderSlider",
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        props:['categories'],
        methods: {
            onSlideStart() {
                this.sliding = true
            },
            onSlideEnd() {
                this.sliding = false
            }
        }
    }
</script>

<style scoped>
    .list-group-item{
        text-align: left !important;
        font-size: 14px;
        border-radius:0px !important;
    }
    .category_card{
        color: white;
    }
    .carousel-indicators li{
        width: 10px !important;
        height: 10px!important;
        border-radius: 100% !important;
    }
    .carousel-indicators li:active{
       background: #573322;
    }
    .carousel-item:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 536px;
        width: 100%;
        background-image: linear-gradient(to bottom right,#242526,#2a2525);
        opacity: .8;
    }

    .slide_main_text{
        text-align: left;

    }

    .slide_text{
        margin-bottom: 25%;
        margin-left: -16%;
    }

    .slide_text p{
        text-align: left;
    }
    @media screen and (max-width: 550px){
        .slide_text{
            margin-bottom: 15%;
            margin-left: -5%;
        }
        .slide_text p{
            font-size:8px;
            margin-bottom: 0px;
        }

        .btn-outline-warning{
            padding: 0px;
        }
        .slide_text h1{
            font-size:10px;
        }


    }

</style>