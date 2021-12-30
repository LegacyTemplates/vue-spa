<template>
  <div v-if="user" id="profile" class="text-center">

      <img :src="user.profileUrl" class="svg-8x" />

      <p class="my-2">
          {{user.displayName}} <span v-if="user.userId">#{{user.userId}}</span>
      </p>
      <p>
          {{user.userName}}
      </p>
      <p v-if="user && user.roles" class="roles">
          <mark v-for="x in user.roles" :key="x">{{x}}</mark>
      </p>
      <p v-if="user && user.permissions" class="permissions">
          <mark v-for="x in user.permissions" :key="x">{{x}}</mark>
      </p>
      <p>
          <link-button @click="onSignOut" primary>Sign Out</link-button>
      </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { store, signout } from '../shared';

@Component
export class Profile extends Vue {

  protected get user() {
    return store.userSession;
  }

  protected onSignOut() { signout(); }
}
export default Profile;
</script>
