<template>
    <button v-bind="attrs" @click="(e) => $emit('click',e)" :class="['btn', className, btnCls]">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { NavOptions, LinkButtonDefaults, trimEnd, pick, activeClass, btnClasses } from '@servicestack/client';
import { BootstrapBase, optionProps, sanitizeOptions } from '../core';

@Component
export class Button extends BootstrapBase {
    @Prop({ default: '' }) href!: string;
    @Prop({ default: () => (null) }) options!: NavOptions;
    @Prop({ default: '' }) id!: string;
    @Prop({ default: '' }) className!: string;
    @Prop({ default: '' }) navItemClass!: string;
    @Prop({ default: '' }) exact!: boolean;
    @Prop({ default: null }) click!: () => void;

    protected get opt() {
        return sanitizeOptions(Object.assign(LinkButtonDefaults.forLinkButton(this.options), optionProps(this.$props)));
    }

    protected get activeHref() {
        return this.href != null ? this.opt.activePath || location.pathname : null;
    }

    protected get hashPrefix() {
        return trimEnd(this.opt.baseHref || '', '/');
    }

    protected get attrs() {
        return pick(this.$props, ['id', 'type', 'name', 'autofocus', 'disabled', 'value']);
    }

    protected get activeCls() {
        return activeClass(this.href || null, this.activeHref, this.exact);
    }

    protected get btnCls() {
        return btnClasses(this.bootstrapClasses);
    }
}
export default Button;
</script>
