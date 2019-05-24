<template>
    <img :src="src" :class="className" :style="style" >
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { combinePaths } from '@servicestack/client';

@Component
export class SvgImage extends Vue {
    @Prop({ default: '' }) id!: string;
    @Prop({ default: '' }) fill!: string;
    @Prop({ default: '' }) className!: string;
    @Prop({ default: '' }) width!: number;
    @Prop({ default: '' }) height!: number;
    @Prop({ default: '' }) style!: any;
    @Prop({ default: '' }) baseUrl!: string;

    get src() {
        let svgSrc = `/metadata/svg/${this.id}.svg`;
        if (this.fill) {
            svgSrc += `?fill=` + encodeURIComponent(this.fill);
        }
        return this.baseUrl
            ? combinePaths(this.baseUrl, svgSrc)
            : svgSrc;
    }

    get styles() {
        const ret = Object.assign({}, this.style || {});
        if (this.width) {
            ret.width = this.width;
        }
        if (this.height) {
            ret.height = this.height;
        }
        return ret;
    }
}
export default SvgImage;
</script>
