<template>
  <div class="home">
    <div>
      <b-navbar toggleable="lg" type="light" variant="" class="firstnav">


        <b-navbar-toggle target="nav_collapse" />

        <b-collapse is-nav id="nav_collapse">


          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-navbar-nav>
              <b-nav-item href="#" class="font-weight-bold">How it works</b-nav-item>
              <b-nav-item href="#" class="font-weight-bold">Log in</b-nav-item>
              <b-nav-item href="#" class="font-weight-bold">|</b-nav-item>
              <b-nav-item href="#" class="font-weight-bold sign">Sign Up</b-nav-item>
            </b-navbar-nav>


          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>


    <div class="nav_top">
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <div class="col-lg-3 col-md-12">

          <b-navbar-brand href="#">
            <img src="https://images-na.ssl-images-amazon.com/images/I/61np1wbr9pL.png" style="height:30px;width:30px" class="d-inline-block align-top" alt="BV" />
            Paysmosmo
          </b-navbar-brand>

        </div>
        <div class="col-lg-6 col-sm-12 col-md-6">

          <b-nav-form>
            <b-form-input class="mr-sm-2" id="search_input" type="text" placeholder="Search" />
            <b-button class="my-2 my-sm-0 btn-warning " id="search_but" type="submit">Search</b-button>
          </b-nav-form>

        </div>
        <b-col>
          <b-col class="" >
            <font-awesome-layers class="fa-2x" full-width>
              <font-awesome-icon icon="bell"  pull="right"/>
              <font-awesome-layers-text class="fa-layers-counter" transform="down-2 shrink-8" value="7" />
            </font-awesome-layers>
            <font-awesome-layers class="fa-2x" full-width>
              <font-awesome-icon icon="heart"  pull="right"/>
              <font-awesome-layers-text class="fa-layers-counter" transform="down-2 shrink-9" value="9" />
            </font-awesome-layers>
            <font-awesome-layers class="fa-2x" full-width>
              <font-awesome-icon icon="shopping-cart"  pull="right"/>
              <font-awesome-layers-text class="fa-layers-counter" transform="down-2 shrink-8" value="5" />
            </font-awesome-layers>

          </b-col>
        </b-col>
      </b-row>
    </b-container>
    </div>

    <div class="container headspace">
      <HeaderSlider v-bind:categories="categories"/>
    </div>

    <div class="container">
      <b-col class="col-12">
        <div class="explorebox">

      <div class="exploretext">
        <h4>EXPLORE POPULAR CATEGORIES</h4>
      </div>
          <ProductList v-bind:items="items" />
        </div>
      </b-col>


    </div>

    <div class="container">
      <b-col class="col-12">
        <div class="explorebox">

          <div class="exploretext">
            <h4>EXPLORE NEW STUFFS</h4>
          </div>
          <ProductList v-bind:items="items" />

        </div>
      </b-col>


    </div>

    <Footer/>

  </div>
</template>

