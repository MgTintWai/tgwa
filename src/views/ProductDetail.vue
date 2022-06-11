<template>
    <div class="container">
        <h1 v-if="loading">Loading.....</h1>
        <div v-else class="row">
            <div class="col-md-4 mt-3">
                <img :src="product.image" class="p-img" alt="Product Detail Image">
            </div>

            <div class="col-md-8">
                <h3 class="mt-4"> {{product.title}} </h3>
                <div class="my-4 text-muted">$ {{product.price}} </div>
                <div> {{product.description}} </div>
                <div>
                    <router-link to="/product" class="btn btn-outline-secondary mt-3">Go Back</router-link>
                    <router-link to="" class="btn btn-primary float-right mt-3">Add To Cart</router-link>
                </div>
           
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios"

export default {

    name : "ProductDetail",
// If we use detail page,we can use {} instead of [] .
    data(){
        return {
            loading : false,
            errored: false,
            product : {}
        }
    },

    created(){
        // If start show index
        this.loading = true ;
        axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
        .then(response => {
            this.product = response.data ;
            // if end of index
            this.loading = false;
        }).catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
    }

}

</script>