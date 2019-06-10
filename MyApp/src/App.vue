<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/" exact>
                <i class="svg-logo svg-lg mr-1"></i>
                <span class="align-middle">MyApp</span>
            </router-link>
            <navbar :items="store.nav.results" :attributes="store.userAttributes" />
        </div>
    </nav>

    <div id="content" class="container mt-4">
      <router-view></router-view>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { bus, store } from './shared';

@Component
export class App extends Vue {
  get store() { return store; }
}
export default App;
</script>
