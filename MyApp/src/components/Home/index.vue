<template>
  <div class="row justify-content-between">
    <div class="col col-4">
        <HelloApi :name="name" />
    </div>
    <div class="col col-4">
      <div v-if="userSession" class="text-right">
        <p class="pt-3">Hi {{userSession.displayName}}!</p>
        <v-link-button @click={signout} sm primary>Sign Out</v-link-button>
      </div>
      <div v-else class="text-right">
        <p class="pt-3">You are not authenticated.</p>
        <v-link-button href="/signin" sm primary>Sign In</v-link-button>
        <v-link-button href="/signup" sm outline-secondary class="ml-2">Register New User</v-link-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { HelloApi } from './HelloApi.vue'; // @ is an alias to /src
import { store, signout } from '../../shared';

@Component({
  components: {
    HelloApi,
  },
})
export class Home extends Vue {
  @Prop({ default: '' }) name: string;
  signout = signout;

  get userSession() {
    return store.userSession;
  }

}
export default Home;
</script>
