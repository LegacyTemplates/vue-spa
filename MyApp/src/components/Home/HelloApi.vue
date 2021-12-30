<template>
    <div class="form-group">
        <v-input placeholder="Your name" v-model="txtName" />
        <h3 class="result pt-2">{{ result }}</h3>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { client } from '../../shared';
import { Hello } from '../../shared/dtos';

@Component
export class HelloApi extends Vue {
    @Prop() public name: string;
    public txtName: string = '';
    public result: string = '';

    public mounted() {
        this.nameChanged(this.name);
    }

    @Watch('txtName')
    public onNameChanged(value: string, oldValue: string) {
        this.nameChanged(value);
    }

    public async nameChanged(name: string) {
        if (name) {
            const r = await client.get(new Hello({ name }));
            this.result = r.result;
        } else {
            this.result = '';
        }
    }
}
export default HelloApi;
</script>

<style>
.result {
    color: #41B883;
}
</style>