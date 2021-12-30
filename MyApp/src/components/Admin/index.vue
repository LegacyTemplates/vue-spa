<template>
  <div id="admin" class="text-center">
      <Icon icon="mdi:shield-account" class="svg-8x ml-2 text-green" />
      <p class="my-2">
          {{user.displayName}}
      </p>
      <p>
          {{user.userName}}
      </p>
      <p v-if="user && user.roles" class="roles">
          <mark v-for="x in user.roles" :key="x">{{x}}</mark>
      </p>
      <h3 class="mt-5">Admin Page</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { store } from '../../shared';

@Component
export class Admin extends Vue {
  protected get user() {
    return store.userSession;
  }
}
export default Admin;
</script>
