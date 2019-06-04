<template>
  <div id="admin" class="text-center">
      <div class="svg-female-business svg-8x ml-2"/>
      <h3>Admin Page</h3>
      <p>
          {{user.userName}}
      </p>
      <p v-if="user && user.roles" class="roles">
          <mark v-for="x in user.roles" :key="x">{{x}}</mark>
      </p>
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
