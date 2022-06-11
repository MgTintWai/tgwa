<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 mt-3 mb-3" v-for="product in products" :key = "product.id" >
                <div class="card">
                    <div class="card-body text-center">
                        <img :src="product.image" class="p-img " alt="Product Image">
                        <p class="text-muted font-weight-bold">{{product.title}}</p>
                        <h3 class="my-4"> $ {{product.price}} </h3>
                        <router-link  :to="`/product/${product.id}`" class="btn btn-primary w-100">More Details</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

    export default {

        name : "ProductHome",

        data(){
            return {
                products : []
            }
        },

        created(){
            axios.get('https://fakestoreapi.com/products')
            .then(response => {
               this.products = response.data ;
            });
        }

    }
    
</script>


<style>
    .p-img{
        height: 150px;
    }
</style>


