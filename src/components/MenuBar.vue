<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <a class="navbar-brand nav-ml" href="#">Shop</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav ml-auto" >
                <li class="nav-item active">
                    <router-link class="nav-link" to="/"> Home </router-link>
                </li>
                <li class="nav-item ">
                   <router-link class="nav-link" to="/product"> Product </router-link>
                </li>
                <li class="nav-item ">
                   <router-link class="nav-link" to="/about"> About </router-link>
                </li>
                <li class="nav-item ">
                   <router-link class="nav-link" to="/profile"> Profile </router-link>
                </li>
                <li class="nav-item ">
                   <router-link class="nav-link" to="/login"> Login </router-link>
                </li>
                <li class="nav-item ">
                   <a class="nav-link" @click="logout" href="#"> Logout </a>
                </li>
            </ul>
            
        </div>
    </nav>
</template>

<script>

export default {

    name : "MenuBar",

    methods : {
        logout (){
            localStorage.clear();
            this.$router.push('/login');
        }
    }

}

</script>

<style>
    .nav-ml{
        margin-left: 15px !important;
    }
    .ml-auto{
        margin-left: auto;
    }
</style>

