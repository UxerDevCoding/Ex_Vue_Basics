export let inputPassword = Vue.component('input-password', {
    template: /* html */
        `<div>
            <h2>{{title}}</h2>
            <div class="d-flex">
                <input
                    :type="pass" 
                    class="form-control" 
                    placeholder="Enter your password"
                >
                <button 
                    @click="showPass"
                    class="btn btn-primary"
                >show password</button>    
            </div>
            <hr class="mb-4">
        </div>`,
    data() {
        return {
            title: 'Show the password',
            pass: 'password'
        }
    },
    methods: {
        showPass(){
            if (this.pass=='password') {
                this.pass='text'  
            } else {
                this.pass='password'
            }
        }       
    },
})