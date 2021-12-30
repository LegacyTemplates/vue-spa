<template>
<div class="row">
    <div class="col-4">
        <h3>Sign In</h3>
        
        <form @submit.prevent="submit" :class="{ error:responseStatus, loading }" >
            <div class="mb-3">
                <error-summary except="userName,password" :responseStatus="responseStatus" />
            </div>
            <div class="mb-3">
                <v-input id="userName" v-model="userName" placeholder="Username" :responseStatus="responseStatus" 
                         label="Email"  help="Email you signed up with" />
            </div>
            <div class="mb-3">
                <v-input type="password" id="password" v-model="password" placeholder="Password" :responseStatus="responseStatus" 
                         label="Password"  help="6 characters or more" />
            </div>
            <div class="mb-3">
                <v-checkbox id="rememberMe" v-model="rememberMe" :responseStatus="responseStatus">
                    Remember Me
                </v-checkbox>
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-lg btn-primary">Login</button>
                <link-button href="/signup" lg outline-secondary class="ms-2">Register New User</link-button>
            </div>
        </form>
        
        <div class="pt-3">
            <h5>Quick Login:</h5>
            <p class="btn-group">
                <link-button outline-info sm @click="switchUser('admin@email.com')">admin@email.com</link-button>
                <link-button outline-info sm @click="switchUser('new@user.com')">new@user.com</link-button>
            </p>
        </div>
    </div>
    <div class="col-3"></div>
    <div class="col-5">
        <div class="row justify-content-end mt-5" style="max-width:300px">
            <nav-button-group class="nav-button-group" 
                :items="store.nav.navItemsMap.auth" :attributes="store.userAttributes" :baseHref="store.nav.baseUrl" block lg />
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from 'vue-property-decorator';
import { store, bus, client } from '../shared';
import { Authenticate } from '../shared/dtos';
import { redirect, Routes } from '../shared/router';

@Component
export class SignIn extends Vue {

    userName = '';
    password = '';
    rememberMe = true;
    loading = false;
    responseStatus = null;

    get store() { return store; }

    protected mounted() {
        if (this.store.userSession != null) {
            redirect(this.$route.query.redirect as string || Routes.Home);
        }
    }

    protected async submit() {
        try {
            this.loading = true;
            this.responseStatus = null;

            const response = await client.post(new Authenticate({
                provider: 'credentials',
                userName: this.userName,
                password: this.password,
                rememberMe: this.rememberMe,
            }));
            bus.$emit('signin', response);

            redirect(this.$route.query.redirect as string || Routes.Home);

        } catch (e: any) {
            this.responseStatus = e.responseStatus || e;
        } finally {
            this.loading = false;
        }
    }

    protected switchUser(email: string) {
        this.userName = email;
        this.password = 'p@55wOrd';
    }
}
export default SignIn;
</script>
