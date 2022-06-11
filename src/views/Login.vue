<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-3 ">
                <div class="card">
                    <div class="card-body">
                        <div class="alert alert-danger" v-if="message"> {{ message }} </div>
                        <h3 class="mt-2 mb-3">Login</h3>
                        <form @submit.prevent = "login">
                            <div class="form-group">
                                <input type="text" v-model="email" class="form-control mb-3" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <input type="password" v-model="password" class="form-control mb-3" placeholder="Password">
                            </div>
                            <button type="submit" class="btn btn-primary w-100 ">Login</button>
                        </form>
                    </div>
                    <div class="card-footer">
                        <small><span class="text-muted">Don't have an account</span><a href="#">Register</a></small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name : "Login",
        data(){
            return {
                email : "",
                password : "",
                message : ""
            }
        },
        methods : {
            
            login(){
                if(this.email === "admin@admin.com" && this.password === "12345"){

                    localStorage.setItem('auth',this.email);

                    this.$router.push('/profile');

                }else{
                    this.message = "Email or Password is incorrect";
                }
            }
        }
    }
    
</script>

<style>
    
</style>