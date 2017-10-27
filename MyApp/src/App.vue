<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/" exact="">
                <i class="fa fa-code" aria-hidden="true"></i>
                MyApp
            </router-link>
          
            <div class="navbar-collapse">
                <ul class="navbar-nav mr-auto">
                  <router-link tag="li" class="nav-item" to="/" exact>
                    <a class="nav-link">Home</a>
                  </router-link>
                  <router-link tag="li" class="nav-item" to="/view1">
                    <a class="nav-link">View 1</a>
                  </router-link>
                  <router-link tag="li" class="nav-item" to="/view2">
                    <a class="nav-link">View 2</a>
                  </router-link>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="row" style="margin:10px 0">
            <div id="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class AppComponent extends Vue {
}
</script>
