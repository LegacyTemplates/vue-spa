<template>
  <div class="row">
    <div class="col-4">
    <h3>Register New User</h3>

    <form @submit.prevent="submit" :class="{ error:responseStatus, loading }" >
        <div class="mb-3">
            <error-summary except="displayName,email,password,confirmPassword" :responseStatus="responseStatus" />
        </div>
        <div class="mb-3">
            <v-input id="displayName" v-model="displayName" :responseStatus="responseStatus"
                     placeholder="Display Name" label="Name" help="Your first and last name" />
        </div>
        <div class="mb-3">
            <v-input id="email" v-model="email" :responseStatus="responseStatus"
                     placeholder="Email" label="Email" />
        </div>
        <div class="mb-3">
            <v-input type="password" id="password" v-model="password" :responseStatus="responseStatus"
                     placeholder="Password" label="Password" />
        </div>
        <div class="mb-3">
            <v-input type="password" id="confirmPassword" v-model="confirmPassword" :responseStatus="responseStatus"
                     placeholder="Confirm" label="Confirm Password" />
        </div>
        <div class="mb-3">
            <v-checkbox id="autoLogin" v-model="autoLogin" :responseStatus="responseStatus">
              Auto Login
            </v-checkbox>
        </div>
        <div class="mb-3">
            <v-button type="submit" lg primary>Register</v-button>
            <link-button href="/signin" navItemClass="btn ms-2">Sign In</link-button>
        </div>

        <div class="pt-3">
            <h5>Quick Populate:</h5>
            <p class="pt-1">
                <link-button outline-info sm @click="newUser('new@user.com')">new@user.com</link-button>
            </p>
        </div>
    </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from 'vue-property-decorator';
import { store, bus, client, checkAuth, toPascalCase, splitOnFirst } from '../shared';
import { Register } from '../shared/dtos';
import { Routes, redirect } from '../shared/router';

@Component
export class SignUp extends Vue {

    displayName = '';
    email = '';
    userName = '';
    password = '';
    confirmPassword = '';
    autoLogin = true;
    loading = false;
    responseStatus = null;

    async submit() {
        try {
            this.loading = true;
            this.responseStatus = null;

            const response = await client.post(new Register({
                displayName: this.displayName,
                email: this.email,
                password: this.password,
                confirmPassword: this.confirmPassword,
                autoLogin: this.autoLogin,
            }));

            await checkAuth();

            redirect(Routes.Home);

        } catch (e: any) {
            this.responseStatus = e.responseStatus || e;
        } finally {
            this.loading = false;
        }
    }

    newUser(email: string) {
        const names = email.split('@');
        this.displayName = toPascalCase(names[0]) + ' ' + toPascalCase(splitOnFirst(names[1], '.')[0]);
        this.email = email;
        this.password = this.confirmPassword = 'p@55wOrd';
    }

}
export default SignUp;
</script>
