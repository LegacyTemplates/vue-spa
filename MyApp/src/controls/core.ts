import Vue from 'vue';
import { Prop } from 'vue-property-decorator';
import { NavItem, NavOptions } from '@servicestack/client';

export class BootstrapBase extends Vue {
    primary?: boolean;
    'outline-primary'?: boolean;
    secondary?: boolean;
    'outline-secondary'?: boolean;
    success?: boolean;
    'outline-success'?: boolean;
    info?: boolean;
    'outline-info'?: boolean;
    warning?: boolean;
    'outline-warning'?: boolean;
    danger?: boolean;
    'outline-danger'?: boolean;
    light?: boolean;
    'outline-light'?: boolean;
    dark?: boolean;
    'outline-dark'?: boolean;

    lg?: boolean;
    sm?: boolean;
    xs?: boolean;

    block?: boolean;
    vertical?: boolean;
    horizontal?: boolean;
}

export class NavBootstrapBase extends BootstrapBase {
    items: NavItem[];

    options?: NavOptions;
    attributes?: string[];
    activePath?: string;
    baseHref?: string;
    navClass?: string;
    navItemClass?: string;
    navLinkClass?: string;
    childNavItemClass?: string;
    childNavLinkClass?: string;
    childNavMenuClass?: string;
    childNavMenuItemClass?: string;
}

export class NavBase extends Vue {
    @Prop({ default: null }) message?: string;
    @Prop({ default: () => ([]) }) items!: NavItem[];
    @Prop({ default: () => (null) }) options?: NavOptions;
    @Prop({ default: () => ([]) }) attributes?: string[];
    @Prop({ default: null }) activePath?: string;
    @Prop({ default: null }) baseHref?: string;
    @Prop({ default: null }) navClass?: string;
    @Prop({ default: null }) navItemClass?: string;
    @Prop({ default: null }) navLinkClass?: string;
    @Prop({ default: null }) childNavItemClass?: string;
    @Prop({ default: null }) childNavLinkClass?: string;
    @Prop({ default: null }) childNavMenuClass?: string;
    @Prop({ default: null }) childNavMenuItemClass?: string;
}

const OptionKeys = ['attributes', 'activePath', 'baseHref', 'navClass', 'navItemClass', 'navLinkClass',
                    'childNavItemClass', 'childNavLinkClass', 'childNavMenuClass', 'childNavMenuItemClass' ];
export function optionProps(props: any) {
    const to: any = {};
    for (const key in OptionKeys) {
        if (props[key]) {
            to[key] = props[key];
        }
    }
    return to;
}