<style>
  .firstnav {
    box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    margin-top: -5px;
  }
  .sign a {
    color: #28a745 !important;
  }
  .navbar-brand{
    color: #424649 !important;
  }
  #search_input{
    width:85% !important;
    margin-right: 0px !important;
    border-radius: 0px;
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px ;
    background: #eee;
  }
  @media screen and (max-width: 1200px){
    #search_input{
      width:70% !important;
    }

  }
  @media screen and (max-width: 770px){
    #search_input{
      width:60% !important;
    }

  }

  @media screen and (max-width: 520px){
    #search_input{
      width:50% !important;
    }
    #search_but{
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 8px;
      font-size: 8px;
    }

  }
  #search_but{
    color: white;
    border-radius: 0px;
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px ;
    padding-left: 15px;
    padding-right: 16px;
    padding-bottom: 8px;
    font-size: 15px;
  }
  .nav_top{
    margin-top: 20px;
  }
  .headspace{
    margin-top: 50px;
  }
  .explorebox {
    box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    margin-top: 30px;
    padding: 0px;
  }
  .exploretext{
    border-bottom: 1px solid #eee;
    text-align: left;

  }

  .exploretext h4{
    font-size: 12px;
    padding: 15px;
    margin-bottom: 0px;
  }
  .top_explore{
    margin-top: 40px;
    text-align: left;
  }
  .card-img-top{
    border-radius: 0px !important;
  }
  .card{
    border-radius: 0px !important;
    border: 0px !important;
  }
  .card_text{
    margin-bottom: 3px;
    margin-top: -2px;
  }
  .price_text{
    margin-top: 9px;
  }
  .vue-star-rating-rating-text{
    display: none;
  }
  .card-img-top{
    height: 250px;
  }
  .last_price{
    text-decoration: line-through;
    opacity: 0.6;
  }
  .card_style{
    margin-right: 30px;
    margin-left: 30px;
  }
  .card_style2{
    margin-right: 30px;
    margin-left: 30px;
  }

  .footer {
    padding: 80px 0 50px 0;
    background-color: #2a2a2a;
    color: #878c94;
  }
  .footer .title{
    text-align: left;
    color:#878c94;
    font-size:25px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .footer .title2{
    text-align: left;
    color:#878c94;
    font-size:18px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .footer p{
    text-align: left;

    font-size:14px;
    margin-bottom: 10px;
  }
  .footer p a{
    color:#878c94;
  }
  .footer .social-icon{
    padding:0px;
    margin:0px;
  }
  .footer .social-icon a{
    display:inline-block;
    color:#fff;
    font-size:25px;
    padding:5px;
  }
  .footer .acount-icon a{
    display:block;
    color:#fff;
    font-size:18px;
    padding:5px;
    text-decoration:none;
  }
  .footer .acount-icon .fa{
    margin-right:25px;
  }
  .footer .category a {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    padding: 5px 20px;
    margin: 1px;
    border-radius:4px;
    margin-top: 6px;
    background-color: black;
    border: solid 1px #fff;
  }
  .footer .payment{
    margin:0px;
    padding:0px;
    list-style-type:none
  }
  .footer .payment li{
    list-style-type:none
  }
  .footer .payment li a {
    text-decoration: none;
    display: inline-block;
    color: #fff;
    float: left;
    font-size: 25px;
    padding: 10px 10px;
  }

  .footer_container{
    margin-top: 100px;
  }

  .footer_subtitle{
    text-align: left;
    font-size: 13px;
  }

  .footer_down{
    padding-top: 20px;
    background: #131313;
    padding-bottom: 10px;
  }

  .footer_at{
    text-align: center;
  }

  .footer_at a{
    color:#878c94;
  }
  .carousel-indicators li{
    width: 10px !important;
    height: 10px!important;
    border-radius: 100% !important;
  }





</style>

<script>

  import HeaderSlider from './../components/HeaderSlider'
  import axios from 'axios'
  import ProductList from '../components/ProductList'
  import Footer from '../components/Footer'


export default {
  name: 'home',
  components: {
    Footer,
    ProductList,
    HeaderSlider
  },
  data() {
    return {
      categories:[],
      items:[],
      rating: 2,
    }
  },
  methods: {
    async fetchResults() {
      const response = await axios.get('http://demo4507124.mockable.io/categories?x-access-token=ki494034jkjdfsi49e8943iufkljfdkj4oi3uu498usajhasdfoi4jkjfi434')
      this.categories = response.data

    },
    async fetchItems() {
      const response2 = await axios.get('http://demo4507124.mockable.io/products?x-access-token=ki494034jkjdfsi49e8943iufkljfdkj4oi3uu498usajhasdfoi4jkjfi434')
      this.items = response2.data.slice(0, 4)
    }
  },
  created: function(){
    this.fetchResults()
    this.fetchItems()
  }
}
</script>


