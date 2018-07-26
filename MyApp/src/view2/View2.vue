<template>
    <div>
        <h3>{{ message }}</h3>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class View1Component extends Vue {
    @Prop({ default: 'This is View 2' }) public message: string;
}
</script>
