import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { NavItem, NavOptions, pick } from '@servicestack/client';

export class BootstrapBase extends Vue {
    @Prop({ default: false }) primary?: boolean;
    @Prop({ default: false }) outlinePrimary?: boolean;
    @Prop({ default: false }) secondary?: boolean;
    @Prop({ default: false }) outlineSecondary?: boolean;
    @Prop({ default: false }) success?: boolean;
    @Prop({ default: false }) outlineSuccess?: boolean;
    @Prop({ default: false }) info?: boolean;
    @Prop({ default: false }) outlineInfo?: boolean;
    @Prop({ default: false }) warning?: boolean;
    @Prop({ default: false }) outlineWarning?: boolean;
    @Prop({ default: false }) danger?: boolean;
    @Prop({ default: false }) outlineDanger?: boolean;
    @Prop({ default: false }) light?: boolean;
    @Prop({ default: false }) outlineLight?: boolean;
    @Prop({ default: false }) dark?: boolean;
    @Prop({ default: false }) outlineDark?: boolean;

    @Prop({ default: false }) lg?: boolean;
    @Prop({ default: false }) md?: boolean;
    @Prop({ default: false }) sm?: boolean;
    @Prop({ default: false }) xs?: boolean;

    @Prop({ default: false }) block?: boolean;
    @Prop({ default: false }) vertical?: boolean;
    @Prop({ default: false }) horizontal?: boolean;

    protected get bootstrapClasses() {
        const props: any = {
            'primary': this.primary,
            'outline-primary': this.outlinePrimary,
            'secondary': this.secondary,
            'outline-secondary': this.outlineSecondary,
            'success': this.success,
            'outline-success': this.outlineSuccess,
            'info': this.info,
            'outline-info': this.outlineInfo,
            'warning': this.warning,
            'outline-warning': this.outlineWarning,
            'danger': this.danger,
            'outline-danger': this.outlineDanger,
            'light': this.light,
            'outline-light': this.outlineLight,
            'dark': this.dark,
            'outline-dark': this.outlineDark,
            'lg': this.lg,
            'md': this.md,
            'sm': this.sm,
            'xs': this.xs,
            'block': this.block,
        };
        const ret: any = {};
        Object.keys(props).forEach((k: any) => {
            if (props[k] !== false) {
                ret[k] = props[k] || true;
            }
        });
        return ret;
    }
}

export class NavBootstrapBase extends BootstrapBase {
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
    for (const key of OptionKeys) {
        if (props[key]) {
            to[key] = props[key];
        }
    }
    return to;
}

export function sanitizeOptions(opt: any) {
    if (!opt.baseHref) {
        opt.baseHref = '';
    }
    return opt;
}
