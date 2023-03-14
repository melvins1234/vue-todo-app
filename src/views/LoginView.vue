<script>
    import { useLoggedInStore } from '@/stores/loggedIn'
    import { ref } from "vue";

    export default {
        setup(props, {expose, context}) {
            const isLoggedIn = useLoggedInStore();

            let isError = ref(false)
            let form = ref({
                email: 'sample@sample.com',
                password: '12345'
            })
            let defaultCreds = {
                email: 'sample@sample.com',
                password: '12345'
            }

            return { isError, form, defaultCreds, isLoggedIn }
        },
        methods: {
             onSubmit() {
                if(this.form.email === this.defaultCreds.email && this.form.password === this.defaultCreds.password) {
                    this.$emit('success', true);
                    this.isError = false
                    this.$router.push('/todo')
                    this.isLoggedIn.setLoggedInStatus()
                } else {
                    this.isError = true
                }
            }
        }
    }
</script>


<template>
    <form @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input 
                v-model="form.email" 
                type="email" 
                :class="{'border' : isError, 'border-danger' : isError}" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email" 
                class="form-control"
                required>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input 
                v-model="form.password" 
                type="password" 
                class="form-control" 
                :class="{'border' : isError, 'border-danger' : isError}"
                id="exampleInputPassword1" 
                placeholder="Password" 
                required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

