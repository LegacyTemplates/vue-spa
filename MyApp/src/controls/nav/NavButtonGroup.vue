<template>
    <div v-if="items.length" :class="cls">
        <v-nav-link-button v-for="item in items" :key="item.href || item.label" @click="(e) => $emit('click',e)" 
                           :item="item" :options="opt" v-bind="{ block:block, ...$props }" />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { NavOptions, NavButtonGroupDefaults, pick } from '@servicestack/client';
import { NavBase, NavBootstrapBase, optionProps, sanitizeOptions, BootstrapBase } from '../core';

@Component
export class NavButtonGroup extends NavBootstrapBase {
    @Prop({ default: false }) block?: boolean;
    @Prop({ default: false }) vertical?: boolean;

    protected get opt() {
        return sanitizeOptions(Object.assign(NavButtonGroupDefaults.forNavButtonGroup(this.options), optionProps(this.$props)));
    }
    protected get cls() {
        return this.block !== false ? null : this.vertical !== false ? 'btn-group-vertical' : this.opt.navClass;
    }
}
export default NavButtonGroup;
</script>
