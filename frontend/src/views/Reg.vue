<template>
    <div class="authorize-page">
            <h2>Sign up</h2>
            <form @submit.prevent="submitForm">
              <div class="user-box">
                <label>Username</label>
                <input class="input" type="username" name="username" v-model="username"> <br><br>
              </div>
              <div class="user-box">
                <label>Password</label>
                <input class="input" type="password" name="password" v-model="password">
              </div>
                <button type="submit" id = "signup">Sign up</button>
            </form>
    </div>
</template>

<script lang="ts">
import axios from 'axios';

export default{
    name:'Reg',
    data(){
        return {
            username: '',
            password: '',
        }
    },
    methods:{
        submitForm(){
            const formData= {
                username: this.username,
                password: this.password,
            }
            axios
            .post('/api/v1/users/',formData)
            .then(response => {
                console.log(response)
                this.$router.push('/LogIn')
            })
            .catch(error =>{
                console.log(error)
            })
            
        }
        
    }
}   
</script>