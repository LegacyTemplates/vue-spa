<template>
    <div class="form-group">
        <input class="form-control" type="text" placeholder="Your name" v-model="name" />
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
    @Prop() name: string;
    @Prop() result: string;

    activated() {
        this.nameChanged(this.name)
    }

    @Watch('name')
    onNameChanged(value:string, oldValue:string) {
        this.nameChanged(value);
    }

    async nameChanged(name: string) {
        if (name) {
            let request = new Hello();
            request.name = name;
            let r = await client.get(request);
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