<template>
    <div class="form-group">
        <input class="form-control" type="text" placeholder="Your name" v-model="txtName" />
        <h3 class="result">{{ result }}</h3>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { client } from '../shared';
import { Hello } from '../dtos';

@Component
export default class HomeComponent extends Vue {
    @Prop() public name: string;
    public txtName: string = this.name;
    public result: string = '';

    public activated() {
        this.nameChanged(this.name);
    }

    @Watch('txtName')
    public onNameChanged(value: string, oldValue: string) {
        this.nameChanged(value);
    }

    public async nameChanged(name: string) {
        if (name) {
            const request = new Hello();
            request.name = name;
            const r = await client.get(request);
            this.result = r.result;
        } else {
            this.result = '';
        }
    }
}
</script>

<style lang="scss">
@import '../app.scss';

.result {
    margin: 10px;
    color: darken($navbar-background, 10%);
}
</style>