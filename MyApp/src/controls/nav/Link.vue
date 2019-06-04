<template>
    <a v-if="!to" href="javascript:void(0)" @click="(e) => $emit('click',e)" v-bind="attrs"><slot></slot></a>
    <a v-else-if="isAbsolute" :href="to" v-bind="attrs"><slot></slot></a>
    <router-link v-else tag="a" :to="to" v-bind="attrs" :exact="exact"><slot></slot></router-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export class Link extends Vue {
    @Prop({ default: null }) to!: string;
    @Prop({ default: null }) attrs!: any;
    @Prop({ default: false }) exact!: boolean;
    @Prop({ default: null }) click!: () => void;

    protected get isAbsolute() {
        return this.to && (this.to.startsWith('http://') || this.to.startsWith('https://') || this.to.startsWith('://'));
    }
}
export default Link;
</script>
