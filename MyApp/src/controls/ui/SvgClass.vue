<template>
    <i :class="{className}"></i>    
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export class SvgClass extends Vue {
    @Prop({ default: '' }) className!: string;
}
export default SvgClass;
</script>
