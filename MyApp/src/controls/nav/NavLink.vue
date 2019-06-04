<template>
    <li v-if="show" :class="[item.className, navItemCls]">
        <v-link :to="opt.baseHref + item.href" :class="[navLinkCls, activeCls]" :id="id" :attrs="childProps" :exact="item.exact">
            {{item.label}}
        </v-link>
        <div v-for="x in item.children" :key="x.href || x.label" :class="opt.childNavMenuClass" :aria-labelledby="id">
            <div v-if="x.label === '-'" class="dropdown-divider" />
            <v-link v-else :to="opt.baseHref + x.href" :class="[opt.childNavMenuItemClass, activeClassNav(x, useActivePath)]" :exact="x.exact">
                {{x.label}}
            </v-link>
        </div>
    </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import {
    NavItem, NavOptions, NavDefaults, safeVarName, activeClassNav,
} from '@servicestack/client';
import { NavBase, sanitizeOptions } from '../core';

@Component
export class NavLink extends Vue {
    @Prop({ default: null }) item!: NavItem;
    @Prop({ default: () => (null) }) options!: NavOptions;
    @Prop({ default: null }) activePath!: string;
    @Prop({ default: null }) navItemClass!: string;
    @Prop({ default: null }) navLinkClass!: string;

    protected get opt() {
        return sanitizeOptions(NavDefaults.forNav(this.options));
    }

    protected get show() {
        return !(this.item == null || !NavDefaults.showNav(this.item, this.opt.attributes));
    }

    protected get useActivePath() {
        return this.activePath || this.opt.activePath || this.$route.path || '';
    }

    protected get hasChildren() {
        return this.item.children && this.item.children.length > 0;
    }

    protected get navItemCls() {
        return this.hasChildren
            ? this.opt.childNavItemClass
            : this.opt.navItemClass;
    }

    protected get navLinkCls() {
        return this.hasChildren
            ? this.opt.childNavLinkClass
            : this.opt.navLinkClass;
    }

    protected get childProps() {
        return this.hasChildren
            ? {
                'role': 'button',
                'data-toggle': 'dropdown',
                'aria-haspopup': 'true',
                'aria-expanded': 'false',
              }
            : {};
    }

    protected get id() { return this.item.id || this.hasChildren ? safeVarName(this.item.label) : null; }

    protected get activeCls() {
        return activeClassNav(this.item, this.useActivePath);
    }
}
export default NavLink;
</script>
