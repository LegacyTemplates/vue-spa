<template>
    <div v-if="items.length" :class="opt.navClass">
        <v-nav-link v-for="item in items" :key="item.href || item.label" :item="item"
                    :options="opt" :activePath="activePath" :navItemClass="opt.navItemClass" />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { NavbarDefaults } from '@servicestack/client';
import { NavBase, optionProps, sanitizeOptions } from '../core';

@Component
export class Navbar extends NavBase {
    protected get opt() {
        return sanitizeOptions(Object.assign(NavbarDefaults.forNavbar(this.options), optionProps(this.$props)));
    }
}
export default Navbar;
</script>
