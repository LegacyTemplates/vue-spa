<template>
    <v-link :to="hashPrefix + href" v-bind="attrs"
            :class="[className, opt.navItemClass, activeCls, btnCls]" click="click">
        <slot></slot>
    </v-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { NavOptions, LinkButtonDefaults, trimEnd, pick, activeClass, btnClasses } from '@servicestack/client';
import { BootstrapBase, optionProps } from '../core';

@Component
export class LinkButton extends BootstrapBase {
    @Prop({ default: '' }) href!: string;
    @Prop({ default: () => (null) }) options!: NavOptions;
    @Prop({ default: '' }) id!: string;
    @Prop({ default: '' }) className!: string;
    @Prop({ default: '' }) navItemClass!: string;
    @Prop({ default: '' }) exact!: boolean;
    @Prop({ default: null }) click!: () => void;

    protected get opt() {
        return Object.assign(LinkButtonDefaults.forLinkButton(this.options), optionProps(this.$props));
    }

    protected get activeHref() {
        return this.opt.activePath || location.pathname;
    }

    protected get hashPrefix() {
        return trimEnd(this.opt.baseHref || '', '/');
    }

    protected get attrs() {
        return pick(this.$props, ['id', 'type', 'name', 'autofocus', 'disabled', 'value', 'click']);
    }

    protected get activeCls() {
        return activeClass(this.href || null, this.activeHref, this.exact);
    }

    protected get btnCls() {
        return btnClasses(this.$props);
    }
}
export default LinkButton;
</script>
